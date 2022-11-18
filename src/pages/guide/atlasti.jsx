import Image from 'next/future/image'
import { HelpLayout } from '@/components/layout/HelpLayout'
import { HelpBreadCrumb } from '@/components/pages/help-center/HelpBreadcrumb'
import GuideLeft from '@/components/pages/guide/guideLeft'
import { Container } from '@/components/common/Container'
import GuideBottom from '@/components/pages/guide/guidBottom'
import login from '@/images/screenshots/login.png'
import atlasti1 from '@/images/gifs/atlasti1.gif'
import { GetQuote } from '@/components/pages/home/GetQuote'
import atlasti2 from '@/images/gifs/atlasti.3.gif'
import atlasti3 from '@/images/gifs/atlas.ti_.features.gif'
import atlasti4 from '@/images/gifs/atlasti.4.gif'
import atlasti5 from '@/images/gifs/atlasti.5.gif'

export default function Atlasti() {
    return (
        <HelpLayout title="Help - Atlasti TI | Landmark">
            <HelpBreadCrumb breadcrumb="Atlasti TI" />
            <Container>
                <div className="mb-20 md:flex md:gap-20">
                    <div className="hidden  md:block md:w-1/3">
                        <GuideLeft />
                    </div>
                    <div className="relative md:w-2/3">
                        <div className="  text-[15px] text-mainText  md:rounded-2xl md:border-[1px]  md:border-[#ddd] md:bg-white md:p-[56px]">
                            <h1 className="text-[22px] font-medium">
                                Using AtlasTI for qualitative data analysis
                            </h1>
                            <h2 className="mt-16 text-[19px] font-medium ">
                                1. Login
                            </h2>
                            <p className="pt-10">
                                You can access Atlas TI Cloud from the website{' '}
                                <a
                                    href="https://cloud.atlasti.com/login"
                                    className="font-semibold text-primary"
                                >
                                    atlasti.com
                                </a>
                            </p>
                            <p className="py-10">
                                <a
                                    href="https://cloud.atlasti.com/login"
                                    className="font-semibold text-primary"
                                >
                                    {' '}
                                    Click here ▸
                                </a>{' '}
                                to login to your Atlas TI Cloud account
                            </p>
                            <Image
                                src={login}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-2/3"
                            />
                            <h2 className="mt-8 text-[19px] font-medium">
                                2. Set up your project
                            </h2>
                            <p className="py-10">
                                Once you have entered click “Create a new
                                project” and add the information for your
                                project
                                <br />
                                <br />
                                Give a name to your project. You can also give a
                                description and a specific color for each of
                                your projects.
                            </p>
                            <Image
                                src={atlasti1}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-2/3"
                            />
                            <p className="py-5">
                                Start adding your data to continue to your
                                analysis. Every Atlas TI project is comprised of
                                documents. This refers to any source of
                                information you’re going to be analyzing. Add
                                your documents by clicking “Add Document”.
                            </p>
                            <Image
                                src={atlasti2}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-2/3"
                            />
                            <h2 className="mt-8 text-[19px] font-medium">
                                3. Understand your Data
                            </h2>
                            <p className="py-10">
                                Codes are tags that you will associate to your
                                different segments off information, so that you
                                can analyze and organize all of your data. Memos
                                are notebooks you can use to note down any ideas
                                or analytic insights Quoations are the actual
                                segment of data that you are going to go trough
                                selecting asyou read trough your documents.
                            </p>
                            <Image
                                src={atlasti3}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-2/3"
                            />
                            <h2 className="mt-8 text-[19px] font-medium">
                                4. Analyze your Data – pinpoint qualitative
                                insights
                            </h2>
                            <p className="py-10">
                                Generating quotations using codes and adding
                                comments across your documents place a central
                                role in your qualitative analysis process. To
                                create a quotation highlight relevant text for
                                your research topic. Choose from an existing
                                quote or add a new one. You can also add a
                                comment to reflect on a quotation. You can
                                create quotes for words, the full sentence or
                                the full paragraph.
                            </p>
                            <Image
                                src={atlasti4}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-2/3"
                            />
                            <h2 className="mt-8 text-[19px] font-medium">
                                5. Visualize your Data Analysis
                            </h2>

                            <p className="py-10">
                                Once you have finished analyzing your research
                                and adding quotes, memos and more, you may visit
                                the quotation manager. There you will find the
                                number of paragraphs, sentences or words you
                                quoted with the same name. By clicking on one of
                                them you will see a detailed list of the
                                sections you quoted with that word.
                            </p>
                            <Image
                                src={atlasti5}
                                alt=""
                                className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-2/3"
                            />
                            <h2 className="mt-5 mb-10 text-[19px] font-medium">
                                Congratulations you are now able to use AtlasTI
                                for qualitative data analysis!
                                <br />
                                <br />
                                Go to our portal and start transcribing your
                                audio files today. Download your transcripts and
                                start analyzing them in AtlasTI Cloud.
                            </h2>
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
