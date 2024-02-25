import { FC } from "react";

type CloseButton = {
  addClass: string;
  label: string;
  onClick: () => void;
};

export const CloseButton: FC<CloseButton> = ({ addClass, label, onClick }) => {
  return (
    <div className={addClass} onClick={onClick}>
      {label}
    </div>
  );
};
