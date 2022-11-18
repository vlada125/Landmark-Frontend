import 'focus-visible'
import '@/styles/tailwind.css'
import 'react-modal-video/css/modal-video.css'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <Component {...pageProps} />{' '}
        </>
    )
}
