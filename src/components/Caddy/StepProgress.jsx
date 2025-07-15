import React from "react";

const StepProgress = ({ currentStep }) => {
  const steps = [1, 2, 3];

  return (
    <div className="flex items-center justify-center space-x-2 my-4">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={`w-5 h-5 rounded-full ${
              currentStep >= step ? "bg-green-600" : "bg-gray-200"
            }`}
          />
          {index < steps.length - 1 && (
            <div
              className={`w-10 h-1 ${
                currentStep > step ? "bg-green-600" : "bg-gray-200"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepProgress;
