import { pipe } from "fp-ts/lib/function";

const add = (a: number): number => {
  return a + 4;
};

const multiply = (a: number): number => {
  return a * 2;
};

const numberActions = (n: number) => {
  return pipe(n, add, multiply);
};

const result = () => {
  console.log(numberActions(4));
};
result();
