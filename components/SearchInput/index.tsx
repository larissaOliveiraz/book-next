import { Search } from "lucide-react";
import { KeyboardEvent, useState } from "react";
import styles from "./styles.module.scss";

type Props = {
   onSearch: (searchValue: string) => void;
};

export const SearchInput = ({ onSearch }: Props) => {
   const [searchInput, setSearchInput] = useState("");
   const [focused, setFocused] = useState(false);

   const handleOnSearch = (e: KeyboardEvent<HTMLInputElement>) => {
      onSearch(searchInput);
   };

   return (
      <div
         className={styles.container}
         style={{ borderColor: focused ? "#14281d" : "#e2e2e2" }}
      >
         <Search size={28} />
         <input
            type="text"
            placeholder="Search for available book titles"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyUp={handleOnSearch}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={styles.input}
         />
      </div>
   );
};
