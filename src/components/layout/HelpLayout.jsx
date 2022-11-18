import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import logo from '@/images/logos/the-lai-logo.png'

import { Footer } from './Footer'
import ScrollButton from './ScrollButton'

export function HelpLayout({ children, title }) {
    return (
        <div className="overflow-hidden">
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
                />
            </Head>
            <header
                className={`border-b-[1px] border-[#eee]  bg-[rgba(207,34,49,0.04)] py-3`}
            >
                <Container>
                    <nav className="relative z-50 md:flex md:justify-between">
                        <div className="flex items-center text-center md:gap-x-12 md:text-left">
                            <Link
                                href="/"
                                aria-label="Home"
                                className="mx-auto md:mx-0"
                            >
                                <Image
                                    src={logo}
                                    width="65"
                                    heigh="65"
                                    alt="logo"
                                />
                            </Link>
                            <h1 className="hidden text-[18px] tracking-[0.6px] md:block">
                                Landmark Help Center
                            </h1>
                        </div>
                        <div className="md:  justify-right mt-8 flex items-center  justify-center gap-x-8 md:mt-0">
                            <Button
                                href="/sign-in"
                                className="mx-10 bg-primary py-[9px] px-[28px] font-medium hover:bg-primary md:block lg:ml-[30px] xl:ml-[60px]"
                            >
                                <span>Get started</span>
                            </Button>
                            <Button
                                href="/new_portal_login"
                                variant="outline"
                                className="border border-[#54595f] py-[14px] px-[36px]  md:block"
                            >
                                <span className="">Log In</span>
                            </Button>
                        </div>
                    </nav>
                </Container>
            </header>

            {children}
            <ScrollButton />
            {<Footer />}
        </div>
    )
}
