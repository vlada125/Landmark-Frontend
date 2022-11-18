import Image from 'next/future/image'
import { Container } from '@/components/common/Container'
//import sampleaudio from '@/assets/uploads/lai.mp3'
//import pdffile from '@/assets/uploads/Strict-Verbatim-Language-Capture.pdf'
import ReactAudioPlayer from 'react-audio-player'

import waveBack from '@/images/backgrounds/wave-back.svg'
import pdf from '@/images/icons/pdf.jpg'
import capture1 from '@/images/gifs/sv.gif'
import capture2 from '@/images/screenshots/contacts.png'
export function FormatingExample() {
    const captures = [
        {
            title: 'Strict-Verbatim Language Capture',
            tooltip: capture1,
            description:
                'Word-for-word capture including all non-verbal sounds or fillers such as um’s, ah’s, uh’s as well as stutters, stammers, repetitions and false starts.',
            link: '/uploads/Strict-Verbatim-Language-Capture.pdf',
        },
        {
            title: 'Non Verbatim Language Capture',
            tooltip: capture2,
            description:
                'Non Verbatim Language Capture Not word-for-word capture. Intelligently capturing the meaning by removing all filler words (umm, uhh, ahh, hmm, etc.) as well as false starts, repetitions and stutters.',
            link: '/uploads/Standard-Language-Capture.pdf',
        },
    ]
    return (
        <div className="relative overflow-hidden">
            <Image
                src={waveBack}
                className="absolute h-[180px] w-full origin-top scale-[1.8]"
                alt=""
            />
            <Container className="relative pt-[40px] pb-16 text-center md:pt-[70px] md:text-left">
                <div className="text-center ">
                    <h1 className="mb-8 font-poppins text-[34px] font-semibold md:text-[36px] ">
                        Formatting examples
                    </h1>
                    <p className="text-[17px] leading-8 text-grayText">
                        Files are accepted in all formats of audio/video.
                    </p>
                </div>
                <p className="text- py-10 font-poppins text-[20px] font-medium text-grayText">
                    Audio Sample
                </p>
                <ReactAudioPlayer
                    className="w-full"
                    src="https://landmarktranscription.com.au/wp-content/uploads/2020/12/LAI-TEST-Aus.mp3"
                    controls
                />
                <div className="mt-10 gap-10 py-10 md:flex md:px-24">
                    {captures.map((capture, index) => (
                        <div className="mt-10 rounded-lg border-[1px] border-[rgba(122,122,122,0.29)] p-[24px] text-center transition duration-300  ease-in-out hover:border-primary md:mt-0 md:w-1/2">
                            <p className="mx-auto mt-3 font-poppins text-[19px] font-semibold">
                                {capture.title}
                            </p>
                            <span className="group relative">
                                <span className="-top-26 pointer-events-none absolute left-1/3 w-[200%] -translate-x-1/2 whitespace-nowrap rounded bg-white py-5 px-3 text-white text-mainText opacity-0 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.4)] transition transition duration-300 ease-in-out before:absolute before:left-1/2 before:top-full before:-translate-x-1/2   hover:bg-primaryHover group-hover:opacity-100">
                                    <Image
                                        src={capture.tooltip}
                                        className="mx-auto py-4"
                                    />
                                </span>

                                <span className="underline">
                                    <Image src={pdf} className="mx-auto py-4" />
                                </span>
                            </span>
                            <p className="text-greyText py-10 text-[15px] leading-7">
                                {capture.description}
                            </p>
                            <a
                                href={capture.link}
                                target="_blank"
                                className="text-[15px] text-primary underline"
                            >
                                View example ▸
                            </a>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
