"use client";

import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowDown, IoIosClose, IoMdMenu } from "react-icons/io";
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ["500"] })
const roboto2 = Roboto({ subsets: ['latin'], weight: ["400"] })

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [coursesOpen, setCoursesOpen] = useState(false);

    return (
        <div className={`${roboto.className} fixed w-full top-0 z-50`}>
            <div className='relative md:h-20 h-16 flex items-center justify-between bg-[#044E83] md:px-8 px-[10px]'>
                <div className="sm:w-[90px] sm:h-[110px] w-[70px]">
                    <Image src={"/images/logo.png"} alt='Logo' width={90} height={110} className='absolute sm:top-6 top-4 sm:left-6 left-3 lg:mr-4 sm:w-[90px] sm:h-[113px] w-[70px]' />
                </div>
                <div>
                    <h1 className='text-[#B9D8F3] xl-lg:text-xl xl:text-2xl lg:block hidden lg:text-[20px] text_shadow font-extrabold'>Tuition Free Education Program on Latest Technologies</h1>
                    <h1 className='text-[#B9D8F3] lg:hidden block text-[1.125rem] text_shadow font-extrabold'>Tuition Free Program</h1>
                </div>
                <ul className={`${roboto2.className} hidden items-center gap-5 sm:flex lg:gap-10`}>
                    <Link href={"/"}><li className="text-[#FAF9F6] font-[16px]">Home</li></Link>
                    <Link href={"/apply"}><li className="text-[#FAF9F6] font-[16px]">Apply</li></Link>
                    <Link href={"/"}><li className="text-[#FAF9F6] font-[16px]">Jobs</li></Link>
                    <Link href={"/"}><li className="text-[#FAF9F6] font-[16px]">Result</li></Link>
                    <div className="relative inline-block">
                        {/* Dropdown Trigger */}
                        <button
                            onClick={() => setCoursesOpen(!coursesOpen)}
                            className=" text-white flex items-center gap-2 transition duration-300"
                        >
                            Courses
                            <IoIosArrowDown />
                        </button>

                        {/* Dropdown Items */}
                        <div
                            className={`absolute right-0 mt-2 w-[350px] p-4 bg-white shadow-lg shadow-zinc-400 transform transition-all duration-300 ${coursesOpen
                                ? "opacity-100 scale-100 translate-y-0 visible"
                                : "opacity-0 scale-90 -translate-y-4 invisible"
                                }`}
                            style={{
                                transformOrigin: "top right",
                            }}
                        >
                            <div>
                                <h1 className="sm:text-xl text-lg font-bold mb-2 text-zinc-800">Core Courses</h1>

                                <Link href={"/"}><li className="  text-zinc-600 sm:text-base text-sm hover:text-[#044E83] pl-2 py-[5px]">Programming Fundamentals</li></Link>
                                <Link href={"/"}><li className="  text-zinc-600 sm:text-base text-sm hover:text-[#044E83] pl-2 py-[5px]">Web2 Using Nextjs</li></Link>
                                <Link href={"/"}><li className="  text-zinc-600 sm:text-base text-sm hover:text-[#044E83] pl-2 py-[5px]">Earn as You Learn</li></Link>
                            </div>
                            <div className="w-full h-[0.2px] bg-zinc-300 my-5"></div>
                            <div>
                                <h1 className="sm:text-xl text-lg font-bold mb-2 text-zinc-800">Advanced Courses</h1>

                                <Link href={"/"}><li className="  text-zinc-600 sm:text-base text-sm hover:text-[#044E83] pl-2 py-[5px]">Web 3 and Metaverse</li></Link>
                                <Link href={"/"}><li className="  text-zinc-600 sm:text-base text-sm hover:text-[#044E83] pl-2 py-[5px]">Cloud Native Computing</li></Link>
                                <Link href={"/"}><li className="  text-zinc-600 sm:text-base text-sm hover:text-[#044E83] pl-2 py-[5px]">Artificial Intelligence (AI) and Deep Learning</li></Link>
                                <Link href={"/"}><li className="  text-zinc-600 sm:text-base text-sm hover:text-[#044E83] pl-2 py-[5px]">Ambient Computing and IoT</li></Link>
                                <Link href={"/"}><li className="  text-zinc-600 sm:text-base text-sm hover:text-[#044E83] pl-2 py-[5px]">Geonomics and Bioformatics</li></Link>
                                <Link href={"/"}><li className="  text-zinc-600 sm:text-base text-sm hover:text-[#044E83] pl-2 py-[5px]">Network Programmability and Automation</li></Link>
                            </div>
                        </div>
                    </div>
                </ul>

                {/* Mobile Menu Icon */}
                <div className="sm:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white text-[28px]">
                        <IoMdMenu />
                    </button>
                </div>
            </div>

            {/* Fullscreen Overlay Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-50 pt-24 bg-[#044E83] flex flex-col items-start">
                    <div className="absolute top-3 right-3">
                        <button onClick={() => setIsOpen(false)} className="text-[#FAF9F6]">
                            <IoIosClose size={54} />
                        </button>
                    </div>
                    <ul className="text-white flex flex-col items-start gap-4 w-full px-5">
                        <Link href={"/"}><li className="text-lg  py-2">Home</li></Link>
                        <div className="w-full h-[0.2px] bg-[#1468a5]"></div>
                        <Link href={"/apply"}><li className="text-lg  py-2">Apply</li></Link>
                        <div className="w-full h-[0.2px] bg-[#1468a5]"></div>
                        <Link href={"/"}><li className="text-lg  py-2">Jobs</li></Link>
                        <div className="w-full h-[0.2px] bg-[#1468a5]"></div>
                        <Link href={"/"}><li className="text-lg  py-2">Result</li></Link>
                        <div className="w-full h-[0.2px] bg-[#1468a5]"></div>
                        <div className="relative w-full">
                            <button onClick={() => setCoursesOpen(!coursesOpen)} className="flex items-center justify-between w-full pt-2 pb-5">
                                <span className="text-lg">Courses</span>
                                <IoIosArrowDown />
                            </button>
                            <div className="w-full h-[0.2px] bg-[#1468a5]"></div>
                            {coursesOpen && (
                                <div className="absolute top-full left-0 p-2 h-[250px] overflow-y-scroll w-full bg-[#216FA7] shadow-lg rounded-lg transform transition-all duration-300">
                                    <div>
                                        <h1 className="text-center font-semibold text-[18px] my-2">Core Courses</h1>
                                        <div>
                                            <Link href={"/"}><li className="text-[16px]  py-2">Programming Fundamentals</li></Link>
                                            <div className="w-full h-[0.2px] bg-[#3695d8]"></div>
                                            <Link href={"/apply"}><li className="text-[16px]  py-2">Web2 Using Nextjs</li></Link>
                                            <div className="w-full h-[0.2px] bg-[#3695d8]"></div>
                                            <Link href={"/"}><li className="text-[16px]  py-2">Earn as You Learn</li></Link>
                                            <div className="w-full h-[0.2px] bg-[#3695d8]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-center font-semibold text-[18px] my-2">Advanced Courses</h1>
                                        <div>
                                            <Link href={"/"}><li className="text-[16px]  py-2">Web 3 and Metaverse</li></Link>
                                            <div className="w-full h-[0.2px] bg-[#3695d8]"></div>
                                            <Link href={"/apply"}><li className="text-[16px]  py-2">Cloud Native Computing</li></Link>
                                            <div className="w-full h-[0.2px] bg-[#3695d8]"></div>
                                            <Link href={"/"}><li className="text-[16px]  py-2">Artificial Intelligence (AI) and Deep Learning</li></Link>
                                            <div className="w-full h-[0.2px] bg-[#3695d8]"></div>
                                            <Link href={"/"}><li className="text-[16px]  py-2">Ambient Computing and IoT</li></Link>
                                            <div className="w-full h-[0.2px] bg-[#3695d8]"></div>
                                            <Link href={"/"}><li className="text-[16px]  py-2">Geonomics and Bioformatics</li></Link>
                                            <div className="w-full h-[0.2px] bg-[#3695d8]"></div>
                                            <Link href={"/"}><li className="text-[16px]  py-2">Network Programmability and Automation</li></Link>
                                            <div className="w-full h-[0.2px] bg-[#3695d8]"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;
