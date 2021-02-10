import { fold, left, right } from "fp-ts/Either";
import { add } from "../Pipe/Example";

//Either: export declare function fold<E, A, B>(onLeft: (e: E) => B, onRight: (a: A) => B): (ma: Either<E, A>) => B

const operation = fold<Error, number, unknown>((e: Error) => e, add);

const usernameLength = fold(
  () => 0,
  (username: string) => username.length,
);

const usernameOne = "user-name";
const usernameTwo = "";

const rightResult: number = usernameLength(right(usernameOne));
const leftResult = usernameLength(right(usernameTwo));

const rightoperation = operation(right(3));
const leftoperation = operation(left(Error("Error"))); // would expect to throw and error

const results = () => {
  console.log("string length is", rightResult);
  console.log("empty string length is", leftResult);
  console.log("Add operation when proper value is passed to function", rightoperation);
  console.log("Add operation with not accepted input", leftoperation);
};

results();
