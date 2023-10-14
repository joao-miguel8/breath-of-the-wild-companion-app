import SearchBar from "@/components/searchbar/SearchBar";
import Nav from "@/components/nav/Nav";

export default function ExplorePage() {
    return (
        <>
            <SearchBar searchPlaceholder={"Explore"} />
            <Nav />
        </>
    );
}
