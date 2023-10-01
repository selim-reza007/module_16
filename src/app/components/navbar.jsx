import Link from "next/link";

export default function Navbar() {

    return (
        <div className="w-full h-auto">
            <div className="flex justify-between py-10">
                <div>
                    <span className="font-extrabold text-xl">Design</span><span className="font-extrabold text-xl text-[#f55f1d]">AGENCY</span>
                </div>
                <div className="flex gap-10">
                    <Link className="font-medium my-pooping-fonts" href={'/'}>Home</Link>
                    <Link className="font-medium my-pooping-fonts" href={'/team'}>Team</Link>
                    <Link className="font-medium my-pooping-fonts" href={'/services'}>Service</Link>
                    <Link className="font-medium my-pooping-fonts" href={'/projects'}>Projects</Link>
                    <Link className="font-medium my-pooping-fonts" href={'/testimonials'}>Testimonials</Link>
                    <div>
                        <Link className="font-medium my-pooping-fonts py-3 px-7 border border-green-500 rounded-xl mr-10 hover:bg-[#20b15a] hover:text-white" href={'/'}>Login</Link>
                        <Link className="font-medium my-pooping-fonts py-3 px-7 bg-[#20b15a] rounded-xl text-white hover:bg-green-400 hover:text-black" href={'/'}>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}