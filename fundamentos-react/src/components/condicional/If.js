export default (props) => {
  const elseChild = props.children.filter((child) => {
    return child.type && child.type.name === "Else";
  })[0];

  const ifChildren = props.children.filter((child) => {
    return child !== elseChild;
  });

  console.log("props.children", props.children);
  console.log("elseChild", elseChild);
  console.log("ifChildren", ifChildren);

  if (props.test) {
    console.log("teste");
    return ifChildren;
  } else if (elseChild) {
    console.log("estranho");
    return elseChild;
  } else {
    return false;
  }
};

export const Else = (props) => props.children;
