import React from "react";
import { SplitScreen } from "./SplitScreen";

type SideHandProps = {
  message: string;
};

function LeftHandComponent({ message }: SideHandProps) {
  return <h3 style={{ backgroundColor: "red" }}>{message}</h3>;
}

function RightHandComponent({ message }: SideHandProps) {
  return <h3 style={{ backgroundColor: "pink" }}>{message}</h3>;
}

function Usage() {
  return (
    <SplitScreen>
      <LeftHandComponent message="Hello" />
      <RightHandComponent message="Its me" />
    </SplitScreen>
  );
}

export { Usage };
