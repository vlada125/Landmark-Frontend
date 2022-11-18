import React from 'react'
import Image from 'next/future/image'

import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/common/Container'

import waveBack from '@/images/backgrounds/wave-back.svg'

export default function PrivacyPolicy() {
    return (
        <MainLayout title="Privacy and Policy | Landmark" footer={true}>
            <div className="relative overflow-hidden">
                <Image
                    src={waveBack}
                    className="absolute h-[180px] w-full origin-top scale-[1.8]"
                    alt=""
                />
                <Container className="relative pt-24 pb-16">
                    <h1 className="mb-20 text-center font-poppins text-[32px] font-medium ">
                        Privacy Policy
                    </h1>
                    <div className="text-[15px] text-mainText">
                        <p className="mb-5 font-semibold">Privacy Policy</p>
                        <p className="mb-16 font-semibold">
                            Effective Date: ___________
                        </p>

                        <h1 className="py-4 font-semibold">
                            Overview and Scope
                        </h1>
                        <p className="leading-8">
                            Protecting your privacy is important to us.
                            Accordingly, we’re providing this Privacy Policy in
                            accordance with the Australian Privacy Principles
                            (“APPs”) described in the Privacy Act of 1988 (Cth)
                            to explain our practices regarding the collection,
                            use and disclosure of information that we process in
                            the course of our business, including information we
                            receive through our Website, email and phone.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            This Privacy Policy applies only to anyone who
                            interacts with us, including our customers, Website
                            guests and visitors, as well as our employees,
                            contractors and staff who we collect Personal
                            Information from (each an “
                            <strong>Applicable Individual</strong>
                            ”).
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            This Privacy Policy is incorporated by reference
                            into our Terms of Service. So, please make sure that
                            you have read and understood our Terms of Service to
                            get yourself familiar with the conditions governing
                            our Website and Services.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            By submitting Personal Information to us via the
                            Website, email or phone, and by using our Services,
                            you understand that you are expected to read,
                            understand and agree to this Privacy Policy. By
                            using our Services, you consent to how we process
                            your information. If you do not consent, your only
                            option is to refrain from using our Services.
                        </p>
                        <br />
                        <br />

                        <h1 className="py-4 font-semibold">
                            Definitions and Interpretations
                        </h1>
                        <p className="leading-8">
                            The undefined capitalised words and words in
                            pronouns have the following meanings when used under
                            this Privacy Policy:
                        </p>
                        <br />
                        <br />
                        <ul className="ml-5 list-outside list-disc">
                            <li>
                                <p className="leading-8">
                                    <strong>Personal Information</strong> refers
                                    to any information we collect about any
                                    Individual – whether through the Website,
                                    email or phone – which can be used to
                                    identify that Individual (for example, a
                                    name, billing information, email address,
                                    etc.).
                                </p>
                            </li>
                            <li>
                                <p className="leading-8">
                                    <strong>Services</strong> refer to the audio
                                    and video transcription services provided by
                                    Landmark.
                                </p>
                            </li>
                            <li>
                                <p className="leading-8">
                                    <strong>Website</strong> refers to our
                                    website accessible at
                                    <a
                                        href="https://landmarktranscription.com.au/"
                                        className="text-primary"
                                    >
                                        https://landmarktranscription.com.au/.
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p className="leading-8">
                                    <strong>user, you</strong> and{' '}
                                    <strong>your</strong> refer to an Applicable
                                    Individual – in other words, you that is
                                    reading this Privacy Policy.
                                </p>
                            </li>
                        </ul>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">About Landmark</h1>
                        <p className="leading-8">
                            Anywhere the words <strong>“Landmark”</strong>,
                            <strong>“we”</strong>, <strong>“us”</strong>, or
                            <strong>“our”</strong> are mentioned under this
                            Privacy Policy, they are referring to Landmark
                            Associates Pty Ltd (ABN: 54 635 713 129), with the
                            business address Level 2, 160 Wharf Street. Spring
                            Hill QLD 4000. We also have offices in the United
                            States and other locations. We are responsible for
                            any Personal Information you provide when you use
                            our Services or interact with us. And we determine
                            how the third parties who have access to your
                            information handle it.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            The information we collect and how we collect them
                        </h1>
                        <p className="leading-8">
                            Most of the information we collect is submitted by
                            you willingly when you interact with us. However, we
                            obtain some of this information from third-party
                            sources, while we collect the rest automatically
                            using some technologies.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            The information you submit to us
                        </h1>
                        <p className="leading-8">
                            Depending on the relationship you have with Landmark
                            (whether you are a contractor, employee or
                            customer), you may willingly submit the following
                            categories of information to us: Names, Email
                            Address, Phone Number, Company Information, Country
                            of Location, Service Offered, Work Experience,
                            Schools Attended, Audio and/or Video Files,
                            Photograph, Demographics, Home Address, Etc.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            If you are an employee, we may collect the following
                            additional information from you: health status,
                            national origin, race, information about your
                            emergency contact and beneficiaries of any insurance
                            policy, as well as your date of birth, passport
                            number, driver’s license and any other relevant
                            government-issued ID, bank account information,
                            language specification and other information in your
                            resumé.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            The information we collect above may be submitted by
                            the Applicable Individual when they: (i) create an
                            account as a customer or request to provide
                            transcription or translation services, (ii) reach
                            out to us for enquiries, support or any other issues
                            through the Website, email address or phone, (iii)
                            submit their resumé with respect to their
                            application to provide a service or work as an
                            employee, (iv) submit their audio and video files
                            with respect to our Services, (v) take part in our
                            surveys, sweepstakes or promotions, (vi) submit
                            their billing information as a requirement for
                            paying for our Services, (vii) provide their payout
                            method information to receive their earnings as a
                            contractor or employee, or (viii) provide us with
                            content, such as reviews and feedback.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            The information we collect from third-party sources
                        </h1>
                        <p className="leading-8">
                            We may also collect information about you from
                            third-party sources, including third-party services
                            and organizations, to supplement the information
                            provided by you. This supplemental information
                            allows us to verify information that you have
                            provided to us and to enhance our ability to provide
                            you with information about our Services.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            The information we collect automatically
                        </h1>
                        <p className="leading-8">
                            When you access the Website or interact with some of
                            our content, including our emails, we collect
                            certain information automatically, which may also
                            include Personal Information. This information may
                            include, without limitation, your device properties,
                            such as Internet Protocol (IP) Address, operating
                            system, mobile carrier, MAC address, cookie
                            identifier, mobile advertising identifiers,
                            geolocation and other device identifiers that are
                            automatically assigned to your computer or device.
                            This information may also include anonymous
                            analytics about the pages on the Website you visit,
                            the date and time of visit, the amount of time you
                            spent on the Website and the features you click.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            We use certain technologies and third-party tools,
                            such as cookies, beacons, pixels and Google
                            Analytics to gather this category of information
                            (learn more about these tools below).
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Why we collect the categories of information above
                        </h1>
                        <p className="leading-8">
                            We collect different pieces of information from
                            Applicable Individuals depending on the relationship
                            they have with us. Therefore, how we use the
                            information we collect depends on if you are a
                            customer, employee or contractor (or service
                            provider):
                        </p>
                        <br />
                        <br />
                        <ul className="ml-5 list-outside list-disc">
                            <li>
                                <p className="leading-8">
                                    <strong>To customers: </strong> We collect
                                    Personal Information to provide you with our
                                    Services, including creating a personalised
                                    account, receiving your audio or video
                                    files, communicating with you in between
                                    (including sending an invoice), receiving
                                    your payment and acknowledging it and
                                    delivering a completed file.
                                </p>
                            </li>
                            <li>
                                <p className="leading-8">
                                    <strong>
                                        To employees and contractors:{' '}
                                    </strong>{' '}
                                    We collect Personal Information to review
                                    your applications, collect relevant
                                    information about your skills and
                                    experience, verify and determine if you are
                                    fit, communicate with you in between and
                                    process your earnings and payouts.
                                </p>
                            </li>
                            <li>
                                <p className="leading-8">
                                    <strong>
                                        To all Applicable Individuals generally:{' '}
                                    </strong>{' '}
                                    We collect certain information automatically
                                    to enable us to gather analytics about
                                    Website visitors, users and guests, which
                                    enables us to personalise our Services (for
                                    example, geolocation information helps us to
                                    refer visitors to the Website applicable to
                                    their region), improve the Website and our
                                    content, tailor our adverts to the right
                                    group and enforce our Terms of Service, as
                                    well as comply with applicable laws.
                                </p>
                            </li>
                        </ul>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Additional information about your privacy
                        </h1>
                        <ul className="ml-5 list-outside list-disc">
                            <li>
                                <p className="leading-8">
                                    <strong>Your content: </strong> You may
                                    submit certain content to us, including via
                                    the Website, email or phone. This may
                                    include, without limitation, comments,
                                    feedback, ideas or opinions. You understand
                                    that we may publicly upload your content
                                    along with any Personal Information and use
                                    it for marketing purposes. However, we will
                                    not release your name or otherwise publicise
                                    the fact that you submitted content to us
                                    unless: (i) you grant us permission to do
                                    so; (ii) we first send notice to you that
                                    the content you submit to a particular part
                                    of our Services will be published or
                                    otherwise used with your name on it; or
                                    (iii) we are required to do so by law.
                                </p>
                            </li>
                            <li>
                                <p className="leading-8">
                                    <strong>Your permissions: </strong> We may
                                    obtain certain information strictly by your
                                    permission. For example, when you grant us
                                    permission to access your device gallery, we
                                    will use it to upload any file (including
                                    resumé, audio and video files) that is
                                    relevant to your use of the Website.
                                </p>
                            </li>
                            <li>
                                <p className="leading-8">
                                    <strong>Social media platforms: </strong>{' '}
                                    The Website may include publicly accessible
                                    blogs, community forums, or private
                                    messaging features. The Website and content
                                    from us may also contain links and
                                    interactive features with various social
                                    media platforms (e.g., widgets). If you
                                    already use these platforms, their cookies
                                    may be set on your device when using our
                                    Website and Services. You should be aware
                                    that Personal Information which you
                                    voluntarily include and transmit online in a
                                    publicly accessible blog, chat room, social
                                    media platform or otherwise online, or that
                                    you share in an open forum may be viewed and
                                    used by others without any restrictions. We
                                    are unable to control such uses of your
                                    information when interacting with a social
                                    media platform, and by using such services
                                    you assume the risk that the Personal
                                    Information provided by you may be viewed
                                    and used by third parties for any number of
                                    purposes.
                                </p>
                            </li>
                            <li>
                                <p className="leading-8">
                                    <strong>
                                        Third-party payment processing:{' '}
                                    </strong>{' '}
                                    When you purchase our Services, we process
                                    your payments through a third-party
                                    application and other third-party payment
                                    processors, including
                                    <a
                                        href="https://stripe.com/legal"
                                        className="text-primary"
                                    >
                                        Stripe
                                    </a>
                                    . The third-party application may collect
                                    certain financial information from you to
                                    process a payment on behalf of Landmark,
                                    including your name, email address, home
                                    address and other billing information.
                                </p>
                            </li>
                        </ul>
                        <h1 className="py-4 font-semibold">
                            How we use certain Technologies to gather
                            information
                        </h1>
                        <p className="leading-8">
                            We and some of the third-party service providers
                            embed cookies, beacons, pixels and other
                            technologies (collectively,
                            <strong>“Technologies”</strong>) on the Website and
                            some of the content we display through our emails
                            and adverts on other websites. We use these
                            Technologies to gather the information we collect
                            automatically, including device identifiers and
                            usage analytics. We also use these Technologies to
                            enable some functions, tailor our ads and perform
                            our Services.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">Cookies</h1>
                        <p className="leading-8">
                            “Cookies” are small text files that are placed on
                            your device browser (“device” refers to any machine
                            you use in interacting with us) by a web server when
                            you access the Website. Cookies specifically help us
                            to identify your device when you come back to the
                            Website, secure some of the pages on the Website,
                            ensure features are working perfectly, give us
                            information about your interactions and monitor
                            violations of our Terms of Service.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            We use both “session” and “persistent” cookies,
                            which may expire when you close your device browser
                            or for longer periods, respectively. This means that
                            session cookies are deleted once you close your
                            device browser, while persistent cookies have
                            defined expiry dates.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            Cookies may be set directly by Landmark (first-party
                            cookies) or by our third-party service providers to
                            enable them to perform their services on our behalf
                            (third-party cookies). Note that this Privacy Policy
                            covers only our use of cookies and does not include
                            the use of cookies by such third parties.
                        </p>
                        <br />
                        <p className="leading-8">
                            Although most browsers automatically accept cookies,
                            you can change your browser options to stop
                            automatically accepting cookies or to prompt you
                            before accepting cookies. Please note, however, that
                            if you don’t accept cookies, you may not be able to
                            access all portions or features of our Website.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">Pixels</h1>
                        <p className="leading-8">
                            “Pixels” or “web beacons” (also known as web bugs,
                            pixel tags or clear GIFs) are tiny graphics with a
                            unique identifier that may be included on the
                            Website and our content for several purposes,
                            including to deliver or communicate with cookies, to
                            track and measure the performance of our Services,
                            to monitor how many visitors view our content and to
                            monitor the effectiveness of our advertising. Unlike
                            cookies, which are stored on the user’s hard drive,
                            pixels and web beacons are typically embedded
                            invisibly on web pages (or in an e-mail).
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">Widgets</h1>
                        <p className="leading-8">
                            “Social media widgets” such as the Facebook “Like”
                            button and LinkedIn (that might include widgets such
                            as the “share” button or other interactive mini
                            programs) may be on the Website. These features may
                            collect your IP address, which page you are visiting
                            on our Website, and may set a cookie to enable the
                            feature to function properly. These social media
                            features are either hosted by a third party or
                            hosted directly on our Website. Your interactions
                            with these features are governed by the privacy
                            policy of the third parties providing them.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">Google APIs</h1>
                        <p className="leading-8">
                            We may use certain Google APIs, such as Google
                            Analytics, Google Analytics Demographics and
                            Interest Reporting, to collect information about
                            guests and visitors’ behaviours on the Website. We
                            then use the information collected to analyse our
                            content, personalise our ads and improve our
                            Services. This information gathered through these
                            third-party tools is anonymous and does not directly
                            identify any Applicable Individual.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            If you do not want Google Analytics to gather usage
                            and analytics information about your access to the
                            Website, you can opt out by downloading the Google
                            Analytics Opt Out extension
                            <a
                                href="https://tools.google.com/dlpage/gaoptout"
                                className="text-center"
                            >
                                here
                            </a>
                            . For more information about Google Analytics and
                            how Google handles it, please click
                            <a
                                href="http://www.google.com/policies/privacy/partners/"
                                className="text-center"
                            >
                                here
                            </a>
                            .
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Who else may access your information
                        </h1>
                        <p className="leading-8">
                            Apart from Landmark and any of its authorised staff
                            and employees tasked with the role of providing
                            support services to customers, we do not disclose
                            Personal Information to any other persons. However,
                            information about Applicable Individuals, including
                            contractors, customers and employees may be accessed
                            by third parties under the following circumstances:
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Information shared with our third-party service
                            providers
                        </h1>
                        <p className="leading-8">
                            We may engage third-party service providers to work
                            with us, including administering and providing the
                            Services. These third-party service providers may
                            help us with services such as mass email sending,
                            server hosting, payment processing, marketing, cloud
                            data storage and security services. And they may
                            require Personal Information to carry out their
                            services (for example, our email sender may access
                            our email address list to help us send out emails to
                            Applicable Individuals). However, third-party
                            service providers have access to Personal
                            Information only to perform services on our behalf.
                            Landmark has executed appropriate contracts with
                            these parties that prohibit them from using or
                            sharing Personal Information except as necessary to
                            perform the contracted services on our behalf or to
                            comply with applicable legal requirements.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Information shared within the Landmark group of
                            companies
                        </h1>
                        <p className="leading-8">
                            As highlighted earlier, we have offices and
                            subsidiaries in other locations outside of
                            Australia. We may share Personal Information within
                            these companies from time to time. This may be for
                            internal and accounting purposes.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Information shared with business partners
                        </h1>
                        <p className="leading-8">
                            We may share Personal Information with our business
                            partners and affiliates for internal business
                            purposes or to provide you with a product or service
                            that you have requested. We may also provide
                            Personal Information to business partners with whom
                            we may jointly offer products or services, or whose
                            products or services we believe may be of interest
                            to you. In such cases, our business partner’s name
                            will appear along with Landmark. We require our
                            affiliates and business partners to agree in writing
                            to maintain the confidentiality and security of
                            Personal Information they maintain on our behalf and
                            not to use it for any purpose other than the purpose
                            for which Landmark provided them.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Information about customers shared with contractors
                            and employees
                        </h1>
                        <p className="leading-8">
                            When a customer submits files to us to be translated
                            or transcribed, they may be worked on by our
                            contractors who provide services for Landmark. In
                            that case, the Personal Information in the file will
                            be available to the contractor. Likewise, when
                            customers contact us, any employee tasked with
                            support services will have access to the customer’s
                            information.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Information shared in connection with business
                            transactions
                        </h1>
                        <p className="leading-8">
                            Information that we collect from Applicable
                            Individuals, including Personal Information, is
                            considered to be a business asset. As a result, if
                            we go out of business or become bankrupt, or if we
                            are acquired as a result of a transaction such as a
                            merger, acquisition or asset sale, some or all of
                            our assets, including Personal Information, may be
                            disclosed or transferred to a third-party acquirer
                            in connection with the transaction.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Information disclosed for our protection and others
                        </h1>
                        <p className="leading-8">
                            We cooperate with government and law enforcement
                            officials and/or private parties to enforce and
                            comply with the law. We may access, preserve and
                            disclose Personal Information to the government or
                            law enforcement officials or private parties as we,
                            in our sole discretion, believe necessary or
                            appropriate: (i) to respond to claims or legal
                            processes and comply with law enforcement or
                            national security requests (including subpoenas,
                            warrants or court orders); (ii) to protect your,
                            our, or other’s property, rights and safety and the
                            rights, property and safety of a third party or the
                            public in general; (iii) to prevent or stop any
                            activity we consider illegal, unethical or legally
                            actionable activity; (iv) to respond to your
                            requests; (v) to collect amounts owed to us; (vi)
                            when we believe disclosure is necessary or
                            appropriate to prevent physical harm or financial
                            loss or in connection with an investigation or
                            prosecution of suspected or actual illegal activity;
                            or (vii) if we, in good faith, believe that
                            disclosure is otherwise necessary or advisable.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            In addition, from time to time, server logs may be
                            reviewed for security purposes – e.g., to detect
                            unauthorised activity on the Website. In such cases,
                            server log information containing IP addresses may
                            be shared with law enforcement bodies in order that
                            they may identify users in connection with their
                            investigation of the unauthorised activities.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Analytics information shared with marketing partners
                        </h1>
                        <p className="leading-8">
                            We engage in interest-based advertising, whereby our
                            Services are advertised to you when you visit
                            third-party advertising partner platforms – such as
                            Microsoft, Facebook and Google – based on the
                            analytics information we have gathered about you. We
                            share such information with these partners, and they
                            combine it with those they collected about you from
                            other websites and market our Services to you. The
                            information collected and shared for this purpose is
                            anonymous and does not identify you specifically.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Your rights, choices and opt-out
                        </h1>
                        <p className="leading-8">
                            You have the right to opt out of certain uses and
                            disclosures of Personal Information. Where you have
                            consented to Landmark’s processing of Personal
                            Information, you may withdraw that consent at any
                            time and opt out of further processing by contacting
                            us at landmarksupport@landmarktranscription.com.au.
                            However, even if you opt out, we may still collect
                            and use non-Personal Information regarding your
                            activities on our Website and/or information from
                            the advertisements on third-party websites for
                            non-interest-based advertising purposes, such as to
                            determine the effectiveness of the advertisements.
                            Other rights include:
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Opting out of marketing messages
                        </h1>
                        <p className="leading-8">
                            In line with the provisions of the Spam Act 2003
                            (Cth), we may periodically send customers and
                            contractors e-mails that directly promote our
                            Services. When you receive such promotional
                            communications from us, you will have the
                            opportunity to “opt out” (either through your
                            account or by following the unsubscribe instructions
                            provided in the e-mail you receive). We do need to
                            send you certain communications regarding our
                            Services, and you will not be able to opt out of
                            those communications – e.g., communications
                            regarding updates to our Terms of Service or this
                            Privacy Policy or information about billing.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            We maintain “do-not-call” and “do-not-mail” lists as
                            mandated by the Do Not Call Register Act of 2006. We
                            process requests to be placed on do-not-mail,
                            do-not-phone and do-not-contact lists within 30 days
                            after receipt.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            If you don’t want Landmark to use your information
                            for these purposes, you can opt out by contacting us
                            at landmarksupport@landmarktranscription.com.au.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Opting out of employee information processing
                        </h1>
                        <p className="leading-8">
                            With respect to any information collected from
                            employees, you can opt out of our processing of such
                            information by requesting to terminate your
                            employment. You may start by reaching out to the
                            management at
                            <a
                                href="mailto:landmarksupport@landmarktranscription.com.au"
                                className="text-primary"
                            >
                                landmarksupport@landmarktranscription.com.au.
                            </a>
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Accessing, modifying and deleting your information
                        </h1>
                        <p className="leading-8">
                            All Applicable Individuals have the right to request
                            access to Personal Information we hold, including
                            requesting to see how we process it, requesting to
                            have any inaccurate information modified and
                            requesting that we delete Personal Information from
                            our database.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            Although Landmark makes good faith efforts to
                            provide Applicable Individuals with access to their
                            Personal Information, there may be circumstances in
                            which we are unable to provide access, including but
                            not limited to: where the information contains legal
                            privilege, would compromise others’ privacy or other
                            legitimate rights, where the burden or expense of
                            providing access would be disproportionate to the
                            risks to the Applicable Individual’s privacy in the
                            case in question or where it is commercially
                            proprietary. If we determine that access should be
                            restricted in any instance, we will provide you with
                            an explanation of why that determination has been
                            made and a contact point for any further inquiries.
                            To protect your privacy, we will take commercially
                            reasonable steps to verify your identity before
                            granting access to or making any changes to Personal
                            Information.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            Customers and contractors who have an account with
                            us can access and modify the Personal Information
                            associated with their accounts through their account
                            settings. Alternatively, all Applicable Individuals,
                            including employees can contact us at
                            <a
                                href="mailto:landmarksupport@landmarktranscription.com.au"
                                className="text-primary"
                            >
                                landmarksupport@landmarktranscription.com.au.
                            </a>
                            to modify their information. If any Applicable
                            Individual wishes to exercise their right to delete
                            Personal Information, please contact us at
                            <a
                                href="mailto:landmarksupport@landmarktranscription.com.au"
                                className="text-primary"
                            >
                                landmarksupport@landmarktranscription.com.au.
                            </a>
                            with your request. Please include your full name,
                            email address associated with your account (where
                            applicable) and detailed description of your
                            request. Such requests will be processed in line
                            with applicable laws.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            We’ll take steps to delete your information as soon
                            we can, but some information may remain in
                            archived/backup copies for our records or as
                            otherwise required by law.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Opting out of interest-based advertising
                        </h1>
                        <p className="leading-8">
                            Where we market to you on third-party marketing
                            partners’ platforms, you may opt out from the
                            applicable platforms using the opt out option
                            provided by the platform provider. Also, some of
                            these third-party marketing partners belong to
                            self-regulatory industries, including the Network
                            Advertising Agency (NAI) and Digital Advertising
                            Alliance (DAA). These self-regulatory industries
                            also provide websites from which you may opt out of
                            receiving targeted ads from our third-party
                            marketing and advertising partners that participate
                            in self-regulatory programs. You can access these
                            and learn more about targeted advertising and
                            consumer choice and privacy at
                            <a
                                href="http://www.networkadvertising.org/managing/opt_out.asp"
                                className="text-center"
                            >
                                www.networkadvertising.org/managing/opt_out.asp
                            </a>
                            and
                            <a
                                href="http://www.aboutads.info/choices"
                                className="text-center"
                            >
                                www.aboutads.info/choices.
                            </a>
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            How long we retain information about you
                        </h1>
                        <p className="leading-8">
                            Landmark retains the Personal Information we receive
                            as described in this Privacy Policy for as long as
                            you use our Services or as necessary to fulfil the
                            purpose(s) for which it was collected – to provide
                            our Services, resolve disputes, establish legal
                            defences, conduct audits, pursue legitimate business
                            purposes, enforce our agreements and comply with
                            applicable laws. Upon the termination of your
                            relationship with us – whether you are an employee,
                            contractor or consumer – we will delete your
                            information from our database. However, this does
                            not apply to information we are required to retain
                            for a certain period under applicable law. It also
                            does not apply when you have an obligation to fulfil
                            (for example, we may retain your information if you
                            are yet to pay for our Services as a consumer).
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            The cross-border transfer of your information
                        </h1>
                        <p className="leading-8">
                            We maintain, store and process Personal Information
                            from our servers in Australia. However, we have
                            other servers in locations outside of Australia,
                            including the United States. In addition, we share
                            Personal Information with some of our third-party
                            service providers in locations outside of Australia.
                            This means that Personal Information may be
                            transferred to, and maintained on, computers located
                            outside of your state where the privacy laws may not
                            be as protective as the APPs of the Privacy Act
                            1988. However, since we have a duty to protect your
                            privacy, we only hire third-party service providers
                            with adequate policies, and we take great care when
                            sharing Personal Information outside of Australia.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            The security of your information
                        </h1>
                        <p className="leading-8">
                            We take reasonable administrative, physical and
                            electronic measures designed to protect the
                            information that we collect about you from
                            unauthorized access, use or disclosure. When you
                            enter sensitive information on our forms, we encrypt
                            this data using SSL or other technologies. We only
                            collect information that we need to provide you with
                            our Services or employ you (as the case may be). And
                            we only share information with the third parties
                            described under this Privacy Policy on a
                            need-to-know basis.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            Please be aware, however, that no method of
                            transmitting information over the internet or
                            storing information is completely secure.
                            Accordingly, we cannot guarantee the absolute
                            security of any information. We do not accept
                            liability for unintentional disclosure.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            By using the Website and providing Personal
                            Information to us, you agree that we may communicate
                            with you electronically regarding security, privacy
                            and administrative issues relating to your use of
                            the Website. If we learn of a security system
                            breach, we may attempt to notify you electronically
                            by posting a notice on the Website or sending an
                            e-mail to you. You may have a legal right to receive
                            this notice in writing.
                        </p>
                        <br />
                        <br />
                        <p className="leading-8">
                            For more about our security and confidentiality
                            practices, please review our
                            <a
                                href="/security-and-confidentiality"
                                className="text-primary"
                            >
                                Security and Confidentiality
                            </a>
                            document.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Links to Third-Party Services
                        </h1>
                        <p className="leading-8">
                            Our Website may contain links, content and adverts
                            that lead to websites and services that are owned or
                            operated by third parties, such as
                            <a
                                href="https://www.salesforce.com/"
                                className="text-primary"
                            >
                                Salesforce
                            </a>
                            and
                            <a
                                href="https://www.typeform.com/"
                                className="text-primary"
                            >
                                Typeform
                            </a>
                            (each, a <strong>“Third-Party Service”</strong>).
                            Any information that you provide on or to a
                            Third-Party Service or that is collected by a
                            Third-Party Service is provided directly to the
                            owner or operator of the Third-Party Service and is
                            subject to that owner’s or operator’s privacy
                            policy. Landmark is not responsible for the content,
                            privacy or security practices and policies of any
                            Third-Party Service. To protect your information, we
                            recommend that you carefully review the privacy
                            policies of all Third-Party Services that you
                            access.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Our policy regarding children
                        </h1>
                        <p className="leading-8">
                            Due to the nature of our Services, the Website and
                            our Services are not designed to appeal to minors
                            (children). We do not knowingly attempt to solicit
                            or receive any information from children. If users
                            identify themselves as under 13 years of age,
                            Landmark will block such users from providing
                            Personal Information. If you are a child and wish to
                            provide us with Personal Information to use our
                            Services, you must do so if at least a parent or
                            legal guardian supervises it.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Revisions to this Policy
                        </h1>
                        <p className="leading-8">
                            Any information we collect via the Website, phone or
                            email is covered by this Privacy Policy in effect at
                            the time we collect such information. We may revise
                            this Privacy Policy from time to time. If we make
                            any material changes to this Privacy Policy, we’ll
                            notify you of those changes by posting them on the
                            Website and/or your email address, and we’ll update
                            the “Effective Date” above to indicate when those
                            changes will become effective. You understand and
                            agree that you will be deemed to have accepted the
                            updated Privacy Policy if you use our Services after
                            we post the updated Privacy Policy on the Website.
                            If at any point you do not agree to any portion of
                            the Privacy Policy then in effect, you must
                            immediately stop using our Services. Additionally,
                            before we use Personal Information for any new
                            purpose you do not originally authorise, we will
                            endeavour to provide information regarding the new
                            purpose and give you the opportunity to opt out.
                            Where consent of the Applicable Individual for the
                            processing of Personal Information is otherwise
                            required by law or contract, Landmark will endeavour
                            to comply with the law or contract.
                        </p>
                        <br />
                        <br />
                        <h1 className="py-4 font-semibold">
                            Questions about this Privacy Policy
                        </h1>
                        <p className="leading-8">
                            If you have any questions or concerns regarding how
                            we handle or process your information,
                            <a
                                href="https://form.typeform.com/to/dRszmz?typeform-medium=embed-snippet&typeform-source=landmarktranscription.com.au"
                                className="text-primary"
                            >
                                Get in Touch
                            </a>
                            with us or contact us by phone at 02 7202 0557 or
                            email at
                            <a
                                href="mailto:landmarksupport@landmarktranscription.com.au"
                                className="text-primary"
                            >
                                landmarksupport@landmarktranscription.com.au.
                            </a>
                        </p>
                        <h1 className="py-4 text-[17px] font-semibold">
                            Questions Regarding this Privacy Policy or the Site
                        </h1>
                        <p className="leading-8">
                            If you have any questions or concerns, please
                            contact us at 02 7202 0557 or by email at:
                            <a
                                href="mailto:landmarksupport@landmarktranscription.com.au"
                                className="text-primary"
                            >
                                landmarksupport@landmarktranscription.com.au.
                            </a>
                        </p>
                    </div>
                </Container>
            </div>
        </MainLayout>
    )
}
