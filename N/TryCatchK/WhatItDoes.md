Syntax:
`tryCatchK(f: (a: A) => Promise<B>,onRejected: (reason: unknown) => E): (a: A) => TaskEither<E, B>`

What it does?

- Converts a function returning a Promise to one returning a TaskEither
  Note for me: if there is a function which returns promise but might throws, can use tryCatchK

- it's considered as Combinator
- Either doesn't have tryCatchK
