import Nav from "@/components/nav/Nav";
import Header from "@/components/header/Header";
import MaterialsList from "../materials-list/MaterialsList";
import ChosenMaterialCard from "../chosen-material-card/ChosenMaterialCard";
import { materialType } from "../materials-list/types/materialType";
import { useState } from "react";
import { useToggle } from "@/hooks/useToggle/useToggle";

export default function MaterialsPage() {
	const [chosenMaterial, setChosenMaterial] = useState<materialType | null>(null);
	const chosenMaterialToggle = useToggle();
	const { on: chosenToggleVal, toggleFalse: handleMaterialToggleFalse, toggleTrue: handleMaterialToggleTrue } = chosenMaterialToggle;

	function handleSelectedChosenMaterial(arr: [], chosenIndex: number) {
		setChosenMaterial(arr[chosenIndex]);
	}

	return (
		<div>
			<Header searchPlaceHolder={"Search Materials"} />
			<ChosenMaterialCard chosenCardInfo={chosenMaterial as materialType} toggleChosenMaterialVal={chosenToggleVal} handleMaterialToggleFalse={handleMaterialToggleFalse} />
			<MaterialsList handleChosenMaterial={handleSelectedChosenMaterial} handleMaterialToggleTrue={handleMaterialToggleTrue} />
			<Nav />
		</div>
	);
}
