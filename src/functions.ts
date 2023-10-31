import path from "path";
import _ from "lodash";
import { print } from "./print";

export const resolve = (...p: string[]) =>
  path.resolve(__dirname, "..", ...p);

export function error(msg: string, ...errs: any[]): never {
  print.error(msg);
  errs.forEach((err) => console.error(err));
  process.exit(1);
}
