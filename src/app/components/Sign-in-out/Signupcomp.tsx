"use client";
import Link from "next/link";
import React, { useState } from "react";

// import call endpoint class
import { CallEndpoint } from "../../utils/axios";
const endpoint = new CallEndpoint(undefined, "auth/signup");

// rtk
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../rtk/slices/tokenSlice";
import { RootState, AppDispatch } from "../../rtk/store";

// import loading component
import Loader from "../../components/loader";

// use route
import { useRouter } from "next/navigation";
import { log } from "console";
import ValidationSignUp from "./ValidationSignUp";

interface formDataint {
  email: string;
  username: string; // Add username field
  password: string;
  ConfirmPassword: string;
}
interface resint {
  newuser: {
    email: string;
    username: string;
    password: string;
    id: number;
  };
  message: string;
}

const Signincomp: React.FC = () => {
  // usestate
  const [loading, setLoading] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [acceptmsg, setacceptmsg] = useState("");
  const [formData, setFormData] = useState<formDataint>({
    email: "",
    username: "", // Add username field
    password: "",
    ConfirmPassword: "",
  });
  // use selector
  const token = useSelector((state: RootState) => state.token.token);
  // use dispatch
  const dispatch: AppDispatch = useDispatch();
  // useRouter
  const router = useRouter();

  // handles button
  const handleFormSubmit = async () => {
    setErrormsg("");
    setacceptmsg("");
    // validate form data before end point
    const Validations: string = ValidationSignUp(formData);
    if (Validations.length === 0) {
      try {
        setLoading(true);
        const response: any = await endpoint.signup(formData);
        if (response.accept) {
          setacceptmsg(response.status);
        } else {
          setErrormsg(response.status || "");
        }

        setLoading(false);
      } catch (e: any) {
        console.log(e);

        if (typeof e.response.data.message === "string") {
          setErrormsg(e.response.data.message);
        } else {
          setErrormsg(e.response.data.message[0]);
        }
        setLoading(false);
      }
    } else {
      setErrormsg(Validations);
    }
  };
  // handle change
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up a new account
          </h2>
          {errormsg.length > 0 ? (
            <p className="text-red-500 text-center">{`${errormsg}`}</p>
          ) : null}
          {acceptmsg.length > 0 ? (
            <p className="text-green-500 text-center">{`${acceptmsg}`}</p>
          ) : null}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text" // Use "text" type for usernames
                  autoComplete="username"
                  required
                  value={formData.username}
                  onChange={(e) => handleInputChange(e, "username")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, "email")}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange(e, "password")}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  type="password"
                  value={formData.ConfirmPassword}
                  onChange={(e) => handleInputChange(e, "ConfirmPassword")}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={() => {
                  handleFormSubmit();
                }}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have account ? <Link href="/signin">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signincomp;
