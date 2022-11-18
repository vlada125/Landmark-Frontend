import { HelpLayout } from '@/components/layout/HelpLayout'
import { HelpBreadCrumb } from '@/components/pages/help-center/HelpBreadcrumb'
import GuideLeft from '@/components/pages/guide/guideLeft'
import { Container } from '@/components/common/Container'
import GuideBottom from '@/components/pages/guide/guidBottom'

export default function Invoicing() {
    return (
        <HelpLayout title="Invoicing -Help Center | Landmark">
            <HelpBreadCrumb breadcrumb="Request an Invoice" />
            <Container>
                <div className="md:flex md:gap-20">
                    <div className="hidden  md:block md:w-1/3">
                        <GuideLeft description="Find all the information you need to know regarding our invoicing process, invoicing terms and contracts. You may request a contract directly on this site. At Landmark we customize the invoicing process to ensure we accommodate to your project’s needs." />
                    </div>
                    <div className="relative md:w-2/3">
                        <div className="  text-[15px] text-mainText  md:rounded-2xl md:border-[1px]  md:border-[#ddd] md:bg-white md:p-[56px]">
                            <h1 className="text-[22px] font-medium">
                                Invoicing
                            </h1>
                            <p className="py-10">
                                Read this guide if you would like to know more
                                about our
                                <strong>invoicing process</strong>. Here you
                                will find the information regarding the
                                following topics.
                            </p>
                            <ul className="ml-5 list-outside list-disc border-b-[1px] border-b-[#ddd] pb-8">
                                <li>
                                    <a
                                        href="/sign-in"
                                        className="text-[15px] font-medium leading-[44px] tracking-[1.5px] transition duration-300 hover:text-primary "
                                    >
                                        Our invoicing process
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/sign-in"
                                        className="text-[15px] font-medium leading-[44px] tracking-[1.5px] transition duration-300 hover:text-primary"
                                    >
                                        How often do I have to pay?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/sign-in"
                                        className="text-[15px] font-medium leading-[44px] tracking-[1.5px] transition duration-300 hover:text-primary"
                                    >
                                        How can I request a contract?
                                    </a>
                                </li>
                            </ul>
                            <h2 className="mt-8 text-[19px] font-medium">
                                Invoicing Process
                            </h2>
                            <p className="py-10">
                                At Landmark, we send out invoices for the total
                                amount of your tickets{' '}
                                <strong>every two weeks</strong>.
                                <br />
                                However, we are committed to ensuring we
                                accommodate to your project’s needs.
                            </p>
                            <p className="py-10">
                                All you need to do is send us an email at{' '}
                                <a
                                    href="mailto:support@landmarktranscription.com.au"
                                    className="text-primary"
                                >
                                    support@landmarktranscription.com.au
                                </a>{' '}
                                requesting your desired Invoicing Terms.
                            </p>
                            <h2 className="text-[19px] font-medium">
                                Quarterly Payment
                            </h2>
                            <p className="py-10">
                                Three-monthly payment for the total amount of
                                all your transcripts.
                            </p>
                            <h2 className="text-[19px] font-medium">Prepay</h2>
                            <p className="py-10">
                                You select the prepaid amount you want to
                                deposit. We will add it to your account and
                                deduct the total amount of your tickets. If that
                                is the case, the remaining amount will stay in
                                your account for future transcriptions.
                            </p>
                            <h2 className="text-[19px] font-medium">
                                Quarterly Payment
                            </h2>
                            <p className="border-b-[1px] border-b-[#ddd] pt-10 pb-12">
                                At Landmark, you have the possibility to request
                                a contract for your transcription. Send us an
                                email at{' '}
                                <a
                                    href="mailto:support@landmarktranscription.com.au"
                                    className="text-primary"
                                >
                                    support@landmarktranscription.com.au
                                </a>{' '}
                                ,and we’ll make sure to send it along with your
                                invoice.
                            </p>
                        </div>
                        <GuideBottom />
                    </div>
                </div>
            </Container>
        </HelpLayout>
    )
}
