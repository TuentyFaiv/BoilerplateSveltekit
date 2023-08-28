import { derived, get, readable, writable } from "svelte/store";
import { format, getDaysInMonth } from "date-fns";

import type { Writable, Readable } from "svelte/store";
import type { CalendarContext, CalendarType, Day, Month, Selected, Year } from "@typing/stores/calendar";

import { i18n, locales } from "../i18n/store";

export class Calendar {
  #selected: Writable<Selected>;
  #date: Date;
  #intialYear: number;
  #years: Year[];
  #months: Month[];
  #days: Readable<Day[]>;

  static instances: Record<string, Calendar> = {};

  public context: Readable<CalendarContext>;

  private constructor(type: CalendarType) {
    this.#selected = writable<Selected>({
      year: 0,
      month: "",
      day: "",
    });

    const today = new Date();
    this.#date = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    this.#intialYear = type === "past" ? this.#date.getFullYear() - 18 : this.#date.getFullYear();

    this.#months = this.#getMonths(this.#intialYear);
    this.#years = new Array(80).fill("").map((_, index) => {
      const year: number = type === "past" ? this.#intialYear - index : this.#intialYear + index;

      return {
        number: year,
        months: this.#getMonths(year),
      };
    });
    this.#days = derived(this.#selected, ($selected) => {
      if ($selected.year === 0 && $selected.month === "") {
        return this.#months[0].days;
      }
      return this.#years
        .find(({ number }) => (number === $selected.year))?.months
        .find(({ number }) => (number === $selected.month))?.days ?? this.#months[0].days;
    });

    this.context = readable<CalendarContext>({
      date: this.#date,
      months: this.#months,
      years: this.#years,
      selected: this.#selected,
      days: this.#days,
      choose: {
        year: this.#chooseYear,
        month: this.#chooseMonth,
        day: this.#chooseDay,
      },
    });
  }

  static create(key: string, type: CalendarType = "past") {
    if (!Calendar.instances[key]) {
      Calendar.instances[key] = new Calendar(type);
    }

    return Calendar.instances[key];
  }

  // eslint-disable-next-line class-methods-use-this
  #getMonths = (year: number) => {
    const lang = get(i18n).language as "en-US" | "es";
    const locale = {
      locale: locales[lang],
    };

    return new Array(12).fill("").map((_, month) => {
      const monthOfYear = new Date(year, month);
      const monthFormatted = format(monthOfYear, "MMMM", locale);
      const monthName = monthFormatted.charAt(0).toUpperCase() + monthFormatted.slice(1);

      return {
        days: new Array(getDaysInMonth(monthOfYear)).fill("").map((__, day) => {
          const dayOfMonth = new Date(year, month, day + 1);
          const dayFormatted = format(dayOfMonth, "EEEE", locale);
          const dayName = dayFormatted.charAt(0).toUpperCase() + dayFormatted.slice(1);

          return {
            key: dayOfMonth.getDay(),
            name: dayName,
            number: `${dayOfMonth.getDate()}`.padStart(2, "0"),
          };
        }),
        name: monthName,
        number: `${monthOfYear.getMonth() + 1}`.padStart(2, "0"),
      };
    });
  };

  #chooseYear = (year: string | number) => {
    this.#selected.update((prev) => ({
      ...prev,
      year: parseInt(`${year}`, 10),
    }));
  };

  #chooseMonth = (month: string) => {
    this.#selected.update((prev) => ({ ...prev, month }));
  };

  #chooseDay = (day: string) => {
    this.#selected.update((prev) => ({ ...prev, day }));
  };
}
