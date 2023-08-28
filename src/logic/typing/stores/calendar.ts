import type { Readable, Writable } from "svelte/store";

export interface CalendarContext {
  selected: Writable<Selected>;
  date: Date;
  months: Month[];
  years: Year[];
  days: Readable<Day[]>;
  choose: {
    year(year: number): void;
    month(month: string): void;
    day(day: string): void;
  }
}

export interface Selected {
  year: number;
  month: string;
  day: string;
}

export interface Day {
  key: number;
  name: string;
  number: string;
}

export interface Month {
  days: Day[];
  name: string;
  number: string;
}

export interface Year {
  number: number;
  months: Month[];
}

export type CalendarType = "past" | "future";
