import Image from 'next/future/image'
import { HelpLayout } from '@/components/layout/HelpLayout'
import { HelpBreadCrumb } from '@/components/pages/help-center/HelpBreadcrumb'
import GuideLeft from '@/components/pages/guide/guideLeft'
import { Container } from '@/components/common/Container'
import GuideBottom from '@/components/pages/guide/guidBottom'
import { GetQuote } from '@/components/pages/home/GetQuote'
import team1 from '@/images/screenshots/teams-1.png'
import team2 from '@/images/screenshots/teams-2-.png'
import team3 from '@/images/screenshots/teams-3-.png'
import team4 from '@/images/screenshots/teams-4.png'

export default function MicrosoftTeams() {
    return (
        <HelpLayout title="Help - Using Teams for Qualitative Research | Landmark">
            <HelpBreadCrumb breadcrumb="Using Teams for Qualitative Research" />
            <Container>
                <div className="mb-20 md:flex md:gap-20">
                    <div className="hidden  md:block md:w-1/3">
                        <GuideLeft />
                    </div>
                    <div className="relative md:w-2/3">
                        <div className="  text-[15px] text-mainText  md:rounded-2xl md:border-[1px]  md:border-[#ddd] md:bg-white md:p-[56px]">
                            <h1 className="text-[22px] font-medium">
                                Recording your meeting in Microsoft Teams.
                            </h1>
                            <p className="pt-10">
                                Record your meetings in Teams to capture audio,
                                video, and screen sharing activity. The
                                recording happens in the cloud and is saved to
                                Microsoft Stream.
                            </p>
                            <h2 className="mt-16 text-[19px] font-medium ">
                                1. Start your meeting
                            </h2>
                            <p className="py-5">
                                Find your meeting on the main page and click
                                “Start”.
                            </p>
                            <Image
                                src={team1}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-2/3"
                            />
                            <h2 className="mt-8 text-[19px] font-medium">
                                2. Start recording
                            </h2>
                            <p className="py-10">
                                Click{' '}
                                <strong className="underline">
                                    <em>More Options</em>
                                </strong>{' '}
                                and select Start recording.
                                <br />
                                <br />
                                <strong>Keep in mind:</strong> Attendants in the
                                meeting will be notified when the recording
                                starts. The meeting notification will also be
                                posted to the chat history.
                            </p>
                            <Image
                                src={team2}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-2/3"
                            />

                            <h2 className="mt-8 text-[19px] font-medium">
                                3. Stop recording
                            </h2>
                            <p className="py-5">
                                To stop recording, go to the meeting controls
                                and select More options. Click on Stop
                                recording.
                            </p>
                            <ul className="ml-5 list-outside list-disc">
                                <li>
                                    <p className="leading-[44px]">
                                        The recording is then processed and
                                        saved to Microsoft Stream.
                                    </p>
                                </li>
                                <li>
                                    <p className="leading-[44px]">
                                        You will receive an email from Microsoft
                                        Stream when the recording is available.
                                    </p>
                                </li>
                            </ul>
                            <Image
                                src={team3}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-2/3"
                            />
                            <h2 className="mt-8 text-[19px] font-medium">
                                4. Download a meeting recording
                            </h2>
                            <p className="py-10">
                                Recording owners can download and distribute
                                their meeting recordings.
                                <br />
                                <br />
                                Go to the meeting recording in the chat history
                                and select{' '}
                                <strong>
                                    <em>“More options”</em>
                                </strong>{' '}
                                after that, click{' '}
                                <strong>
                                    <em>“Open in Microsoft Stream.”</em>
                                </strong>
                            </p>
                            <Image
                                src={team4}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-2/3"
                            />
                            <p className="py-10">
                                On the Microsoft Stream portal, select More
                                options button -{' '}
                                <strong>
                                    <em>Download original video.</em>
                                </strong>
                            </p>
                            <hr />
                            <p className="py-10">
                                If you need assistance, please feel free to
                                contact us at 02 7202 0557
                            </p>
                        </div>
                        <GuideBottom getStart />
                    </div>
                </div>
            </Container>
            <GetQuote />
        </HelpLayout>
    )
}
