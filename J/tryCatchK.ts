import { tryCatchK, TaskEither } from "fp-ts/lib/TaskEither";

// Converts a function returning a promise (think API calls baybeee) to a function that returns a TE!

const pretendAPICall = async (): Promise<string> => {
    return await "fakeyfakey"
}

const taskEitherFunc: () =>  TaskEither<Error, string> = tryCatchK(
    () => pretendAPICall(),
    (e) => (e as Error)
)

console.log(taskEitherFunc()())

// Seems like you might want to use TryCatchK a lot!