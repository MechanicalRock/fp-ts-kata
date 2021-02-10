import * as fp from "fp-ts";
import { Task } from "fp-ts/Task"

// interface Task<A> {
// (): Promise<A>
//}

// A task<string> is a function that returns the promise of a string for example
// Tasks are ALWAYS expected to succeed 

const ATask: Task<number> = ():Promise<number> => new Promise(() => 1); 

// Theres nothing really special about it!

// Hey we can use `of` to create a task!

const AnotherTask: Task<string> = fp.task.of("This is still a task!")