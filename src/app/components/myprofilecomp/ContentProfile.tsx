// components/ContentProfile.tsx

import React from "react";

// add components
import FishTaple from "./FishesTaple";

interface ContentProfileProps {
  // Add any props you might need
}

const ContentProfile: React.FC<ContentProfileProps> = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mt-0 !important">
            Your <span className="text-purple-700">Fishes</span>
          </h2>
        </div>
        <div className="mt-10 ">
          <FishTaple />
        </div>
      </div>
    </>
  );
};

export default ContentProfile;
