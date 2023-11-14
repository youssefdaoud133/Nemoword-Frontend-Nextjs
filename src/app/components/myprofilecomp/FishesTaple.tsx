"use client";
// components/FishTaple.tsx

import React, { FC, useEffect, useState } from "react";

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
  Button,
} from "@tremor/react";
import { hashPassword } from "./Hashpassword";
import FieldOfTableComp from "./FieldOfTableComp";

import QRCode from "react-qr-code";
import AddFishCom from "./AddFishCom";

const Fishes = [
  {
    email: "youssef@gmail.com",
    password: "12345678",
  },
  {
    email: "marina@gmail.com",
    password: "12345678",
  },
];

interface FishTapleProps {}

const FishTaple: FC<FishTapleProps> = () => {
  // use state
  const [SelectedFish, setSelectedFish] = useState<
    { email: string; password: string }[]
  >([]);

  const [StringToShare, setStringToShare] = useState("");
  const [ShowQr, setShowQr] = useState(false);
  const [ShowTable, setShowTable] = useState(true);
  const [StyleShowQr, setStyleShowQr] = useState(false);

  // use effect
  useEffect(() => {
    setShowQr(false);
  }, [SelectedFish]);

  // handles
  const handleSelectFish = (email: string, password: string) => {
    // Add the selected fish to the state
    setSelectedFish([...SelectedFish, { email, password }]);
  };

  // to remove
  const handleRemoveFish = (email: string, password: string) => {
    // Remove the selected fish from the state
    const updatedFish = SelectedFish.filter(
      (fish) => fish.email !== email || fish.password !== password
    );
    setSelectedFish(updatedFish);
  };
  // to add fish
  const handleaddfish = (email: string, password: string) => {
    Fishes.unshift({ email, password });
    setShowTable(true);
  };

  const ConvertFishestoStringToCanShare = () => {
    let FinalFormat = "";
    SelectedFish.forEach((Sfish) => {
      FinalFormat += `email : ${Sfish.email}
       password:  ${Sfish.password}
        `;
    });
    return FinalFormat;
  };
  return (
    <>
      {ShowQr && (
        <div className="mb-10 flex items-center justify-center mx-auto w-full max-w-sm sm:mx-auto sm:w-full sm:max-w-sm">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "40%", width: "40%" }}
            value={StringToShare}
            viewBox={`0 0 256 256`}
          />
        </div>
      )}

      <Card>
        <div className="flex  justify-between items-center ">
          <Title>{ShowTable ? "List of Fishes" : "Add new fish"}</Title>

          <Button
            size="sm"
            onClick={() => {
              setStringToShare(ConvertFishestoStringToCanShare);
              setShowQr(true);
            }}
          >
            Share selected fishes
          </Button>
        </div>
        {ShowTable && (
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Email</TableHeaderCell>
                <TableHeaderCell>Password</TableHeaderCell>
                <TableHeaderCell>Select</TableHeaderCell>
                <TableHeaderCell>Hide</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Fishes.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <FieldOfTableComp
                  email={item.email}
                  password={item.password}
                  AddFish={handleSelectFish}
                  RemoveFish={handleRemoveFish}
                />
              ))}
            </TableBody>
          </Table>
        )}
        {!ShowTable && <AddFishCom AddFish={handleaddfish} />}
        <div className="flex  flex flex-col  items-center  ">
          <Button
            size="sm"
            onClick={() => {
              setShowTable(!ShowTable);
              setShowQr(false);
            }}
          >
            {ShowTable ? "Add Fish" : "Show your Fishes"}
          </Button>
        </div>
      </Card>
    </>
  );
};

export default FishTaple;
