import { Poppins } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

const poppinsMini = Poppins({ subsets: ['latin'], weight: ["400"] })

const Footer = () => {
    return (
        <div className={`${poppinsMini.className} mt-20 w-full bg-zinc-100 print:hidden`}>
            <div className='m-auto w-[95%] py-20 lg:w-[90%] xl:w-[1300px]'>
                <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
                    <div className='text-zinc-800'>
                        <h1 className='text-xl font-bold'>Core Courses</h1>
                        <div className='mt-5 flex flex-col gap-3 text-sm md:text-base'>
                            <Link href={"/"} className='truncate'>Programming Fundamentals</Link>
                            <Link href={"/"} className='truncate'>Web2 Using NextJS</Link>
                            <Link href={"/"} className='truncate'>Earn as You Learn</Link>
                        </div>
                    </div>
                    <div className='text-zinc-800'>
                        <h1 className='text-xl font-bold'>Advance Courses</h1>
                        <div className='mt-5 flex flex-col gap-3 text-sm md:text-base'>
                            <Link href={"/"} className='truncate'>Web 3 and Metaverse</Link>
                            <Link href={"/"} className='truncate'>Cloud-Native Computing</Link>
                            <Link href={"/"} className='truncate'>Artificial Intelligence (AI) and Deep Learning</Link>
                            <Link href={"/"} className='truncate'>Ambient Computing and IoT</Link>
                            <Link href={"/"} className='truncate'>Genomics and Bioinformatics</Link>
                            <Link href={"/"} className='truncate'>Network Programmability and Automation</Link>
                        </div>
                    </div>
                    <div className='text-zinc-800'>
                        <h1 className='text-xl font-bold'>Social Links</h1>
                        <div className='my-5 flex gap-3  md:text-sm'>
                            <Link href={"/"} target='_blank' className='flex h-8 w-8 text-[20px] items-center justify-center rounded-full bg-[#4267B2] text-white'>
                                <FaFacebookF />
                            </Link>
                            <Link href={"/"} target='_blank' className='flex h-8 w-8 text-[20px] items-center justify-center rounded-full bg-[#FF0000] text-white'>
                                <FaYoutube />
                            </Link>
                            <Link href={"/"} target='_blank' className='flex h-8 w-8 text-[20px] items-center justify-center rounded-full bg-[#1DA1F2] text-white'>
                                <FaTwitter />
                            </Link>
                            <Link href={"/"} target='_blank' className='instagram flex h-8 w-8 text-[20px] items-center justify-center rounded-full text-white'>
                                <FaInstagram />
                            </Link>
                            <Link href={"/"} target='_blank' className='flex h-8 w-8 text-[20px] items-center justify-center rounded-full bg-[#171515] text-white'>
                                <FaTiktok />
                            </Link>
                        </div>

                        <Link href={"/"} className='mt-4 flex items-center py-1 text-main underline' target='_blank'>
                            <div className='mr-3 h-6 w-6 text-[24px]'><AiOutlineMail /></div>
                            education@governorsindh.com
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer