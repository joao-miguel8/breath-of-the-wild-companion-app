import { MdExplore } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { GiCarrot } from "react-icons/gi";
import { Navigate } from "react-router-dom";
import { routerType } from "@/router-types/routerType";
import ExplorePage from "@/features/explore-page/ExplorePage";
import CookBookPage from "@/features/cookbook-page/CookBookPage";
import IngredientsPage from "@/features/ingredients-page/IngredientsPage";
import SavedPage from "@/features/saved-page/SavedPage";

const iconStyling = "text-[1.4rem] text-[#A2A2A2]";

export const pagesData: routerType[] = [
    { path: "/", element: <Navigate to={"/explore"} />, title: "home" },
    { path: "/explore", element: <ExplorePage />, title: "explore", icon: <MdExplore className={iconStyling} /> },
    { path: "/cookbook", element: <CookBookPage />, title: "cookbook", icon: <FaBookOpen className={iconStyling} /> },
    { path: "/ingredients", element: <IngredientsPage />, title: "ingredients", icon: <GiCarrot className={iconStyling} /> },
    { path: "/saved", element: <SavedPage />, title: "saved", icon: <BsFillBookmarkFill className={iconStyling} /> },
];
