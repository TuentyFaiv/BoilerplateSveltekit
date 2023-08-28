import { tick } from "svelte";

const portals = new Map<string, HTMLElement>();

function mount(node: HTMLElement, id: string) {
  if (!portals.has(id)) throw new Error(`unknow portal ${id}`);

  const host = portals.get(id);
  host?.appendChild(node);

  return () => {
    if (host?.contains(node)) {
      host.removeChild(node);
    }
  };
}

export function land(node: HTMLElement, key: string) {
  const id = `$$portal.${key}`;

  if (portals.get(id)) throw new Error(`Duplicate portal, key: ${key}`);

  portals.set(id, node);

  return {
    destroy() {
      portals.delete(id);
    },
  };
}

export function portal(node: HTMLElement, key: string) {
  let destroy: VoidFunction = () => {};

  const id = `$$portal.${key}`;

  if (!portals.has(key)) {
    tick().then(() => {
      destroy = mount(node, id);
    });
  } else {
    destroy = mount(node, id);
  }

  return {
    destroy,
  };
}
