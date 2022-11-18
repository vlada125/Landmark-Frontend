import React from 'react'
import Image from 'next/future/image'

import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/common/Container'

import waveBack from '@/images/backgrounds/wave-back.svg'
import trascription from '@/images/backgrounds/landmark-associates-transcription-and-translation.png'

export default function Clients() {
    const clients = [
        {
            alpha: 'A – E',
            items: [
                {
                    name: 'Alfred P. Sloan Foundation',
                    importance: false,
                },
                {
                    name: 'Americans for the Arts',
                    importance: false,
                },
                {
                    name: 'Antioch University',
                    importance: false,
                },
                {
                    name: 'Arizona State University',
                    importance: false,
                },
                {
                    name: 'Azusa Pacific University',
                    importance: false,
                },
                {
                    name: 'Bellevue Medical Center',
                    importance: false,
                    newAlphaStart: true,
                },
                {
                    name: 'Boston University',
                    importance: false,
                },
                {
                    name: 'Bridgewater State University',
                    importance: false,
                },
                {
                    name: 'Brigham and Women’s Hospital',
                    importance: false,
                },
                {
                    name: 'Brown University',
                    importance: false,
                },
                {
                    name: 'California Polytechnic State University',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'California State University, Channel Islands',
                    importance: false,
                },
                {
                    name: 'California State University, Fullerton',
                    importance: false,
                },
                {
                    name: 'California State University, San Bernardino',
                    importance: false,
                },
                {
                    name: 'Canisius College',
                    importance: false,
                },
                {
                    name: 'Center for American Progress',
                    importance: false,
                },
                {
                    name: 'California State University, San Bernardino',
                    importance: false,
                },
                {
                    name: 'Centers for Disease Control and Prevention',
                    importance: false,
                },
                {
                    name: 'Chicago History Museum',
                    importance: false,
                },
                {
                    name: 'Children’s Hospital Colorado',
                    importance: false,
                },
                {
                    name: 'City College of San Francisco',
                    importance: false,
                },
                {
                    name: 'College of Charleston',
                    importance: false,
                },
                {
                    name: 'Colorado College',
                    importance: false,
                },
                {
                    name: 'Columbia College',
                    importance: false,
                },
                {
                    name: 'Cornell University Denver Public Schools',
                    importance: false,
                },
                {
                    name: 'DePaul University Elon University',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Emory University',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Fontbonne University',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Flinders University',
                    importance: true,
                },
            ],
        },
        {
            alpha: 'G – N',
            items: [
                {
                    name: 'George Mason University',
                    importance: false,
                },
                {
                    name: 'Global Healthy Living Foundation ',
                    importance: false,
                },
                {
                    name: 'Grand Canyon University',
                    importance: false,
                },
                {
                    name: 'Harvard Business School',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Harvard University',
                    importance: false,
                },
                {
                    name: 'Haverford College',
                    importance: false,
                },
                {
                    name: 'HEC Paris',
                    importance: false,
                },
                {
                    name: 'Henkel',
                    importance: false,
                },
                {
                    name: 'Hofstra University',
                    importance: false,
                },
                {
                    name: 'Humboldt State University',
                    importance: false,
                },
                {
                    name: 'ICF International',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Illinois Education Research Council',
                    importance: false,
                },
                {
                    name: 'Innovate Public Schools',
                    importance: false,
                },
                {
                    name: 'Jacksonville University',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'King’s College London',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Kennesaw State University',
                    importance: false,
                },
                {
                    name: 'Lifespan',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'La Trobe University',
                    importance: true,
                },
                {
                    name: 'Marietta City Schools',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Massachusetts General Hospital',
                    importance: false,
                },
                {
                    name: 'Menlo School',
                    importance: false,
                },
                {
                    name: 'Mercer University',
                    importance: false,
                },
                {
                    name: 'Midwestern State University',
                    importance: false,
                },
                {
                    name: 'Murray State University',
                    importance: false,
                },
                {
                    name: 'National Churchill Museum',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'National Institute of Child Health & Human Development',
                    importance: false,
                },
                {
                    name: 'Naval Medical Center, Portsmouth',
                    importance: false,
                },
                {
                    name: 'Naval Medical Center, San Diego',
                    importance: false,
                },
                {
                    name: 'NERI',
                    importance: false,
                },
                {
                    name: 'New Mexico Community Foundation',
                    importance: false,
                },
                {
                    name: 'New Mexico State University',
                    importance: false,
                },
                {
                    name: 'New York University',
                    importance: false,
                },
                {
                    name: 'Northcentral University',
                    importance: false,
                },
                {
                    name: 'Northern Arizona Healthcare',
                    importance: false,
                },
                {
                    name: 'NYU Langone',
                    importance: false,
                },
            ],
        },
        {
            alpha: 'O-U',
            items: [
                {
                    name: 'Oakland University',
                    importance: false,
                },
                {
                    name: 'Regis College',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Research For Action',
                    importance: false,
                },
                {
                    name: 'Rice University',
                    importance: false,
                },
                {
                    name: 'Roger Williams University',
                    importance: false,
                },
                {
                    name: 'Rowan University ',
                    importance: false,
                },
                {
                    name: 'Salem State University',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Santa Clara University',
                    importance: false,
                },
                {
                    name: 'Scottsdale Community College',
                    importance: false,
                },
                {
                    name: 'Seton Hall University',
                    importance: false,
                },
                {
                    name: 'Smith College',
                    importance: false,
                },
                {
                    name: 'Southern Illinois University, Edwardsville',
                    importance: false,
                },
                {
                    name: 'State University of New York, Albany',
                    importance: false,
                },
                {
                    name: 'State University of New York, Geneseo',
                    importance: false,
                },
                {
                    name: 'Stony Brook University',
                    importance: false,
                },
                {
                    name: 'Texas Tech University',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Texas Woman’s University',
                    importance: false,
                },
                {
                    name: 'The Brooklyn Hospital Center',
                    importance: false,
                },
                {
                    name: 'U.S. Geological Survey',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'U.S. Naval Academy-Division of Leadership Education and Development',
                    importance: false,
                },
                {
                    name: 'UCLA',
                    importance: false,
                },
                {
                    name: 'University College of Southeast Norway',
                    importance: false,
                },
                {
                    name: 'University of Bristol',
                    importance: false,
                },
                {
                    name: 'University of California, Berkeley',
                    importance: false,
                },
                {
                    name: 'University of California, Irvine',
                    importance: false,
                },
                {
                    name: 'University of California, Merced',
                    importance: false,
                },
                {
                    name: 'University of California, San Diego',
                    importance: false,
                },
                {
                    name: 'University of California, Santa Barbara',
                    importance: false,
                },
                {
                    name: 'University of California, Santa Cruz',
                    importance: false,
                },
                {
                    name: 'University of Cambridge',
                    importance: false,
                },
                {
                    name: 'University of Chicago Medical Center',
                    importance: false,
                },
                {
                    name: 'University of Connecticut',
                    importance: false,
                },
            ],
        },
        {
            alpha: 'U – Z',
            items: [
                {
                    name: 'University of Delaware',
                    importance: false,
                },
                {
                    name: 'University of Florida',
                    importance: false,
                },
                {
                    name: 'University of Illinois',
                    importance: false,
                },
                {
                    name: 'University of Kansas',
                    importance: false,
                },
                {
                    name: 'University of Kent',
                    importance: false,
                },
                {
                    name: 'University of Maryland',
                    importance: false,
                },
                {
                    name: 'University of Massachusetts, Amherst',
                    importance: false,
                },
                {
                    name: 'University of Melbourne',
                    importance: true,
                },
                {
                    name: 'University of Michigan, Flint',
                    importance: false,
                },
                {
                    name: 'University of Minnesota',
                    importance: false,
                },
                {
                    name: 'University of Montana',
                    importance: false,
                },
                {
                    name: 'University of New England',
                    importance: false,
                },
                {
                    name: 'University of Newcastle',
                    importance: true,
                },
                {
                    name: 'University of New South Wales',
                    importance: true,
                },
                {
                    name: 'University of North Carolina Medical Center',
                    importance: false,
                },
                {
                    name: 'University of North Carolina, Wilmington',
                    importance: false,
                },
                {
                    name: 'University of North Dakota',
                    importance: false,
                },
                {
                    name: 'University of North Texas',
                    importance: false,
                },
                {
                    name: 'University of Queensland',
                    importance: false,
                },
                {
                    name: 'University of Sydney',
                    importance: true,
                },
                {
                    name: 'University of South Carolina',
                    importance: false,
                },
                {
                    name: 'University of St. Augustine',
                    importance: false,
                },
                {
                    name: 'University of Texas, Arlington',
                    importance: false,
                },
                {
                    name: 'University of Texas, Austin',
                    importance: false,
                },
                {
                    name: 'University of Virginia',
                    importance: false,
                },
                {
                    name: 'Virginia Commonwealth University',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Virginia Theological Seminary',
                    importance: false,
                },
                {
                    name: 'Walsh University',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Washoe County School District',
                    importance: false,
                },
                {
                    name: 'WestEd',
                    importance: false,
                },
                {
                    name: 'Western Carolina University',
                    importance: false,
                },
                {
                    name: 'Western Michigan University',
                    importance: false,
                },
                {
                    name: 'Women & Infants Hospital',
                    importance: false,
                },
                {
                    name: 'Yale',
                    newAlphaStart: true,
                    importance: false,
                },
                {
                    name: 'Yeshiva University',
                    importance: false,
                },
            ],
        },
    ]
    return (
        <>
            <MainLayout title="Clients | Landmark" footer={true}>
                <div className="relative overflow-hidden">
                    <Image
                        src={waveBack}
                        className="absolute h-[180px] w-full origin-top scale-[1.8]"
                        alt=""
                    />
                    <Container className="relative pt-24 pb-16 text-center md:text-left">
                        <div className="items-center md:flex">
                            <div className="md:w-1/2">
                                <h1 className="mb-6 font-poppins text-[32px] font-semibold  sm:text-5xl">
                                    Researchers we have worked with |
                                    <span className="anim-typewriter text-primary">
                                        {' '}
                                        |
                                    </span>
                                </h1>
                                <p className="text-[17px] leading-9 text-mainText">
                                    We have transcribed and translated media
                                    recordings for over 150 research
                                    universities including{' '}
                                    <strong>
                                        Flinders University, La Trobe
                                        University, The University of Sydney,
                                        The University of Newcastle, The
                                        University of New South Wales and
                                        University of Melbourne
                                    </strong>{' '}
                                    and we have worked with numerous government
                                    agencies and research focused non-profit
                                    organizations.
                                </p>
                            </div>
                            <div className="flex items-center md:w-1/2">
                                <Image
                                    src={trascription}
                                    className="m-auto rounded-2xl md:w-[80%]"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="my-10 gap-5 sm:flex ">
                            {clients.map((client, index) => (
                                <div
                                    className="d:w-1/4 mt-5 sm:w-1/2 md:mt-0"
                                    key={index}
                                >
                                    <h1 className="mb-5 border-b-[1px] border-b-mainText pb-2 text-[28px] font-semibold tracking-[-0.4px]">
                                        {client.alpha}
                                    </h1>
                                    {client.items.map((item, k) => (
                                        <p
                                            className={`text-[14px] leading-10 text-mainText ${
                                                item.newAlphaStart && 'mt-5'
                                            } ${
                                                item.importance &&
                                                'font-semibold'
                                            }`}
                                            key={k}
                                        >
                                            {item.name}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </MainLayout>
        </>
    )
}
