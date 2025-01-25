import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CoreCourses = () => {
    return (
        <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10'>
            <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Core Courses Sequence</h1>
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
                <Link href={"/compulsory1"} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image src={"/images/c1.jpg"}
                                alt='programming-fundamental'
                                loading='lazy'
                                decoding='async'
                                width={450}
                                height={300}
                                className='object-cover w-full' />
                        </div>
                        <div className='px-4 flex justify-center items-center h-[70px]'>
                            <p>Programming Fundamentals</p>
                        </div>
                    </div>
                </Link>

                <Link href={"/compulsory2"} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image src={"/images/c2.jpg"}
                                alt='programming-fundamental'
                                loading='lazy'
                                decoding='async'
                                width={450}
                                height={300}
                                className='object-cover w-full' />
                        </div>
                        <div className='px-4 flex justify-center items-center h-[70px]'>
                            <p>Wed2 Using NextJS</p>
                        </div>
                    </div>
                </Link>

                <Link href={"/compulsory3"} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image src={"/images/c3.jpg"}
                                alt='programming-fundamental'
                                loading='lazy'
                                decoding='async'
                                width={450}
                                height={300}
                                className='object-cover w-full' />
                        </div>
                        <div className='px-4 flex justify-center items-center h-[70px]'>
                            <p>Earn as You Learn</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CoreCourses