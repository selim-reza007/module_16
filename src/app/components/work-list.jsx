import Link from 'next/link';
import { MdShowChart, MdOutlineBusinessCenter, MdArrowForward } from 'react-icons/md';
import { TbHeartCode } from 'react-icons/tb';
import { getAllWorkListData } from '../lib/apiRequests';


export default async function WorkList() {

    let workData = await getAllWorkListData();
    // console.log(workData[1]);

    return (
        <div className="min-h-screen bg-[#ffffff] mt-9">
            <div className="max-w-6xl mx-auto pt-16">
                <div>
                    {/* text */}
                    <p className="uppercase my-pooping-fonts text-[#20b15a] text-xl mb-3">Work List</p>
                    <p className="my-pooping-fonts text-3xl font-semibold leading-relaxed">We provide the Perfect Solution<br /> to your business growth</p>
                </div>
                <div className="w-full flex p-7">
                    {/* WorkList */}
                    <div className="w-1/3 p-5 hover:shadow-xl hover:rounded-xl hover:scale-105 hover:duration-300">
                        <div className='bg-[#d7f5dc] p-6 w-20 rounded-2xl my-5'>
                            <MdShowChart className='text-4xl' />
                        </div>
                        <div className=''>
                            <p className='my-pooping-fonts text-2xl font-semibold my-5'>{workData[0]['title']}</p>
                            <p className='text-lg'>
                                {workData[0]['des']}
                            </p>
                            <div className='py-10 pl-5'>
                                <Link className='text-lg px-7 py-3 hover:bg-orange-500 hover:rounded-xl hover:text-white' href={'/'}>Learn More <MdArrowForward className='inline-block text-2xl' /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3 p-5 hover:shadow-xl hover:rounded-xl hover:scale-105 hover:duration-300">
                        <div className='bg-[#d7f5dc] p-6 w-20 rounded-2xl my-5'>
                            <TbHeartCode className='text-4xl' />
                        </div>
                        <div className=''>
                            <p className='my-pooping-fonts text-2xl font-semibold my-5'>{workData[1]['title']}</p>
                            <p className='text-lg'>
                                {workData[1]['des']}
                            </p>
                            <div className='py-10 pl-5'>
                                <Link className='text-lg px-7 py-3 hover:bg-orange-500 hover:rounded-xl hover:text-white' href={'/'}>Learn More <MdArrowForward className='inline-block text-2xl' /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3 p-5 hover:shadow-xl hover:rounded-xl hover:scale-105 hover:duration-300">
                        <div className='bg-[#d7f5dc] p-6 w-20 rounded-2xl my-5'>
                            <MdOutlineBusinessCenter className='text-4xl' />
                        </div>
                        <div className=''>
                            <p className='my-pooping-fonts text-2xl font-semibold my-5'>{workData[2]['title']}</p>
                            <p className='text-lg'>
                                {workData[1]['des']}
                            </p>
                            <div className='py-10 pl-5'>
                                <Link className='text-lg px-7 py-3 hover:bg-orange-500 hover:rounded-xl hover:text-white' href={'/'}>Learn More <MdArrowForward className='inline-block text-2xl' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}