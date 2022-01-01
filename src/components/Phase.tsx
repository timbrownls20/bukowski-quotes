import React from "react";

interface IProps {
  phase: number
}

const Phase = ({phase}: IProps) => {
  return (
    <div className="phase p-4">
      Phase {phase}
    </div>
  );
};

export default Phase;
