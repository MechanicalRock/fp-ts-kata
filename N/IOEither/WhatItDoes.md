IO :

- a function with the following signature: () => A and never fails
  `()=> A is like IO<A> `
  Examples: `const log = (s: unknown): IO<void> => () => console.log(s)`

IOEither:

- `interface IOEither<E, A> extends IO<Either<E, A>> {}`

What it does?

- When we "run" a value of type IOEither<E, A>, if we get a Left it means that the computation failed with an error of type E, otherwise we get a Right which means that the computation succeeded with a value of type A.

IOEither -> `(a: A) => IOEither<E, A>` IOEither has to have type Error and A
Either -> `type Either<E, A> = Left<E> | Right<A>` Either can be Either Type A or Type B

constructors : tryCatch, fromEither, chain
