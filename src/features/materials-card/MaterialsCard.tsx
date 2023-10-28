import { AiOutlineInfoCircle } from "react-icons/ai";
import { materialType } from "../materials-list/types/materialType";

export default function MaterialsCard({ materialInfo }: { materialInfo: materialType }) {
    const { name, image } = materialInfo;

    return (
        <div className="py-2 px-4 cursor-pointer flex items-center justify-between hover:scale-95 ease-in-out transition duration-300 bg-[#181818] group rounded-sm">
            <div className="flex gap-4 items-center ">
                <img src={image} alt={name} className="rounded-full w-24 sm:w-20  group-hover:opacity-30 transition duration-300" />
                <h2 className="text-22 sm:text-18 md:text-16 text-accent truncate group-hover:opacity-100">{name}</h2>
            </div>
            <AiOutlineInfoCircle size={"2rem"} className="text-accent" />
        </div>
    );
}
