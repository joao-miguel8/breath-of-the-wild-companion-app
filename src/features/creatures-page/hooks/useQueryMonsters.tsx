import useCustomQuery from "@/hooks/useCustomQuery";
import { monsterDataType } from "../types/monsterDataType";

export default function useQueryMonsters() {
    const { data, error, isLoading } = useCustomQuery<monsterDataType[]>(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters`, "monstersFetch");
    return {
        data,
        isLoading,
        error,
    };
}
