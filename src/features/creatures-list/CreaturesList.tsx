// COMPONENTS
import LoadingDataIndicator from "../../components/loading-data-indicator/LoadingDataIndicator";
import CreatureCard from "../creature-card/CreatureCard";
import CreatureModal from "../creature-modal/CreatureModal";
import MonsterModal from "../monster-modal/MonsterModal";
// HOOKS
import { useState } from "react";
import { useToggle } from "../../hooks/useToggle/useToggle";
import useQueryCreaturesAndMonsters from "./hooks/useQueryCreaturesAndMonsters";
// TYPES
import type { creatureDataType } from "./types/creatureDataType";
import { monsterDataType } from "./types/monsterDataType";

export default function CreaturesList({ searchQuery }: { searchQuery: string }) {
	const [chosenCard, setChosenCard] = useState<creatureDataType | monsterDataType | null>();

	const [cardType, setCardType] = useState("");
	const { data: creatureAndMonstersData, loadingCreatures: loadingCreatures, loadingMonsters: loadingMonsters, errorFetchingMonsters: errorFetchingMonsters, errorFetchingCreatures: errorFetchingCreatures } = useQueryCreaturesAndMonsters();

	// create custom toggle variables for modals
	const creatureModalToggle = useToggle();
	const monsterModalToggle = useToggle();
	const { on: creatureModalValue, onToggle: onCreatureModalToggle } = creatureModalToggle;
	const { on: monsterModalValue, onToggle: onMonsterModalToggle } = monsterModalToggle;

	// API error handling
	if (errorFetchingCreatures || errorFetchingMonsters) return <h2 className="mt-40 text-40 text-center text-white">Error loading Data</h2>;

	function handleCardModalChosen(index: number) {
		setChosenCard(filteredList[index]);
		setCardType(creatureAndMonstersData[index].category);
		// Trigger our toggle modal depending on category
		if (cardType === "monsters") {
			onMonsterModalToggle();
		} else if (cardType === "creatures") {
			onCreatureModalToggle();
		}
	}

	const isCategoryCreature = cardType === "creatures";
	const isCategoryMonster = cardType === "monsters";
	// list over creature | monster data and filter by search Query list
	const filteredList = creatureAndMonstersData.filter(element => {
		return element.name.includes(searchQuery);
	});

	const sortByAlphabet = (arr: creatureDataType[] | monsterDataType[]) =>
		arr.sort((a, b) => {
			if (a.name > b.name) return 1;
			if (a.name < b.name) return -1;
			return 0;
		});

	return (
		<>
			{isCategoryMonster && monsterModalValue && chosenCard && <MonsterModal toggleModal={onMonsterModalToggle} chosenCardInfo={chosenCard as monsterDataType} />}
			{isCategoryCreature && creatureModalValue && <CreatureModal toggleModal={onCreatureModalToggle} chosenCardInfo={chosenCard as creatureDataType} />}

			<section>
				{loadingCreatures || loadingMonsters ? (
					<div className="flex justify-center mt-40">
						<LoadingDataIndicator loadingText={"Loading Creatures"} />
					</div>
				) : (
					<div className={`mb-24 w-fit mx-auto gap-4 mt-40 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
						{sortByAlphabet(filteredList)?.map((creature: creatureDataType | monsterDataType, index: number) => {
							return (
								<button onClick={() => handleCardModalChosen(index)}>
									<CreatureCard name={creature.name} imageURL={creature.image} />
								</button>
							);
						})}
					</div>
				)}
			</section>
		</>
	);
}
