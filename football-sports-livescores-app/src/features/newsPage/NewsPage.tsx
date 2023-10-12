import SearchBar from "@/components/searchbar/SearchBar";
import Nav from "../../components/nav/Nav";

export default function NewsPage() {
    return (
        <div>
            <SearchBar searchPlaceholder={"News"} />
            <Nav />
        </div>
    );
}
