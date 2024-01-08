import classNames from "classnames";
import { treasureCardType } from "./types/treasureCardType";
import { UseToggleType } from "@/hooks/useToggle/UseToggleType";
import { ChosenTreasureCardType } from "../selected-treasure-card/types/selectedTreasureCard";

export default function TreasureCard({
	cardInfo,
	cardID,
	isCardContainerHovered,
	handleChosenTreasureCard,
	toggleChosenCard,
}: {
	cardInfo: treasureCardType;
	cardID: number;
	isCardContainerHovered: boolean;
	handleChosenTreasureCard: (cardInfo: ChosenTreasureCardType | treasureCardType) => void;
	toggleChosenCard: UseToggleType;
}) {
	function cardStyling(cardID: number, chosenID: number, styling: string, animationStyle?: string) {
		if (cardID === chosenID) {
			return [styling, animationStyle];
		} else {
			return "";
		}
	}

	const cardStyles = {
		// Last card from the front
		card01: {
			styling: `min-[800px]:-translate-y-[64px] min-[800px]:-translate-x-[104px] min-[800px]:rotate-[-26deg] `,
			animationStyle: `min-[800px]:-translate-y-[38px] min-[800px]:-translate-x-[354px] min-[800px]:rotate-[-28deg] `,
		},
		// Third card from the front
		card02: {
			styling: `min-[800px]:-translate-y-[60px] min-[800px]:-translate-x-[76px] min-[800px]:rotate-[-12deg] `,
			animationStyle: `min-[800px]:-translate-y-[160px] min-[800px]:-translate-x-[198px] min-[800px]:rotate-[-26deg] `,
		},
		// Second card from the front
		card03: {
			styling: `min-[800px]:-translate-y-[42px] min-[800px]:-translate-x-[60px] min-[800px]:rotate-[4deg]`,
			animationStyle: `min-[800px]:-translate-y-[172px] min-[800px]:-translate-x-[-40px] min-[800px]:rotate-[18deg] `,
		},
		// first card from the front
		card04: {
			styling: `transition-transform transform min-[800px]:-translate-y-[20px] min-[800px]:-translate-x-[38px] min-[800px]:rotate-[22deg] `,
			animationStyle: `min-[800px]:-translate-y-[64px] min-[800px]:-translate-x-[-202px] min-[800px]:rotate-[28deg]`,
		},
	};

	const cardGlowHover = `min-[800px]:hover:shadow-[0_20px_50px_rgba(224,203,86,_0.7)] min-[800px]:hover:transition hover:border-4 duration-500 ease-in-out `;
	const cardContainerDesktopStyling = `border-4 md:w-40 min-[800px]:absolute min-[800px]:top-1/2 min-[400px]:left-1/2 min-[800px]:transform min-[800px]:-translate-x-1/2 -translate-y-1/2 `;

	return (
		<div onClick={() => toggleChosenCard.toggleTrue()} aria-label={cardInfo.name + " card"} className="group">
			<div
				onClick={() => handleChosenTreasureCard(cardInfo)}
				className={classNames(
					`mt-10 w-[140px] border-4 border-transparent rounded-md hover:border-accent bg-neutral-800 ${cardContainerDesktopStyling}  ${cardGlowHover}`,
					// last card from back
					isCardContainerHovered ? cardStyling(cardID, 386, cardStyles.card01.animationStyle) : cardStyling(cardID, 386, cardStyles.card01.styling),
					// third card from back
					isCardContainerHovered ? cardStyling(cardID, 387, cardStyles.card02.animationStyle) : cardStyling(cardID, 387, cardStyles.card02.styling),
					// second card from back
					isCardContainerHovered ? cardStyling(cardID, 388, cardStyles.card03.animationStyle) : cardStyling(cardID, 388, cardStyles.card03.styling),
					// first card from back
					isCardContainerHovered ? cardStyling(cardID, 389, cardStyles.card04.animationStyle) : cardStyling(cardID, 389, cardStyles.card04.styling)
				)}>
				<h3 className="p-2 text-white text-14 text-center truncate ">{cardInfo?.name}</h3>
				<img src={cardInfo?.image} alt={cardInfo?.name} className="w-full" />
			</div>
		</div>
	);
}
