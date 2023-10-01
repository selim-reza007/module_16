export default function FearutedProject() {

    return (
        <div className="w-full min-h-screen py-20 bg-[#f0fdf4]">
            <div className="max-w-7xl mx-auto">
                {/* container */}
                <div className="w-full h-auto pb-20">
                    {/* text container */}
                    <h2 className="my-pooping-fonts uppercase text-[#20b15a]  text-xl font-medium mb-5">Featured Project</h2>
                    <p className="text-3xl font-semibold leading-relaxed">
                        We provide the Perfect Solution<br /> to your business growth
                    </p>
                </div>
                <div className="w-full min-h-[500px] flex gap-5">
                    {/* image container */}
                    <div className="w-1/2">
                        {/* boro image */}
                        <img className="h-[85%] rounded-2xl" src="./images/projects/boro.png" />
                        <div className="">
                            <p className="my-pooping-fonts text-sm text-[#2E3E5C] mt-5 mb-3">App Design - June 20, 2022</p>
                            <p className="my-pooping-fonts text-2xl font-semibold text-slate-800">App Redesign</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-5">
                        {/* choto image container */}

                        <div className="flex gap-8">
                            <div>
                                {/* choto image */}
                                <img className="w-72 h-44 rounded-2xl" src="./images/projects/topleft.png" />
                                <div className="my-3 leading-10">
                                    <p className="my-pooping-fonts text-slate-500">App Design - June 20, 2022</p>
                                    <p className="my-pooping-fonts text-lg font-bold text-slate-700">
                                        Redesign channel website landng page
                                    </p>
                                </div>
                            </div>

                            <div>
                                {/* choto image */}
                                <img className="w-72 h-44 rounded-2xl" src="./images/projects/topright.png" />
                                <div className="my-3 leading-10">
                                    <p className="my-pooping-fonts text-slate-500">App Design - June 20, 2022</p>
                                    <p className="my-pooping-fonts text-lg font-bold text-slate-700">
                                        Redesign channel website landng page
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-8">
                            <div>
                                {/* choto image */}
                                <img className="w-72 h-44 rounded-2xl" src="./images/projects/bottomleft.png" />
                                <div className="my-3 leading-10">
                                    <p className="my-pooping-fonts text-slate-500">App Design - June 20, 2022</p>
                                    <p className="my-pooping-fonts text-lg font-bold text-slate-700">
                                        Redesign channel website landng page
                                    </p>
                                </div>
                            </div>

                            <div>
                                {/* choto image */}
                                <img className="w-72 h-44 rounded-2xl" src="./images/projects/bottomright.png" />
                                <div className="my-3 leading-10">
                                    <p className="my-pooping-fonts text-slate-500">App Design - June 20, 2022</p>
                                    <p className="my-pooping-fonts text-lg font-bold text-slate-700">
                                        Redesign channel website landng page
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}