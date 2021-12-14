import React from "react";

type ButtonProps = {
  size?: string;
  color?: string;
  text: string;
};

function Button({ size, color, text }: ButtonProps) {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
}

function DangerButton(props: ButtonProps) {
  return <Button {...props} color="red" />;
}

function BigSuccessButton(props: ButtonProps) {
  return <Button {...props} size="large" color="green" />;
}

export { Button, DangerButton, BigSuccessButton };
