// components/MyComponent.tsx
import React, { useState } from "react";

// import Component
import { TextInput, Button } from "@tremor/react";

interface AddFishComProps {
  AddFish: (email: string, password: string) => void;
}

const AddFishCom: React.FC<AddFishComProps> = ({ AddFish }) => {
  // use state
  const [EmailInput, setEmailInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");

  return (
    <div className="mt-5">
      <TextInput
        placeholder="Email"
        errorMessage="Wrong username"
        type="email"
        className="mt-5"
        onValueChange={(value: string) => {
          setEmailInput(value);
        }}
      />
      <TextInput
        placeholder="Type password here"
        type="password"
        className="mt-5 mb-5"
        onValueChange={(value: string) => {
          setPasswordInput(value);
        }}
      />
      <Button
        className="mb-5 mt-5"
        size="sm"
        onClick={() => {
          AddFish(EmailInput, PasswordInput);
        }}
      >
        Add Fish
      </Button>
    </div>
  );
};

export default AddFishCom;
