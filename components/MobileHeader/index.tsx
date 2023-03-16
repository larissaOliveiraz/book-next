import { ChevronLeft, Heart } from "lucide-react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

type Props = {
   title: string;
   favorite?: boolean;
   returnLink: string;
   invert?: boolean;
};

export const MobileHeader = ({
   title,
   favorite,
   returnLink,
   invert,
}: Props) => {
   const router = useRouter();

   return (
      <div className={styles.container}>
         <div
            className={styles.returnLink}
            onClick={() => router.push(returnLink)}
         >
            <ChevronLeft
               color={invert ? "#e3e3e3" : "#14281d"}
               className={styles.returnLink}
            />
         </div>

         <div className={styles.titleArea}>
            <h4 style={{ color: invert ? "#e3e3e3" : "#14281d" }}>{title}</h4>
         </div>

         <div className={styles.favorite}>
            {favorite && <Heart color={invert ? "#e3e3e3" : "#14281d"} />}
         </div>
      </div>
   );
};
