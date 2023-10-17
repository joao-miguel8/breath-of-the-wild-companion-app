import Nav from "@/components/nav/Nav";
import Header from "@/components/header/Header";
import useQueryMonsters from "./hooks/useQueryMonsters";
import useQueryCreatures from "./hooks/useQueryCreatures";

export default function CreaturesPage() {
    const { data: monstersData, isLoading: loadingMonsters, error: errorFetchingMonsters } = useQueryMonsters();
    const { data: creaturesData, isLoading: loadingCreatures, error: errorFetchingCreatures } = useQueryCreatures();
    // console.log(monstersData);
    // console.log(creaturesData);

    return (
        <div className="h-screen bg-[url(http://www.zelda.com/breath-of-the-wild/assets/img/patterns/black.jpg)] center top">
            <Header pageName={"Creatures"} searchPlaceHolder={"Search Creatures"} />
            <Nav />
        </div>
    );
}
