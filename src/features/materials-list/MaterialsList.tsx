import LoadingDataIndicator from "../../components/loading-data-indicator/LoadingDataIndicator";
import MaterialsCard from "../materials-card/MaterialsCard";
import useFetchMaterials from "./hooks/useFetchMaterials";
import { materialType } from "./types/materialType";

export default function MaterialsList() {
    const fetchMaterials = useFetchMaterials();
    const { data: materialsData, error: materialsFetchError, isLoading: loadingMaterials } = fetchMaterials;

    return (
        <section>
            {loadingMaterials && (
                <div className="mx-20 mt-40 flex gap-2 items-center justify-items-center">
                    <LoadingDataIndicator loadingText={"Loading Materials"} />
                </div>
            )}
            {(materialsFetchError as React.ReactNode) && <p className="mx-20 mt-40 text-white">Error Loading Materials</p>}
            <div className="min-[300px]:mx-4 pb-24 mt-24 mx-auto grid gap-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {materialsData?.data?.map((material: materialType, index: number) => {
                    return <MaterialsCard key={index} materialInfo={material} />;
                })}
            </div>
        </section>
    );
}
