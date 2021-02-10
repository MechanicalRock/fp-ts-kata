import { flow } from "fp-ts/lib/function";
import { add, multiply } from "../Pipe/Example";

const doActions = (a: number) => {
  return flow(add, add, multiply)(a);
};

const result = () => console.log(doActions(4));
result();
