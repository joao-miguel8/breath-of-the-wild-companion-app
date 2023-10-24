import { useState } from "react";
import LoadingDataIndicator from "../../components/loading-data-indicator/LoadingDataIndicator";
import CreatureCard from "../creature-card/CreatureCard";
import { creatureDataType } from "./types/creatureDataType";
import useQueryCreaturesAndMonsters from "./hooks/useQueryCreaturesAndMonsters";
import CreatureModal from "../creature-modal/CreatureModal";
import { useToggle } from "../../hooks/useToggle";

export default function CreaturesList() {
    const [chosenCard, setChosenCard] = useState<object>({});
    const [cardType, setCardType] = useState<string>("");
    const { data: creatureAndMonstersData, loadingCreatures: loadingCreatures, loadingMonsters: loadingMonsters, errorFetchingMonsters: errorFetchingMonsters, errorFetchingCreatures: errorFetchingCreatures } = useQueryCreaturesAndMonsters();

    const creatureModalToggle = useToggle(true);
    const [creatureModalValue, onCreatureModalToggle] = creatureModalToggle;

    // API Error conditions
    if (errorFetchingCreatures || errorFetchingMonsters) return <h2 className="mt-40 text-40 text-center text-white">Error loading Data</h2>;

    function handleCardModalChosen(index: number) {
        setChosenCard(creatureAndMonstersData[index]);
        setCardType(creatureAndMonstersData[index].category);
        onCreatureModalToggle();
    }

    const isCategoryCreature = cardType === "creatures";
    const isCategoryMonster = cardType === "monsters";

    return (
        <>
            {creatureModalValue && (
                <>
                    {isCategoryMonster && console.log("is monster")}
                    {isCategoryCreature && <CreatureModal toggleModal={onCreatureModalToggle} chosenCardInfo={chosenCard} />}
                </>
            )}
            <section>
                {loadingCreatures || loadingMonsters ? (
                    <div className="flex justify-center mt-40">
                        <LoadingDataIndicator loadingText={"Loading Creatures"} />
                    </div>
                ) : (
                    <div className={`w-fit mx-auto gap-4 mt-40 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
                        {creatureAndMonstersData?.map((creature: creatureDataType, index: number) => {
                            return (
                                <button onClick={() => handleCardModalChosen(index)}>
                                    <CreatureCard key={index} name={creature.name} imageURL={creature.image} />
                                </button>
                            );
                        })}
                    </div>
                )}
            </section>
        </>
    );
}
