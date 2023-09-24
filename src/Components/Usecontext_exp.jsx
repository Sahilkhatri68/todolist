import React, { useContext } from "react";
// The useContext hook allows you to access the context of a parent component in a child component.
const Myctx = React.createContext();

function Usecontext_exp() {
  return (
    <Myctx.Provider value="Hello to child ">
      <Childcomponent />
    </Myctx.Provider>
  );
}
function Childcomponent() {
  const myctxvalue = useContext(Myctx);
  return (
    <>
      <h3>Usecontext example</h3>
      <p>Hi from child to parent component : {myctxvalue}</p>
    </>
  );
}
export default Usecontext_exp;
