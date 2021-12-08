import React, { useState } from "react";
import { Step1, Step2, Step3, Step4 } from "../uncontrolled-components/Step";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { ControlledWizard, WizardData } from "./ControlledWizard";

const initialData: WizardData = {
  name: undefined,
  age: undefined,
  hairColor: undefined,
};

function Usage() {
  // Controlled Modal
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  // Controlled Wizard
  const [wizardData, setWizardData] = useState<WizardData>(initialData);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function onNext(stepData: Partial<WizardData>) {
    console.log({ ...wizardData, ...stepData });
    setWizardData({ ...wizardData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <>
      <h4>Controlled Form</h4>
      <ControlledForm />
      <h4>Controlled Modal</h4>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      <ControlledModal
        onRequestClose={() => setShouldShow(false)}
        shouldShow={shouldShow}
      >
        <h2>Controlled Modal</h2>
        <p>This is a controlled modal!</p>
      </ControlledModal>
      <h4>Controlled Wizard</h4>
      <ControlledWizard currentIndex={currentIndex} onNext={onNext}>
        <Step1 />
        <Step2 />
        {wizardData.age >= 50 && <Step3 />}
        <Step4 />
      </ControlledWizard>
    </>
  );
}

export { Usage };
