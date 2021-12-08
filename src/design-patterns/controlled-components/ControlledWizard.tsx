import React from "react";

type ControlledWizardProps = {
  children: Array<React.ReactNode>;
  currentIndex: number;
  onNext: (data: Partial<WizardData>) => void;
};

export type WizardData = {
  name?: string;
  age?: number;
  hairColor?: string;
};

/* The benefit of having this as a controlled component, is that it gives us much more control over certain changes that we might want to make to the wizard. */
function ControlledWizard({
  children,
  currentIndex,
  onNext,
}: ControlledWizardProps) {
  const currentChild = React.Children.toArray(children)[currentIndex];

  function goToNext(stepData: Partial<WizardData>) {
    onNext(stepData);
  }

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return <h3>Process Complete!</h3>;
}

export { ControlledWizard };
