//  TypeScript type representing data for monsters as retrieved from the API fetch.

export type monsterDataType = {
    category: string;
    common_locations: Array<string>;
    description: string;
    dlc: boolean;
    drops: Array<string>;
    id: number;
    image: string;
    name: string;
};
