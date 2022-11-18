import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

import { Button } from '@/components/common/Button'
import waveBack from '@/images/backgrounds/wave-back.svg'
import gif from '@/images/gifs/aus-gifi.gif'

export function Hero() {
    return (
        <div className="relative overflow-hidden">
            <Image
                src={waveBack}
                className="absolute h-[180px] w-full origin-top scale-[1.8]"
                alt=""
            />
            <Container className="lg:pt-26 relative pt-20 pb-16 text-center md:text-left">
                <div className="md:flex md:px-10">
                    <div className="md:w-[47%] ">
                        <h1 className="mb-6 font-poppins text-[32px] font-semibold  sm:text-5xl">
                            Secure Human Transcription and Translation
                            <span className="anim-typewriter text-primary">
                                {' '}
                                |
                            </span>
                        </h1>
                        <p className="text-[19px] text-mainText md:pr-16">
                            The platform used by professionals to transcribe and
                            translate high-quality research in over 25
                            languages.
                        </p>
                        <Button
                            href="/sign-in"
                            color="primary"
                            className="mt-6 bg-primary py-[14px] px-[94px] font-poppins text-[18px] font-semibold tracking-[0.8px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
                        >
                            <span>Try it free</span>
                        </Button>
                        <p className="my-5 text-center text-mainText md:ml-[58px] md:text-left">
                            No credit card required
                        </p>
                    </div>
                    <div className="flex items-center md:w-[53%]">
                        <Image
                            src={gif}
                            className="m-auto w-[90%] rounded-2xl"
                            alt=""
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}
