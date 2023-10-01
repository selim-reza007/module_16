import { getAllTestimonialsData } from "../lib/apiRequests";

export default async function TestimonialsComponents() {

    let testimonialsData = await getAllTestimonialsData();

    return (
        <div className="w-full bg-white min-h-screen">
            <div className="max-w-6xl mx-auto py-16">
                <div>
                    <h1 className="my-pooping-fonts text-[#20B15A] text-xl font-medium uppercase break-words">Testimonial List</h1>
                    <p className="my-pooping-fonts text-3xl font-semibold break-words">Better Agency/SEO Solution At<br />
                        Your Fingertips</p>
                </div>
                <div className="pt-10 grid grid-cols-3 gap-8">
                    {/* card area */}

                    {
                        testimonialsData.map((td, i) => {
                            return (
                                <div key={i} className="h-auto py-12 shadow-lg rounded-3xl px-5 ">
                                    {/* single card */}
                                    <div className="flex justify-center">
                                        {/* image */}
                                        <img className="w-[90px] h-[80px] rounded-2xl scale-125" src={td['image']} />
                                    </div>
                                    <div className="text-center">
                                        {/* text content */}
                                        <p className="my-pooping-fonts text-[#9D9D9D] text-base font-normal capitalize break-words leading-6 py-8">
                                            {td['msg']}
                                        </p>
                                        <p className="my-pooping-fonts text-2xl font-semibold uppercase break-words pb-3">{td['name']}</p>
                                        <p className="my-pooping-fonts text-base font-normal capitalize break-words">{td['designation']}</p>
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