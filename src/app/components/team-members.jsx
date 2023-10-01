import { ImFacebook } from 'react-icons/im';
import { BiLogoTwitter } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { getAllTeamData } from '../lib/apiRequests';
import Link from 'next/link';

export default async function TeamMember() {

    let teamData = await getAllTeamData();

    return (
        <div className="bg-white h-auto w-full pt-16">
            <div className="max-w-6xl mx-auto">
                {/* container */}
                <div className="mb-10 leading-relaxed">
                    {/* text content */}
                    <h1 className="my-pooping-fonts text-[#20B15A] text-xl font-medium uppercase leading-10">Our Team Member</h1>
                    <p className="text-3xl my-pooping-fonts font-semibold break-words leading-10">Check our awesome team<br /> members</p>
                </div>
                <div>
                    {/* image content */}
                    <div className='grid grid-cols-3 gap-7'>
                        {/* image */}

                        <div className="w-[362px] h-[450px] border rounded-2xl shadow-md">
                            <div>
                                <img className="w-[362px] h-[360px] rounded-2xl rounded-b-none-" src={teamData[0]['image']} />
                            </div>
                            <div className='flex border w-36 h-12 items-center justify-between px-4 bg-white relative -top-20 rounded-full mx-auto '>
                                <Link href={teamData[0]['facebook']}><ImFacebook className='text-xl text-[#737588]' /></Link>
                                <Link href={teamData[0]['twitter']} className='flex justify-center border-x-2 w-1/3  '><BiLogoTwitter className='text-xl text-[#737588]' /></Link>
                                <Link href={teamData[0]['instagram']}><BsInstagram className='text-xl text-[#737588]' /></Link>
                            </div>
                            <div className='text-center -mt-5'>
                                <p className='my-pooping-fonts text-[#101A29] text-3xl font-semibold leading-7 break-words'>{teamData[0]['name']}</p>
                            </div>
                        </div>

                        <div className="w-[362px] h-[450px] border rounded-2xl shadow-md">
                            <div>
                                <img className="w-[362px] h-[360px] rounded-2xl rounded-b-none-" src={teamData[1]['image']} />
                            </div>
                            <div className='flex border w-36 h-12 items-center justify-between px-4 bg-white relative -top-20 rounded-full mx-auto '>
                                <Link href={teamData[1]['facebook']}><ImFacebook className='text-xl text-[#737588]' /></Link>
                                <Link href={teamData[1]['twitter']} className='flex justify-center border-x-2 w-1/3  '><BiLogoTwitter className='text-xl text-[#737588]' /></Link>
                                <Link href={teamData[1]['instagram']}><BsInstagram className='text-xl text-[#737588]' /></Link>
                            </div>
                            <div className='text-center -mt-5'>
                                <p className='my-pooping-fonts text-[#101A29] text-3xl font-semibold leading-7 break-words'>{teamData[1]['name']}</p>
                            </div>
                        </div>

                        <div className="w-[362px] h-[450px] border rounded-2xl shadow-md">
                            <div>
                                <img className="w-[362px] h-[360px] rounded-2xl rounded-b-none-" src={teamData[2]['image']} />
                            </div>
                            <div className='flex border w-36 h-12 items-center justify-between px-4 bg-white relative -top-20 rounded-full mx-auto '>
                                <Link href={teamData[2]['facebook']}><ImFacebook className='text-xl text-[#737588]' /></Link>
                                <Link href={teamData[2]['twitter']} className='flex justify-center border-x-2 w-1/3  '><BiLogoTwitter className='text-xl text-[#737588]' /></Link>
                                <Link href={teamData[2]['instagram']}><BsInstagram className='text-xl text-[#737588]' /></Link>
                            </div>
                            <div className='text-center -mt-5'>
                                <p className='my-pooping-fonts text-[#101A29] text-3xl font-semibold leading-7 break-words'>{teamData[2]['name']}</p>
                            </div>
                        </div>

                        <div className="w-[362px] h-[450px] border rounded-2xl shadow-md">
                            <div>
                                <img className="w-[362px] h-[360px] rounded-2xl rounded-b-none-" src={teamData[3]['image']} />
                            </div>
                            <div className='flex border w-36 h-12 items-center justify-between px-4 bg-white relative -top-20 rounded-full mx-auto '>
                                <Link href={teamData[3]['facebook']}><ImFacebook className='text-xl text-[#737588]' /></Link>
                                <Link href={teamData[3]['twitter']} className='flex justify-center border-x-2 w-1/3  '><BiLogoTwitter className='text-xl text-[#737588]' /></Link>
                                <Link href={teamData[3]['instagram']}><BsInstagram className='text-xl text-[#737588]' /></Link>
                            </div>
                            <div className='text-center -mt-5'>
                                <p className='my-pooping-fonts text-[#101A29] text-3xl font-semibold leading-7 break-words'>{teamData[3]['name']}</p>
                            </div>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
    );
}