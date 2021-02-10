# Explanation in words:

ChainFirst is useful when inside a pipe you wanna have a function that gets the returned value of previouse function but you want to return it straight back to the next level without touching object. It's mostly used for debugging or for when you need to console.log something but wanna pass the value as is to the next level

# Examples:

## Normal:

```
aResult = doFirstThing(a)
Check(a): void
b = DotheNextThing(aResult)

```

## fp-ts style:

```
check = chainFirst(a)=> {console.log(a)}

pipe(
  doFirstThing(a),
  check,
  doTheSecondThing()
)

as you see check is returning a void but there will be no type error as doTheSecodThing will recieve the returned value from doFirstThing

```
