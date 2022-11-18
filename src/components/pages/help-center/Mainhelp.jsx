import Image from 'next/future/image'
import { Container } from '@/components/common/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFileContract,
    faUserCheck,
    faUnlockKeyhole,
    faMoneyCheckAlt,
    faBook,
} from '@fortawesome/free-solid-svg-icons'

import talking from '@/images/icons/lai-talk.png'
import team from '@/images/backgrounds/Landmark_Team.png'

export function MainHelp() {
    return (
        <>
            <Container className="text-center">
                <Image src={talking} className="m-auto w-[92px]" alt="" />
                <h1 className="font-poppins text-[32px] font-semibold md:text-[42px]">
                    Hi. How can we help you?
                </h1>
                <p className="mt-10 mb-3 text-[16px] leading-7 text-mainText">
                    Check out our quick guides on how to upload your files, our
                    various payment methods, among others.
                    <br />
                    Have a look at our FAQ section to solve your simple
                    questions.
                </p>
                <Image src={team} className="m-auto md:w-[50%]" alt="" />
                <div className="gap-10  px-5 md:px-[80px]">
                    <div className="md:flex">
                        <div className="hidden md:block md:w-1/2"></div>
                        <div className="md:w-1/2">
                            <input
                                type="text"
                                className="custom-input w-full "
                                placeholder="Search"
                            />
                            <h1 className="py-6 text-center font-poppins text-[24px] font-semibold tracking-[-0.2px] md:text-[28px]">
                                Common topics
                            </h1>
                        </div>
                    </div>
                    <div className="md:flex md:gap-3 lg:gap-10">
                        <div className="mt-5 rounded-lg border border-[rgba(122,122,122,0.27)] p-5 text-center md:mt-0 md:w-1/2 lg:w-1/5">
                            <a href="/help-center/hc?topic=transcription">
                                <FontAwesomeIcon
                                    icon={faFileContract}
                                    size="3x"
                                    color="#e09900"
                                    //style={{ fontSize: 50, color: '#e09900' }}
                                />
                                <h3 className="mb-2 mt-2 text-center text-[17px] text-mainText">
                                    Transcription
                                </h3>
                            </a>
                        </div>
                        <div className="mt-5 rounded-lg border border-[rgba(122,122,122,0.27)] p-5 text-center md:mt-0 md:w-1/2 lg:w-1/5">
                            <a href="/help-center/hc?topic=account">
                                <FontAwesomeIcon
                                    icon={faUserCheck}
                                    size="3x"
                                    color="#1963d3"
                                />
                                <h3 className="mb-2 mt-2 text-center text-[17px] text-mainText">
                                    Your account
                                </h3>
                            </a>
                        </div>
                        <div className="mt-5 rounded-lg border border-[rgba(122,122,122,0.27)] p-5 text-center md:mt-0 md:w-1/2 lg:w-1/5">
                            <a href="/help-center/hc?topic=security_confidentiality">
                                <FontAwesomeIcon
                                    icon={faUnlockKeyhole}
                                    size="3x"
                                    color="#aa3682"
                                />
                                <h3 className="mb-2 mt-2 text-center text-[17px] text-mainText">
                                    Security and Confidentiality
                                </h3>
                            </a>
                        </div>
                        <div className="mt-5 rounded-lg border border-[rgba(122,122,122,0.27)] p-5 text-center md:mt-0 md:w-1/2 lg:w-1/5">
                            <a href="/help-center/hc?topic=pricing_payment">
                                <FontAwesomeIcon
                                    icon={faMoneyCheckAlt}
                                    size="3x"
                                    color="#00822b"
                                />

                                <h3 className="mb-2 mt-2 text-center text-[17px] text-mainText">
                                    Pricing and Payment
                                </h3>
                            </a>
                        </div>

                        <div className="mt-5 rounded-lg border border-[rgba(122,122,122,0.27)] p-5 text-center md:mt-0 md:w-1/2 lg:w-1/5">
                            <a href="/help-center/hc?topic=helpful-articles">
                                <FontAwesomeIcon
                                    icon={faBook}
                                    size="3x"
                                    color="#FF7B00"
                                />
                                <h3 className="mb-2 mt-2 text-center text-[17px] text-mainText">
                                    Helpful articles
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
