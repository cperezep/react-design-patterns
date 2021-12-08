import React from "react";
import { UncontrolledModal } from "../layout-components/UncontrolledModal";
import { Step1, Step2, Step3 } from "./Step";
import { UncontrolledForm } from "./UncontrolledForm";
import { UncontrolledWizard, WizardData } from "./UncontrolledWizard";

function Usage() {
  function onFinish(data: WizardData) {
    console.log(data);
    alert("Wizard Complete!");
  }
  return (
    <>
      <h4>Uncontrolled Form</h4>
      <UncontrolledForm />
      <h4>Uncontrolled Modal</h4>
      <UncontrolledModal>
        <h2>Uncontrolled modal</h2>
        <p>
          And the reason we say that is that the modal itself is the one that's
          controlling whether or not it's shown, and it also controls when it's
          hidden
        </p>
      </UncontrolledModal>
      <h4>Uncontrolled Wizard</h4>
      <UncontrolledWizard onFinish={onFinish}>
        <Step1 />
        <Step2 />
        <Step3 />
      </UncontrolledWizard>
    </>
  );
}

export { Usage };
