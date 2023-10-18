import { creatureCardType } from "./types/creatureType";

export default function CreatureCard({ name, imageURL, key }: creatureCardType) {
    return (
        <div aria-label="click for more information" key={key} className="w-60 flex flex-col bg-[#181818] rounded-md overflow-hidden cursor-pointer hover:scale-105 ease-in-out transition duration-300">
            <img src={imageURL} alt={name} />
            <div className="p-2">
                <h4 className="text-20 text-center text-[#FAF7DC]">{name}</h4>
            </div>
        </div>
    );
}
