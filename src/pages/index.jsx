import { MainLayout } from '@/components/layout/MainLayout'
import { Hero } from '@/components/pages/home/Hero'
import { SwiperComponent } from '@/components/pages/home/Swiper'
import { Landmark } from '@/components/pages/home/Landmark'
import { AcceptAll } from '@/components/pages/home/AcceptAll'
import { Testimonials } from '@/components/pages/home/Testimonials'
import { Encryption } from '@/components/pages/home/Encryption'
import { GetQuote } from '@/components/pages/home/GetQuote'

export default function Home() {
    return (
        <>
            <MainLayout
                title="Professional Transcription Services"
                footer={true}
            >
                <main>
                    <Hero />
                    <SwiperComponent />
                    <Landmark />
                    <AcceptAll />
                    <Testimonials />
                    <Encryption />
                    <GetQuote />
                </main>
            </MainLayout>
        </>
    )
}

