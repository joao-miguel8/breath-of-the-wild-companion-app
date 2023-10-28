import useCustomQuery from "../../../hooks/useCustomQuery";

export default function useFetchMaterials() {
    const { data, isLoading, error } = useCustomQuery("https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials", "materialsList");
    return {
        data,
        error,
        isLoading,
    };
}
