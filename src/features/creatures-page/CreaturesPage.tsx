// COMPONENTS
import Nav from "@/components/nav/Nav";
import Header from "@/components/header/Header";
import CreaturesList from "../creatures-list/CreaturesList";
// HOOKS
import { useState } from "react";

export default function CreaturesPage() {
	const [searchQuery, setSearchQuery] = useState("");
	return (
		<>
			<Header searchPlaceHolder={"Search Creatures"} handleSearchQuery={searchVal => setSearchQuery(searchVal)} />
			<CreaturesList searchQuery={searchQuery} />
			<Nav />
		</>
	);
}
