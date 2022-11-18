import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

import cropTicket from '@/images/backgrounds/crop-ticket-1536x961.png'
import foreignLogin from '@/images/backgrounds/foreign-login.png'
import onhold2 from '@/images/gifs/onhold2.gif'
import transcription from '@/images/backgrounds/landmark-associates-transcription-and-translation.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export function OrgDescription() {
    const detailData = [
        {
            title: 'Enterprise-grade data protection',
            detail: [
                'Meet compliance needs and regulatory requirements',
                'Secure your data with Fortune 500 technology and strong multi-factor encryption​',
                'Rest assured Landmark is using industry-accepted best practices and frameworks',
            ],
            img: foreignLogin,
        },
        {
            title: 'Created to meet the needs of research organizations',
            description:
                'Organizations around the world trust Landmark as their home for transcribing projects, especially when they need to meet the highest standards.',
            detail: [
                '99% Accuracy guaranteed',
                'Native English speaking transcriptionists​',
                'All audio/ video formats accepted​',
                'Designated Account Executive',
                'User friendly & secure platform',
            ],
            img: onhold2,
        },
        {
            title: 'Work with research partners, securely.​',
            detail: [
                'Retain data security practices while collaborating with trusted partners​',
                'Work with partners in a single place​',
                'Reduce context switching, increase transparency and speed up work​',
            ],
            img: transcription,
        },
    ]
    function DetailComponent({ props, reverse }) {
        console.log(reverse)
        return (
            <div
                className={`flex-col py-10 ${
                    reverse ? ' md:flex-row-reverse' : 'md:flex-row'
                } flex items-center md:py-8`}
            >
                <div className=" flex items-center md:w-1/2">
                    <div className="my-5 md:my-0 md:px-4">
                        <h2 className="mb-8 font-poppins text-[36px] font-semibold ">
                            {props.title}
                        </h2>
                        <p className="mb-4 text-[17px] leading-8 text-mainText">
                            {props.description}
                        </p>
                        {props.detail.map((item, index) => (
                            <div className="flex items-center" key={index}>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    size="xl"
                                    color="#CF2231"
                                />
                                <p className="ml-2 py-2 text-left text-[17px] text-mainText">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center md:flex md:w-1/2">
                    <Image
                        src={props.img}
                        className={`m-auto ${
                            !reverse
                                ? 'rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-[90%]'
                                : 'md:w-[70%] '
                        }`}
                        alt=""
                    />
                </div>
            </div>
        )
    }
    return (
        <Container className="relative py-10 text-center md:text-left">
            <div className="md:flex md:px-10">
                <div className="md:w-[54%]">
                    <h1 className="mb-10 font-poppins text-[32px] font-semibold  sm:text-[36px]">
                        We have worked with numerous universities, government
                        agencies and research focused non-profit organizations.
                    </h1>
                </div>
                <div className="flex items-center md:w-[46%]">
                    <Image
                        src={cropTicket}
                        className="m-auto w-[80%] rounded-2xl"
                        alt=""
                    />
                </div>
            </div>
            <div className="mt-14 md:flex">
                <div className="hidden md:block md:w-[20%]">
                    <div className="mr-5 h-[55px] border-r-[7px] border-primary"></div>
                </div>
                <div className=" md:w-[80%]">
                    <p className="text-[17px] italic leading-8 text-mainText">
                        “I knew I wanted to outsource the task of transcribing
                        for my PhD. I also knew I wanted humans to transcribe
                        for me rather than a machine as I have found the latter
                        to be inaccurate. After I received an automated email
                        from Landmark Associates on my staff account (
                        <strong>@newcastle.edu.au</strong>), I rang Jenna to
                        learn more about the service and{' '}
                        <strong>Landmark ticked all of the boxes.</strong> ”​
                    </p>
                    <p className="mt-8 text-[16px]  text-mainText">
                        <strong>The University of Newcastle</strong>
                    </p>
                    <p className="mt-2 text-[15px] text-border">
                        De-identified Client
                    </p>
                </div>
            </div>
            <div className="py-10 ">
                {detailData.map((h, i) => (
                    <DetailComponent
                        key={i}
                        props={h}
                        reverse={i % 2 === 0 ? true : false}
                    />
                ))}
            </div>
        </Container>
    )
}
