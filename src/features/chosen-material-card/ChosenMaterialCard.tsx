import { renderHeartsRecovered } from "@/util/renderHeartsRecovered";
import { materialType } from "../materials-list/types/materialType";
import { AiFillCloseCircle, AiFillHeart } from "react-icons/ai";
import classNames from "classnames";
import useDisableBodyScroll from "@/hooks/useDisableBodyScroll";

export default function ChosenMaterialCard({ chosenCardInfo, toggleChosenMaterialVal, handleMaterialToggleFalse }: { chosenCardInfo: materialType; toggleChosenMaterialVal: boolean; handleMaterialToggleFalse: () => void }) {
    const { category, common_locations, cooking_effect, description, dlc, hearts_recovered, id, image, name } = chosenCardInfo ?? {};

    // disable background scrolling when chosenMaterialCard is chosen
    if (toggleChosenMaterialVal) {
        useDisableBodyScroll();
    } else {
        document.body.style.overflow = "scroll";
    }

    // render hearts for each chosenMaterial card
    const heartsRecovered = renderHeartsRecovered(hearts_recovered, <AiFillHeart color={"red"} className="text-[1.4rem]  sm:text-[1.8rem]" />);

    return (
        <>
            {
                <section
                    className={classNames(
                        `pb-60 overflow-auto w-full h-full z-50 p-4 fixed top-0 mt-20 rounded-sm bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-neutral-900 via-zinc-900 to-stone-800 transition ease-in-out duration-300`,
                        toggleChosenMaterialVal ? "translate-y-0" : "translate-y-full"
                    )}>
                    <button
                        onClick={() => {
                            handleMaterialToggleFalse();
                        }}
                        className="w-full flex justify-end">
                        <AiFillCloseCircle className="w-12 h-12 lg:mr-10  text-white hover:text-accent hover:duration-300 ease-in-out" />
                    </button>
                    {/* inner scroll container */}
                    <div className="mx-auto overflow-scroll md:w-full scrollbar-none scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-200">
                        {/* name / hearts container / dlc container*/}
                        <div>
                            {/* image / name / hearts container container */}
                            <div className="mt-6 flex flex-col items-center">
                                {/* material image */}
                                <img src={image} alt={name} className=" w-32 rounded-full md:w-40 " />
                                <h2 className="w-full text-center mt-8 text-20 sm:text-32  text-white font-bold self-start">{name}</h2>
                                <div className="mt-4 flex items-center">
                                    {heartsRecovered.map((heart, index) => {
                                        return <span key={index}>{heart}</span>;
                                    })}
                                </div>
                                {dlc ? <span className="mt-4 inline-block text-accent md:text-20">{dlc}</span> : <span className="mt-4 inline-block text-white italic md:text-20">Not DLC</span>}
                            </div>
                        </div>
                        <p className="text-center mt-4 text-18 text-white lg:text-24">{description}</p>
                        {/* cooking effect / common locations container */}
                        <div className="mx-auto mt-12 md:w-[800px] flex gap-2 justify-between">
                            {cooking_effect ? (
                                <div>
                                    <h4 className="font-bold text-white md:text-24">Cooking Effect</h4>
                                    <p className="text-accent md:text-18">{cooking_effect}</p>
                                </div>
                            ) : (
                                <div>
                                    <h4 className="font-bold text-white md:text-24">Cooking Effect</h4>
                                    <p className="text-white italic md:text-20">No Cooking Effect</p>
                                </div>
                            )}
                            {common_locations ? (
                                <div>
                                    <h4 className="font-bold text-white md:text-24">Locations Found</h4>
                                    <div className="flex flex-col gap-2 ">
                                        {common_locations?.map((location, index) => {
                                            return (
                                                <p key={index} className="text-accent md:text-18">
                                                    {location}
                                                </p>
                                            );
                                        })}
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h4 className="font-bold text-white">Locations Found</h4>
                                    <p className="text-white italic md:text-20">No Locations Found</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            }
        </>
    );
}
