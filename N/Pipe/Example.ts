import { pipe } from "fp-ts/lib/function";

export const add = (a: number): number => {
  return a + 4;
};

export const multiply = (a: number): number => {
  return a * 2;
};

const numberActions = (n: number) => {
  return pipe(n, add, multiply);
};

const result = () => {
  console.log(numberActions(4));
};
result();
