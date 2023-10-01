import Link from "next/link";
import Navbar from "./navbar";
import { getAllHeroData } from "../lib/apiRequests";

export default async function Hero() {

    let heorData = await getAllHeroData();

    return (
        <div className="max-w-6xl mx-auto h-screen">
            <div className="">
                <div>
                    {/* Navbar */}
                    <Navbar />
                </div>
                <div className="flex mt-10">
                    {/* Hero section */}
                    <div className="w-1/2 py-10">
                        {/* Text area */}
                        <h1 className="text-5xl font-extrabold leading-snug pr-16">
                            {heorData['title']}
                        </h1>
                        <p className="text-xl my-3">
                            {heorData['description']}
                        </p>
                        <div className="mt-16">
                            <Link className="py-5 px-7 bg-[#20b15a] text-xl text-white font-medium rounded-2xl" href={'/'}>Get Started</Link>
                        </div>
                    </div>
                    <div className="w-1/2">
                        {/* Image area */}
                        <div className="flex gap-2 mb-5">
                            <img className="w-2/3 h-64 rounded-xl" src={heorData['image1']} />
                            <img className="w-1/3 h-64 rounded-xl" src={heorData['image2']} />
                        </div>
                        <div className="flex gap-2">
                            <img className="w-2/5 h-40 rounded-xl" src={heorData['image3']} />
                            <img className="w-3/5 h-40 rounded-xl" src={heorData['image4']} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}