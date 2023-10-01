import { getAllProjectData } from "../lib/apiRequests";

export default async function AllProject() {

    let projectData = await getAllProjectData();

    return (
        <div className="w-full h-auto bg-white py-14">
            <div className="max-w-6xl mx-auto min-h-screen">
                <div>
                    {/* text content */}
                    <h1 className="my-pooping-fonts text-[#20B15A] text-xl font-medium uppercase break-words">All Project</h1>
                    <p className="my-pooping-fonts text-3xl font-semibold break-words my-5 leading-relaxed">Better Agency/SEO Solution At<br /> Your Fingertips</p>
                </div>
                <div className="grid grid-cols-2 gap-12">
                    {/* card content */}

                    {
                        projectData.map((pd, i) => {
                            return (
                                <div key={i} className="w-[580px] h-[550px] rounded-2xl shadow-xl px-8 py-10 ">
                                    {/* single card */}
                                    <div>
                                        <img className="rounded-2xl" src={pd['image']} />
                                        <p className="my-pooping-fonts text-2xl font-semibold uppercase break-words py-10">{pd['title']}</p>
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