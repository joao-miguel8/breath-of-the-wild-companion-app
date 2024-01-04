// COMPONENTS
import LoadingDataIndicator from "../../components/loading-data-indicator/LoadingDataIndicator";
import MaterialsCard from "../materials-card/MaterialsCard";
// HOOKS
import useFetchMaterials from "./hooks/useFetchMaterials";
import { useEffect, useState } from "react";
// TYPES
import type { materialType } from "./types/materialType";

export default function MaterialsList({ handleChosenMaterial, handleMaterialToggleTrue, searchQuery }: { handleChosenMaterial: (arr: [], chosenIndex: number) => void; handleMaterialToggleTrue: () => void; searchQuery: string }) {
	const fetchMaterials = useFetchMaterials();
	const [filteredList, setFilteredList] = useState<materialType[] | undefined>();
	const { data: materialsData, error: materialsFetchError, isLoading: loadingMaterials } = fetchMaterials;

	useEffect(() => {
		if (materialsData?.data) {
			const filteredData = materialsData?.data?.filter((element: materialType) => element.name.includes(searchQuery));
			setFilteredList(filteredData ?? []);
		}
	}, [searchQuery, materialsData]);

	return (
		<section>
			{loadingMaterials && (
				<div className="mx-20 mt-40 flex gap-2 items-center justify-items-center">
					<LoadingDataIndicator loadingText={"Loading Materials"} />
				</div>
			)}
			{(materialsFetchError as React.ReactNode) && <p className="mx-20 mt-40 text-white">Error Loading Materials</p>}
			<div className="min-[300px]:mx-4 pb-24 mt-24 mx-auto grid gap-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				{filteredList?.map((material: materialType, index: number) => (
					<button
						onClick={() => {
							handleChosenMaterial(materialsData?.data, index);
							handleMaterialToggleTrue();
						}}
						key={material?.name}>
						<MaterialsCard materialInfo={material} />
					</button>
				))}
			</div>
		</section>
	);
}
