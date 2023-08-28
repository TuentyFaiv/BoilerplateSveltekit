import { goto } from "$app/navigation";
import config from "@config";

import type { ToAuthPage } from "@typing/utils/redirects";

export function toAuth(page: ToAuthPage) {
  return goto(config.auth_pages[page], {
    replaceState: true,
  });
}
