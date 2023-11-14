import React from "react";

export default function Ready() {
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
