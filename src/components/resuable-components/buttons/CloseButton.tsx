import { FC } from "react";

interface iCloseButton {
  addClass: string;
  label: string;
  onClick: () => void;
}

export const CloseButton: FC<iCloseButton> = ({ addClass, label, onClick }) => {
  return (
    <div className={addClass} onClick={onClick}>
      {label}
    </div>
  );
};
