import useCustomQuery from "../../../hooks/useCustomQuery";

/*
  A custom React hook designed to facilitate the querying of creature data from an external API, this hook leverages the useCustomQuery hook to fetch and manage data retrieval. This hook returns an object containing the query results including:
 {`data`: The fetched creature data, which is an array of `creatureDataType` objects. `isLoading`: A boolean indicating whether the query is in progress. `error`: Any error that may occur during the query.}
*/

export default function useQueryCreatures() {
	const { data, error, isLoading } = useCustomQuery(
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
