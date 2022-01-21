import React from "react";
import { Circle } from "../circle";
export const Stepbar = ({ styles, activeStep }) => {
  return (
    <div>
      <div className="flex justify-center my-2">
        <div>
          <Circle number={1} label={"step1"} activeStep={activeStep} />
        </div>
        <div className="border-r-2 transform rotate-90 ml-8"></div>
        <div className="border-r-2 transform rotate-90"></div>
        <div className="border-r-2 transform rotate-90 mr-8"></div>
        <div>
          <Circle number={2} activeStep={activeStep} />
        </div>
        <div className="border-r-2 transform rotate-90 ml-8"></div>
        <div className="border-r-2 transform rotate-90"></div>
        <div className="border-r-2 transform rotate-90 mr-8"></div>
        <div>
          <Circle number={3} activeStep={activeStep} />
        </div>
      </div>
      <div className="flex justify-center gap-16">
        <div>step1</div>
        <div>step2</div>
        <div>step3</div>
      </div>
    </div>
  );
};
