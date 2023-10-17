import { GiAnimalSkull, GiOpenTreasureChest } from "react-icons/gi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { GiCarrot } from "react-icons/gi";
import { routerType } from "@/router-types/routerType";
import CreaturesPage from "@/features/creatures-page/CreaturesPage";
import TreasurePage from "@/features/treasures-page/TreasurePage";
import IngredientsPage from "@/features/ingredients-page/IngredientsPage";
import SavedPage from "@/features/saved-page/SavedPage";
import LandingPage from "@/features/landing-page/LandingPage";

const iconStyling = "text-[1.4rem] text-[#A2A2A2]";

export const pagesData: routerType[] = [
    { path: "/", element: <LandingPage />, title: "home" },
    { path: "/creatures", element: <CreaturesPage />, title: "creature", icon: <GiAnimalSkull className={iconStyling} /> },
    { path: "/treasures", element: <TreasurePage />, title: "treasure", icon: <GiOpenTreasureChest className={iconStyling} /> },
    { path: "/ingredients", element: <IngredientsPage />, title: "ingredients", icon: <GiCarrot className={iconStyling} /> },
    { path: "/saved", element: <SavedPage />, title: "saved", icon: <BsFillBookmarkFill className={iconStyling} /> },
];
