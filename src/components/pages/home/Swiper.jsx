import React, { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from '@/components/common/Container'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Autoplay } from 'swiper'
//import surveys from '@/images/swiper'

export function SwiperComponent() {
    const [perview, setPerview] = useState(3)
    useEffect(() => {
        const width = window.innerWidth
        if (width < 760) {
            console.log('dd')
            setPerview(1)
        }
        if (760 < width && width < 1024) {
            setPerview(2)
        }
    }, [])
    return (
        <Container className="md:py-10">
            <h1 className="pb-10 text-center font-roboto text-2xl font-semibold text-slateText md:tracking-[0.8px]">
                Trusted by over 4,000 researchers across 4 continents.
            </h1>
            <Swiper
                slidesPerView={perview}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    duration: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {(() => {
                    const arr = []
                    for (let i = 0; i < 10; i++) {
                        arr.push(
                            <SwiperSlide key={i}>
                                <div>
                                    <Image
                                        src={require(`@/images/swiper/survey-${
                                            i + 1
                                        }.png`)}
                                        alt="swiper"
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    }
                    return arr
                })()}
            </Swiper>
        </Container>
    )
}
