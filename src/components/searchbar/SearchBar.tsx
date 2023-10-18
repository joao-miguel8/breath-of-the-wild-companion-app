import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classNames from "classnames";

const SearchBar = ({ placeholder }) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [isSearchActive, setIsSearchActive] = useState(false);

    function handleCloseAndResetSearch() {
        setIsSearchActive(state => !state);
        setSearchValue("");
    }

    return (
        <>
            <div role="search" aria-label={placeholder} className={classNames("pl-8 left-0 w-full fixed top-0 flex items-center justify-between duration-500 bg-[#010204]", !isSearchActive && "-translate-y-20")}>
                {isSearchActive && <input onChange={e => setSearchValue(e.target.value)} value={searchValue} placeholder={placeholder} type="text" className="ml-8 w-full h-20  text-[#FAF7DC] bg-transparent outline-none font-poppins" />}
                <AiOutlineClose
                    onClick={handleCloseAndResetSearch}
                    size={"1.8rem"}
                    className="mr-4 text-[#858585]
            hover:text-[#FAF7DC] ease-in-put duration-300"
                />
            </div>
            <BiSearch
                onClick={() => setIsSearchActive(state => !state)}
                size={"1.8rem"}
                className="mr-4 text-[#858585]
            hover:text-[#FAF7DC] ease-in-put duration-300"
            />
        </>
    );
};

export default SearchBar;
