import Nav from "@/components/nav/Nav";
import Header from "@/components/header/Header";
import TreasuresList from "../treasures-list/TreasuresList";

export default function TreasurePage() {
    return (
        <div>
            <Header searchPlaceHolder={"Search Treasures"} />
            <TreasuresList />
            <Nav />
        </div>
    );
}
