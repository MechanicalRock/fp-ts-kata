Syntax:

```
    interface Task<A> {
    (): Promise<A>
    }
```

```
    type Task<A> = () => Promise <A>
```

What it does:
A task is a function that returns a promise which is expected to never be rejected

Constructors:

- of
  `const of: <A>(a: A) => Task<A>`
- fromIO
  `export declare const fromIO: <A>(ma: IO<A>) => Task<A>`
- fromIOK
  `fromIOK<A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>): (...a: A) => Task<B>`
- chainFirst
  `export declare const chainFirst: <A, B>(f: (a: A) => Task<B>) => (ma: Task<A>) => Task<A>`
- chainIOK
  `export declare function chainIOK<A, B>(f: (a: A) => IO<B>): (ma: Task<A>) => Task<B>`
- flatten
  `export declare const flatten: <A>(mma: Task<Task<A>>) => Task<A>`
- map
  `const map: <A, B>(f: (a: A) => B) => (fa: Task<A>) => Task<B>`
