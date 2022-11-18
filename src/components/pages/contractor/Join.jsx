import { useState } from 'react'
import { Container } from '@/components/common/Container'
import Image from 'next/future/image'
import ModalVideo from 'react-modal-video'

import { Button } from '@/components/common/Button'
import { faQuoteLeft, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import videoImg from '@/images/backgrounds/landmark-associates-transcription-and-translation.png'

export function Join() {
    const [vidoOpen, setVideoOpen] = useState(false)
    return (
        <Container className="relative py-20 md:text-left">
            <div className="items-center md:flex">
                <div className="md:w-1/2">
                    <div className="relative ">
                        <Image
                            src={videoImg}
                            alt=""
                            className="mx-auto rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.4)] md:w-[80%]"
                        />
                        <FontAwesomeIcon
                            icon={faCirclePlay}
                            color="#fff"
                            size="6x"
                            className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] cursor-pointer rounded-full shadow-[0px_0px_10px_0px_rgb(0,0,0,0.4)]"
                            onClick={() => setVideoOpen(true)}
                        />
                        <ModalVideo
                            autoplay
                            isOpen={vidoOpen}
                            url="https://ls.thelai.com/wp-content/uploads/2019/03/ContractorSolicitationVideo_3.mp4"
                            onClose={() => setVideoOpen(false)}
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h1 className="mb-10 font-poppins text-[32px] font-semibold  leading-[1.5em] md:text-[42px]">
                        Join Landmark’s Team.​
                    </h1>
                    <p className="text-[17px] text-mainText">
                        Thank you for your interest in working with Landmark
                        Associates. We look forward to hearing from you!
                    </p>
                    <Button
                        href="https://form.typeform.com/to/rZ8HDhrG?typeform-medium=embed-snippet"
                        variant="outline"
                        className="mt-10 ml-5 border-[1px] border-primary bg-white py-[10px] px-[36px]  font-poppins text-[14px] font-semibold tracking-[1.2px] text-primary  transition duration-300 ease-in-out hover:text-primaryHover md:mr-20"
                    >
                        <span>Request more info</span>
                    </Button>
                </div>
            </div>
            <div className="text-center">
                <h1 className="py-20 font-poppins text-[34px] font-semibold md:text-[32px]">
                    What People Say? ​
                </h1>
                <div className="gap-20 md:flex">
                    <div className="text-left md:w-1/2">
                        <FontAwesomeIcon
                            icon={faQuoteLeft}
                            color="#CF2231"
                            size="2xl"
                        />
                        <p className="mt-5">
                            <em className="text-[17px] leading-8 text-mainText">
                                I think you and your company have done a great
                                job setting up the "process" and making it easy
                                to navigate trough tickets, assignments,
                                availability chart, invoicing and more The
                                Salesforce platform as well is a plus to your
                                system workflow.
                            </em>
                        </p>
                        <h1 className="py-5 font-poppins text-[20px] font-semibold">
                            Nancy
                        </h1>
                        <p className="text-[12px] uppercase tracking-[5px] text-border">
                            Translator at the lai​
                        </p>
                    </div>
                    <div className="text-left md:w-1/2">
                        <FontAwesomeIcon
                            icon={faQuoteLeft}
                            color="#CF2231"
                            size="2xl"
                        />
                        <p className="mt-5">
                            <em className="text-[17px] leading-8 text-mainText">
                                I love working with you all. I am feeling a lot
                                more comfortable and I'm enjoying the work.​
                            </em>
                        </p>
                        <h1 className="py-5 font-poppins text-[20px] font-semibold">
                            Gail Sundook​
                        </h1>
                        <p className="text-[12px] uppercase tracking-[5px] text-border">
                            Transcription at the lai​
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
