"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

// rtk
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../rtk/slices/tokenSlice";
import { RootState, AppDispatch } from "../../rtk/store";

// ccomponents
import Loader from "../loader";
import ContentProfile from "./Contentprofile";
import { CashIcon, UserIcon } from "@heroicons/react/outline";
import { Card, Flex, Icon, Metric, Text } from "@tremor/react";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  city: string;
}

export default function MyProfileComp() {
  const [data, setData] = useState<User | null>(null);
  const [error, setError] = useState<any>(null);

  // use selector
  const token = useSelector((state: RootState) => state.token.token);
  // old code
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
  //     const apiUrl = "http://localhost:8000/auth/myprofile";

  //     try {
  //       const response = await axios.get(apiUrl, {
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Send the token in the header
  //         },
  //       });
  //       setData(response.data);
  //     } catch (err: any) {
  //       setError(err);
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      // Retrieve user data from localStorage

      try {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
          const parsedUserData = JSON.parse(storedUserData);
          setData(parsedUserData);
          console.log(parsedUserData);
        } else {
          setError("no data in local storage");
        }
      } catch (err: any) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1   flex flex-col  items-center sm:items-start">
        <Card className="max-w-fit">
          <Flex className="space-x-6">
            <Icon icon={UserIcon} color="blue" variant="solid" size="sm" />
            <div>
              <Text>Name</Text>
              <Text className="text-sm">{data.name}</Text>
            </div>
          </Flex>
        </Card>
      </div>

      <div className="flex-1 ">
        <ContentProfile />
      </div>
    </div>
  );
}
