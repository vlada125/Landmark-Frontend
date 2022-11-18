import Image from 'next/future/image'
import { HelpLayout } from '@/components/layout/HelpLayout'
import { HelpBreadCrumb } from '@/components/pages/help-center/HelpBreadcrumb'
import GuideLeft from '@/components/pages/guide/guideLeft'
import { Container } from '@/components/common/Container'
import GuideBottom from '@/components/pages/guide/guidBottom'
import { GetQuote } from '@/components/pages/home/GetQuote'
import signup from '@/images/gifs/signup-gifi.gif'
import zoom from '@/images/screenshots/zoom-schedule.png'
import zoom1 from '@/images/gifs/zoom1.gif'
import zoom2 from '@/images/gifs/zoom2.gif'
import zoom3 from '@/images/screenshots/zoom3.png'
import zoom4 from '@/images/gifs/zoom3.gif'
import zoom5 from '@/images/screenshots/zoom4.png'

export default function UsingZoomForQualitative() {
    return (
        <HelpLayout title="Help - Using Zoom for Qualitative Research | Landmark">
            <HelpBreadCrumb breadcrumb="Using Zoom for Qualitative Research" />
            <Container>
                <div className="mb-20 md:flex md:gap-20">
                    <div className="hidden  md:block md:w-1/3">
                        <GuideLeft />
                    </div>
                    <div className="relative md:w-2/3">
                        <div className="  text-[15px] text-mainText  md:rounded-2xl md:border-[1px]  md:border-[#ddd] md:bg-white md:p-[56px]">
                            <h1 className="text-[22px] font-medium">
                                Using Zoom for Qualitative Research: From
                                Interview to Requesting a Transcript. A Step by
                                Step Guide.
                            </h1>
                            <p className="pt-10">
                                This Step by Step Guide will walk you through
                                scheduling a Zoom meeting, how to record your
                                Zoom meeting and how to download your meeting
                                audio file from Zoom.
                            </p>
                            <h2 className="mt-16 text-[19px] font-medium ">
                                1.Create a Zoom Login
                            </h2>
                            <p className="py-5">
                                <strong>Sign up for a free account.</strong>{' '}
                                <a
                                    href="https://bit.ly/3bgEccL2"
                                    className="text-primary"
                                >
                                    Click here
                                </a>{' '}
                                to create a free account, just as shown below
                                and then select the “Sign Up, It’s Free” button.
                            </p>
                            <Image
                                src={signup}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-2/3"
                            />
                            <h2 className="mt-8 text-[19px] font-medium">
                                2. Schedule your meeting
                            </h2>
                            <p className="py-10">
                                Fill in your meeting title, description, date
                                and time. Remember to scroll down and review all
                                settings before clicking “Save.” For a list of
                                Zoom meeting settings and what they do,{' '}
                                <a
                                    href="https://support.zoom.us/hc/en-us/articles/115005756143-Changing-your-meeting-settings"
                                    className="text-primary"
                                >
                                    click here
                                </a>
                                . We recommend you consider the following:
                            </p>
                            <Image
                                src={zoom}
                                alt=""
                                className="w-full rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]"
                            />

                            <h2 className="mt-8 text-[19px] font-medium">
                                3. Provide your meeting details and settings
                            </h2>
                            <p className="py-5">
                                <strong>Meeting Password</strong>
                                <br />
                                Checking the “Require Meeting Password” checkbox
                                will force participants to type a code prior to
                                being allowed into the meeting.
                            </p>
                            <p className="py-5">
                                <strong>Video: Host and/or Participant</strong>
                                <br />
                                Toggling “Video” for the “Host” and/or
                                “Participant” to “On” will turn on the cameras
                                for hosts and participants when they join the
                                meeting. This doesn’t mean the meeting will be
                                recorded. People may toggle the settings off
                                after they join.
                            </p>
                            <p className="py-5">
                                <strong>
                                    Only authenticated users may join
                                </strong>
                                <br />
                                Checking this box only allows people who log
                                into Zoom to join your meeting. This gives the
                                host visibility into who is joining.
                            </p>
                            <p className="py-5">
                                <strong>
                                    Record the meeting automatically
                                </strong>
                                <br />
                                If this is selected, the application will begin
                                recording the moment the meeting begins. Please
                                note that some states require people to be
                                notified prior to recording.
                            </p>
                            <Image
                                src={zoom1}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-[80%]"
                            />
                            <p className="py-5">
                                <strong>Designate alternative hosts</strong>
                                <br />
                                Providing the emails of alternative hosts will
                                allow a colleague to start the meeting and begin
                                recording prior to you joining.
                            </p>
                            <h2 className="mt-8 text-[19px] font-medium">
                                4. Alternative ways to schedule a meeting
                                through Zoom
                            </h2>
                            <p className="py-5">
                                <strong>
                                    For more information on browser extensions
                                    and calendar integrations:
                                </strong>
                            </p>
                            <ul className="ml-5 list-outside list-disc">
                                <li>
                                    <p className="leading-[32px]">
                                        <a
                                            href="https://support.zoom.us/hc/en-us/articles/201974323-Using-the-Zoom-Chrome-Extension"
                                            className="text-primary"
                                        >
                                            {' '}
                                            Click here
                                        </a>{' '}
                                        for Chrome
                                    </p>
                                </li>
                                <li>
                                    <p className="leading-[32px]">
                                        <a
                                            href="https://support.zoom.us/hc/en-us/articles/360020187492-Google-Calendar-add-on"
                                            className="text-primary"
                                        >
                                            {' '}
                                            Click here
                                        </a>{' '}
                                        for Google Calendars
                                    </p>
                                </li>
                                <li>
                                    <p className="leading-[32px]">
                                        <a
                                            href="https://support.zoom.us/hc/en-us/articles/200881399-Microsoft-Outlook-plugin-desktop-"
                                            className="text-primary"
                                        >
                                            {' '}
                                            Click here
                                        </a>{' '}
                                        for Outlook
                                    </p>
                                </li>
                            </ul>
                            <h2 className="mt-8 text-[19px] font-medium">
                                5. Start and record your meeting
                            </h2>
                            <p className="py-5">
                                Log in to zoom.us.
                                <br />
                                <br />
                                Click the “Meetings” option under the “Personal”
                                header.
                                <br />
                                <br />
                                Find your meeting on the main page and click
                                “Start.”
                            </p>
                            <Image
                                src={zoom2}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-[80%]"
                            />
                            <p className="py-5">
                                Once your audio is connected, verify your camera
                                is on. We recommend you turn your camera on for
                                any interviews that would typically be held in
                                person. To turn your camera on, select
                                “StartVideo” on the bottom menu.
                            </p>
                            <Image
                                src={zoom3}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-[80%]"
                            />
                            <p className="py-5">
                                Record your meeting by clicking “Record.”
                            </p>
                            <p className="py-5">
                                Free licenses will default to “Record on this
                                Computer.” Media files will automatically
                                download to your computer after you end your
                                meeting.
                            </p>
                            <p className="py-5">
                                If you have a paid license, select “Record to
                                the Cloud.” This will be useful when your device
                                has low memory, or you would like to select
                                which of the three file types to download after
                                rendering.
                            </p>
                            <p className="py-5">
                                Pausing a recording will allow you to have one
                                continuous audio and video file. Stopping a
                                recording will break your interview into
                                multiple files. You may pause the recording at
                                any time by selecting “Pause.”
                            </p>
                            <Image
                                src={zoom4}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-[80%]"
                            />
                            <p className="py-5">
                                Remember to click “Resume” once you need to
                                record the interview again.
                            </p>
                            <p className="py-5">
                                When you are done with the interview, click “End
                                Meeting.” and Click “End Meeting for All.”
                            </p>
                            <p className="py-5">
                                Review your recordings and download the file
                                you’d like to use for your transcript by
                                hovering over the desired file and selecting the
                                down arrow.
                            </p>
                            <Image
                                src={zoom5}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-[80%]"
                            />
                            <h2 className="mt-8 text-[19px] font-medium">
                                6. Create an account at Landmark and upload your
                                files
                            </h2>
                            <p className="py-5">
                                Create a Landmark account by{' '}
                                <a
                                    href="/sign-in/?utm_medium=web&utm_campaign=zoom"
                                    className="text-primary"
                                >
                                    clicking here
                                </a>{' '}
                                or simply{' '}
                                <a
                                    href="/new_portal_login"
                                    className="text-primary"
                                >
                                    login
                                </a>
                                . You can begin uploading your audios and start
                                transcribing them immediately.
                            </p>
                            <h2 className="mt-8 text-[19px] font-medium">
                                Now you’re ready to upload your files and create
                                a ticket.
                            </h2>
                            <hr />
                        </div>
                        <GuideBottom getStart />
                    </div>
                </div>
            </Container>
            <GetQuote />
        </HelpLayout>
    )
}
