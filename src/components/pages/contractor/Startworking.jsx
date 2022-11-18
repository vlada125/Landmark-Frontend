import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

import { Button } from '@/components/common/Button'
import waveBack from '@/images/backgrounds/wave-back.svg'
import gif from '@/images/gifs/Landmark-welcome.gif'
import team from '@/images/backgrounds/Landmark_04-01-01-1024x1024.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import { faCalendarPlus, faCreditCard } from '@fortawesome/free-solid-svg-icons'

export function StartWorking() {
    const steps = [
        {
            title: 'Take the topicSelect',
            description:
                'Please start by completing the transcription test. Click on the links and download the documents and audio files to your hard drive.',
            links: [
                {
                    text: '01.Instructions',
                    href: '/wp-content/uploads/2020/12/Instructions-landmark-aus.pdf',
                },
                {
                    text: '02.Audio Test',
                    href: '/wp-content/uploads/2020/12/LAI-TEST-Aus.mp3',
                },
                {
                    text: '03.Landmark Template',
                    href: '/wp-content/uploads/2019/08/LandmarkAssociatesTempate-1.doc',
                },
            ],
        },
        {
            title: 'Answer our questionnaire',
            description:
                'Answer a short questionnaire about your experience, previous clients, equipment, time availability, and upload your test.',
            links: [
                {
                    text: 'Contractor’s questionnaire ▸',
                    href: 'https://thelai.typeform.com/to/r6DVMs',
                },
            ],
        },
    ]
    return (
        <div className="bg-[#fafafa]">
            <Container className="relative py-20 text-center md:text-left">
                <div className="md:px-[10%]">
                    <h1 className="mb-10 text-center font-poppins text-[32px] font-semibold  leading-[1.5em] md:text-[48px]">
                        Start working with us in 2 easy steps
                    </h1>
                    <p className="text-center text-[17px] text-mainText md:px-[120px]">
                        Please follow the steps below, notice that we are
                        currently working only with transcriptionists based in
                        Australia.
                    </p>
                    <div className="mt-10 flex flex-col gap-20 md:flex-row md:px-20">
                        {steps.map((step, index) => (
                            <div
                                className="min-h-full rounded-md p-5 text-left    shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-1/2 md:p-10"
                                key={index}
                            >
                                <span className="text-[28px] text-primary">
                                    0{index + 1}. &nbsp;
                                </span>
                                <span className="font-poppins text-[22px] font-semibold">
                                    {step.title}
                                </span>
                                <p className="mb-5 text-[15px] text-mainText">
                                    {step.description}
                                </p>
                                {step.links.map((link, k) => (
                                    <p className="text-[14px] leading-10 underline">
                                        <a href={link.href} target="_blank">
                                            {link.text}
                                        </a>
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
