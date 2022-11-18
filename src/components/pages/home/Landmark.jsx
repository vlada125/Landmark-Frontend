import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

import gif from '@/images/gifs/signup-gifi.gif'

export function Landmark() {
    return (
        <>
            <Container className=" relative py-10 text-center md:text-left">
                <div className="flex flex-col-reverse md:flex-row md:px-10">
                    <div className="flex items-center md:flex md:w-1/2">
                        <Image
                            src={gif}
                            className="m-auto rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-[70%]"
                            alt=""
                        />
                    </div>
                    <div className="flex items-center md:w-1/2">
                        <div className="my-5 md:my-0 md:px-4">
                            <h1 className="mb-6 font-poppins text-[32px] font-semibold  sm:text-[42px]">
                                Landmark can transcribe your Zoom <br />{' '}
                                interviews/focus groups
                            </h1>
                            <p className="py-10 text-[17px] md:text-[19px] text-mainText md:py-0 md:pr-6">
                                Landmark can transcribe all your Zoom, Webex and
                                Teams interviews or focus groups, &nbsp;
                                <a
                                    href="/guide/using-zoom-for-qualitative-research"
                                    className="text-primary underline"
                                >
                                    <strong>click here </strong>
                                </a>
                                to learn more!
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
