import { TaskEither, tryCatch } from "fp-ts/TaskEither";
import { add } from "../Pipe/Example";

const test = (a: number): TaskEither<Error, number> => {
  return tryCatch(
    () => {
      if (a > 15) {
        return Promise.resolve(add(a));
      } else {
        return Promise.reject("Number is greater than 15");
      }
    },
    (e) => new Error(`Function failed, reason:${e}`),
  );
};

const fail = async () => {
  console.log(await test(10)()); // {_tag: 'Left',left: Error: Function failed, reason:Number is greater than 15}
};
const success = async () => {
  console.log(await test(24)()); //{ _tag: 'Right', right: 28 }
};

fail();
success();
