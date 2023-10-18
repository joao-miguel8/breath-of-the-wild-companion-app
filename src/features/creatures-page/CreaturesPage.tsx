import Nav from "@/components/nav/Nav";
import Header from "@/components/header/Header";
import CreaturesList from "../creatures-list/CreaturesList";

export default function CreaturesPage() {
    return (
        <>
            <Header pageName={"Creatures"} searchPlaceHolder={"Search Creatures"} />
            <CreaturesList />
            <Nav />
        </>
    );
}
