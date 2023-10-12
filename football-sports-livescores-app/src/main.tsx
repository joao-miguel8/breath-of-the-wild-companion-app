import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "./features/errorPage/ErrorPage.tsx";
import MatchesPage from "./features/matchesPage/MatchesPage.tsx";
import LeaguesPage from "./features/leaguesPage/LeaguesPage.tsx";
import StatsPage from "./features/statsPage/StatsPage.tsx";
import NewsPage from "./features/newsPage/NewsPage.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/matches" element={<MatchesPage />} />
            <Route path="/leagues" element={<LeaguesPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/news" element={<NewsPage />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);
