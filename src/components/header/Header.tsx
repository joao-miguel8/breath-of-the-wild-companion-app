import { FC } from "react";
import SearchBar from "../searchbar/SearchBar";

interface headerData {
    pageData?: undefined;
    searchPlaceHolder: string;
}

export default function Header({ pageData, searchPlaceHolder }): FC<headerData> {
    return (
        <header className="fixed w-full flex items-center  bg-[#010204] h-20 ">
            <div className="mr-6 w-full flex items-center justify-end">
                <SearchBar placeholder={searchPlaceHolder} />
            </div>
        </header>
    );
}
