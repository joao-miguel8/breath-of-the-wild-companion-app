import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import "@/style/App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </>
    );
}

export default App;
