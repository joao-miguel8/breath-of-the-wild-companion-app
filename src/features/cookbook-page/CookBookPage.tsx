import Nav from "@/components/nav/Nav";
import SearchBar from "@/components/searchbar/SearchBar";

export default function CookBookPage() {
    return (
        <div>
            <SearchBar searchPlaceholder={"Leagues"} />
            <Nav />
        </div>
    );
}
