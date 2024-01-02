import useDisableBodyScroll from "@/hooks/useDisableBodyScroll";
import classNames from "classnames";
import { AiFillCloseCircle } from "react-icons/ai";
import type { ChosenTreasureCardType } from "./types/selectedTreasureCard";

function SelectedTreasureCard({ chosenTreasureCard, cardToggle }: { chosenTreasureCard: ChosenTreasureCardType; cardToggle: () => void }) {
	const { name, image, dlc, drops, description, common_locations } = chosenTreasureCard || {};

	return (
		<div className={classNames("mb-20 h-full w-full sticky top-40 overflow-scroll bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-neutral-900 via-zinc-900 to-stone-800 scrollbar-none scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-200 border-4 border-accent")}>
			{/* close button */}
			<button onClick={() => cardToggle.toggleFalse()} className="p-2 w-full sticky flex justify-end bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-neutral-900 via-zinc-900 to-stone-800">
				<AiFillCloseCircle className="w-12 h-12 text-white hover:text-accent hover:duration-300 ease-in-out" />
			</button>
			{/*image / title / dlc / description / locations / drops */}
			<div className="mt-14 py-4 px-8 flex flex-wrap justify-center items-end text-center">
				{/* image / title / dlc */}
				<div className="flex flex-col">
					<div>
						<h2 className="text-20 font-bold text-white">{name}</h2>
						{dlc ? <span className="text-20 text-white">{dlc}</span> : <span className="text-14 text-accent">no DLC</span>}
					</div>
					<img src={image} alt={name} className="mt-2 w-60 rounded-lg" />
				</div>
				{/* description / locations /drops */}
				<div className="mt-4 pt-4 flex gap-4 max-[700px]:flex-col max-[400px]:items-center justify-around bg-neutral-800">
					{/* description container */}
					<div className="basis-44 overflow-scroll scrollbar-none scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-200 text-center">
						<h5 className="text-18 font-bold text-white">Description</h5>
						<p className="mt-4 text-white">{description}</p>
					</div>
					{/* Common Locations container */}
					<div className="basis-24 text-center">
						<h5 className="text-18 font-bold text-white">Common Locations</h5>
						{common_locations?.map((location, key) => (
							<p key={location} className="mt-4 text-accent">
								{location}
							</p>
						))}
					</div>
					{/* Drops Container */}
					<div className="basis-52 text-center">
						<h5 className="text-18 font-bold text-white">Drops</h5>
						<div className="h-40 overflow-scroll scrollbar-none scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-200">
							{drops?.map((drop, key) => (
								<p key={key} className="mt-4 text-accent">
									{drop}
								</p>
							))}
						</div>
					</div>
					{/* </div> */}
				</div>
			</div>
		</div>
	);
}

export default SelectedTreasureCard;
