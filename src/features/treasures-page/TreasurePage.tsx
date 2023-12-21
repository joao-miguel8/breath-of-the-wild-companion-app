import Nav from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import TreasuresList from "../treasures-list/TreasuresList";
import SelectedTreasureCard from "../selected-treasure-card/SelectedTreasureCard";
import useFetchTreasures from "../treasures-list/hooks/useFetchTreasures";
import { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import classNames from "classnames";
export default function TreasurePage() {
    const { data: treasuresData, isLoading: loadingTreasures, error: errorLoadingTreasures } = useFetchTreasures();
    const [chosenTreasureCard, setChosenTreasureCard] = useState<null | object>(null);

    const chosenTreasureCardToggle = useToggle();
    console.log(chosenTreasureCardToggle.on);
    const handleChosenTreasureCard = card => setChosenTreasureCard(card);

    return (
        <div>
            <Header searchPlaceHolder={"Search Treasures"} />
            <TreasuresList treasuresData={treasuresData} loadingTreasures={loadingTreasures} errorLoadingTreasures={errorLoadingTreasures} handleChosenTreasureCard={handleChosenTreasureCard} toggleChosenCard={chosenTreasureCardToggle} />
            {
                <div className={classNames("w-full top-0 z-50 absolute transition duration-500 ease-in-out", !chosenTreasureCardToggle.on ? "-translate-y-full" : "-translate-y-0")}>
                    <SelectedTreasureCard chosenTreasureCard={chosenTreasureCard} cardToggle={chosenTreasureCardToggle} />
                </div>
            }
            <Nav />
        </div>
    );
}
