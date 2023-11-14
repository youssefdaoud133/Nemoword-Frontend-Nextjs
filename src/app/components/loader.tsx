import React from "react";
import "./loader.css";

export default function loader() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <svg viewBox="0 0 600 600" height="600">
        <defs>
          <path
            id="semicircle"
            d="M -50 0 a 50 50 0 0 1 100 0z"
            stroke="#475c6d"
          ></path>

          <symbol id="fish" viewBox="-9 -9 174.5 127">
            <g transform="translate(2 4.5)">
              <g transform="translate(50 50)">
                <g transform="translate(0 -50)">
                  <g id="fin" transform="rotate(0)">
                    <g transform="translate(25 0)">
                      <use
                        href="#semicircle"
                        transform="rotate(180) scale(0.5)"
                        strokeWidth="8"
                      ></use>
                    </g>
                  </g>
                </g>
              </g>

              <g transform="translate(50 50)">
                <g transform="translate(100 0)">
                  <g transform="translate(-50 0)">
                    <g transform="scale(1.05)">
                      <g id="tail" transform="rotate(0)">
                        <g transform="translate(50 0)">
                          <use
                            href="#semicircle"
                            transform="rotate(-90)"
                            fill="#fff"
                            strokeWidth="4"
                          ></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>

              <g transform="translate(50 50)">
                <g transform="scale(-1 1)">
                  <g id="mouth" transform="rotate(0)">
                    <use
                      href="#semicircle"
                      transform="rotate(180)"
                      strokeWidth="4"
                    ></use>
                    <path
                      transform="scale(-1 1)"
                      d="M 0 2 h 20 q 0 46 -20 46 a 48 48 0 0 0 48 -48"
                      fill="#000"
                      opacity="0.15"
                    ></path>
                  </g>
                </g>
              </g>

              <g transform="translate(50 50)">
                <g id="head" transform="rotate(0)">
                  <use href="#semicircle" fill="#fff" strokeWidth="4"></use>

                  <circle cx="-20" cy="-15" r="4" fill="#475c6d"></circle>
                  <path
                    opacity="0.3"
                    fill="none"
                    stroke="#475c6d"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="0 30 30 85"
                    d="M -44 0 a 44 44 0 0 1 88 0"
                  ></path>
                </g>
              </g>

              <g transform="translate(50 50)">
                <g id="flipper" transform="rotate(0)">
                  <g transform="translate(25 0)">
                    <use
                      href="#semicircle"
                      transform="rotate(180) scale(0.5)"
                      fill="#fff"
                      strokeWidth="8"
                    ></use>
                  </g>
                </g>
              </g>
            </g>
          </symbol>

          <clipPath
            transform="translate(0 0)"
            id="clip"
            clipPathUnits="objectBoundingBox"
          >
            <path
              d="M -0.2 -0.2 h 1.4 v 0.5 l 0.6 0.2 l -0.6 0.2 v 0.5 h -1.4 z"
              fill="#fff"
            ></path>
          </clipPath>
        </defs>

        <g transform="translate(300 300)">
          <g transform="translate(-100 0)">
            <g id="bubbles" fill="475c6d">
              <circle cx="100" cy="-70" r="4" opacity="0.9"></circle>
              <circle cx="130" cy="60" r="2" opacity="0.8"></circle>
              <circle cx="70" cy="90" r="3" opacity="0.75"></circle>
              <circle cx="40" cy="100" r="4" opacity="0.85"></circle>
            </g>
          </g>

          <g transform="translate(-78.25 -54.5)">
            <g className="translate" style={{ animationDelay: " -3s" }}>
              <g transform="translate(156.5 54.5)">
                <g className="scale" style={{ animationDelay: " -3s" }}>
                  <g transform="translate(-156.5 -54.5)">
                    <svg width="156.5" height="109">
                      <use href="#fish" fill="#ff9bbd"></use>
                    </svg>
                  </g>
                </g>
              </g>
            </g>

            <g className="translate">
              <g transform="translate(156.5 54.5)">
                <g className="scale">
                  <g transform="translate(-156.5 -54.5)">
                    <g>
                      <svg clipPath="url(#clip)" width="156.5" height="109">
                        <use href="#fish" fill="#dbb8ff"></use>
                      </svg>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
