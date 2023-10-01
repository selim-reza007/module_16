import { getAllBrandsData } from "../lib/apiRequests";

export default async function Brands() {

    let brandsData = await getAllBrandsData();

    return (
        <div className="bg-[#f8fff9] py-10">
            <div className="flex justify-between max-w-6xl mx-auto px-5">
                {
                    brandsData.map((bd, i) => {
                        return (
                            <img key={i} className="w-20" src={bd['image']} />
                        )
                    })
                }
            </div>
        </div>
    );
}