import React from "react";
import { WizardData } from "./UncontrolledWizard";

type StepProps = {
  goToNext?: (stepData: Partial<WizardData>) => void;
};

function Step1({ goToNext }: StepProps) {
  return (
    <>
      <h1>Step 1</h1>
      <button onClick={() => goToNext?.({ name: "cristian" })}>Next</button>
    </>
  );
}

function Step2({ goToNext }: StepProps) {
  return (
    <>
      <h1>Step 2</h1>
      <button onClick={() => goToNext?.({ age: 27 })}>Next</button>
    </>
  );
}

function Step3({ goToNext }: StepProps) {
  return (
    <>
      <h1>Step 3</h1>
      <button onClick={() => goToNext?.({ hairColor: "brown" })}>Next</button>
    </>
  );
}

function Step4({ goToNext }: StepProps) {
  return (
    <>
      <h1>Step 4</h1>
      <button onClick={() => goToNext?.({ hairColor: "blue" })}>Next</button>
    </>
  );
}

export { Step1, Step2, Step3, Step4 };
