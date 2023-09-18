import { ReactNode } from "react";

interface IProps {
  size: string;
  dataKey: string | undefined;
  indents: string;
  border: string;
  colors: string;
  buttonOnClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  customClass: string;
  children: ReactNode;
}

export default function CustomButton({
  size,
  dataKey,
  indents,
  border,
  colors,
  buttonOnClickHandler,
  disabled,
  customClass,
  children,
}: IProps): JSX.Element {
  return (
    <button
      className={`whitespace-nowrap ${customClass} ${border} ${size} ${indents} ${colors} font-light`}
      onClick={buttonOnClickHandler}
      disabled={disabled}
      data-key={dataKey}
    >
      {children}
    </button>
  );
}
