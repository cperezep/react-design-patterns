import React, { useState } from "react";

type UncontrolledWizardProps = {
  children: Array<React.ReactNode>;
  onFinish: (data: WizardData) => void;
};

export type WizardData = {
  name?: string;
  age?: number;
  hairColor?: string;
};

const initialData: WizardData = {
  name: undefined,
  age: undefined,
  hairColor: undefined,
};

function UncontrolledWizard({ children, onFinish }: UncontrolledWizardProps) {
  const [wizardData, setWizardData] = useState<WizardData>(initialData);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentChild = React.Children.toArray(children)[currentIndex];

  function goToNext(stepData: Partial<WizardData>) {
    const updatedData = {
      ...wizardData,
      ...stepData,
    };
    console.log(updatedData);
    const nextIndex = currentIndex + 1;

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }

    setWizardData(updatedData);
  }

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild as JSX.Element;
}

export { UncontrolledWizard };
