import { TaskEither, tryCatchK } from "fp-ts/lib/TaskEither";
import { of } from "fp-ts/lib/Task";

const F1 = of("Task");

const testTryCatchK = (a: string): TaskEither<Error, string> => {
  return tryCatchK(
    () => {
      if (a.length > 0) {
        return F1();
      } else {
        return Promise.reject("String is empty");
      }
    },
    (e) => {
      return new Error(`Error happened,${e}`);
    },
  )();
};

const success = async () => console.log(await testTryCatchK("Test")()); //{ _tag: 'Right', right: 'Task' }
const fail = async () => console.log(await testTryCatchK("")()); //{_tag: 'Left',left: Error: Error happened,String is empty }

success();
fail();
