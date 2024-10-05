import React from "react";
import SlideAnimation from "../Animations/SlideAnimation";
import Button from "../Button";

interface Step {
  title: string;
  component: React.ReactNode; // Or a more specific type if you know what the component will be
  icon?: React.ReactNode;
  showStep?: boolean;
}

interface MyStepperProps {
  steps: Step[]; // Array of Step objects
  activeStep: number; // Current active step index
  setActiveStep: (step: number) => void; // Function to update activeStep
  onClick?: () => void; // Optional click handler
}
const MyStepper: React.FC<MyStepperProps> = ({
  steps = [{ title: "", component: "", icon: "" }],
  activeStep,
  setActiveStep,
  onClick,
}) => {
  let activeStyle = {
    background: "var(--red-gradient)",
    color: "white",
  };
  let inactiveStyle = {
    background: "white",
    border: "2.5px solid #ff00153a",
    color: "red",
  };
  let stepperStyle = { background: "var(--grey)" };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  return (
    <div>
      <div className="flex justify-center my-4 ">
        <div className="flex justify-start  ">
          {steps.map((step, index) => (
            <div className="flex items-center justify-start" key={index}>
              <div
                style={activeStep >= index ? activeStyle : inactiveStyle}
                className={`flex items-center justify-center  duration-300 w-12 h-12 rounded-full`}
              >
                {step?.icon ?? index + 1}
              </div>
              {index + 1 !== steps.length && (
                <div
                  //   style={activeStep >= index&& ac}
                  style={activeStep > index ? activeStyle : stepperStyle}
                  className={`${""} h-1 w-12 sm:w-32 duration-1000 `}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* For contents */}
      <h1 className="text-center my-4 text-xl uppercase">
        {steps[activeStep]?.title}
      </h1>
      <div>
        <div className="min-h-[50vh]">{steps[activeStep]?.component}</div>

        {steps[activeStep]?.showStep !== false && (
          <div
            className={`bg-white p-4 rounded-xl my-2 px-1  flex items-center `}
            style={{
              justifyContent: activeStep > 0 ? "space-between" : "flex-end",
            }}
          >
            {activeStep > 0 && <Button onClick={handleBack}>Prev</Button>}
            <Button onClick={handleNext} type="submit">
              Next
            </Button>
          </div>
        )}
      </div>

      {/* For contents */}
    </div>
  );
};

export default MyStepper;
