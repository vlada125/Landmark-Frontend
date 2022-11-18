import Image from 'next/future/image'

import waveBack from '@/images/backgrounds/wave-back.svg'
import { Container } from '@/components/common/Container'

export function HelpBreadCrumb({ breadcrumb }) {
    return (
        <div className="relative ">
            <Image
                src={waveBack}
                className="absolute h-[250px] w-full origin-top scale-[1.1]"
                alt=""
            />
            <Container className="lg:pt-26  relative pt-20 pb-16  text-left">
                <div className="md:flex text-[15px] tracking-[0.6px] ">
                    <a href="/help-center" className="font-medium text-primary">
                        Landmark's Help Center ▸
                    </a>
                    <p className="md:ml-8 text-mainText underline">{breadcrumb}</p>
                </div>
            </Container>
        </div>
    )
}
