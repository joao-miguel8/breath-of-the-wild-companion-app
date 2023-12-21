import TreasureCard from "../treasure-card/TreasureCard";
import { treasureCardType } from "../treasure-card/types/treasureCardType";
import useMouseOverDetection from "@/hooks/useMouseOverDetection";
import classNames from "classnames";

export default function TreasuresList({ treasuresData, loadingTreasures, errorLoadingTreasures, handleChosenTreasureCard, toggleChosenCard }) {
    const treasureDataSorted = treasuresData?.data.sort((a: number, b: number) => a.id - b.id);

    const cardHoverDetect = useMouseOverDetection();
    const { chosenEle: CardsContainer, isHovered: isCardsContainerHovered } = cardHoverDetect;

    const desktopStyling = `mt-40 h-[420px] relative min-[400px]:mx-auto top-20`;
    const mobileStyling = "flex flex-wrap justify-center";

    return (
        <>
            <div ref={CardsContainer} className={classNames(`${mobileStyling} ${desktopStyling}`)}>
                {treasureDataSorted?.map((treasure: treasureCardType, i: number) => {
                    return <TreasureCard key={i} cardID={treasure?.id} cardInfo={treasure} isCardContainerHovered={isCardsContainerHovered} handleChosenTreasureCard={handleChosenTreasureCard} toggleChosenCard={toggleChosenCard} />;
                })}
            </div>
        </>
    );
}
