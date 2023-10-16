import Nav from "@/components/nav/Nav";
import Header from "@/components/header/Header";

export default function IngredientsPage() {
    return (
        <div className="h-screen bg-[url(http://www.zelda.com/breath-of-the-wild/assets/img/patterns/black.jpg)] center top">
            <Header searchPlaceHolder={"Search Ingredients"} />
            <Nav />
        </div>
    );
}
