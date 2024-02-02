"use client";
import React, { useEffect } from "react";
// rtk
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../rtk/slices/tokenSlice";
import { RootState, AppDispatch } from "../../rtk/store";

export default function Ready() {
  // use selector
  const token = useSelector((state: RootState) => state.token.token);
  // use dispatch
  const dispatch: AppDispatch = useDispatch();
  //use effect
  // make sure if user back page he should sign in again
  useEffect(() => {
    dispatch(setToken(""));
  }, []);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Ready to use <span className="text-purple-700">Nemoword</span> ?
        </h1>
        <p className="text-center">
          To securely store all of your passwords and remember them !
        </p>
      </div>
    </div>
  );
}
