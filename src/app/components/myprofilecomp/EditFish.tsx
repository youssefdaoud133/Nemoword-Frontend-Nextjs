// components/MyComponent.tsx
import React, { useEffect, useState } from 'react';

// import material ui 
// material ui 
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

// import Component
import { TextInput, Button } from "@tremor/react";

interface EditFishProps {
  emailP: string;
  passwordP: string;
  FishID:string;
  open : boolean;
  handleClose : () => void;
  Set_Email_Password : (NewEmail :string,NewPassword : string) =>void;
}


// import call endpoint class
import { CallEndpoint } from "../../utils/axios";
const endpoint = new CallEndpoint(undefined, "fish");


// rtk
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../rtk/slices/tokenSlice";
import { RootState, AppDispatch } from "../../rtk/store";


const EditFish: React.FC<EditFishProps> = ({ emailP, passwordP ,FishID, open ,handleClose,Set_Email_Password}) => {
  
      // use selector
  const token = useSelector((state: RootState) => state.token.token);
   
      // use state
  const [EmailInput, setEmailInput] = useState(emailP);
  const [PasswordInput, setPasswordInput] = useState(passwordP);



  // to handle update fish
  const HandleUpdateFish = async (Uemail: string, Upassword: string) => {
       try {
        endpoint.SetFullUrl(`${endpoint.GetFullUrl()}/${FishID}`)
       
        
      const NewFish = await endpoint.UpdateFish(
        {email: Uemail, password:Upassword },
        token
      );

   
      Set_Email_Password(Uemail,Upassword)
      handleClose();

    } catch (e) {
      console.log(e);
    }

  };
  return (
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Edit the fish</DialogTitle>
    <DialogContent>
    <div className="mt-5">
      <TextInput
        placeholder="Email"
        errorMessage="Wrong username"
        type="email"
        className="mt-5"
        value={EmailInput}
        onValueChange={(value: string) => {
          setEmailInput(value);
        }}
      />
      <TextInput
        placeholder="Type password here"
        type="password"
        className="mt-5 mb-5"
        value={PasswordInput}
        onValueChange={(value: string) => {
          setPasswordInput(value);
        }}
      />
      <Button
        className="mb-5 mt-5"
        size="sm"
        onClick={() => {            
            HandleUpdateFish(EmailInput, PasswordInput);
        }}
      >
       Submit modifications
      </Button>
    </div>
    </DialogContent>
  </Dialog> 
  );
};

export default EditFish;