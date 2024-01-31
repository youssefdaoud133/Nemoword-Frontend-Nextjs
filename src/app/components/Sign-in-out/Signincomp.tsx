"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
// import call endpoint class
import { CallEndpoint } from "../../utils/axios";
const endpoint = new CallEndpoint(undefined, "auth/login");
// rtk
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../rtk/slices/tokenSlice";
import { RootState, AppDispatch } from "../../rtk/store";

// import loading component
import Loader from "../../components/loader";

// use route
import { useRouter } from "next/navigation";
import { authenticateUser } from "../../utils/auth";

interface ResponseInterface {
  access_token: string;
  message: string;
}

interface formDataint {
  email: string;
  password: string; // Add username field
}

const Signincomp: React.FC = () => {
  // usestate
  const [loading, setLoading] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [formData, setFormData] = useState<formDataint>({
    email: "",
    password: "", // Add username field
  });
  // use selector
  const token = useSelector((state: RootState) => state.token.token);
  // use dispatch
  const dispatch: AppDispatch = useDispatch();
  // useRouter
  const router = useRouter();
  // old code
  // handles button
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrormsg("");
    try {
      setLoading(true);
      const response = await endpoint.signin(formData);
      if (!response.access_token) {
        setErrormsg(response.message);
        setLoading(false);
      } else {
        dispatch(setToken(response.access_token));

        router.push("/myprofile");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error making the post request:", error);
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
            Sign in to your account
          </h2>
          {errormsg.length > 0 ? (
            <p className="text-red-500 text-center">{`${errormsg}`}</p>
          ) : null}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleFormSubmit}
          >
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => handleInputChange(e, "password")}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member? <Link href="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signincomp;
