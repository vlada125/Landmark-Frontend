import React from 'react'
import Image from 'next/future/image'

import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/common/Container'

import waveBack from '@/images/backgrounds/wave-back.svg'

export default function TermCondition() {
    return (
        <MainLayout title="Terms and Conditions | Landmark" footer={true}>
            <div className="relative overflow-hidden">
                <Image
                    src={waveBack}
                    className="absolute h-[180px] w-full origin-top scale-[1.8]"
                    alt=""
                />
                <Container className="relative pt-24 pb-16">
                    <h1 className="mb-20 text-center font-poppins text-[32px] font-semibold ">
                        Terms and Conditions
                    </h1>
                    <div className="text-[14px] text-grayText">
                        <p className="leading-8">
                            This Agreement is between Landmark Associates Pty
                            Ltd., Level 2, 160 Wharf Street Spring Hill QLD
                            4000, Australia (“Landmark”), and you, the client
                            (“Client”) (jointly, “the Parties”). The Parties
                            agree as follows:
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            1. Recitals and Purpose of this Agreement.
                        </h1>
                        <p className="leading-8">
                            Landmark is a company engaged in the business of
                            transcribing and translating audio and video media.
                            Client has audio or video media that it desires to
                            have transcribed (“the Media”). Client desires to
                            engage Landmark to transcribe or translate the
                            Media, and Landmark desires to provide transcription
                            or translation services for the Media (“the
                            Services”) to Client. This Agreement sets forth the
                            rights and obligations of the Parties.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            2. Provision of the Media.
                        </h1>
                        <p className="leading-8">
                            Together with the Media, Client will provide
                            Landmark an accurate and complete description of the
                            Media, including, but not necessarily limited to the
                            duration of the Media, the number of speakers in the
                            Media, and the quality of the recorded audio in the
                            Media. Audio quality may include such elements as
                            quality of the recording and presence or thickness
                            of accents. Landmark will provide an estimate of the
                            fee based Client’s description of the Media.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            3. Transcriptions.
                        </h1>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            3.1. Evaluation.
                        </h1>
                        <p className="leading-8">
                            Upon receiving the Media, Landmark may perform an
                            evaluation of the Media. Landmark may evaluate the
                            accuracy of Client’s description with respect to the
                            Media, the quality of the recorded audio in the
                            Media, the presence of unintelligible sounds, and
                            other spects of the Media. Landmark may contact
                            Client to discuss the evaluation of the Media and
                            any factors which may make provision of the Services
                            more difficult than expected based on Client’s
                            description of the Media. Landmark may propose a new
                            fee to Client, and Landmark will not continue with
                            the Services until Client provides its consent.
                            Should Client not provide its consent for Landmark
                            to proceed with the Services, Landmark will charge
                            Client a fee based only on the Services performed.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            3.2. Rejection of the Media.
                        </h1>
                        <p className="leading-8">
                            At any time, Landmark may discontinue its
                            performance of the Services with respect to the
                            Media for any reason in its sole discretion.
                            Landmark may discontinue its performance of the
                            Services with respect to the Media if the Media is
                            not as described by Client. If Landmark chooses to
                            discontinue its performance of the Services,
                            Landmark will charge Client a fee based only on the
                            Services performed.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            3.3. Production.
                        </h1>
                        <p className="leading-8">
                            Subject to the other sections of this Agreement,
                            Landmark will provide the Services to Client.
                            Landmark will deliver the final product (the
                            “Product”) of the Services following completion of
                            the Services. Landmark will deliver the Product in a
                            reasonable amount of time following receipt of the
                            Media. Landmark shall not be liable for delays in
                            delivering the Product which are affected by factors
                            beyond its control.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            3.4. Accuracy.
                        </h1>
                        <p className="leading-8">
                            Landmark shall make reasonable efforts to ensure the
                            accuracy of the Services; however, Landmark does not
                            guarantee complete accuracy of the Services. Many
                            factors influence the accuracy of the Services.
                            Inaccurate description of the Media by Client, poor
                            duplication of the Media, degradation of the Media,
                            and other factors can affect the Services. Landmark
                            employs its discretion in punctuation, grammar, and
                            spelling (“Form”) in the Media, and Landmark does
                            not guarantee complete accuracy of the Form, though
                            Landmark does strive to adhere to generally accepted
                            Form principles when not inconsistent with the
                            Media. The spoken word often consists of run-on
                            sentences and other irregularities, and Landmark
                            attempts to transcribe such irregularities as
                            presented originally in the Media rather than
                            correct them according to Form principles. It is
                            Client’s responsibility to review Media before
                            publishing or disclosing the Media to a third party.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            3.5. Return of Materials.
                        </h1>
                        <p className="leading-8">
                            At the completion of the Services, and subject to
                            the other sections of this Agreement, Landmark may
                            purge the Media. Landmark will dispose of the Media
                            if so instructed by Client. Landmark discourages
                            Client from providing any original or master Media
                            (“Originals”) for the Services. If Client provides
                            Originals, Client does so at its own risk; damage or
                            loss may occur if the Media is shipped or
                            electronically transmitted between Landmark and
                            Client. To the fullest extent of the law, Client
                            shall indemnify and hold harmless Landmark and its
                            agents, owners, and employees from and against any
                            and all expenses, claims, losses, costs, actions or
                            damages, including attorneys’ fees, arising out of
                            or related to damage to or loss of any Media or any
                            content or information from the Media. Client agrees
                            and acknowledges that the Media has no commercial
                            value.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            4. Corrections to Transcriptions.
                        </h1>
                        <p className="leading-8">
                            Client has thirty calendar days from its receipt of
                            the Product from Landmark to notify Landmark of any
                            alleged discrepancies in the Product. If Landmark
                            finds that the Product is unacceptable according to
                            its own internal procedures, Landmark will correct
                            the discrepancies so noticed by Client. It is
                            Client’s responsibility to notify Landmark of
                            alleged discrepancies; Landmark will not, on its own
                            accord, correct discrepancies.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            5. Fees and Payment.
                        </h1>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            5.1. Fee. Landmark charges a fee (“Fee”) for the
                            Services based on the following rates.
                        </h1>
                        <p className="leading-8">
                            For each minute of recorded audio for which the
                            Services are provided, Landmark charges the rate
                            indicated on Landmark’s website, typically at
                            https://landmarktranscription.com.au/pricing/.
                            Client acknowledges that the rates may change, and
                            that the rate at the time the Media is provided to
                            Landmark determines the rate at which Client will be
                            billed for the Services, unless otherwise agreed in
                            writing by the Parties. Any additional portion of a
                            minute which is greater than five seconds and less
                            than sixty seconds is rounded up to one minute and
                            charged as one minute.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            5.2. Factors.
                        </h1>
                        <p className="leading-8">
                            The Fee is dependent on a number of factors,
                            including but not limited to the duration of the
                            audio recording, the rate charged, the number of
                            speakers in the Media, the type of media, the state
                            of degradation of the Media, the size of the overall
                            project for the Services, deadlines or turn-around
                            time requirements imposed by Client, the presence or
                            effect of background noise, tracking features, time
                            stamping features, and verbatim transcription
                            requirements. Landmark reserves the right to alter
                            the Fee during the Services if Client’s description
                            of the Media is inaccurate or if the above or other
                            factors are inconsistent within the Media.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            5.3. Payment.
                        </h1>
                        <p className="leading-8">
                            Payment of the entire Fee is due promptly upon
                            completion of the Services. Landmark may withhold
                            the Product from Client until Landmark receives
                            payment in full for the Services.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            6. Client Representations.
                        </h1>
                        <p className="leading-8">
                            Client understands that it cannot provide Media to
                            Landmark if Client does not have rights in the
                            Media. Client represents and warrants to Landmark
                            that it holds the entire right, title, and interest
                            in the copyright in the Media, or has a license to
                            the copyright in the Media or other permission to
                            use the Media. Client hereby conveys a non-exclusive
                            license to Landmark to reproduce, prepare derivative
                            works, transcribe, and translate the Media to
                            perform the Services. To the fullest extent of the
                            law, Client shall indemnify and hold harmless
                            Landmark and its agents, owners, and employees from
                            and against any and all expenses, claims, losses,
                            costs, actions or damages, including attorneys’
                            fees, arising out of or related to any forms of
                            copyright infringement of the Media or any content
                            or information from the Media.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            7. Indemnity and Liability.
                        </h1>
                        <p className="leading-8">
                            To the fullest extent of the law, Client shall
                            indemnify and hold harmless Landmark and its agents,
                            owners, and employees from and against any and all
                            expenses, claims, losses, costs, actions or damages,
                            including attorneys’ fees, arising out of or related
                            to the Services. Any damages for which Landmark is
                            liable to Client, and which arise out of or are
                            related to the Services, shall not exceed the Fee.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            8. Assignment.
                        </h1>
                        <p className="leading-8">
                            The obligations, rights and benefits of Client under
                            this Agreement may not be delegated, assigned, or
                            transferred without written consent from Landmark.
                            Landmark may assign its rights under this Agreement
                            to another business that (1) is controlled by or
                            affiliated with Landmark or (2) acquires Landmark or
                            the assets of Landmark used in connection with the
                            Services. In the event of any such assignment, all
                            references in this Agreement to Landmark shall,
                            where appropriate, be deemed to refer to the
                            assignee
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            9. Agency.
                        </h1>
                        <p className="leading-8">
                            Nothing herein contained shall be construed to place
                            the Parties in the relationship of principal and
                            agent, licensor and licensee, partners or joint
                            venturers.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            10. Reformation and Severability.
                        </h1>
                        <p className="leading-8">
                            If any section of this Agreement is deemed invalid
                            or unreasonable by a court or arbitrator, such
                            section shall be severable from the remainder of
                            this Agreement, which shall be enforced according to
                            its terms irrespective of the enforceability of the
                            invalid or unreasonable section, provided such
                            enforcement is consistent with the general intent of
                            the Parties as evidenced by this Agreement as a
                            whole.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            11. Agreement and Amendment.
                        </h1>
                        <p className="leading-8">
                            This Agreement is the entire agreement of the
                            Parties with respect to the Services. This Agreement
                            may not be the only agreement between Provider and
                            Recipient related to the Recipient’s engagement.
                            This Agreement shall not preempt or invalidate any
                            other agreement between the Parties, except as here
                            stated, and if there is any conflict between such
                            other agreement and this Agreement, the other
                            Agreement will control. Landmark reserves the right
                            to make changes to this Agreement from time to time.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            12. Governing Law.
                        </h1>
                        <p className="leading-8">
                            This Agreement is governed by the law in force in
                            Western Australia, and each party irrevocably and
                            unconditionally submits to the non-exclusive
                            jurisdiction of the courts of Western Australia and
                            courts of appeal from them. Each party waives any
                            right it has to object to an action being brought in
                            those courts including, without limitation, by
                            claiming that the action has been brought in an
                            inconvenient forum or that those courts do not have
                            jurisdiction.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            13. Attorney’s Fees.
                        </h1>
                        <p className="leading-8">
                            In any proceeding arising out of this Agreement, the
                            prevailing party shall be entitled to reasonable
                            attorney’s fees, costs, and other expenses incurred
                            in connection with such proceeding.
                        </p>

                        <h1 className="py-4 text-[17px] font-semibold text-mainText">
                            14. Execution and Effective Date.
                        </h1>
                        <p className="leading-8">
                            Client acknowledges that it accepts this Agreement
                            by entering Landmark’s website and entering the user
                            name and password assigned to Client into Landmark’s
                            website. This Agreement is effective as of the date
                            that Client first enters its user name and password
                            into Landmark’s website.
                        </p>
                    </div>
                </Container>
            </div>
        </MainLayout>
    )
}
