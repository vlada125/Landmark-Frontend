import Image from 'next/future/image'

import { Container } from '@/components/common/Container'
import { NavLink } from '@/components/common/NavLink'
import Drawer from 'react-drag-drawer'

import waveBack from '@/images/backgrounds/wave-back.svg'
import { useState } from 'react'

export function Footer() {
    const footerMenus = [
        {
            topic: 'Using Landmark',
            topicCol: 'text-primary',
            menus: [
                {
                    item: 'For Universities/Organizations',
                    href: '/organizations',
                },
                {
                    item: 'Pricing',
                    href: '/pricing',
                },
                {
                    item: 'Help Center',
                    href: '/help-center',
                },
                {
                    item: 'Support',
                    href: 'https://form.typeform.com/to/dRszmz?typeform-medium=embed-snippet',
                },
            ],
        },
        {
            topic: 'Landmark',
            topicCol: 'text-warning',
            menus: [
                {
                    item: 'I’m a Transcriber/Translator',
                    href: '/contractor',
                },
                {
                    item: 'About',
                    href: '/about',
                },
                {
                    item: 'Our Customers',
                    href: '/clients',
                },
                {
                    item: 'Blog',
                    href: '/blog',
                },
            ],
        },
        {
            topic: 'Legal',
            topicCol: 'text-success',
            menus: [
                {
                    item: 'Terms and conditions',
                    href: '/terms-and-conditions',
                },
                {
                    item: 'Privacy Policy.',
                    href: '/privacy-policy',
                },
                {
                    item: 'Security & Confidentiality',
                    href: '/security-and-confidentiality',
                },
            ],
        },
        {
            topic: 'Handy Links',
            topicCol: 'text-link',
            menus: [
                {
                    item: 'Get a customized quote',
                    href: 'https://form.typeform.com/to/yzo8Mw?typeform-medium=embed-snippet',
                    dataMode: 'drawer_right',
                },
                {
                    item: 'How to request a transcript',
                    href: '/guide/ticket',
                },
                {
                    item: 'Request an invoice',
                    href: '/guide/invoicing',
                },
                {
                    item: 'Get in touch',
                    href: 'https://form.typeform.com/to/dRszmz?typeform-medium=embed-snippet',
                    dataMode: 'drawer_right',
                },
            ],
        },
    ]
    const [isMenuOpened, setIsOpend] = useState(false)
    const [formSrc, setFormSrc] = useState('')
    const handleClick = (src) => {
        // toggles the menu opened state
        setIsOpend(!isMenuOpened)
        setFormSrc(src)
    }
    return (
        <footer className="relative  overflow-hidden">
            <Image
                src={waveBack}
                className="absolute bottom-[40px] h-[100px] w-full origin-center rotate-180 scale-[1.8]"
                alt=""
            />
            <Container>
                <div className="relative py-10">
                    <nav className="mt-8" aria-label="quick links">
                        <div className="justify-center md:flex">
                            {footerMenus.map((item, index) => (
                                <div
                                    className="mt-10 md:mt-0 md:w-1/2 lg:w-1/4"
                                    key={index}
                                >
                                    <p
                                        className={`${item.topicCol} mb-5 text-[16px] font-medium tracking-[1px]`}
                                    >
                                        {item.topic}
                                    </p>
                                    {item.menus.map((menu, k) => (
                                        <div key={k}>
                                            {!menu.dataMode ? (
                                                <NavLink
                                                    href={menu.href}
                                                    className="text-[14px] font-normal leading-8 hover:bg-transparent"
                                                    color={'mainText'}
                                                >
                                                    {menu.item}
                                                </NavLink>
                                            ) : (
                                                <>
                                                    <button
                                                        onClick={() =>
                                                            handleClick(
                                                                menu.href
                                                            )
                                                        }
                                                        className="text-[14px] font-normal leading-8"
                                                    >
                                                        {menu.item}
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </nav>
                    <hr />
                    <div className="pt-10 text-[13px] md:flex md:gap-10">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-1/3">
                            <p className="text-center leading-9">
                                Level 2, 160 Wharf Street. Spring Hill QLD 4000
                                <br />
                                02 7202 0557
                            </p>
                        </div>
                        <div className="text-right md:w-1/3">
                            ©2020-{new Date().getFullYear()} Landmark
                            Associates, Pty Ltd.
                        </div>
                    </div>
                </div>
            </Container>
            <Drawer
                open={isMenuOpened}
                onRequestClose={() => setIsOpend(!isMenuOpened)}
                direction="left"
                modalElementClass="w-[90%] md:w-1/2 ml-auto"
            >
                <div className="h-screen bg-white">
                    <iframe
                        src={formSrc}
                        frameborder="0"
                        className="h-[90%] w-full pb-10"
                    ></iframe>
                </div>
            </Drawer>
        </footer>
    )
}
