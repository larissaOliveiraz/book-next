import { Loader2 } from "lucide-react";
import styles from "./styles.module.scss";

type Props = {
   title: string;
   onClick: () => void;
   invert?: boolean;
};

export const Button = ({ title, onClick, invert }: Props) => {
   return (
      <div
         className={styles.container}
         onClick={onClick}
         style={{
            backgroundColor: invert ? "#e2e2e2" : "#13293d",
            color: invert ? "#13293d" : "#e2e2e2",
         }}
      >
         {title}
      </div>
   );
};
