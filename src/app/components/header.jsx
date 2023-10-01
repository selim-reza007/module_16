import Navbar from "./navbar";


export default function Header({ title }) {

    const forwardSign = ">";

    return (
        <div className="w-full h-[360px] bg-[#F8F9FC]">
            <div className="max-w-6xl mx-auto h-full flex flex-col gap-24">
                <div>
                    <Navbar />
                </div>
                <div>
                    <p className="text-[101A29] text-4xl font-medium leading-10">{title}</p>
                    <div className="flex gap-3 mt-5">
                        <p className="text-base text-[#101A29] font-medium leading-6">Home </p>
                        <p>{forwardSign}</p>
                        <p className="text-base text-[#20B15A] font-medium leading-6">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}