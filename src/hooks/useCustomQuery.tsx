import { useQuery } from "react-query";
import axios from "axios";

const fetchQuery = async (URL: string) => {
    const response = await axios.get(URL);
    return response.data;
};

export default function useCustomQuery(URL: string, cacheID: string) {
    const { data, error, isLoading } = useQuery(cacheID, () => fetchQuery(URL));
    return { data, error, isLoading };
}
