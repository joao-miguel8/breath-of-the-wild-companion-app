import useQueryCreatures from "./useQueryCreatures";
import useQueryMonsters from "./useQueryMonsters";

// A custom React hook that combines data from the useQueryCreatures and useQueryMonsters hooks to provide a unified set of creature and monster data. This hook internally leverages useQueryCreatures and useQueryMonsters for data retrieval, and then merges the data from both sources into a single array.

export default function useQueryCreaturesAndMonsters() {
    const { data: creaturesData, isLoading: loadingCreatures, error: errorFetchingCreatures } = useQueryCreatures();

    const { data: monsterData, isLoading: loadingMonsters, error: errorFetchingMonsters } = useQueryMonsters();

    // add both creatures & monsters data together
    const creatures = creaturesData?.data || [];
    const monsters = monsterData?.data || [];
    const creatureAndMonstersData = [...creatures, ...monsters];

    return { data: creatureAndMonstersData, loadingCreatures: loadingCreatures, loadingMonsters: loadingMonsters, errorFetchingMonsters: errorFetchingMonsters, errorFetchingCreatures };
}
