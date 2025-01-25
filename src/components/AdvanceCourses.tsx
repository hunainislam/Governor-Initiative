import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdvCourses = () => {
    return (
        <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10'>
            <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Advanced Courses</h1>
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
                <Link href={"/compulsory1"} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image src={"/images/ad1.jpg"}
                                alt='programming-fundamental'
                                loading='lazy'
                                decoding='async'
                                width={450}
                                height={300}
                                className='object-cover w-full' />
                        </div>
                        <div className='px-4 flex justify-center items-center h-[70px]'>
                            <p>Artificial Intelligence</p>
                        </div>
                    </div>
                </Link>

                <Link href={"/compulsory2"} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image src={"/images/ad2.jpg"}
                                alt='programming-fundamental'
                                loading='lazy'
                                decoding='async'
                                width={450}
                                height={300}
                                className='object-cover w-full' />
                        </div>
                        <div className='px-4 flex justify-center items-center h-[70px]'>
                            <p>Web 3 and Metaverse</p>
                        </div>
                    </div>
                </Link>

                <Link href={"/compulsory3"} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image src={"/images/ad3.jpg"}
                                alt='programming-fundamental'
                                loading='lazy'
                                decoding='async'
                                width={450}
                                height={300}
                                className='object-cover w-full' />
                        </div>
                        <div className='px-4 flex justify-center items-center h-[70px]'>
                            <p>Cloud-Native Computing</p>
                        </div>
                    </div>
                </Link>

                <Link href={"/compulsory3"} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image src={"/images/ad4.jpg"}
                                alt='programming-fundamental'
                                loading='lazy'
                                decoding='async'
                                width={450}
                                height={300}
                                className='object-cover w-full' />
                        </div>
                        <div className='px-4 flex justify-center items-center h-[70px]'>
                            <p>Amebient Computing and IoT</p>
                        </div>
                    </div>
                </Link>

                <Link href={"/compulsory3"} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image src={"/images/ad5.jpg"}
                                alt='programming-fundamental'
                                loading='lazy'
                                decoding='async'
                                width={450}
                                height={300}
                                className='object-cover w-full' />
                        </div>
                        <div className='px-4 flex justify-center items-center h-[70px]'>
                            <p>Gionomics and Bioinformatics</p>
                        </div>
                    </div>
                </Link>

                <Link href={"/compulsory3"} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image src={"/images/ad6.jpg"}
                                alt='programming-fundamental'
                                loading='lazy'
                                decoding='async'
                                width={450}
                                height={300}
                                className='object-cover w-full' />
                        </div>
                        <div className='px-4 flex justify-center items-center h-[70px]'>
                            <p>Network Programmability and Automation</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AdvCourses