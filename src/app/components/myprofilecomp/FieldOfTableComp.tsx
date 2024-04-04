"use client";
// MyComponent.tsx

import React, { useState } from "react";

// material ui 
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

// import component

import {
  StatusOnlineIcon,
  EyeIcon,
  EyeOffIcon,
  TrashIcon,
  PencilIcon
} from "@heroicons/react/outline";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
  Switch,
  Icon,
} from "@tremor/react";
import { hashPassword } from "./Hashpassword";
import EditFish from "./EditFish";

interface FieldOfTableCompProps {
  email: string;
  password: string;
  AddFish: (email: string, password: string) => void;
  RemoveFish: (email: string, password: string) => void;
  DeleteFish: (UserID:string) => any;
  FishID:string;
}

const FieldOfTableComp: React.FC<FieldOfTableCompProps> = ({
  email,
  password,
  AddFish,
  RemoveFish,
  DeleteFish,
  FishID
}) => {
  // usetate
  const [showPassword, setShowPassword] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [CurrentFish,setCurrentFish] = useState<{
    email : string,
    password:string,
    id:string
  }>({
    email : "",
    password:"",
    id:""
  })
  const [CurrentEmail, setCurrentEmail] = useState(email);
  const [CurrentPassword, setCurrentPassword] = useState(password);


  // set update email and password
  const Set_Email_Password = (NewEmail :string,NewPassword : string) => {
    setCurrentEmail(NewEmail);
    setCurrentPassword(NewPassword);

  }

  // handles
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // handle switch
  const handleSwitchChange = (value: boolean) => {
    if (value) {
      AddFish(email, password);
    } else {
      RemoveFish(email, password);
    }

    setIsSwitchOn(value);
  };
  // handle small window
  const handleClick = (email:string, password:string,id:string) => {
    setCurrentFish({
      email,
      password,
      id
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (
    <TableRow>
      <TableCell>{CurrentEmail}</TableCell>
      <TableCell>
        <Text>{showPassword ? CurrentPassword : hashPassword(CurrentPassword)}</Text>
      </TableCell>

      <TableCell>
        <Switch
          id="switch"
          name="switch"
          checked={isSwitchOn}
          onChange={handleSwitchChange}
        />
      </TableCell>
      <TableCell>
        <Icon
          icon={showPassword ? EyeIcon : EyeOffIcon}
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer" }}
        />
      </TableCell>
      <TableCell>
        <Icon
          icon={TrashIcon}
          onClick={() => DeleteFish(FishID)}
          style={{ cursor: "pointer",color: "red"  }}
        />
      </TableCell>
      <TableCell>
        <Icon
          icon={PencilIcon}
          onClick={() =>{handleClick(CurrentEmail,CurrentPassword,FishID)}}
          style={{ cursor: "pointer",color: "green"  }}
        />
      </TableCell>
      
      {open &&<EditFish emailP={CurrentFish.email} passwordP={CurrentFish.password} FishID={CurrentFish.id} open={open} handleClose={handleClose} Set_Email_Password = {Set_Email_Password}/>}

      
    </TableRow>
  );
};

export default FieldOfTableComp;
