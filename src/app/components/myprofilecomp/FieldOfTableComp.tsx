"use client";
// MyComponent.tsx

import React, { useState } from "react";

// import component

import {
  StatusOnlineIcon,
  EyeIcon,
  EyeOffIcon,
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

interface FieldOfTableCompProps {
  email: string;
  password: string;
  AddFish: (email: string, password: string) => void;
  RemoveFish: (email: string, password: string) => void;
}

const FieldOfTableComp: React.FC<FieldOfTableCompProps> = ({
  email,
  password,
  AddFish,
  RemoveFish,
}) => {
  // usetate
  const [showPassword, setShowPassword] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

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

  return (
    <TableRow>
      <TableCell>{email}</TableCell>
      <TableCell>
        <Text>{showPassword ? password : hashPassword(password)}</Text>
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
    </TableRow>
  );
};

export default FieldOfTableComp;
