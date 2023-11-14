"use client";
import React from "react";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSuitcase } from "@fortawesome/free-solid-svg-icons";

import "./card.css";
import config from "next/config";

interface MyComponentProps {
  iconname: any;
  desc: string;
  key?: number;
}

const Card: React.FC<MyComponentProps> = ({ iconname, desc, key }) => {
  return (
    <div className="wrapper ">
      <div className="single-card ">
        <div className="content">
          <div className="front flex items-center justify-center">
            <FontAwesomeIcon icon={iconname} className="iconstyle" />
          </div>
        </div>
        <div className="back flex items-center justify-center ">
          <div className="content ">
            <FontAwesomeIcon icon={iconname} className="iconstyleback" />
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
