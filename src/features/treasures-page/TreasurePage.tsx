// 3RD PARTY LIBRARIES
import classNames from "classnames";
// COMPONENTS
import Nav from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import TreasuresList from "../treasures-list/TreasuresList";
import SelectedTreasureCard from "../selected-treasure-card/SelectedTreasureCard";
// HOOKS
import { useState } from "react";
import useFetchTreasures from "../treasures-list/hooks/useFetchTreasures";
import { useToggle } from "../../hooks/useToggle/useToggle";
// TYPES
import type { ChosenTreasureCardType } from "../selected-treasure-card/types/selectedTreasureCard";

export default function TreasurePage() {
	const { data: treasuresData, isLoading: loadingTreasures } = useFetchTreasures();
	const [chosenTreasureCard, setChosenTreasureCard] = useState<ChosenTreasureCardType | undefined>();

	const chosenTreasureCardToggle = useToggle();

	const handleChosenTreasureCard = (card: ChosenTreasureCardType) => setChosenTreasureCard(card);

	return (
		<div>
			<Header searchPlaceHolder={"Search Treasures"} />
			<TreasuresList treasuresData={treasuresData?.data} loadingTreasures={loadingTreasures} handleChosenTreasureCard={handleChosenTreasureCard} toggleChosenCard={chosenTreasureCardToggle} />
			{
				<div className={classNames("w-full top-0 z-50 absolute transition duration-500 ease-in-out", !chosenTreasureCardToggle.on ? "-translate-y-full" : "-translate-y-0")}>
					<SelectedTreasureCard chosenTreasureCard={chosenTreasureCard} cardToggle={chosenTreasureCardToggle} />
				</div>
			}
			<Nav />
		</div>
	);
}
