Bind, is a util.

Bind in Task:

- binds the result of each task to a context variable.
  i.e :
  `BindTo('Event',event)`
  `Bind('StatusCode',(Event)=>{Event.statusCode})`
  `Bind('tableName',(env)=>(getVariable(env,"TABLE_NAME)`

Bind in all type classes returns a value of that class.
if either -> Bind would return an either<E,A>. i.e `Either<Error, {var1:'',var2:''}>`
in Bind you can use the context variable from previous bind in your current function.
