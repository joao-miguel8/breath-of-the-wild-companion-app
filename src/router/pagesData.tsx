import { GiAnimalSkull, GiCampCookingPot, GiOpenTreasureChest } from "react-icons/gi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { routerType } from "../router/router-type/routerType";
import CreaturesPage from "../features/creatures-page/CreaturesPage";
import TreasurePage from "../features/treasures-page/TreasurePage";
import MaterialsPage from "../features/materials-page/MaterialsPage";
import SavedPage from "../features/saved-page/SavedPage";
import LandingPage from "../features/landing-page/LandingPage";

const iconStyling = "text-[1.4rem]";

export const pagesData: routerType[] = [
    { path: "/", element: <LandingPage />, title: "home" },
    { path: "/creatures", element: <CreaturesPage />, title: "creature", icon: <GiAnimalSkull className={iconStyling} /> },
    { path: "/treasures", element: <TreasurePage />, title: "treasure", icon: <GiOpenTreasureChest className={iconStyling} /> },
    { path: "/materials", element: <MaterialsPage />, title: "materials", icon: <GiCampCookingPot className={iconStyling} /> },
    { path: "/saved", element: <SavedPage />, title: "saved", icon: <BsFillBookmarkFill className={iconStyling} /> },
];
