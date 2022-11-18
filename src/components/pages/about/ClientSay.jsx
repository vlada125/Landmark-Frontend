import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

export function ClientSay() {
    return (
        <div className="bg-grayBack">
            <Container className="relative pt-[40px] pb-16 text-center md:pt-[140px] md:text-left">
                <div className="text-center md:px-[10%]">
                    <h1 className="mb-8 font-poppins text-[26px] font-semibold md:text-[36px] ">
                        What our clients have to say…
                    </h1>
                </div>
                <div className="text-left">
                    <div className="mt-20 md:flex">
                        <div className="hidden md:block md:w-[10%]">
                            <div className="mr-5 h-[55px] border-r-[7px] border-primary"></div>
                        </div>
                        <div className=" md:w-[90%]">
                            <p className="text-[17px] italic leading-8 text-mainText">
                                “I knew I wanted to outsource the task of
                                transcribing for my PhD. I also knew I wanted
                                humans to transcribe for me rather than a
                                machine as I have found the latter to be
                                inaccurate. After I received an automated email
                                from Landmark Associates on my staff account{' '}
                                <strong>(@newcastle.edu.au)</strong>, I rang
                                Jenna to learn more about the service and{' '}
                                <strong>
                                    Landmark ticked all of the boxes.
                                </strong>
                                ”​
                            </p>
                            <p className="mt-8 text-[16px]">
                                <strong>The University of Newcastle</strong>
                            </p>
                            <p className="mt-2 text-[15px] text-border">
                                Researcher at the University of Newcastle
                            </p>
                        </div>
                    </div>
                    <div className="mt-14 md:flex">
                        <div className="hidden md:block md:w-[25%]">
                            <div className="mr-5 h-[55px] border-r-[7px] border-primary"></div>
                        </div>
                        <div className=" md:w-[75%]">
                            <p className="text-[17px] italic leading-8 text-mainText">
                                “I think the transcript looks great and I think
                                the platform is very user friendly. I'm very
                                happy with the service ”​
                            </p>
                            <p className="mt-8 text-[16px]">
                                <strong>
                                    Australian Centre for Health Engagement
                                </strong>
                            </p>
                            <p className="mt-2 text-[15px] text-border">
                                Researcher at the Australian Centre for Health
                                Engagement
                            </p>
                        </div>
                    </div>
                    <div className="mt-20 md:flex">
                        <div className="hidden md:block md:w-[10%]">
                            <div className="mr-5 h-[55px] border-r-[7px] border-primary"></div>
                        </div>
                        <div className=" md:w-[90%]">
                            <p className="text-[17px] italic leading-8 text-mainText">
                                "I was incredibly impressed with Landmark so I
                                will be using again and you’ll be the first name
                                I pass along to other looking for transcription.
                                "
                            </p>
                            <p className="mt-8 text-[16px]">
                                <strong>The University of Newcastle</strong>
                            </p>
                            <p className="mt-2 text-[15px] text-border">
                                Researcher at the University of Newcastle
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 pt-10 text-center md:py-20">
                    <h1 className="mb-8 font-poppins text-[26px] font-semibold md:text-[36px] ">
                        Our team’s goal is to provide researchers, students and
                        professionals with quality transcription services in a
                        timely and sustainable manner.
                    </h1>
                </div>
            </Container>
        </div>
    )
}
