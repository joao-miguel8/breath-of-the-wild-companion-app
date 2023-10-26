//  TypeScript type representing data for creatures as retrieved from the API fetch.

export type creatureDataType = {
    category: string;
    common_locations: Array<string>;
    cooking_effect: string;
    description: string;
    dlc: boolean;
    edible: boolean;
    hearts_recovered: number;
    id: number;
    image: string;
    name: string;
};
