'use client'

import React from 'react'
import Image from 'next/image'

import { bannerData, categoryData, bannerData2, bannerData3 } from '../service/data'
import { orders } from '@/service/data'
import ProductsList from './container/ProductList'
import Banner from './container/Banner'
import SpecialBrand from './container/SpecialBrand'
import SwiperContainer from './container/Swiper'

export default function Home() {
    const category = categoryData

    const order = orders.slice(0, 1).map((order) => {
        const { url, ...rest } = order
        return rest
    })

    const mainSlides = Array.from({ length: 3 }).map((url, index) => `/img-main.jpeg`)

    return (
        <main className='xl:px-20 xl:py-12 xl:flex xl:gap-12 xl:max-w-[1920px] w-screen'>
            <section className='hidden xl:block xl:w-[43%]'>
                <Image src="/promotion_banner01.png" width={712} height={712} alt="메인 배너" />
                <Image src="/promotion_banner02.png" width={712} height={712} alt="메인 배너" />
                <Image src="/promotion_banner03.png" width={712} height={712} alt="메인 배너" />
                <SpecialBrand/>
                <>
                    <Image src="/main-banner01.png" width={712} height={712} alt="메인 배너" />
                    <h1 className="text-title3 pt-6 pb-1">이탈리아를 대표하는 핸드메이드 조명</h1>
                    <p className="text-body2 pb-6">친환경 소재를 사용하며 수작업을 통해 제작되는 특별한 하이엔드 조명을 만나보세요.</p>
                    <ProductsList items={orders} size={'xl:w-[33.33%]'} />
                </>
                <h1 className='uppercase text-headline1'>Review</h1>
                <p className='text-body1'>앞선 구매자들의 후기에서 영감을 얻어보세요.</p>
                <div className='w-full h-[45.875rem] bg-gray-30 mt-8'></div>
            </section>

            <section className="flex min-h-screen flex-col items-center justify-between xl:w-[27%] w-full">
                <SwiperContainer data={mainSlides} style={'w-full h-[31.3rem] xl:!hidden'}/>

                <section className="w-full z-20 bg-primaryWhite xl:z-0">
                    <div className="left-0 w-full z-50 sticky top-0 xl:hidden">
                        <ul className="flex items-center gap-5 h-[3.875rem] bg-white whitespace-nowrap overflow-x-auto bg-primaryWhite px-5  after:content-[''] after:w-20 after:h-[60px] after:absolute after:right-0 after:bg-[linear-gradient(270deg,#fff,hsla(0,0%,100%,0))]">
                            {category.map((item, i) => (
                                <li key={i} className="whitespace-nowrap font-bold uppercase text-body2">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="h-[22.5rem] w-full relative inline-table mb-14 bg-white z-20">
                        {bannerData.map((item, i) => (
                            <React.Fragment key={i}>
                                <Banner item={item} />
                                <div className="ps-8 overflow-x-auto w-screen xl:ps-0 xl:w-full">
                                    {i === 0 ? <ProductsList items={orders} size={'xl:w-[50%]'} /> : <ProductsList items={order} size={'xl:w-[50%]'}/>}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </section>
            </section>

            <section className="xl:flex min-h-screen flex-col items-center justify-between xl:w-[27%] hidden">
                <section className="w-full z-20 bg-primaryWhite xl:z-0">
                    <div className="left-0 w-full z-50 sticky top-0 xl:hidden">
                        <ul className="flex items-center gap-5 h-[3.875rem] bg-white whitespace-nowrap overflow-x-auto bg-primaryWhite px-5  after:content-[''] after:w-20 after:h-[60px] after:absolute after:right-0 after:bg-[linear-gradient(270deg,#fff,hsla(0,0%,100%,0))]">
                            {category.map((item, i) => (
                                <li key={i} className="whitespace-nowrap font-bold uppercase text-body2">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="h-[22.5rem] w-full relative inline-table mb-14 bg-white z-20">
                        {bannerData2.map((item, i) => (
                            <React.Fragment key={i}>
                                <Banner item={item} />
                            </React.Fragment>
                        ))}
                        <div className='bg-gray-30 w-full h-[13.75rem] mt-[96px]'></div>
                        <ul className='flex gap-2 justify-center mb-[96px] pt-4'>
                            {new Array(10).fill(1).map((_, i) => (
                                <li className='bg-gray-40 w-2 h-2 rounded-xl first:bg-primaryBlack' key={i}></li>
                            ))}
                        </ul>
                        {bannerData3.map((item, i) => (
                            <React.Fragment key={i}>
                                <Banner item={item} />
                                <div className="ps-8 overflow-x-auto w-screen xl:ps-0 xl:w-full">
                                    {i === 0 ? <ProductsList items={orders} size={'xl:w-[50%]'} /> : <ProductsList items={order} size={'xl:w-[50%]'}/>}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </section>
            </section>
        </main>
    )
}
