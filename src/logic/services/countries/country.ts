import type { Country, ReturnGetCountry } from "@typing/services/country";

import { registry } from "@services/globals/instances";

export async function getCountry(signal?: AbortSignal): Promise<Country> {
  const { payload: { location: { postal, country } } } = await registry.get<ReturnGetCountry>("/", {
    signal,
  });

  return {
    zip_code: postal,
    phoneCode: `+${country.calling_code}`,
    name: country.name,
    code: country.code,
    emoji: country.flag.emoji,
  };
}
