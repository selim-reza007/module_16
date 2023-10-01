import { getAllServicesData } from "../lib/apiRequests";

export default async function OurServices() {

    let servicesData = await getAllServicesData();

    return (
        <div className="min-w-full min-h-screen bg-white py-16">
            <div className="max-w-6xl mx-auto">
                <div className="w-full">
                    {/* text content */}
                    <h1 className="my-pooping-fonts text-[#20B15A] text-xl font-medium uppercase break-words leading-loose">
                        Our All Services
                    </h1>
                    <p className="my-pooping-fonts text-3xl font-semibold break-words leading-snug my-2">
                        We Provide BestWeb design<br /> services
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 gap-10 pt-10">
                    {/* card content */}

                    {
                        servicesData.map((sd, i) => {
                            return (
                                <div key={i} className="rounded-2xl shadow-2xl">
                                    {/* single card */}
                                    <div className="px-6 py-10">
                                        <div>
                                            {/* text content */}
                                            <p className="my-pooping-fonts text-2xl font-semibold uppercase break-words">{sd['title']}</p>
                                            <p className="my-pooping-fonts text-[#9D9D9D] text-base font-normal capitalize break-words mt-6 mb-10">
                                                {sd['des']}
                                            </p>
                                        </div>
                                        <div className="w-full">
                                            {/* image content */}
                                            <div className="flex gap-8 mb-2">
                                                <img className="h-40 w-2/3 rounded-xl" src={sd['image1']} />
                                                <img className="h-40 w-1/3 rounded-xl" src={sd['image2']} />
                                            </div>
                                            <div className="flex gap-8">
                                                <img className="h-64 w-1/2 rounded-xl" src={sd['image3']} />
                                                <img className="h-64 w-1/2 rounded-xl" src={sd['image4']} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        </div>
    );
}