import useCustomQuery from "@/hooks/useCustomQuery";

export default function useFetchTreasures() {
    const { data, error, isLoading } = useCustomQuery("https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure", "treasureData");
    return { data, error, isLoading };
}
