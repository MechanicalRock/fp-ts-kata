import { Task, of } from "fp-ts/lib/Task";

// Task<string> = () => Promise<string>
//const myPromise: Task<string> = () => Promise.resolve("Test");

// Act
// const result = await myPromise()
// Assert
//expect(result).toEqual('Test')

// Of construct a task : Wrap a value into the type constructor.
//const myOtherPromise: Task<string> = of("test");

// Act
//const result = await myOtherPromise()
// Assert
//expect(result).toEqual('test')
