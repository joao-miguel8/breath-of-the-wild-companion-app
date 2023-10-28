import Nav from "@/components/nav/Nav";
import Header from "@/components/header/Header";
import MaterialsList from "../materials-list/MaterialsList";

export default function MaterialsPage() {
    return (
        <div>
            <Header searchPlaceHolder={"Search Materials"} />
            <MaterialsList />
            <Nav />
        </div>
    );
}
