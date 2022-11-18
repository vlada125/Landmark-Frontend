import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/future/image'

import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { NavLink } from '@/components/common/NavLink'
import logo from '@/images/logos/the-lai-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons'


export function Header() {
    const [searchOpen, setSearchOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    const menu = [
        {
            menu: 'About',
            href: '/about',
        },
        {
            menu: 'Pricing',
            href: '/pricing',
        },
        {
            menu: 'Security and Confidentiality',
            href: '/security-and-confidentiality',
        },
        {
            menu: 'Help Center',
            href: '/help-center',
        },
    ]
    function MobileNavigation() {
        return (
            <>
                <button
                    className="relative z-10 flex h-8 w-8 items-center justify-center pr-10 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle Navigation"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faBars} color='#666'/>
                        <span className="ml-3 text-[14px] font-medium tracking-[0.8px] text-grayText">
                            {mobileOpen ? 'Close' : 'Menu'}
                        </span>
                    </div>
                </button>
            </>
        )
    }

    function MobileMenu() {
        return (
            <div
                className={`menu-mobile absolute  block w-full bg-white shadow-[0_2px_6px_rgb(0,0,0,0.1)] md:hidden ${
                    !mobileOpen ? 'opacity-0 z-0' : 'z-20'
                }`}
            >
                {menu.map((item, index) => (
                    <Container
                        key={index}
                        className="border-b-[1px] border-[rgba(0,0,0,0.035)] "
                    >
                        <div className="py-[12px] text-primary">
                            <NavLink
                                href={item.href}
                                color="primary"
                                key={index}
                            >
                                {item.menu}
                            </NavLink>
                        </div>
                    </Container>
                ))}
                <Container className="border-b-[1px] border-[rgba(0,0,0,0.035)] ">
                    <Button
                        href="/sign-in"
                        className="my-[5px]  px-[28px] py-2 font-medium bg-primary hover:bg-primary md:block lg:ml-[30px] text-white xl:ml-[60px]"
                    >
                        <span>Get started</span>
                    </Button>
                </Container>
                <Container className="border-b-[1px] border-[rgba(0,0,0,0.035)] ">
                    <Button
                        href="/new_portal_login"
                        variant="outline"
                        className="my-[12px] border border-[#54595f] px-[36px] py-[12px] md:block"
                    >
                        <span className="">Log In</span>
                    </Button>
                </Container>
                <Container>
                    <div className="relative my-3 ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full rounded border-[1px] border-[#ddd] text-[14px] focus:border-[#bbb] focus:outline-none focus-visible:outline-none"
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-2 translate-y-[-50%] top-1/2' color='#888' />
                    </div>
                </Container>
            </div>
        )
    }

    function SearchIcon() {
        return (
            <div
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden  cursor-pointer opacity-60 md:block"
            >
                {searchOpen ? (
                    <FontAwesomeIcon icon={faCircleXmark} color='#888' size='xl' className='hover:text-black'/>
                ) : (
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                )}
            </div>
        )
    }

    return (
        <>
            <header
                className={`${
                    mobileOpen ? 'border-b-transparent' : 'border-[#ddd]'
                } border-b-[1px]  py-3`}
            >
                <Container>
                    <nav className="relative z-10 flex justify-between">
                        <div className="flex items-center md:gap-x-12">
                            <Link href="/" aria-label="Home">
                                <Image
                                    src={logo}
                                    width="65"
                                    heigh="65"
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div className="flex  items-center gap-x-5 md:gap-x-8">
                            {!searchOpen ? (
                                <>
                                    <div className="hidden font-medium tracking-[0.8px] text-[#555] md:flex md:gap-x-6">
                                        {menu.map((item, index) => (
                                            <NavLink
                                                href={item.href}
                                                color="menu"
                                                key={index}
                                            >
                                                {item.menu}
                                            </NavLink>
                                        ))}
                                    </div>
                                    <Button
                                        href="/sign-in"
                                    className="hidden bg-primary py-2 px-[28px] font-medium hover:bg-primary md:block lg:ml-[30px] xl:ml-[60px] text-white"
                                    >
                                        <span>Get started</span>
                                    </Button>
                                    <Button
                                        href="/new_portal_login"
                                        variant="outline"
                                        className="hidden border border-[#54595f] px-[36px] py-[12px] md:block"
                                    >
                                        <span className="">Log In</span>
                                    </Button>
                                </>
                            ) : (
                                <input
                                    placeholder="Type then hit enter to search..."
                                    className="hidden  text-[22px] opacity-60 focus-visible:outline-none md:block md:w-[60vw] xl:w-[50vw]"
                                />
                            )}

                            <SearchIcon />
                            <div className="-mr-1 md:hidden">
                                <MobileNavigation />
                            </div>
                        </div>
                    </nav>
                </Container>
            </header>
            <MobileMenu />
        </>
    )
}
