# Explanation in words:

bind is useful for building an object up that is constructed from combination return values of multiple functions

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
