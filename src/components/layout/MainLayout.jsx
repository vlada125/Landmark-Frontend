import Head from 'next/head'

import { Header } from './Header'
import { Footer } from './Footer'
import ScrollButton from './ScrollButton'


export function MainLayout({ children, title, footer }) {
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
            <div className='relative z-10'>
                {children}
            </div>
            <ScrollButton />
            {footer && <Footer />}
        </>
    )
}
