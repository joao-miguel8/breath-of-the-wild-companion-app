// 3RD PARTY LIBRARY
import { AiFillCloseCircle, AiFillHeart } from "react-icons/ai";
// HOOKS
import useDisableBodyScroll from "../../hooks/useDisableBodyScroll";
import useHandleOverlayModalClick from "../../hooks/useHandleOverlayModalClick";
import { renderHeartsRecovered } from "@/util/renderHeartsRecovered";
// TYPES
import type { creatureDataType } from "../creatures-list/types/creatureDataType";
renderHeartsRecovered;

export default function CreatureModal({ chosenCardInfo, toggleModal }: { chosenCardInfo: creatureDataType; toggleModal: () => void }) {
	// Disable body scroll when modal window is open
	useDisableBodyScroll();

	const handleOverlayModalClick = useHandleOverlayModalClick(toggleModal);

	const heartsRecovered = renderHeartsRecovered(chosenCardInfo?.hearts_recovered, <AiFillHeart color={"red"} size={"1.5rem"} />);
	const capitalizeCookingEffect = () => {
		if (chosenCardInfo.cooking_effect) {
			const cookingEffect = chosenCardInfo.cooking_effect;
			const restOfWord = cookingEffect.slice(1);
			const firstChar = cookingEffect[0].toUpperCase();
			return firstChar.concat(restOfWord);
		}
		return "";
	};
	const cookingEffect = capitalizeCookingEffect();

	return (
		<>
			{
				// overlay div
				<div onClick={handleOverlayModalClick.handleOverlayClick} className="p-2 w-screen h-screen z-50 fixed top-0 left-0 backdrop-blur-sm flex justify-center">
					{/* ----------------- */}
					<div ref={handleOverlayModalClick.modalRef} className="mt-10 mx-10 h-fit sm:w-[500px] border-2 border-accent bg-[#1f1f1f] rounded-sm">
						{/* header div */}
						<div className="mx-2 my-2 flex justify-end">
							<button onClick={() => toggleModal()}>
								<AiFillCloseCircle className="w-8 h-8 text-white hover:text-accent hover:duration-300 ease-in-out" />
							</button>
						</div>
						<div className="px-4 h-[450px] sm:h-[400px] md:h-[500px] overflow-scroll min-w-[300px]:overflow-none scrollbar-thin scrollbar-thumb-accent scrollbar-track-none">
							{/* category/title/img section */}
							<div className="mt-10 flex flex-col">
								<span className="block text-14 font-medium uppercase text-center text-white">Creature</span>
								<h3 className="text-24 font-semibold text-center text-white">{chosenCardInfo?.name}</h3>
								<img src={chosenCardInfo?.image} alt={`image of ${chosenCardInfo?.name}`} className="mt-4 self-center w-[180px] rounded-md" />
							</div>
							{/* text content */}
							<div className="max-h-[60vh]">
								<div className="mt-4">
									{/* description section */}
									<h5 className="font-bold text-white">Description</h5>
									<p className="mt-2 text-16 text-white">{chosenCardInfo?.description}</p>
								</div>
								{/* common locations / additional info section */}
								<div>
									<div className="mt-12 flex gap-4 justify-between">
										{/* common locations */}
										<div>
											<h3 className="mb-2 text-14 font-bold text-white">Common Locations</h3>
											<div className="text-18 flex flex-wrap ">
												{chosenCardInfo?.common_locations?.map((location: string, index: number) => {
													const lastListItem = index === chosenCardInfo.common_locations.length - 1;
													return (
														<p key={index} className="text-16 text-white">
															{location}
															{!lastListItem && <span className="inline-block mx-2 w-2 h-2 bg-accent rounded-md"></span>}
														</p>
													);
												})}
											</div>
										</div>
										{/* additional info */}
										<div>
											<h3 className="mb-2 text-14 font-bold text-white">Additional Info</h3>
											<div className="flex items-start gap-4">
												{chosenCardInfo?.edible ? <p className="text-accent">Edible</p> : <p className="text-white italic">not edible</p>}
												{chosenCardInfo.dlc ? <p className="text-[#FAF7DC]">DLC</p> : <p className="text-white italic">not DLC</p>}
											</div>
										</div>
									</div>
									{/* Hearts Recovered / Cooking Effect section */}
									<div className="mt-4 flex justify-between">
										<div>
											<h3 className="mb-2 text-14 font-bold text-white">Hearts Recovered</h3>
											<div className="flex">
												{heartsRecovered?.map((heart, index) => {
													return <span key={index}>{heart}</span>;
												})}
											</div>
										</div>
										<div>
											<h3 className="text-14 font-bold text-white">Cooking Effect</h3>
											{chosenCardInfo?.cooking_effect ? <p className="text-[#e0cb56]">{cookingEffect}</p> : <p className="text-white italic">no cooking effect</p>}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</>
	);
}
