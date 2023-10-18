import LoadingDataIndicator from "../../components/loading-data-indicator/LoadingDataIndicator";
import CreatureCard from "../creature-card/CreatureCard";
import useQueryCreatures from "./hooks/useQueryCreatures";
import { creatureDataType } from "./types/creatureDataType";

export default function CreaturesList() {
    const { data: creaturesData, isLoading: loadingCreatures, error: errorFetchingCreatures } = useQueryCreatures();

    if (errorFetchingCreatures) return <h2 className="pt-40 text-40 text-center text-white">Error loading Creatures</h2>;

    return (
        <section>
            {loadingCreatures ? (
                <div className="flex justify-center pt-40">
                    <LoadingDataIndicator loadingText={"Loading Creatures"} />
                </div>
            ) : (
                <div className={`w-fit mx-auto gap-4 pt-40 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
                    {creaturesData.data?.map((creature: creatureDataType, index: number) => {
                        return (
                            <div>
                                <CreatureCard key={index} name={creature.name} imageURL={creature.image} />
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}
