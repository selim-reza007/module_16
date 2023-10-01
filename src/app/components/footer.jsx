import Link from "next/link";
import { ImFacebook, ImTwitter, ImLinkedin2 } from 'react-icons/im';
import { AiOutlineInstagram } from 'react-icons/ai';
import { getAllSocialLinkData } from "../lib/apiRequests";

export default async function Footer() {

    let socialLinkData = await getAllSocialLinkData();

    return (
        <div className=' h-[420px] bg-black text-white'>
            <div className='max-w-6xl h-full flex pt-14 mx-auto'>
                <div className="w-1/3">
                    <div>
                        <p className="p-5 font my-pooping-fonts text-4xl font-extrabold">WEB LOGO</p>
                        <p className="text-lg pr-7">
                            Some footer text about the  Agency. Just a little description to help people understand you better
                        </p>
                    </div>

                    <div className="flex gap-4 mt-5">
                        <Link href={socialLinkData[0]['link']} className="bg-[#20b15a] p-4 w-12 h-12 rounded-full">
                            <ImFacebook />
                        </Link>
                        <Link href={socialLinkData[1]['link']} className="bg-[#20b15a] p-4 w-12 h-12 rounded-full">
                            <ImTwitter />
                        </Link>
                        <Link href={socialLinkData[2]['link']} className="bg-[#20b15a] p-4 w-12 h-12 rounded-full">
                            <AiOutlineInstagram />
                        </Link>
                    </div>

                    <p className="text-xl mt-20">Copyright Degital Agency 2022</p>

                </div>

                <div className="flex w-2/3 ml-40">
                    <div className="w-1/2">
                        <p className="text-2xl font-bold mt-7">Quick Links</p>
                        <ul className="flex flex-col pt-3 gap-3">
                            <Link className="text-xl" href={'/'}>Services</Link>
                            <Link className="text-xl" href={'/'}>Portfolio</Link>
                            <Link className="text-xl" href={'/'}>About Us</Link>
                            <Link className="text-xl" href={'/'}>Contact Us</Link>
                        </ul>
                    </div>

                    <div className="w-1/2 ml-28">
                        <p className="text-2xl font-bold mt-7">Address</p>
                        <p className="text-xl mt-7">
                            Design Agency Head Office.<br />
                            Airport Road<br />
                            United Arab Emirate
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}