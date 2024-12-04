import React from 'react';

interface Step {
  value: number;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="flex justify-between items-center space-x-8">
      {steps.map((step) => {
        const isActive = step.value === currentStep;
        const isCompleted = step.value < currentStep;
        return (
          <div key={step.value} className="flex flex-col flex-1 items-start">
            <div
              className={`w-full h-1 mb-4 ${
                isActive
                  ? 'bg-primary'
                  : isCompleted
                  ? 'bg-success'
                  : 'bg-muted-foreground'
              }`}
            ></div>

            <button
              onClick={() => onStepClick?.(step.value)}
              className="flex flex-col items-start focus:outline-none"
            >
              <span
                className={`text-sm font-semibold ${
                  isActive
                    ? 'text-primary'
                    : isCompleted
                    ? 'text-muted-foreground'
                    : 'text-muted'
                }`}
              >
                STEP {step.value}
              </span>

              <span
                className={`text-sm font-semibold ${
                  isActive
                    ? 'text-text'
                    : isCompleted
                    ? 'text-muted-foreground'
                    : 'text-text'
                }`}
              >
                {step.label}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
