import { IOEither, tryCatch } from "fp-ts/lib/IOEither";

const test: IOEither<Error, number> = tryCatch(
  () => 20,
  (e) => (e instanceof Error ? e : new Error("unknown error")),
);
