import { Either, left, right, tryCatch } from "fp-ts/Either";

const test = (a: string): Either<Error, string> => {
  return tryCatch(
    () => {
      if (a.length > 0) {
        return "This is right";
      } else {
        throw new Error("String is empty");
      }
    },
    (e) => {
      return new Error(`${e}`);
    },
  );
};

console.log(test("")); //{_tag: 'Left',left: Error: Error: String is empty}
console.log(test("String")); //{ _tag: 'Right', right: 'This is right' }
