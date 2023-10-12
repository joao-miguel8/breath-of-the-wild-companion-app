import { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";

interface searchPlaceholder {
    searchPlaceholder: string;
}

const SearchBar: FC<searchPlaceholder> = ({ searchPlaceholder }) => {
    const [searchValue, setSearchValue] = useState<string>();

    return (
        <div role="search" aria-label="search for something" className="ml-4 mt-14 px-2 py-1 w-fit flex gap-2 items-center border-[2px] border-[#989898] focus-within:border-[#4C1D52]  duration-300 rounded-full">
            <BiSearch
                size={"1.8rem"}
                className="text-[#858585]
            "
            />
            <input onChange={e => setSearchValue(e.target.value)} value={searchValue} placeholder={`Search ${searchPlaceholder}`} type="text" className="outline-none font-poppins" />
        </div>
    );
};

export default SearchBar;
