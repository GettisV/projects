import React from "react";

interface IButton {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function Button({ onClick, className, children }: IButton) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: "",
};
