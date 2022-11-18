import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

import { Button } from '@/components/common/Button'
import waveBack from '@/images/backgrounds/wave-back.svg'
import privateImg from '@/images/backgrounds/foreign-login.png'

export function Handle() {
    return (
        <div className="relative overflow-hidden">
            <Image
                src={waveBack}
                className="absolute h-[180px] w-full origin-top scale-[1.8]"
                alt=""
            />
            <Container className="relative pt-20 pb-16 text-center md:pt-[140px] md:text-left">
                <div className="md:flex md:px-10">
                    <div className="md:w-[47%] ">
                        <h1 className="mb-6 font-poppins text-[32px] font-semibold  sm:text-[48px]">
                            We handle your Research Data with the care it
                            deserves
                            <span className="anim-typewriter text-primary">
                                {' '}
                                |
                            </span>
                        </h1>
                        <p className="text-[17px] text-mainText md:pr-16">
                            Data security and privacy are of the utmost
                            importance here at Landmark Associates; hence our
                            system was designed based on the best practices of
                            other leading technology firms and offers our{' '}
                            <a
                                href="/clients"
                                className="text-primary underline"
                            >
                                {' '}
                                clients
                            </a>{' '}
                            the best environment for their data.
                        </p>
                        <Button
                            href="/sign-in"
                            color="primary"
                            className="mt-6 bg-primary py-[12px] px-[44px] font-poppins text-[17px] font-semibold tracking-[0.8px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
                        >
                            <span>Try it free</span>
                        </Button>
                    </div>
                    <div className="flex items-center md:w-[53%]">
                        <Image
                            src={privateImg}
                            className="md: m-auto mt-10 w-[70%] rounded-2xl md:mt-0"
                            alt=""
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}
