import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

import { Button } from '@/components/common/Button'
import secure from '@/images/backgrounds/secure.png'
import ssl from '@/images/backgrounds/ssl.png'

export function Confidentiality() {
    const confidentialities = [
        {
            img: secure,
            border: 'border-primary',
            title: 'Fortune 500 Technology',
            description:
                'We utilize the resources of Salesforce and Amazon Web services — The same cloud services used by The CIA, Netflix, and other Fortune 500 companies — to support the data security needs of our researchers',
        },
        {
            img: ssl,
            border: 'border-[#54595f]',
            title: 'SSL Data Encryption',
            description:
                'Our system employs strong multi-factor encryption through Amazon’s S3-managed encryption keys. Each file is encrypted with a unique key, which is also encrypted by a separate master key which rotates regularly.',
        },
    ]
    return (
        <Container className="py-10 pb-16">
            <div className="gap-20 md:flex">
                {confidentialities.map((confidentiality, index) => (
                    <div
                        className={`mt-6 rounded-r-lg border-l-[10px] ${confidentiality.border} px-[36px] py-[36px] shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:mt-0 md:w-1/2 md:py-[72px]`}
                        key={index}
                    >
                        <Image
                            src={confidentiality.img}
                            className="h-[50%] w-[50%]"
                        />
                        <h1 className="h-[50px] py-5 font-poppins text-[24px] font-semibold md:text-[26px]">
                            {confidentiality.title}
                        </h1>
                        <p className="mt-10 text-[15px] leading-7 text-mainText">
                            {confidentiality.description}
                        </p>
                    </div>
                ))}
            </div>
        </Container>
    )
}
