import { HelpLayout } from '@/components/layout/HelpLayout'
import { HelpBreadCrumb } from '@/components/pages/help-center/HelpBreadcrumb'
import GuideLeft from '@/components/pages/guide/guideLeft'
import { Container } from '@/components/common/Container'
import GuideBottom from '@/components/pages/guide/guidBottom'

export default function PaymentMethod() {
    return (
        <HelpLayout title="Invoicing -Help Center | Landmark">
            <HelpBreadCrumb breadcrumb="Request an Invoice" />
            <Container>
                <div className="md:flex md:gap-20">
                    <div className="hidden  md:block md:w-1/3">
                        <GuideLeft description="At Landmark we accept all different forms of payment to accommodate your project’s needs. Our most common payment methods are Bank Transfer and Credit Card, if you need to via another payment method, please feel free to contact us." />
                    </div>
                    <div className="relative md:w-2/3">
                        <div className="  text-[15px] text-mainText  md:rounded-2xl md:border-[1px]  md:border-[#ddd] md:bg-white md:p-[56px]">
                            <h1 className="text-[22px] font-medium">
                            Selecting a Payment Method
                            </h1>
                            <p className="py-10">
                            Read this guide if you would like to know more about our various payment methods and which one might be the one for your convenience. If you are still not sure about how our billing system works, make sure you have read the article <a href="/guide/invoicing" className='text-primary underline'> My Invoices</a>.
                            </p>
                            <hr />
                            <p className="py-10">
                            At Landmark we accept all different forms of payment to accommodate your project’s needs. Our most common payment methods are:
                            </p>
                       
                            <h2 className="mt-8 text-[19px] font-medium">
                            Bank Transfer
                            </h2>
                            <p className="py-10">
                            Our most popular payment method. Already registered to several universities and research institutions, this payment method is seamless and the perfect fit for institutional grants or University financing.
                            </p>
                            <h2 className="mt-8 text-[19px] font-medium">
                            Online Payment (Stripe)
                            </h2>
                            <p className="py-10">
                            We accept online payments with credit or debit card. We utilize the most secure Online Payment Gateway that provides the technical, prevention, and banking infrastructure required to operate online payment systems.
                            </p>
                            <hr />
                            <p className="py-10">
                            Now that you are familiar with our payment methods you may return to your account by clicking here and proceed with your transcription request.
                            </p>
                           
                        </div>
                        <GuideBottom />
                    </div>
                </div>
            </Container>
        </HelpLayout>
    )
}
