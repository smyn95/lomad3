'use client'
import axios from 'axios'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Image from 'next/image'
import Banner from './components/banner/page'
import { bannerData, categoryData } from '../service/data'
import ProductsList from './components/productsList/page'
import { orders } from '@/service/data'
import React from 'react'

export default function Home() {
    const categoty = categoryData
    const order = orders.slice(0, 1).map((order) => {
        const { url, ...rest } = order
        return rest
    })

    // const resultHeader = {
    //     'Content-Type': 'application/json',
    //     'user-id': 'tlsalduszz',
    //     Hkey: 'f0e3d4988459457f',
    // }

    // const body = {
    //     inBankCode: '088',
    //     inAccount: '110326115965',
    // }

    // const onClickCertified = async () => {
    //     try {
    //         const result = await axios.post('api.hyphen.im/hb0081000378', body, {
    //             headers: resultHeader,
    //             withCredentials: true,
    //         })
    //         console.log(result)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <main id="wrapper" className="flex min-h-screen flex-col items-center justify-between">
            {/* <button style={{ fontSize: '100px' }} onClick={onClickCertified}>
        인증
      </button> */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                speed={300}
                loop={true}
                touchRatio={1.5}
                effect={'flip'}
                pagination={{ clickable: true }}
                className="mySwiper w-full h-[31.3rem]"
            >
                <SwiperSlide>
                    <Image src="/img-main.jpeg" alt="메인 이미지" fill />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/img-main.jpeg" alt="메인 이미지" fill />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/img-main.jpeg" alt="메인 이미지" fill />
                </SwiperSlide>
            </Swiper>

            <section className="main-contents w-full z-20 ">
                <div className="mobile-main-shop-category bg-white mt-[133.33%] sticky top-0 z-40">
                    <ul className="flex items-center gap-5 h-[3.875rem] whitespace-nowrap overflow-x-auto">
                        {categoty.map((item, i) => (
                            <li key={i} className="whitespace-nowrap text-sm font-bold">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="main-banner h-[22.5rem] w-full relative inline-table mb-14 bg-white z-20">
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
