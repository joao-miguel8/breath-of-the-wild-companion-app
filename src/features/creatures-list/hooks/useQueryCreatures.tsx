import useCustomQuery from "../../../hooks/useCustomQuery";
import { creatureDataType } from "../types/creatureDataType";
export default function useQueryCreatures() {
    const { data, error, isLoading } = useCustomQuery<creatureDataType[]>(
        `https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures
`,
        "creaturesFetch"
    );
    return {
        data,
        isLoading,
        error,
    };
}
