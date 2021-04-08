import { bind, bindTo, right, of, Either, left } from "fp-ts/Either";
import { pipe } from "fp-ts/lib/function";
import { add } from "../Pipe/Example";

type TypeEvent = {
  var1: string;
  var2: {
    var21: string;
    var22: string;
  };
  var3: boolean;
  var4: number[];
};

const Event: TypeEvent = {
  var1: "String",
  var2: {
    var21: "var1",
    var22: "var2",
  },
  var3: true,
  var4: [1, 2, 3],
};

const context = (Event: TypeEvent) => {
  return pipe(
    bindTo("string")(right(Event.var1)),
    bind("number", () => right(add(12))),
    bind("object", () => right(Event.var2)),
    bind("boolean", () => right(Event.var3)),
  );
};

console.log(context(Event));
/* 
{
  _tag: 'Right',
  right: {
    string: 'String',
    number: 16,
    object: { var21: 'var1', var22: 'var2' },
    boolean: true
  }
}
*/

const myEither = of("test");
const myFunc = (n: number): Either<Error, number> => {
  if (n > 0) {
    return right(n);
  } else {
    return left(new Error("don't accept negative number"));
  }
};

const bindEither = () => {
  return pipe(
    bindTo("action")(right(myEither)),
    bind("validateNumber", () => myFunc(22)),
  );
};

console.log(bindEither());
//{
//   _tag: 'Right',
//   right: { action: { _tag: 'Right', right: 'test' }, validateNumber: 22 }
//  }
