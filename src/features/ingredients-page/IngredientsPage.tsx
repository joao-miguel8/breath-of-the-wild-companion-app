import SearchBar from "@/components/searchbar/SearchBar";
import Nav from "@/components/nav/Nav";

export default function IngredientsPage() {
    return (
        <div>
            <SearchBar searchPlaceholder={"Inredient"} />
            <Nav />
        </div>
    );
}
