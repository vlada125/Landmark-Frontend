import Image from 'next/future/image'
import { HelpLayout } from '@/components/layout/HelpLayout'
import { HelpBreadCrumb } from '@/components/pages/help-center/HelpBreadcrumb'
import GuideLeft from '@/components/pages/guide/guideLeft'
import { Container } from '@/components/common/Container'
import GuideBottom from '@/components/pages/guide/guidBottom'
import ticket1 from '@/images/gifs/ticket1.gif'
import ticket2 from '@/images/gifs/ticket2.gif'
import ticket3 from '@/images/gifs/ticket3.gif'
import ticket4 from '@/images/gifs/ticket4.gif'
import ticket5 from '@/images/gifs/ticket5.gif'
import ticket6 from '@/images/gifs/ticket6.gif'
import ticket7 from '@/images/gifs/ticket7.gif'
import ticket8 from '@/images/gifs/ticket8.gif'

export default function TicketGuide() {
    return (
        <HelpLayout title="Help - Ticket Guide | Landmark">
            <HelpBreadCrumb breadcrumb="Ticket Guide" />
            <Container>
                <div className="md:flex md:gap-20">
                    <div className="hidden  md:block md:w-1/3">
                        <GuideLeft description="Read this Step by Step Guide if you are not yet familiar with the process of uploading your audios, setting them up and requesting a transcript. If you need assistance to upload your audios you can contact us at (480) 922-1105." />
                    </div>
                    <div className="relative md:w-2/3">
                        <div className="  text-[15px] text-mainText  md:rounded-2xl md:border-[1px]  md:border-[#ddd] md:bg-white md:p-[56px]">
                            <h1 className="text-[22px] font-medium">
                                From creating a ticket until getting your
                                transcripts. A Step by Step Guide.
                            </h1>
                            <p className="py-10">
                                Read this Step by Step Guide if you are not yet
                                familiar with the process of uploading your
                                audios, setting them up and requesting a
                                transcript.
                            </p>
                            <h2 className="text-[19px] font-medium">
                                1. Create a Free Account
                            </h2>
                            <p className="py-10">
                                <a href="/sign-in" className="text-primary">
                                    Click here
                                </a>
                                to Create a Free Account, just as shown below.
                            </p>
                            <Image
                                src={ticket1}
                                className="my-10 rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                                alt=""
                            />
                            <h2 className="text-[19px] font-medium">
                                2. Activate your Account and Upload your files
                            </h2>
                            <p className="py-10">
                                We will send you an email with your Account
                                Information for you to start uploading your
                                Files immediately.
                            </p>
                            <h2 className="text-[19px] font-medium">
                                3. Create a new ticket
                            </h2>
                            <p className="py-10">
                                You will then be directed to a window from which
                                you will be requested to fill in the
                                specifications for your audio.
                            </p>
                            <Image
                                src={ticket1}
                                className="my-10 rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                                alt=""
                            />
                            <h2 className="text-[19px] font-medium">
                                4. Set up ticket specifications
                            </h2>
                            <p className="py-10">
                                You will then be directed to a window from which
                                you will be requested to fill in the
                                specifications for your audio.
                            </p>
                            <div className="items-center gap-2 md:flex">
                                <div className="md:w-1/2">
                                    <Image
                                        src={ticket2}
                                        className="my-10 rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-[90%]"
                                        alt=""
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <h2 className="text-[18px] font-medium">
                                        1. Transcript Name
                                    </h2>
                                    <p className="py-6">
                                        You will then be directed to a window
                                        from which you will be requested to fill
                                        in the specifications for your audio.
                                    </p>
                                    <h2 className="text-[18px] font-medium">
                                        2. Turnaround Time
                                    </h2>
                                    <ul className="ml-5 list-outside list-disc">
                                        <li>
                                            <p className="leading-[44px]">
                                                Standard ( 3-5 Business Day)
                                            </p>
                                        </li>
                                        <li>
                                            <p className="leading-[44px]">
                                                Second Day Business Rush
                                            </p>
                                        </li>
                                        <li>
                                            <p className="leading-[44px]">
                                                One Day Business Rush
                                            </p>
                                        </li>
                                    </ul>
                                    <h2 className="text-[18px] font-medium">
                                        3. Number of Speakers
                                    </h2>
                                    <p className="py-6">
                                        For audios with more than one speaker
                                        involved.
                                    </p>
                                </div>
                            </div>
                            <h2 className="text-[19px] font-medium">
                                5. Put in Folder
                            </h2>
                            <p className="py-10">
                                This option lets you put your audio in your
                                desired folder. If you do not yet have a folder
                                click on
                                <strong>create a new folder</strong>.
                            </p>
                            <Image
                                src={ticket3}
                                className="my-10 rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                                alt=""
                            />
                            <p className="py-10">
                                After that, you can place your ticket into your
                                folder.
                            </p>
                            <Image
                                src={ticket4}
                                className="my-10 w-[90%] rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                                alt=""
                            />
                            <h2 className="text-[19px] font-medium">
                                6. Language Capture
                            </h2>
                            <p className="py-10">
                                Please select the desired Language Capture for
                                your transcript or upload a Custom Template.
                                <a
                                    href="/pricing#formatting"
                                    className="text-primary"
                                >
                                    Click Here
                                </a>
                                to view some examples.
                            </p>
                            <Image
                                src={ticket5}
                                className="my-10 rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                                alt=""
                            />
                            <h2 className="text-[19px] font-medium">
                                7. Upload your file
                            </h2>
                            <p className="py-10">
                                Click on “Choose file” and select your audio
                                file directly from your local desktop. Once you
                                are ready, click “Upload”.
                            </p>
                            <Image
                                src={ticket6}
                                className="my-10 rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                                alt=""
                            />
                            <p className="py-10">
                                Don’t forget to specify the source language of
                                your Audio and the desired language for
                                transcription.
                                <br />
                                <br />
                                If you do not wish your whole Audio to be
                                transcribed please select the checkbox ” I DO
                                NOT want my whole audio file transcribed” and
                                set up the right time.
                                <br />
                                <br />
                                Choose your file format and click on the “Next”
                                button.
                            </p>
                            <Image
                                src={ticket7}
                                className="my-10 rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                                alt=""
                            />
                            <h2 className="text-[19px] font-medium">
                                8. Review and submit
                            </h2>
                            <p className="py-10">
                                Review your Audio File and the main
                                specifications you chose before, after
                                completion, click “Submit to Landmark”.
                            </p>
                            <Image
                                src={ticket8}
                                className="my-10 rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                                alt=""
                            />
                            <h2 className="border-b-[1px] border-b-[#ddd] pb-20 text-[19px] font-medium">
                                Congratulations, your new ticket has been
                                created!
                            </h2>
                            <p className="py-10">
                                Read our guides invoicing and payment methods
                                for information on each topic. If you need
                                assistance to upload your audios, you can
                                contact us at (480) 922-1105.
                            </p>
                        </div>
                        <GuideBottom />
                    </div>
                </div>
            </Container>
        </HelpLayout>
    )
}
