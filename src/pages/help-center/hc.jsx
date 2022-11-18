import React, { useEffect, useState } from 'react'
import { HelpLayout } from '@/components/layout/HelpLayout'
import Image from 'next/future/image'

import { HelpSide } from '@/components/pages/help-center/HelpSide'
import LoadingSpinner from '@/components/common/Spinner'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'
import {
    faFileContract,
    faUserCheck,
    faUnlockKeyhole,
    faMoneyCheckAlt,
    faBook,
} from '@fortawesome/free-solid-svg-icons'
import timestamp from '@/images/gifs/timestamp.gif'
import strictVerbatim from '@/images/gifs/sv.gif'
import noneVerbatim from '@/images/screenshots/contacts.png'


import { Helpers } from '@/components/pages/help-center/Helpers'
import { HelpBreadCrumb } from '@/components/pages/help-center/HelpBreadcrumb'
import { useRouter } from 'next/router'
import useQuery from '@/utils/useQuery'
import Drawer from 'react-drag-drawer'


export default function HCTranscription() {
    const router = useRouter()
    const [isContactOpen, setContactOpend] = useState(false)
    const [formSrc, setFormSrc] = useState('')
    const handleClick = (src) => {
        // toggles the menu opened state
        setContactOpend(true)
        setFormSrc(src)
    }
    const topics = [
        {
            topic: 'transcription',
            breadcrumb: 'Transcription',
            icon: faFileContract,
            iconCol: '#e09900',
        },
        {
            topic: 'pricing_payment',
            breadcrumb: 'Pricing and Payment',
            icon: faMoneyCheckAlt,
            iconCol: '#00822b',
        },
        {
            topic: 'security_confidentiality',
            breadcrumb: 'Security and Confidentiality',
            icon: faUnlockKeyhole,
            iconCol: '#aa3682',
        },
        {
            topic: 'account',
            breadcrumb: 'Your account',
            icon: faUserCheck,
            iconCol: '#1963d3',
        },
        {
            topic: 'helpful-articles',
            breadcrumb: 'Helpful Articles',
            icon: faBook,
            iconCol: '#FF7B00',
        },
    ]
    const helpers = [
        {
            topic: 'transcription',
            helper: [
                {
                    title: 'Transcription feautures',
                    items: [
                        {
                            question: 'Can I send a personalized template?',
                            answer: 'Yes, absolutely!',
                        },
                        {
                            question:
                                'Can Landmark de-identify my participants?',
                            answer: (
                                <span>
                                    Yes, Landmark can de-identify one or several
                                    participants for your transcriptions.
                                    <a
                                        href="/de-identification "
                                        className="text-primary underline"
                                    >
                                        Click here▸
                                    </a>
                                    for more information on data
                                    de-identification.
                                </span>
                            ),
                        },
                        {
                            question: 'What file formats do you accept?',
                            answer: 'Files are  accepted in all formats of audio/video, including .mp3,.msv, .wma .mp4, .mov, .wm',
                        },
                        {
                            question:
                                'Do you transcribe and/or translate in other languages?',
                            answer: (
                                <span>
                                    Yes, we transcribe and translate audios in
                                    over 25 languages including spanish, french,
                                    chinese, and more. However our expertise
                                    resides within{' '}
                                    <strong>English and Spanish</strong>
                                    transcriptions and translations.
                                    <a
                                        href="/languages"
                                        className="text-primary"
                                    >
                                        Click here
                                    </a>
                                    to view a list of all languages available
                                    for transcription.
                                </span>
                            ),
                        },
                        {
                            question: 'What is speaker tracking?',
                            answer: 'Speaker tracking is the individual numbering of respondents. (Interviewee 1, Interviewee 2, Interviewee 3, etc.)',
                        },
                        {
                            question: 'What are Timestamps?',
                            answer: (
                                <span className="group relative ">
                                    Time stamping refers to aligning the
                                    transcript’s texts to the recording by
                                    inserting timestamps at specific intervals.
                                    (Interviewer: [00:05:05] Hi, how are you?).
                                    <span className="pointer-events-none absolute top-[-100%] left-1/3 min-w-[600px] -translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white py-5 px-3 text-white text-mainText opacity-0 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.4)] transition transition duration-300 ease-in-out before:absolute before:left-1/2 before:top-full before:-translate-x-1/2   hover:bg-primaryHover group-hover:opacity-100">
                                        <Image
                                            src={timestamp}
                                            className="mx-auto py-4"
                                            alt=""
                                        />
                                    </span>
                                    <br />
                                    <br />
                                    <span className="text-primary underline">
                                        View example ▸
                                    </span>
                                </span>
                            ),
                        },
                        {
                            question:
                                'What is the difference between non-verbatim and strict verbatim?',
                            answer: (
                                <>
                                    <span className="group relative ">
                                        Strict Verbatim Word-for-word capture
                                        including all non-verbal sounds or
                                        fillers such as um’s, ah’s, uh’s as well
                                        as stutters, stammers, repetitions and
                                        false starts.
                                        <span className="pointer-events-none absolute top-[-100%] left-1/3 min-w-[600px] -translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white py-5 px-3 text-white text-mainText opacity-0 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.4)] transition transition duration-300 ease-in-out before:absolute before:left-1/2 before:top-full before:-translate-x-1/2   hover:bg-primaryHover group-hover:opacity-100">
                                            <Image
                                                src={strictVerbatim}
                                                className="mx-auto py-4"
                                                alt=""
                                            />
                                        </span>
                                        <br />
                                        <br />
                                        <span className="text-primary underline">
                                            View example ▸
                                        </span>
                                    </span>
                                    <br />
                                    <br />
                                    <span className="group relative">
                                        <strong> Non Verbatim</strong> Not
                                        word-for-word capture. Intelligently
                                        capturing the meaning by removing all
                                        filler words (umm, uhh, ahh, hmm, etc.)
                                        as well as false starts, repetitions and
                                        stutters.
                                        <span className="pointer-events-none absolute top-[-100%] left-1/3 min-w-[600px] -translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white py-5 px-3 text-white text-mainText opacity-0 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.4)] transition transition duration-300 ease-in-out before:absolute before:left-1/2 before:top-full before:-translate-x-1/2   hover:bg-primaryHover group-hover:opacity-100">
                                            <Image
                                                src={noneVerbatim}
                                                className="mx-auto py-4"
                                                alt=""
                                            />
                                        </span>
                                        <br />
                                        <br />
                                        <span className="text-primary underline">
                                            View example ▸
                                        </span>
                                    </span>
                                </>
                            ),
                        },
                    ],
                },
                {
                    title: 'Turnaround times',
                    items: [
                        {
                            question: 'What is your standard turnaround time ?',
                            answer: 'Approximately 2 to 3 days.',
                        },

                        {
                            question: 'What is your rush turnaround time ?',
                            answer: 'We have next-business day and 2-day rush turnaround options.',
                        },
                    ],
                },
                {
                    title: 'Other inquiries',
                    items: [
                        {
                            question: 'Still not able to find your answer ?',
                            answer: (
                                <span>
                                    Submit a request and let us know your
                                    concerns. <br />
                                    <button onClick={()=>handleClick('https://thelai.typeform.com/to/s0ljN9')}
                                        className="font-poppins text-[12px] font-semibold tracking-[1.5px] text-primary"
                                    >
                                        Submit a request ▸
                                    </button>
                                   
                                </span>
                            ),
                        },
                    ],
                },
            ],
        },
        {
            topic: 'pricing_payment',
            helper: [
                {
                    title: 'Frequently Asked',
                    items: [
                        {
                            question: 'Can you give me a special quote?',
                            answer: (
                                <span>
                                    Of course! To give you an accurate quote
                                    please fill out our
                                    <button
                                        onClick={() => handleClick('https://thelai.typeform.com/to/yzo8Mw')}
                                        className="text-primary underline"
                                    >
                                        Get a quote Form
                                    </button>
                                </span>
                            ),
                        },
                        {
                            question: 'Do you have volume discounts?',
                            answer: (
                                <span>
                                    Yes, we do have volume discounts. Please
                                    send us an email at
                                    <br />
                                    <a
                                        href="mailto:support@landmarktranscription.com.au"
                                        target="_blank"
                                        className="mr-1 text-primary"
                                    >
                                        &nbsp;
                                        support@landmarktranscription.com.au
                                        &nbsp; &nbsp;
                                    </a>
                                    so that we can get offer you a special
                                    discount.
                                </span>
                            ),
                        },
                        {
                            question: 'Where do I pay my invoice?',
                            answer: 'We normally sent invoices to your email once your transcription is completed. We have three options, 1) Credit Card 2) ACH 3) Check.',
                        },
                    ],
                },
                {
                    title: 'Quick Guides',
                    items: [
                        {
                            question: 'Selecting a Payment Method',
                            answer: (
                                <span>
                                    Would you like to know more about our
                                    various payment methods? We have different
                                    options to accomodate to your projects
                                    needs.
                                    <a
                                        href="/guide/payment-methods"
                                        className="text-primary underline"
                                    >
                                        Read More
                                    </a>
                                </span>
                            ),
                        },
                        {
                            question: 'Our invoicing terms',
                            answer: (
                                <span>
                                    Learn about our invoicing process, payment
                                    terms, contracts and more.
                                    <a
                                        href="/guide/invoicing"
                                        className="text-primary underline"
                                    >
                                        Read More
                                    </a>
                                </span>
                            ),
                        },
                    ],
                },
                {
                    title: 'Other inquiries',
                    items: [
                        {
                            question: 'Still not able to find your answer ?',
                            answer: (
                                <span>
                                    Submit a request and let us know your
                                    concerns. <br />
                                    <button
                                     onClick={()=>handleClick('https://thelai.typeform.com/to/s0ljN9')}
                                        className="font-poppins text-[12px] font-semibold tracking-[1.5px] text-primary"
                                    >
                                        Submit a request ▸
                                    </button>
                                    
                                </span>
                            ),
                        },
                    ],
                },
            ],
        },
        {
            topic: 'security_confidentiality',
            helper: [
                {
                    title: '',
                    items: [
                        {
                            question:
                                'Can you sign a Confidentiality Agreement?',
                            answer: 'Yes, you can send it over and we will send it back executed.',
                        },
                        {
                            question:
                                'I need a Non-Disclosure Agreement, do you have one?',
                            answer: 'Of course! We do have a non-disclosure agreement. However, if you have another one you can send it over and we will send it back to you executed.',
                        },
                    ],
                },
            ],
        },
        {
            topic: 'account',
            helper: [
                {
                    title: 'Frequently Asked',
                    items: [
                        {
                            question: 'How do I set up an account?',
                            answer: (
                                <span>
                                    Please fill in our{' '}
                                    <a
                                        href="/sign-in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary underline"
                                    >
                                        Registration form.
                                    </a>{' '}
                                    Afterwards, you will receive an email with a
                                    temporary password to log in to your secure
                                    portal.
                                </span>
                            ),
                        },
                        {
                            question: 'I forgot my password, can you help?',
                            answer: (
                                <span>
                                    Sure, please{' '}
                                    <a
                                        href="/new_portal_login"
                                        className="text-primary underline"
                                    >
                                        Click Here
                                    </a>{' '}
                                    to go to our Login portal, click on “Forgot
                                    your password” and follow the instrcutions
                                    for the simple recovery process.
                                </span>
                            ),
                        },
                        {
                            question:
                                'Should I create a separate request for each file or can I upload multiple files at once?',
                            answer: 'All the files in the same ticket will be transcribed in the same document. If you need separate transcriptions per audio file, you can create one ticket per file.',
                        },
                    ],
                },
                {
                    title: 'Quick Guides',
                    items: [
                        {
                            question:
                                'How to request a Transcript - Step by Step Guide',
                            answer: (
                                <span>
                                    Read this Step by Step Guide if you are not
                                    yet familiar with the process of uploading
                                    your audios, setting them up your and
                                    requesting a transcript. <br />
                                    <a
                                        href="/guide/ticket"
                                        className="text-primary underline"
                                    >
                                        Read More
                                    </a>
                                </span>
                            ),
                        },
                        {
                            question:
                                'How to search for a Ticket / Transcript - Step by Step Guide',
                            answer: (
                                <span>
                                    Finding your Tickets is quite simple. Read
                                    this Two minutes Guide to learn more about
                                    it. <br />
                                    <a
                                        href="/guide/search-for-a-ticket"
                                        className="text-primary underline"
                                    >
                                        Read More
                                    </a>
                                </span>
                            ),
                        },
                    ],
                },
            ],
        },
        {
            topic: 'helpful-articles',
            helper: [
                {
                    title: 'Transcription',
                    items: [
                        {
                            question:
                                'Accepted File Formats for Transcription ',
                            tooltip:
                                ' Files are  accepted in all formats of audio/video, including: .mp3,.msv, .wma .mp4, .mov',
                            href: '/guide/audio-file-formats',
                        },
                        {
                            question:
                                ' How important is Data Management for Qualitative Research ?',
                            href: '/guide/data-management',
                        },
                        {
                            question:
                                ' Using AtlasTI for qualitative data analysis ',
                            tooltip:
                                '  Set up a project on Atlas TI Cloud, add insights and analyze your qualitative research. ',
                            href: '/guide/atlasti',
                        },
                    ],
                },
                {
                    title: 'Remote Recordings',
                    items: [
                        {
                            question:
                                'Recording your meeting in Microsoft Teams. ',
                            tooltip:
                                '  Record your Microsoft Teams meeting and download your meeting audio files.',
                            href: '/guide/microsoft-teams',
                        },
                        {
                            question: ' Using Zoom for Qualitative Research ',
                            href: '/guide/using-zoom-for-qualitative-research',
                            tooltip:
                                ' Schedule a Zoom meeting, record your Zoom meeting and download your meeting audio file from Zoom.',
                        },
                    ],
                },
                {
                    title: 'Navigation',
                    items: [
                        {
                            question:
                                " How to request a Transcript on Landmark's Platform ",
                            tooltip:
                                ' Learn how to upload your audios, set them up your and request a transcript.',
                            href: '/guide/ticket',
                        },
                        {
                            question: '  How to search for a Ticket ',
                            tooltip:
                                ' Find all your Tickets on your personal Dashboard, save them in folders and download them whenever you need to.',
                            href: '/guide/search-for-a-ticket',
                        },
                    ],
                },
                {
                    title: 'Payment Methods and Terms',
                    items: [
                        {
                            question: '  Invoicing ',
                            tooltip:
                                '  Find the information regarding  our invoicing process, invoicing terms and contracts.',
                            href: '/guide/invoicing',
                        },
                        {
                            question: '   How to Pay Online ',
                            tooltip: '',
                            href: '',
                        },
                        {
                            question: 'Selecting a Payment Method',
                            tooltip:
                                ' We have different options to accomodate to your projects needs (ACH, Online payment, Checks and more.)',
                            href: '/guide/payment-methods',
                        },
                    ],
                },
            ],
        },
    ]
    const [selected, setSelected] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [helper, setHelper] = useState()

    const query = useQuery()

    useEffect(() => {
        if (!query) {
            return
        }
        setSelected(
            topics[topics.findIndex((topic) => topic.topic === query.topic)]
        )
        setHelper(
            helpers[helpers.findIndex((helper) => helper.topic === query.topic)]
        )
        setIsLoading(false)
    }, [query])

    const topicSelect = (index) => {
        setSelected(topics[index])
        setHelper(helpers[index])
        router.push(
            {
                pathname: '/help-center/hc',
                query: { topic: topics[index].topic },
            },
            undefined,
            { shallow: true }
        )
    }

    return (
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <HelpLayout title="Help - Transcription | Landmark">
                    <HelpBreadCrumb breadcrumb={selected.breadcrumb} />
                    <Container>
                        <div className="relative z-10 gap-10 md:flex">
                            <div className="md:w-1/3">
                                <HelpSide
                                    selected={selected}
                                    topicSelect={topicSelect}
                                />
                            </div>
                            <div className="md:w-2/3">
                                <Helpers helpers={helper} />
                            </div>
                        </div>
                        {query.topic === 'helpful-articles' && (
                            <div className="mt-[140px] justify-between gap-10 md:flex">
                                <div className="md:w-1/3">
                                    <p className="mb-5 mb-5 text-[16px] font-medium">
                                        Most popular
                                    </p>
                                    <ul>
                                        <li>
                                            <a
                                                href="/guide/ticket"
                                                className="text-[14px] leading-8 tracking-[1px] text-mainText transition duration-300  ease-in-out hover:text-border"
                                            >
                                                How to request a Transcript -
                                                Step by Step Guide
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/guide/invoicing/"
                                                className="text-[14px] leading-8 tracking-[1px] text-mainText transition duration-300  ease-in-out hover:text-border"
                                            >
                                                Invoicing
                                            </a>
                                        </li>
                                        <li>
                                            {' '}
                                            <a
                                                href="/guide/payment-methods"
                                                className="text-[14px] leading-8 tracking-[1px] text-mainText transition duration-300  ease-in-out hover:text-border"
                                            >
                                                Payment Methods
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="md:w-1/3"></div>
                                <div className="md:w-1/3">
                                    <p className="mb-5 mb-5 text-[16px] font-medium">
                                        Contact Us
                                    </p>
                                    <p className="text-[14px] text-mainText">
                                        We want to hear you. Leave a message or
                                        enter your phone number and we will
                                        contact you for immediate assistance.
                                    </p>
                                    <Button
                                     onClick={()=>handleClick('https://thelai.typeform.com/to/s0ljN9')}
                                        variant="outline"
                                        className="mt-10 w-fit border  border-[#54595f] px-[36px] py-[8px]  md:block"
                                    >
                                        <span className="text-[12px] tracking-[1px] text-border">
                                            Get in touch ▸
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        )}
                    </Container>
                    <Drawer
                        open={isContactOpen}
                        onRequestClose={() =>
                            setContactOpend(
                                !isContactOpen
                            )
                        }
                        direction="left"
                        modalElementClass='w-[90%] md:w-1/2 ml-auto z-30'
                    >
                        <div className="h-screen bg-white z-20">
                            <iframe
                                src={formSrc}
                                frameborder="0"
                                className='w-full h-[90%] pb-10'
                            ></iframe>
                        </div>
                    </Drawer>
                </HelpLayout>
            )}
        </>
    )
}
