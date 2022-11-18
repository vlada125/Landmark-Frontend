import Image from 'next/future/image'
import { HelpLayout } from '@/components/layout/HelpLayout'
import { HelpBreadCrumb } from '@/components/pages/help-center/HelpBreadcrumb'
import GuideLeft from '@/components/pages/guide/guideLeft'
import { Container } from '@/components/common/Container'
import GuideBottom from '@/components/pages/guide/guidBottom'
import acceptfile from '@/images/gifs/accept-file-format.gif'
import { GetQuote } from '@/components/pages/home/GetQuote'
import cornerArrow from '@/images/icons/corner-arrow.svg'
import { Button } from '@/components/common/Button'

export default function AudioFileFormats() {
    return (
        <HelpLayout title="Help - Audio File Formats | Landmark">
            <HelpBreadCrumb breadcrumb="Audio File Formats" />
            <Container>
                <div className="mb-20 md:flex md:gap-20">
                    <div className="hidden  md:block md:w-1/3">
                        <GuideLeft />
                    </div>
                    <div className="relative md:w-2/3">
                        <div className="  text-[15px] text-mainText  md:rounded-2xl md:border-[1px]  md:border-[#ddd] md:bg-white md:p-[56px]">
                            <h1 className="text-[22px] font-medium">
                                Accepted Audio File Formats
                            </h1>
                            <h2 className="mt-16 text-[19px] font-medium ">
                                What file formats can you accept, and how large
                                can my files be?
                            </h2>
                            <p className="py-10">
                                Files are accepted in all formats of
                                audio/video, including:
                            </p>
                            <div className="items-center md:flex md:gap-5">
                                <div className="text-[15px] leading-[44px] md:w-1/5">
                                    <p>• AAC</p>
                                    <p>• AIF</p>
                                    <p>• AMR</p>
                                    <p>• AVI</p>
                                    <p>• MP3</p>
                                    <p>• MP4</p>
                                    <p>• M4A</p>
                                    <p>• MOV</p>
                                    <p>• OGG</p>
                                    <p>• VOB</p>
                                    <p>• WAV</p>
                                    <p>• WMA</p>
                                    <p>• WMV</p>
                                </div>
                                <div className="md:w-4/5">
                                    <Image
                                        src={acceptfile}
                                        alt=""
                                        className="ml-auto rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                                    />
                                </div>
                            </div>
                            <p className="py-10">
                                We can also accept URLs to a file as long as
                                they are publicly accessible and the file is
                                downloadable.
                            </p>
                            <h2 className="text-[19px] font-medium">
                                Uploading large or multiple audio files
                            </h2>
                            <p className="py-10">
                                When attempting to upload very large files or
                                multiple files for a single ticket, time spent
                                for this process will be directly affected by
                                the speed of your internet connection.
                            </p>
                            <span className="py-10">
                                <strong>
                                    Landmark offers a free service to upload
                                    your files,
                                </strong>{' '}
                                if you require this service please contact us
                                through online chat (lower right corner{' '}
                                <Image
                                    src={cornerArrow}
                                    alt=""
                                    className="inline w-[1em]"
                                />
                                ). One of our executives will be pleased to
                                assist you
                            </span>
                            <div className="mt-10 mb-4 w-full rounded-lg border-b-[1px] border-b-[#ddd] p-5 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]">
                                <Button
                                    href="/new_portal_login"
                                    className="rounded-[3px] border-none bg-[#7a7a7a2b] py-[4px] px-[16px] text-[13px] tracking-[1px] text-border"
                                >
                                    <span className="">Attention</span>
                                </Button>
                                <p className="py-4 leading-8">
                                    If you’re tasked with{' '}
                                    <strong>
                                        securing personal health information
                                        (PHI)
                                    </strong>
                                    , please get in touch with us before
                                    uploading your files.You may contact us via
                                    phone (480-922-1105), email or chat (bottom
                                    right corner{' '}
                                    <Image
                                        src={cornerArrow}
                                        alt=""
                                        className="inline w-[1em]"
                                    />
                                    ).
                                </p>
                            </div>
                            <hr />
                        </div>
                        <GuideBottom />
                    </div>
                </div>
            </Container>
            <GetQuote />
        </HelpLayout>
    )
}
