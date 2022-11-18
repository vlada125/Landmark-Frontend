import Image from 'next/future/image'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'

import waveBack from '@/images/backgrounds/wave-back.svg'

export function GetStart() {
    return (
        <div className="relative overflow-hidden">
            <Image
                src={waveBack}
                className="absolute h-[180px] w-full origin-top scale-[1.8]"
                alt=""
            />
            <Container className="relative  pt-[40px] pb-16 text-center md:pt-[70px] md:text-left">
                <div className="text-center ">
                    <h1 className="mb-8 font-poppins text-[32px] font-semibold md:text-[38px] ">
                        Upload your files immediately. No credit card required.
                    </h1>
                    <p className="text-[17px] leading-8 text-mainText md:text-[19px]">
                        We accept all different forms of &nbsp;
                        <span>
                            <a href="/guide/payment-methods" className="text-primary underline">
                                payments
                            </a>
                        </span>{' '}
                        to accommodate your project’s needs.
                    </p>
                </div>
                <div className="mt-10 items-center justify-center gap-10 md:flex">
                    <Button
                        href="/sign-in"
                        color="primary"
                        className="bg-primary py-[10px] px-[36px] text-[16px] font-medium tracking-[0.8px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
                    >
                        <span>Get started</span>
                    </Button>
                    <Button
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        variant="outline"
                        className="my-[12px] border border-[#54595f] py-[10px] px-[36px] text-[15px] font-medium tracking-[0.8px] text-border md:block"
                    >
                        <span>Get a customized quote</span>
                    </Button>
                </div>
            </Container>
        </div>
    )
}
