import React from "react";

const Button = (props) => {
  return <button className={s.button}>{props.children}</button>;
};

export default Button;
