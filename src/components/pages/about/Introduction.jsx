import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

import waveBack from '@/images/backgrounds/wave-back.svg'

export function Introduction() {
    return (
        <div className="relative overflow-hidden">
            <Image
                src={waveBack}
                className="absolute h-[180px] w-full origin-top scale-[1.8]"
                alt=""
            />
            <Container className="relative pt-[40px] pb-16 text-center md:pt-[140px] md:text-left">
                <div className="text-center sm:px-[8%]">
                    <h1 className="mb-8 font-poppins text-[26px] font-semibold md:text-[42px] ">
                        The leading provider of transcription services for
                        qualitative research.
                    </h1>
                    <p className="text-[17px] leading-8 text-mainText">
                        Landmark Associates is the platform trusted by over{' '}
                        <strong>3,300 professionals</strong> who work with
                        qualitative data. From world-class universities to
                        government agencies and research focused non-profit
                        organizations, thousands of people use Landmark to
                        transcribe their data through a secure platform with 99%
                        guaranteed accuracy.
                    </p>
                </div>
            </Container>
        </div>
    )
}
