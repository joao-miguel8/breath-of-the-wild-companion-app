import { creatureCardType } from "./types/creatureType";

function CreatureCard({ name, imageURL }: { name: creatureCardType["name"]; imageURL: creatureCardType["imageURL"] }) {
	return (
		<div aria-label="click for more information" className="w-60 relative flex flex-col bg-[#181818] rounded-md overflow-hidden cursor-pointer hover:scale-105 ease-in-out transition duration-300">
			<img src={imageURL} alt={name} className="hover:opacity-60 hover: duration-300" />
			<div className="p-2">
				<h4 className="text-20 text-center text-[#FAF7DC] font-breath">{name}</h4>
			</div>
		</div>
	);
}

export default CreatureCard;
