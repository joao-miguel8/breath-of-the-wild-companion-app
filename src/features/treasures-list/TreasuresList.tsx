// 3RD PARTY LIBRARIES
import classNames from "classnames";
// COMPONENTS
import LoadingDataIndicator from "@/components/loading-data-indicator/LoadingDataIndicator";
import TreasureCard from "../treasure-card/TreasureCard";
// HOOKS
import useMouseOverDetection from "@/hooks/useMouseOverDetection";
// TYPES
import type { ChosenTreasureCardType } from "../selected-treasure-card/types/selectedTreasureCard";
import type { treasureCardType } from "../treasure-card/types/treasureCardType";
import type { UseToggleType } from "@/hooks/useToggle/UseToggleType";

export default function TreasuresList({
	treasuresData,
	loadingTreasures,
	handleChosenTreasureCard,
	toggleChosenCard,
}: {
	treasuresData: treasureCardType[];
	loadingTreasures: boolean;
	handleChosenTreasureCard: (card: treasureCardType | ChosenTreasureCardType) => void;
	toggleChosenCard: UseToggleType;
}) {
	const cardHoverDetect = useMouseOverDetection();
	const { chosenEle: CardsContainer, isHovered: isCardsContainerHovered } = cardHoverDetect;

	const desktopStyling = `pt-20 h-[420px] relative min-[400px]:mx-auto top-20`;
	const mobileStyling = "flex flex-wrap justify-center";

	return (
		<>
			{loadingTreasures ? (
				<div className="flex justify-center mt-40">
					<LoadingDataIndicator loadingText={"Loading Treasures"} />
				</div>
			) : (
				<div ref={CardsContainer} className={classNames(`${mobileStyling} ${desktopStyling}`)}>
					{treasuresData?.map((treasure: treasureCardType, i: number) => {
						return <TreasureCard key={i} cardID={treasure?.id} cardInfo={treasure} isCardContainerHovered={isCardsContainerHovered} handleChosenTreasureCard={handleChosenTreasureCard} toggleChosenCard={toggleChosenCard} />;
					})}
				</div>
			)}
		</>
	);
}
