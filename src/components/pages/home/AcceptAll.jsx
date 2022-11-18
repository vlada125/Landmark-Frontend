import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

import account from '@/images/backgrounds/Landmark_01-01-1536x1536.png'
import upload from '@/images/backgrounds/Landmark_02-01-1536x1536.png'
import transcript from '@/images/backgrounds/crop-ticket-1536x961.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export function AcceptAll() {
    const accepData = [
        {
            title: 'Create an account',
            detail: [
                'Easy to navigate, online platform',
                'Powered by Amazon Web Services & Salesforce',
                'Live support available by phone, email and chat',
            ],
            link: 'Create an account',
            href1: '/sign-in',
            href2: '/sign-in',
            img: account,
        },
        {
            title: 'Upload your media files',
            detail: [
                'Files encrypted both in motion and in rest',
                'We accept files in any format​',
                'Choose your transcript instructions​',
            ],
            link: 'Security and Confidentiality',
            img: upload,
            href1: '/sign-in',
            href2: '/security-and-confidentiality',
        },
        {
            title: 'Get your transcripts​',
            detail: [
                'Completed by professional transcriptionists​',
                'Files delivered in your desired format​',
                'Services in the language of your choice​',
            ],
            img: transcript,
            href1: '/sign-in',
        },
    ]
    function AcceptComponent({ props, reverse }) {
        console.log(reverse)
        return (
            <div
                className={`flex-col  ${
                    reverse ? ' md:flex-row-reverse' : 'md:flex-row'
                } flex items-center md:py-8`}
            >
                <div className=" flex items-center md:w-1/2">
                    <div className="my-5 md:my-0 md:px-4">
                        <a
                            className="mb-6 font-poppins text-[24px] font-semibold  transition duration-300 ease-in-out hover:text-primary sm:text-[28px]"
                            href={props.href1}
                        >
                            {props.title}
                        </a>
                        {props.detail.map((item, index) => (
                            <div className="flex items-center" key={index}>
                                <FontAwesomeIcon icon={faCheck} color='#CF2231' />
                                <p className="ml-3 py-3 text-[18px] md:text-[19px] text-mainText">
                                    {item}
                                </p>
                            </div>
                        ))}

                        {props.link && (
                            <a
                                className="flex cursor-pointer items-center py-3 font-roboto text-[14px] font-medium tracking-[1.5px] text-primary transition duration-300 ease-in-out hover:text-primaryHoverText md:text-[17px]"
                                href={props.href2}
                            >
                                {props.link}
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
                        )}
                    </div>
                </div>
                <div className="flex items-center md:flex md:w-1/2">
                    <Image
                        src={props.img}
                        className="m-auto md:w-[70%]"
                        alt=""
                    />
                </div>
            </div>
        )
    }
    return (
        <Container className=" relative py-10 md:text-left">
            <div className="text-center">
                <h1 className="mb-6 font-poppins text-[32px] font-semibold sm:text-[42px]">
                    We accept all audio/video formats
                </h1>
                <p className="py-10 text-[17px] md:text-[19px] text-mainText md:py-0 md:pr-6">
                    We accept all audio/video formats. &nbsp;
                    <a
                        href="/accepted-file-formats"
                        className="text-primary underline"
                    >
                        <strong>Click here </strong>
                    </a>
                    for more information.
                </p>
            </div>
            <div className="px-5 py-10 md:px-24">
                {accepData.map((h, i) => (
                    <AcceptComponent
                        key={i}
                        props={h}
                        reverse={i % 2 === 1 ? true : false}
                    />
                ))}
            </div>
        </Container>
    )
}
