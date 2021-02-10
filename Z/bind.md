# Explanation in words:

bind is useful for building an object up that has results for a bunch of computations inside it

# Examples:

## Normal:

```
DoThing(a) => return { a, b: nextThing(a) }
```

## fp-ts style:

```
pipe(
  bindTo(“a”)(doThing()),
  bind(“b”, ({ a }) => nextThing(a)),
)
```
