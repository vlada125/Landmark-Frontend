import Head from 'next/head'
import { useState } from 'react'
import { Header } from './Header'
import ScrollButton from './ScrollButton'
import { Container } from '../common/Container'
import { NavLink } from '../common/NavLink'
import Drawer from 'react-drag-drawer'
import { Button } from '../common/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export function BlogLayout({ children, title }) {
    const [isMenuOpened, setIsOpend] = useState(false)
    const handleClick = () => {
        // toggles the menu opened state
        setIsOpend(!isMenuOpened)
    }
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
                />
            </Head>
            <Header />
            <div className="relative z-10">{children}</div>
            <ScrollButton />
            <footer className="relative bg-[#fafafa]">
                <Container>
                    <div className="relative py-10">
                        <nav className="mt-8" aria-label="quick links">
                            <div className="justify-center gap-5 md:flex">
                                <div className="mt-10 flex flex-col text-mainText md:mt-0 md:w-1/2 lg:w-1/4">
                                    <NavLink
                                        href="https://thelai.com"
                                        className="py-3 text-[15px] font-medium leading-8  tracking-[1px] hover:bg-transparent"
                                        color={'mainText'}
                                    >
                                        Landmark
                                    </NavLink>
                                    <hr className="border-[#333] py-3" />
                                    <NavLink
                                        href="/contractor"
                                        className="py-3 text-[15px] font-normal  leading-8 hover:bg-transparent"
                                        color={'mainText'}
                                    >
                                        I’m a Transcriber/Translator
                                    </NavLink>
                                    <NavLink
                                        href="/clients"
                                        className="py-3 text-[15px] font-normal  leading-8 hover:bg-transparent"
                                        color={'mainText'}
                                    >
                                        Our Customers
                                    </NavLink>
                                    <NavLink
                                        href="/pricing"
                                        className="py-3 text-[15px] font-normal  leading-8 hover:bg-transparent"
                                        color={'mainText'}
                                    >
                                        Pricing
                                    </NavLink>
                                </div>
                                <div className="mt-10 flex flex-col text-mainText md:mt-0 md:w-1/2 lg:w-1/4">
                                    <p className="py-3 text-[15px] font-medium leading-8  tracking-[1px] text-mainText hover:bg-transparent">
                                        Company
                                    </p>
                                    <hr className="border-[#333] py-3" />
                                    <NavLink
                                        href="/about"
                                        className="py-3 text-[15px] font-normal  leading-8 hover:bg-transparent"
                                        color={'mainText'}
                                    >
                                        About
                                    </NavLink>
                                    <NavLink
                                        href="/blog"
                                        className="py-3 text-[15px] font-normal  leading-8 hover:bg-transparent"
                                        color={'mainText'}
                                    >
                                        Blog
                                    </NavLink>
                                    <NavLink
                                        href="/research-data-privacy"
                                        className="py-3 text-[15px] font-normal  leading-8 hover:bg-transparent"
                                        color={'mainText'}
                                    >
                                        Research Data Privacy
                                    </NavLink>
                                </div>
                                <div className="mt-10 flex flex-col text-mainText md:mt-0 md:w-1/2 lg:w-1/4">
                                    <p className="py-3 text-[15px] font-medium leading-8  tracking-[1px] text-mainText hover:bg-transparent">
                                        Help
                                    </p>
                                    <hr className="border-[#333] py-3" />
                                    <NavLink
                                        href="https://landmarkassociates.atlassian.net/wiki/spaces/FG/overview"
                                        className="py-3 text-[15px] font-normal  leading-8 hover:bg-transparent"
                                        color={'mainText'}
                                    >
                                        Knowledge Base
                                    </NavLink>
                                    <NavLink
                                        href="/privacy-policy"
                                        className="py-3 text-[15px] font-normal  leading-8 hover:bg-transparent"
                                        color={'mainText'}
                                    >
                                        Terms. Privacy Policy.
                                    </NavLink>
                                </div>
                                <div className="mt-10 flex flex-col text-mainText md:mt-0 md:w-1/2 lg:w-1/4">
                                    <div className="flex  items-center gap-2">
                                        <a href="" target="_blank">
                                            <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#3b5998]">
                                                <FontAwesomeIcon
                                                    icon={faFacebook}
                                                    color="white"
                                                />
                                            </span>
                                        </a>
                                        <a href="" target="_blank">
                                            <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#1a85bd]">
                                                <FontAwesomeIcon
                                                    icon={faLinkedin}
                                                    color="white"
                                                />
                                            </span>
                                        </a>
                                        <a href="" target="_blank">
                                            <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#1da1f2]">
                                                <FontAwesomeIcon
                                                    icon={faTwitter}
                                                    color="white"
                                                />
                                            </span>
                                        </a>
                                    </div>
                                    <NavLink
                                        href="https://g.page/landmarkassociates?share"
                                        className="py-3 text-[15px] font-normal  leading-8 hover:bg-transparent"
                                        color={'mainText'}
                                    >
                                        2701 East Thomas Road, Suite H
                                    </NavLink>
                                    <NavLink
                                        href="https://g.page/landmarkassociates?share"
                                        className="py-3 text-[15px] font-normal  leading-8 hover:bg-transparent"
                                        color={'mainText'}
                                    >
                                        Phoenix, AZ 85016
                                    </NavLink>
                                    <p className="py-3 text-[15px] font-medium leading-8  tracking-[1px] text-mainText hover:bg-transparent">
                                        (480) 922-1105
                                    </p>
                                    <Button
                                        className="rounded-none border-primary bg-primary px-[12px] py-[8px] font-poppins text-[12px] uppercase tracking-[1px] text-white"
                                        onClick={() => handleClick()}
                                    >
                                        Get in touch
                                    </Button>
                                </div>
                            </div>
                        </nav>
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
                            src="https://thelai.typeform.com/to/ShI5jj"
                            frameborder="0"
                            className="h-[90%] w-full pb-10"
                        ></iframe>
                    </div>
                </Drawer>
                {/*{item.menus.map((menu, k) => (
                                        <div key={k}>
                                            {!menu.dataMode ? (
                                               
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
                                    ))}*/}
            </footer>
        </>
    )
}
