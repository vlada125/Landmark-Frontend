import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

import encryption from '@/images/backgrounds/two-factor-verification.png'

export function Encryption() {
    return (
        <Container className="lg:pt-26 relative pt-20 pb-16 text-center md:text-left">
            <div className="items-center md:flex">
                <div className="md:w-1/2">
                    <h1 className="mb-6 font-poppins text-[32px] font-semibold md:text-[36px] ">
                        SSL Data Encryption
                        <span className="anim-typewriter text-primary"> |</span>
                    </h1>
                    <p className="px-3 text-sm text-[17px] leading-7 text-mainText md:px-0">
                        Our system employs strong multi-factor encryption
                        through Amazon’s S3-managed encryption keys.
                        <br />
                        <br />
                        <strong>
                            Each file is encrypted with a unique key,{' '}
                        </strong>
                        <span>
                            which is also encrypted by a separate master key
                            which rotates regularly.
                        </span>
                    </p>
                    <a
                        className="mx-auto mt-5 flex w-fit items-center py-3 font-roboto text-[14px] font-medium tracking-[1.5px] text-primary transition duration-300 ease-in-out hover:text-primaryHoverText md:mx-0 md:text-[17px]"
                        href="/security-and-confidentiality"
                    >
                        Learn more about security
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-arrow-right ml-4 w-[20px] text-primary "
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src={encryption}
                        alt=""
                        className="ml-auto w-[70%]"
                    />
                </div>
            </div>
        </Container>
    )
}
