import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <>
            <div className="mt-40 flex flex-col gap-4 items-center">
                <h2 className="text-40 font-poppins ">404 Error</h2>
                <p className="font-poppins">You're Search doesn't exist</p>
                <Link to={"/"} className="p-2 bg-[#4C1D52] text-white rounded-xl">
                    Back Home
                </Link>
            </div>
        </>
    );
}
