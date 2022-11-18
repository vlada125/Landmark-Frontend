import React from 'react'
import Image from 'next/future/image'
import { Container } from '../../common/Container'
import gifi from '@/images/gifs/about-gifi.gif'

export function Collection() {
    const collections = [
        {
            numeric: 4175000,
            subtitle: 'Transcribed Minutes',
        },
        {
            numeric: 3800,
            subtitle: 'Project',
        },
        {
            numeric: 3300,
            subtitle: 'Customers',
        },
        {
            numeric: 25,
            subtitle: 'Languages',
        },
    ]

    const counter = (minimum, maximum) => {
        console.log(minimum, maximum)
        for (let count = minimum; count <= maximum; count++) {
            setTimeout(() => {
                return count.toLocaleString('en-US')
            }, 1000)
        }
    }

    return (
        <Container className="pb-20 md:py-16">
            <div className="justify-between py-5 md:flex">
                {collections.map((collection, index) => (
                    <div
                        className="py-5 text-center font-poppins md:w-1/2 md:py-0 lg:w-1/4"
                        key={index}
                    >
                        <p className="text-[26px] font-semibold  md:text-[38px]">
                            {/*{counter(0,collection.numeric)}+*/}
                            {collection.numeric}+
                        </p>
                        <p className="text-[12px] font-medium uppercase tracking-[3px] text-border">
                            {collection.subtitle}
                        </p>
                    </div>
                ))}
            </div>
            <div className="mt-12 items-center py-5 md:flex">
                <div className="md:w-[54%]">
                    <h1 className="mb-8 font-poppins text-[30px] font-semibold md:text-[34px] ">
                        Trusted by over 3,300 researchers
                    </h1>
                    <p className="px-3 text-sm text-[17px] leading-7 text-mainText md:px-0">
                        Since 1987, Landmark Associates, Inc. has been a leading
                        provider of transcription services with a focus on
                        serving the academic and qualitative research markets.
                        <br />
                        <br />
                        <span>
                            We pride ourselves on delivering{' '}
                            <strong>
                                accurate and timely completed transcripts
                            </strong>{' '}
                            for our researchers, so they can realize the maximum
                            value of their efforts.
                        </span>
                    </p>
                    <a
                        className="mx-auto mt-5 flex w-fit items-center py-3 font-roboto text-[15px] font-medium text-primary transition duration-300 ease-in-out hover:text-primaryHoverText md:mx-0 "
                        href="/clients"
                    >
                        View list of universities
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-arrow-right ml-4 w-[20px] text-primary "
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
                <div className="md:w-[46%]">
                    <Image
                        src={gifi}
                        alt=""
                        className="mx-auto rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-[70%]"
                    />
                </div>
            </div>
        </Container>
    )
}
