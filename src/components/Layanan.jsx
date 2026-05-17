import React from 'react';
// Import ikon topi kelulusan dari react-icons (opsional, pastikan sudah npm install react-icons)
// Jika tidak menggunakan react-icons, Anda bisa mengganti komponen <FaGraduationCap /> dengan ikon SVG biasa.
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
    const educationData = [
        {
            title: "Elementary School",
            school: "SDN TLP 03",
            year: "2015-2021",
        },
        {
            title: "Junior High School",
            school: "SMPN 2 CIAWI",
            year: "2021-2024",
        },
        {
            title: "Vocational High School",
            school: "SMK Wikrama Bogor",
            year: "2024-2026",
        },
    ];

    return (
        <section
            id="layanan"
            className="flex items-center justify-center min-h-screen py-24 md:py-32 px-4 bg-[#fffff]" 
            data-aos="fade-up"
        >
            <div className="max-w-3xl w-full mx-auto relative">
                
                {/* TAMBAHAN: Title Section agar halaman tidak sepi */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-[#000000] tracking-tight">
                        Education History
                    </h1>
                    <div className="w-16 h-[3px] bg-[#050404] mx-auto mt-4 rounded-full" />
                    <p className="text-gray-500 text-sm mt-3">
                        My formal education journey and academic background.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[6px] top-2 w-[2px] h-[calc(100%-24px)] bg-gray-300" />

                    {/* Jarak antar kartu ditingkatkan (gap-8) agar terasa luas */}
                    <div className="flex flex-col gap-8">
                        {educationData.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex items-start gap-4"
                            >
                                {/* Dot */}
                                <div className="w-[14px] h-[14px] rounded-full bg-[#020202] mt-5 z-10 shrink-0" />

                                {/* Card */}
                                <div className="bg-[#ffffff] border border-gray-100 rounded-2xl p-6 w-full flex justify-between items-center shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        {/* TAMBAHAN: Ikon Edukasi di dalam Kartu */}
                                        <div className="p-3 bg-[#f2ebe6] text-[#0a0908] rounded-xl text-xl hidden sm:block">
                                            <FaGraduationCap />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-semibold text-[#000000]">
                                                {item.title}
                                            </h2> 
                                            <p className="text-gray-600 text-sm mt-1">
                                                {item.school}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-[#f2ebe6] text-[#050303] px-4 py-1 rounded-full text-sm font-medium shrink-0 ml-4">
                                        {item.year}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Description */}
                <div className="mt-12 ml-8 border-l-4 border-[#090705] bg-[#f7f7f7] rounded-r-2xl p-6 shadow-sm">
                    <p className="text-gray-700 text-sm leading-7">
                        Currently studying at{" "}
                        <span className="font-semibold text-[#040303]">
                            SMK Wikrama Bogor
                        </span>{" "}
                        majoring in{" "}
                        <span className="font-semibold text-[#0f0d0c]">
                            PPLG (Software Engineering)
                        </span>
                        , actively involved in web development and other
                        activities.
                    </p>
                </div>
            </div>
        </section>
    );
}