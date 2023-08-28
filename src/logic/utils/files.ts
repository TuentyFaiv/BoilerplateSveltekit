import type { ToBase64Config } from "@typing/utils/files";

export async function toBase64({ file, url = false }: ToBase64Config) {
  const reader = new FileReader();
  return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = (typeof reader.result === "string" && !url) ? reader.result
        .replace("data:", "")
        .replace(/^.+,/, "") : reader.result;
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
}
