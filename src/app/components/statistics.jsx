import { PiUsersThree } from 'react-icons/pi';
import { AiOutlineLike } from 'react-icons/ai';
import { IoMdHappy } from 'react-icons/io';
import { GrProjects } from 'react-icons/gr';
import { getAllStatisticData } from '../lib/apiRequests';


export default async function Statistics() {

    let statisticsData = await getAllStatisticData();

    return (
        <div className="w-full min-h-[260px] bg-white py-16">
            <div className='flex gap-5 max-w-6xl mx-auto items-center'>
                <div className='w-64 h-64 shadow-md rounded-3xl ml-8'>
                    <div className='p-6 bg-[#d7f5dc] w-24 rounded-xl mx-auto mt-10'>
                        <PiUsersThree className='text-5xl' />
                    </div>
                    <div className='mt-5 text-center'>
                        <p className='my-pooping-fonts text-3xl font-medium'>{statisticsData['followers']}</p>
                        <p className='my-pooping-fonts font-medium'>Followers</p>
                    </div>
                </div>

                <div className='w-64 h-64 shadow-md rounded-3xl'>
                    <div className='p-6 bg-[#d7f5dc] w-24 rounded-xl mx-auto mt-10'>
                        <AiOutlineLike className='text-5xl' />
                    </div>
                    <div className='mt-5 text-center'>
                        <p className='my-pooping-fonts text-3xl font-medium'>{statisticsData['solved']}</p>
                        <p className='my-pooping-fonts font-medium'>Solved Problems</p>
                    </div>
                </div>

                <div className='w-64 h-64 shadow-md rounded-3xl'>
                    <div className='p-6 bg-[#d7f5dc] w-24 rounded-xl mx-auto mt-10'>
                        <IoMdHappy className='text-5xl' />
                    </div>
                    <div className='mt-5 text-center'>
                        <p className='my-pooping-fonts text-3xl font-medium'>{statisticsData['customers']}</p>
                        <p className='my-pooping-fonts font-medium'>Happy Customers</p>
                    </div>
                </div>

                <div className='w-64 h-64 shadow-md rounded-3xl'>
                    <div className='p-6 bg-[#d7f5dc] w-24 rounded-xl mx-auto mt-10'>
                        <GrProjects className='text-5xl' />
                    </div>
                    <div className='mt-5 text-center'>
                        <p className='my-pooping-fonts text-3xl font-medium'>{statisticsData['projects']}</p>
                        <p className='my-pooping-fonts font-medium'>Projects</p>
                    </div>
                </div>


            </div>
        </div>
    );
}