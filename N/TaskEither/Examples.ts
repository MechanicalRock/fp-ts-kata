import { left, TaskEither, tryCatch } from "fp-ts/TaskEither";
import { add } from "../Pipe/Example";

const myTaskEither = <A>(a: number): TaskEither<Error, number> => {
  return tryCatch(
    () => Promise.resolve(add(a)),
    (e) => (e instanceof Error ? e : new Error("unknown error")),
  );
};

const rejectedTask = tryCatch(() => Promise.reject("expected"), String);
const resolvedTask = tryCatch(() => Promise.resolve("expected"), String);

const rightResult = async () => console.log(await myTaskEither(4)()); //{ _tag: 'Right', right: 8 }
const leftResult = async () => console.log(await rejectedTask()); // { _tag: 'Left', left: 'expected' }
const resolvedTaskRun = async () => console.log(await resolvedTask()); //{ _tag: 'Right', right: 'expected' }

rightResult();
leftResult();
resolvedTaskRun();
