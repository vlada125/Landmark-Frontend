import Image from 'next/future/image'

import { Container } from '@/components/common/Container'
import medal from '@/images/icons/lai-medal.png'
import padlock from '@/images/icons/lai-padlock.png'
import tools from '@/images/icons/lai-tools.png'
import clock from '@/images/icons/lai-clock.png'
import money from '@/images/icons/lai-money.png'

const testimonials = [
    {
        title: 'Top quality ​',
        description:
            'We have highly experienced professional Transcribers, Captioners, and Translators.',
        img: medal,
    },
    {
        title: 'Secure ordering​ ​',
        description: 'Our vetted workforce uses our secure platform.​',
        img: padlock,
    },
    {
        title: 'Powerful technology​',
        description: 'Your data is encrypted to ensure security.',
        img: tools,
    },
    {
        title: 'Prompt service​​',
        description:
            'We are available via phone, email, and chat to answer all your questions. ​',
        img: clock,
    },
    {
        title: 'Fair Pay​',
        description:
            'We pride ourselves on guaranteeing our contractors an honest and equitable fair remuneration.',
        img: money,
    },
    {
        title: 'Over 18 years old​',
        description:
            'In order to transcribe or translate with Landmark, we require that everyone be over 18 years old.',
        img: medal,
    },
]

export function Testimonials() {
    return (
        <section
            id="testimonials"
            aria-label="What our customers are saying"
            className="py-10"
        >
            <Container>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 px-5 sm:gap-8 md:grid-cols-2 md:px-0 lg:mt-20 lg:max-w-none lg:grid-cols-3"
                >
                    {testimonials.map((item, index) => (
                        <div
                            className="rounded-2xl shadow-[0px_0px_10px_0px_rgb(0,0,0,0.22)]"
                            key={index}
                        >
                            <div className="p-5 text-center md:p-[44px]">
                                <Image
                                    src={item.img}
                                    className="m-auto mb-5 w-[80px]"
                                    alt=""
                                />
                                <h3 className="mb-4 text-xl font-semibold md:text-[22px]">
                                    {item.title}
                                </h3>
                                <p className="mx-auto text-[16px] leading-7 text-mainText md:w-[90%] md:pt-5">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
