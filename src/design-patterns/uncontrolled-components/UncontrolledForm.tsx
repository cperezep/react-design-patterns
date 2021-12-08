import React from "react";

function UncontrolledForm() {
  const nameInput = React.createRef<HTMLInputElement>();
  const ageInput = React.createRef<HTMLInputElement>();
  const hairColorInput = React.createRef<HTMLInputElement>();

  const handleSubmit = (event: React.FormEvent) => {
    console.log(nameInput?.current?.value);
    console.log(ageInput?.current?.value);
    console.log(hairColorInput?.current?.value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="number" placeholder="Age" ref={ageInput} />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        ref={hairColorInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export { UncontrolledForm };
