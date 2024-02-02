"use client";
// components/FishTaple.tsx

import React, { FC, useEffect, useState } from "react";

// import call endpoint class
import { CallEndpoint } from "../../utils/axios";
const endpoint = new CallEndpoint(undefined, "fish/SpecificUser");
const endpointToAddFish = new CallEndpoint(undefined, "fish");

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
// rtk
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../rtk/slices/tokenSlice";
import { RootState, AppDispatch } from "../../rtk/store";
import Loader from "../loader";
import axios from "axios";

interface FishTapleProps {}

const FishTaple: FC<FishTapleProps> = () => {
  // use state
  const [SelectedFish, setSelectedFish] = useState<
    { email: string; password: string }[]
  >([]);

  const [StringToShare, setStringToShare] = useState("");
  const [ShowQr, setShowQr] = useState(false);
  const [LoadFishesEffectFactor, setLoadFishesEffectFactor] = useState(false);
  const [ShowTable, setShowTable] = useState(true);
  const [StyleShowQr, setStyleShowQr] = useState(false);
  const [data, setData] = useState<
    [{ email: string; password: string; user: {} }] | null
  >(null);

  // use selector
  const token = useSelector((state: RootState) => state.token.token);

  // use effect
  useEffect(() => {
    setShowQr(false);
  }, [SelectedFish]);
  // use effect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: [{ email: string; password: string; user: {} }] =
          await endpoint.FindAllFishesRelatedToUser(token);
        setData(response);
      } catch (err: any) {
        console.log(err);
      }
    };

    fetchData();
  }, [LoadFishesEffectFactor]);

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
  const handleaddfish = async (email: string, password: string) => {
    try {
      const NewFish = await endpointToAddFish.AddFish(
        { email, password },
        token
      );

      // call use effect
      setData(null);
      setLoadFishesEffectFactor(!LoadFishesEffectFactor);

      setShowTable(true);
    } catch (e) {
      console.log(e);
    }
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

  if (!data) {
    return <Loader />;
  }
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
              {data.map((item) => (
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
