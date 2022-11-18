import Image from 'next/future/image'
import { HelpLayout } from '@/components/layout/HelpLayout'
import { HelpBreadCrumb } from '@/components/pages/help-center/HelpBreadcrumb'
import GuideLeft from '@/components/pages/guide/guideLeft'
import { Container } from '@/components/common/Container'
import GuideBottom from '@/components/pages/guide/guidBottom'
import { Button } from '@/components/common/Button'
import { GetQuote } from '@/components/pages/home/GetQuote'
import signup from '@/images/gifs/signup-gifi.gif'
import ticket1 from '@/images/gifs/search-ticket1.gif'
import ticket2 from '@/images/gifs/about-gifi.gif'
import ticket3 from '@/images/gifs/ezgif-3-1131c8cb5ed0.gif'
import ticket4 from '@/images/gifs/search-ticket2.gif'
import ticket5 from '@/images/gifs/search-ticket3.gif'
import zoom1 from '@/images/gifs/zoom1.gif'
import zoom2 from '@/images/gifs/zoom2.gif'
import zoom3 from '@/images/screenshots/zoom3.png'
import zoom4 from '@/images/gifs/zoom3.gif'
import zoom5 from '@/images/screenshots/zoom4.png'

export default function SearchForTicket() {
    return (
        <HelpLayout title="Help - How to search for a Ticket | Landmark">
            <HelpBreadCrumb breadcrumb="Search for a ticket" />
            <Container>
                <div className="mb-20 md:flex md:gap-20">
                    <div className="hidden  md:block md:w-1/3">
                        <GuideLeft />
                    </div>
                    <div className="relative md:w-2/3">
                        <div className="  text-[15px] text-mainText  md:rounded-2xl md:border-[1px]  md:border-[#ddd] md:bg-white md:p-[56px]">
                            <h1 className="text-[22px] font-medium">
                                How to search for a ticket
                            </h1>
                            <h2 className="mt-16 text-[19px] font-medium ">
                                1. Go to Tickets
                            </h2>
                            <p className="py-5">
                                Once you have logged in to your portal, please
                                go to your tickets by clicking on the “Tickets”
                                header.
                            </p>
                            <Image
                                src={ticket1}
                                alt=""
                                className="w-full rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                            />
                            <h2 className="mt-8 text-[19px] font-medium">
                                2. General ticket list view
                            </h2>
                            <p className="py-10">
                                You will now be redirected to your tickets list
                                view. Each ticket has information like ID, name,
                                status, etc.
                            </p>
                            <p className="">
                                Please click the title{' '}
                                <strong>“Transcript Name”</strong> to sort the
                                tickets by their name.
                            </p>
                            <p className="py-10">
                                If the arrow on the right side of the title
                                faces down, Transcript Names will be sorted
                                descending and vice-versa.
                            </p>
                            <Image
                                src={ticket2}
                                alt=""
                                className="w-full rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                            />

                            <h2 className="mt-8 text-[19px] font-medium">
                                3. Search for tickets alphabetically
                            </h2>
                            <p className="py-5">
                                On your dashboard, you will find an alphabet on
                                top of your ticket list view. Click on the
                                initial letter of the title for the ticket that
                                you wish to see.
                            </p>
                            <p className="py-5">
                                (
                                <strong>
                                    <em>e.g.</em>
                                </strong>
                                <em>
                                    {' '}
                                    If you are looking for the ticket “Climate
                                    Change Impacts in the United States”, click
                                    on the letter “C”.)
                                </em>
                            </p>
                            <Image
                                src={ticket3}
                                alt=""
                                className="w-full rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                            />

                            <h2 className="mt-8 text-[19px] font-medium">
                                3. Search by folder
                            </h2>
                            <p className="py-5">
                                If you previously saved your ticket in a folder,
                                please click “Folders” on the header section of
                                your dashboard.
                            </p>
                            <p className="py-5">
                                Click on the folder you saved the ticket you are
                                looking for.
                            </p>
                            <Image
                                src={ticket4}
                                alt=""
                                className="w-full rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                            />
                            <p className="py-8">
                                On your folder list view, click on “Download
                                Transcript” in order to download your
                                transcription. If you wish to download all
                                completed tickets for this folder, simply do it
                                by clicking the button “Download All Transcripts
                                in Folder”.
                            </p>
                            <Image
                                src={ticket5}
                                alt=""
                                className="w-full rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                            />
                            <h2 className="mt-8 text-[19px] font-semibold">
                                Congratulations, you are now able to look for
                                all your tickets!
                            </h2>
                            <div className="flex items-center justify-center gap-20 mt-10">
                                <Button
                                    href="/sign-in"
                                    color="primary"
                                    className="bg-primary py-[10px] px-[32px] font-medium tracking-[1.5px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
                                >
                                    <span>Become a Client</span>
                                </Button>
                                <Button
                                    href="/new_portal_login"
                                    variant="outline"
                                    className="border border-[#54595f] font-medium tracking-[1.5px] py-[10px] px-[40px]"
                                >
                                    <span className="">Client Login</span>
                                </Button>
                            </div>
                        </div>
                        <GuideBottom />
                    </div>
                </div>
            </Container>
            <GetQuote />
        </HelpLayout>
    )
}
