Syntax:

What it does :

- Eithers are essential for capturing error states in functional programming
- The Either type is either Right or Left. Right represents success and Left represents failure.
- Either is a way of anticipating failures.

Applicative:

- of:
  `const of: <E, A>(a: A) => Either<E, A>`
  Bifunctor:
- bimap: Map a pair of functions over the two type arguments of the bifunctor.
  `const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: Either<E, A>) => Either<G, B>`
- mapLeft:
  `const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: Either<E, A>) => Either<G, A>`
