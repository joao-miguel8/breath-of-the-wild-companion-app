import useQueryCreatures from "./useQueryCreatures";
import useQueryMonsters from "./useQueryMonsters";

export default function useQueryCreaturesAndMonsters() {
    const { data: creaturesData, isLoading: loadingCreatures, error: errorFetchingCreatures } = useQueryCreatures();

    const { data: monsterData, isLoading: loadingMonsters, error: errorFetchingMonsters } = useQueryMonsters();

    // add both creatures & monsters data together
    const creatures = creaturesData?.data || [];
    const monsters = monsterData?.data || [];
    const creatureAndMonstersData = [...creatures, ...monsters];

    return { data: creatureAndMonstersData, loadingCreatures: loadingCreatures, loadingMonsters: loadingMonsters, errorFetchingMonsters: errorFetchingMonsters, errorFetchingCreatures };
}
