Syntax:
`export interface TaskEither<E, A> extends Task<Either<E, A>> {}`
What it does:

- TaskEither<E, A> represents an asynchronous task that either yields a value of type A or fails yielding an error of type E
  ` Task<Either<E, A>> is like Promise<Either<Error, A>>`
