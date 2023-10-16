import { FC } from "react";
import SearchBar from "../searchbar/SearchBar";
import { AiFillFilter } from "react-icons/ai";

interface headerData {
    pageData?: undefined;
    searchPlaceHolder: string;
}

export default function Header({ pageData, searchPlaceHolder }): FC<headerData> {
    return (
        <header className="fixed w-full flex items-center  bg-[#010204] h-20 opacity-80 ">
            <img className="ml-4 w-20" src="https://www.zelda.com/breath-of-the-wild/assets/img/header/zelda-botw-logo_2x.png" />
            <div className="mr-6 w-full flex items-center justify-end">
                <SearchBar placeholder={searchPlaceHolder} />
                <AiFillFilter size={"1.8rem"} className={"text-[#858585]"} />
            </div>
        </header>
    );
}
