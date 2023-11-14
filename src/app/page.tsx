import Image from "next/image";
import Card from "./components/Home/Card";
import Ready from "./components/Home/Ready";
import Link from "next/link";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSuitcase, faLock, faShare } from "@fortawesome/free-solid-svg-icons";

library.add(faSuitcase);

export const metadata = {
  title: "Nemoword",
};

interface Feature {
  iconname: any;
  desc: string;
  key?: number;
}

const featuresdata: Feature[] = [
  {
    iconname: faSuitcase,
    desc: "Allow users to securely store their passwords",
  },
  {
    iconname: faLock,
    desc: "Ensure user accounts are kept safe with secure password policies",
  },
  {
    iconname: faShare,
    desc: "Easily and securely share your stored passwords with other users.",
  },
];

export default function Home() {
  return (
    <>
      <Ready />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex flex-wrap">
          {featuresdata.map((feature, index) => (
            <Card key={index} iconname={feature.iconname} desc={feature.desc} />
          ))}
        </div>
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 flex items-center justify-center">
        <Link href="/signin">
          <button className="bg-white-500 hover:bg-white-700 text-white font-bold py-2 px-4 rounded-lg w-64 h-16 shadow-md border border-gray-500 transition duration-300 ease-in-out hover:scale-105">
            <span className="text-black">{`Getting Started `}</span>
            <span className="text-black">{`>>`}</span>
          </button>
        </Link>
      </div>
    </>
  );
}
