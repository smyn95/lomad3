'use client'

import React from 'react'
import Image from 'next/image'

import { Autoplay, Pagination, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import Banner from './components/banner/page'
import ProductsList from './components/productsList/page'
import { bannerData, categoryData } from '../service/data'
import { orders } from '@/service/data'

export default function Home() {
    const category = categoryData

    const order = orders.slice(0, 1).map((order) => {
        const { url, ...rest } = order
        return rest
    })

    const mainSlides = Array.from({ length: 3 }).map((url, index) => `/img-main.jpeg`)

    return (
        <main id="wrapper" className="flex min-h-screen flex-col items-center justify-between">
            <Swiper
                virtual
                modules={[Virtual, Autoplay, Pagination]}
                className="mySwiper w-full h-[31.3rem]"
                pagination={{ clickable: true }}
                touchRatio={1.5}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
            >
                {mainSlides.map((url, index) => (
                    <SwiperSlide key={url} virtualIndex={index}>
                        <Image src={url} alt="메인 이미지" fill priority />
                    </SwiperSlide>
                ))}
            </Swiper>

            <section className="w-full z-20 bg-primaryWhite">
                <div className="left-0 w-full z-50 sticky top-0">
                    <ul className="flex items-center gap-5 h-[3.875rem] bg-white whitespace-nowrap overflow-x-auto bg-primaryWhite px-5  after:content-[''] after:w-20 after:h-[60px] after:absolute after:right-0 after:bg-[linear-gradient(270deg,#fff,hsla(0,0%,100%,0))] uppercase text-body2">
                        {category.map((item, i) => (
                            <li key={i} className="whitespace-nowrap text-sm font-bold">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="h-[22.5rem] w-full relative inline-table mb-14 bg-white z-20">
                    {bannerData.map((item, i) => (
                        <React.Fragment key={i}>
                            <Banner item={item} />
                            <div className="ps-8 overflow-x-auto w-screen">
                                {i === 0 ? <ProductsList items={orders} /> : <ProductsList items={order} />}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </main>
    )
}
