import TreasureCard from "../treasure-card/TreasureCard";
import useFetchTreasures from "./hooks/useFetchTreasures";
import { treasureCardType } from "../treasure-card/types/treasureCardType";
import useMouseOverDetection from "@/hooks/useMouseOverDetection";
import classNames from "classnames";
export default function TreasuresList() {
    const { data: treasuresData, isLoading: loadingTreasures, error: errorLoadingTreasures } = useFetchTreasures();

    const treasureDataSorted = treasuresData?.data.sort((a: number, b: number) => a.id - b.id);

    const cardHoverDetect = useMouseOverDetection();
    const { chosenEle: CardsContainer, isHovered: isCardsContainerHovered } = cardHoverDetect;

    const desktopStyling = `relative min-[900px]:w-[800px] min-[400px]:mx-auto top-20`;
    const mobileStyling = `flex items-center justify-center flex-wrap gap-2`;
    return (
        <>
            <div ref={CardsContainer} className={classNames(`mt-24 pt-20 pb-80 ${mobileStyling} ${desktopStyling}`)}>
                {treasureDataSorted?.map((treasure: treasureCardType) => {
                    return <TreasureCard cardID={treasure?.id} cardInfo={treasure} isCardContainerHovered={isCardsContainerHovered} />;
                })}
            </div>
        </>
    );
}
