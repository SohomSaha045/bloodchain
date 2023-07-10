import React from "react";
import "../Styles/home.css";

export default function Home() {
  return (
    <div className="main">
      <div className="top">
        <div className="left_div">
          <svg viewBox="0 0 1000 1080" fill="none">
            <g filter="url(#filter0_d_93_102)">
              <path
                d="M947 818C781.274 705.842 352.232 966.5 72.5 966.5C-207.232 966.5 -434 739.732 -434 460C-434 180.268 -207.232 -46.5 72.5 -46.5C352.232 -46.5 1194.5 985.5 947 818Z"
                fill="url(#paint0_linear_93_102)"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_93_102"
                x="-438"
                y="-46.5"
                width="1433.96"
                height="1021"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.647059 0 0 0 0 0.643137 0 0 0 0 0.643137 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_93_102"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_93_102"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_93_102"
                x1="-114.5"
                y1="61.9999"
                x2="385.5"
                y2="910"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.221679" stop-color="darkred" />
                <stop offset="0.66922" stop-color="maroon" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="right_div">
          <div className="heading">Welcome to HemoTrack</div>
          <div className="subheading">
            Introducing the Impenetrable Haven of Blood: A Decentralized Blood
            Bank where Every Drop Counts! Embrace the Future of Safety and
            Transparency in the Realm of Life-Giving Fluids.
            <br />
            Welcome to a World where Security Reigns Supreme, and every
            Contribution is Accounted for, in our Precious Lifeline!
          </div>
          <a href="#bottom_div" className="get_started" scroll={true}>
            Get Started
          </a>
        </div>
      </div>

      <div className="bottom" id="bottom_div">
        <div className="left_col">
          <div className="context">Blood bank employee login</div>
          <div className="buttons_div">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </div>
        <div className="right_col">
          <div className="context">Government administrative login</div>
          <div className="buttons_div">
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
