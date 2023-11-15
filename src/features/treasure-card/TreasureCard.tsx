import classNames from "classnames";
export default function TreasureCard({ cardInfo, cardID, isCardContainerHovered }) {
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
            styling: `min-[800px]:-translate-y-[64px] min-[800px]:-translate-x-[104px] min-[800px]:rotate-[-26deg] transition-transform transform transition-transform transform`,
            animationStyle: `min-[800px]:-translate-y-[38px] min-[800px]:-translate-x-[354px] min-[800px]:rotate-[-28deg] transition-transform transform duration-500 `,
        },
        // Third card from the front
        card02: {
            styling: `min-[800px]:-translate-y-[60px] min-[800px]:-translate-x-[76px] min-[800px]:rotate-[-12deg] transition-transform transform`,
            animationStyle: `min-[800px]:-translate-y-[160px] min-[800px]:-translate-x-[198px] min-[800px]:rotate-[-26deg]  transition-transform transform duration-500`,
        },
        // Second card from the front
        card03: {
            styling: `min-[800px]:-translate-y-[42px] min-[800px]:-translate-x-[60px] min-[800px]:rotate-[4deg] transition-transform transform`,
            animationStyle: `min-[800px]:-translate-y-[172px] min-[800px]:-translate-x-[-40px] min-[800px]:rotate-[18deg] transition-transform transform duration-500`,
        },
        // first card from the front
        card04: {
            styling: `transition-transform transform min-[800px]:-translate-y-[20px] min-[800px]:-translate-x-[38px] min-[800px]:rotate-[22deg] transition-transform transform`,
            animationStyle: `min-[800px]:-translate-y-[64px] min-[800px]:-translate-x-[-202px] min-[800px]:rotate-[28deg] transition-transform transform duration-500`,
        },
    };

    const desktopCardGlowHover = `min-[800px]:hover:shadow-[0_20px_50px_rgba(224,203,86,_0.7)] min-[800px]:hover:transition duration-500 ease-in-out `;
    const cardContainerDesktopStyling = `md:w-40 min-[800px]:absolute min-[800px]:top-1/2 min-[400px]:left-1/2 min-[800px]:transform min-[800px]:-translate-x-1/2 -translate-y-1/2`;

    return (
        <div aria-label={cardInfo.name + " card"}>
            <div
                className={classNames(
                    `mt-10 w-[140px] group border rounded-md border-accent bg-neutral-800 ${cardContainerDesktopStyling}  ${desktopCardGlowHover}`,
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
