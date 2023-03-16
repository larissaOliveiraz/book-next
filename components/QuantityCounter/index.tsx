import { Minus, Plus, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

type Props = {
   quantity: number;
   onUpdateQuantity: (newQuantity: number) => void;
   min?: number;
   small?: boolean;
};

export const QuantityCounter = ({
   quantity,
   onUpdateQuantity,
   min,
   small,
}: Props) => {
   const [canRemove, setCanRemove] = useState(false);

   const handleRemove = () => {
      if (canRemove) {
         onUpdateQuantity(quantity - 1);
      }
   };

   const handleAdd = () => {
      onUpdateQuantity(quantity + 1);
   };

   useEffect(() => {
      setCanRemove(!min || (min && quantity > min) ? true : false);
   }, [quantity, min]);

   return (
      <div className={styles.container}>
         <div
            className={styles.changeBtn}
            onClick={handleRemove}
            style={{
               padding: small ? 6 : 11,
               backgroundColor: canRemove ? "#13293d" : "#ccc",
            }}
         >
            <Minus />
         </div>
         <div
            className={styles.count}
            style={{ fontSize: small ? 20 : 24, width: small ? 28 : 44 }}
         >
            {quantity}
         </div>
         <div
            className={styles.changeBtn}
            onClick={handleAdd}
            style={{ padding: small ? 6 : 11 }}
         >
            <Plus />
         </div>
      </div>
   );
};
