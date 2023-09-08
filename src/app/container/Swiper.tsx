'use client'

import { Autoplay, Pagination, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'

type Props = {
    data: string[];
    style: string;
}

export default function SwiperContainer({ data, style } : Props) {
    return (
        <>
          <Swiper
                virtual
                modules={[Virtual, Autoplay, Pagination]}
                className={style}
                pagination={{ clickable: true }}
                touchRatio={1.5}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
            >
                    {data.map((url, index) => (
                        <SwiperSlide key={url} virtualIndex={index}>
                            <Image src={url} alt="메인 이미지" fill priority />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    )
}