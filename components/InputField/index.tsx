import { useState } from "react";
import styles from "./styles.module.scss";

type Props = {
   id?: string;
   type: string;
   placeholder: string;
};

export const InputField = ({ id, type, placeholder }: Props) => {
   const [focused, setFocused] = useState(false);

   return (
      <div
         className={styles.container}
         style={{ borderColor: focused ? "#13293d" : "#fff" }}
      >
         <input
            id={id ? id : ""}
            type={type}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={styles.input}
         />
      </div>
   );
};
