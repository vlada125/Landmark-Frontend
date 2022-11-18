import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

import { Button } from '@/components/common/Button'
import waveBack from '@/images/backgrounds/wave-back.svg'
import gif from '@/images/gifs/Landmark-welcome.gif'
import team from '@/images/backgrounds/Landmark_04-01-01-1024x1024.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import { faCalendarPlus, faCreditCard } from '@fortawesome/free-solid-svg-icons'

export function Apply() {
    const specializes = [
        {
            icon: faCalendarPlus,
            title: 'Flexible Work Schedule',
            description: 'You decide when and where to work. ​',
        },
        {
            icon: faCreditCard,
            title: 'Transparent Compensation​',
            description:
                'Vendors are compensated based on the length of the recorded audio file.​ ​',
        },
        {
            icon: faSearchengin,
            title: 'Interesting Topics​',
            description:
                "We specialize in research projects. We'll make sure to send you work of your interest.​ ​",
        },
    ]
    return (
        <div className="relative overflow-hidden">
            <Image
                src={waveBack}
                className="absolute h-[180px] w-full origin-top scale-[1.8]"
                alt=""
            />
            <Container className="relative py-[140px] text-center md:text-left">
                <div className="items-center md:flex md:px-10">
                    <div className="md:w-[60%] ">
                        <h1 className="mb-10 font-poppins text-[32px] font-semibold  leading-[1.5em] md:text-[48px]">
                            Are you an Australian transcriptionist looking to
                            earn money while working from home ?
                        </h1>
                        <div className="justify-between md:flex">
                            <Button
                                href="#apply"
                                color="primary"
                                className="mt-6 bg-primary py-[10px] px-[56px] font-poppins  text-[14px] font-semibold tracking-[1.2px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
                            >
                                <span>Apply Now</span>
                            </Button>
                            <Button
                                href="https://form.typeform.com/to/rZ8HDhrG?typeform-medium=embed-snippet"
                                variant="outline"
                                className="mt-6 border-[1px] border-primary bg-white py-[10px] px-[36px] font-poppins  text-[14px] font-semibold tracking-[1.2px] text-primary transition  duration-300 ease-in-out hover:text-primaryHover md:mr-20"
                            >
                                <span>Request more info</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center md:w-[40%]">
                        <Image
                            src={team}
                            className="m-auto mt-10 w-[90%] rounded-2xl md:mt-0"
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-28 gap-5 md:flex">
                    {specializes.map((specialize, index) => (
                        <div
                            className="mt-8 text-center md:mt-0 md:w-1/3"
                            key={index}
                        >
                            <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary">
                                <FontAwesomeIcon
                                    icon={specialize.icon}
                                    size="2xl"
                                    color="#fff"
                                />
                            </div>
                            <h1 className="py-6 font-poppins text-[20px] font-semibold">
                                {specialize.title}
                            </h1>
                            <p className="text-[16px] font-normal text-mainText">
                                {specialize.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
