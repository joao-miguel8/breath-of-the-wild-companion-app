import { useQuery } from "react-query";
import axios from "axios";

// This hook is designed to simplify the process of making queries with React Query. This hook wraps around React Query's `useQuery` and allows you to fetch data using axios from a specified URL and cache the results using a unique cache ID.

const fetchQuery = async (URL: string) => {
	const response = await axios.get(URL);
	return response.data;
};

export default function useCustomQuery(URL: string, cacheID: string) {
	const { data, error, isLoading } = useQuery(cacheID, () => fetchQuery(URL));
	return { data, error, isLoading };
}
