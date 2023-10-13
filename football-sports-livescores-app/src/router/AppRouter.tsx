import { Route, Routes } from "react-router-dom";
import { routerType } from "./router-type/routerType";
import { pagesData } from "./pagesData";

export const AppRouter = () => {
    const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });
    return <Routes>{pageRoutes}</Routes>;
};
