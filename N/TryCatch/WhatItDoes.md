- TryCatch for Either as constructor:

  Syntax:

  - `export declare function tryCatch<E, A>(f: Lazy<A>, onError: (e: unknown) => E): Either<E, A>`

  What it does:

  - Constructs a new Either from a function that might throw

- TryCatch for TaskEither as constructor:

  Syntax:

  - `tryCatch<E, A>(f: Lazy<Promise<A>>, onRejected: (reason: unknown) => E): TaskEither<E, A>`

  What it does:

  - Transforms a Promise that may reject to a Promise that never rejects and returns an Either instead
