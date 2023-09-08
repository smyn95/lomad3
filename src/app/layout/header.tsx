import { categoryDetail } from '@/service/data'

import Image from 'next/image'
import Link from 'next/link'
import SwiperContainer from '../container/Swiper'

export default function Header() {
    const mainSlides = Array.from({ length: 3 }).map((url, index) => `/img-main.jpeg`)

    return (
        <header className="fixed px-5 w-full h-14 z-10 top-0 left-0 lg:px-20 lg:h-max lg:bg-primaryWhite lg:max-w-[1920px] lg:relative lg:border-b border-gray-30">
            <div className='flex justify-between items-center lg:h-[100px] w-full h-full'>
                <span className="min-w-[8.4375rem]">
                    <Image src="/img-lomad-logo.svg" width={60} height={18} alt="로고" className='lg:w-[100px]'/>
                </span>
                <input type="search" className='hidden lg:block bg-transparent'/>

                <section className="flex justify-end gap-3 lg:gap-5">
                    <button name="로그인" className='hidden lg:block'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 17.75H10C9.59 17.75 9.25 17.41 9.25 17C9.25 16.59 9.59 16.25 10 16.25H16.25V3.75H10C9.59 3.75 9.25 3.41 9.25 3C9.25 2.59 9.59 2.25 10 2.25H17C17.41 2.25 17.75 2.59 17.75 3V17C17.75 17.41 17.41 17.75 17 17.75Z" fill="black"/>
                            <path d="M12.69 9.70994C12.65 9.61994 12.6 9.53994 12.53 9.46994L9.53 6.46994C9.24 6.17994 8.76 6.17994 8.47 6.46994C8.18 6.75994 8.18 7.23994 8.47 7.52994L10.19 9.24994H3C2.59 9.24994 2.25 9.58994 2.25 9.99994C2.25 10.4099 2.59 10.7499 3 10.7499H10.19L8.47 12.4699C8.18 12.7599 8.18 13.2399 8.47 13.5299C8.62 13.6799 8.81 13.7499 9 13.7499C9.19 13.7499 9.38 13.6799 9.53 13.5299L12.53 10.5299C12.6 10.4599 12.65 10.3799 12.69 10.2899C12.77 10.1099 12.77 9.89994 12.69 9.71994V9.70994Z" fill="black"/>
                        </svg>
                    </button>
                    <button name="장바구니">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9 8.42C16.78 7.22 15.71 6.25 14.5 6.25H13.75V5.75C13.75 3.68 12.07 2 10 2C7.93003 2 6.25003 3.68 6.25003 5.75V6.25H5.50003C4.30003 6.25 3.22003 7.22 3.10003 8.42L2.40003 15.43C2.34003 16.04 2.53003 16.62 2.93003 17.06C3.33003 17.5 3.89003 17.75 4.50003 17.75H15.5C16.11 17.75 16.67 17.51 17.07 17.06C17.47 16.61 17.66 16.04 17.6 15.43L16.9 8.42ZM7.75003 5.75C7.75003 4.51 8.76003 3.5 10 3.5C11.24 3.5 12.25 4.51 12.25 5.75V6.25H7.75003V5.75ZM15.96 16.06C15.85 16.18 15.69 16.25 15.5 16.25H4.50003C4.32003 16.25 4.15003 16.18 4.04003 16.06C3.93003 15.94 3.88003 15.77 3.89003 15.58L4.59003 8.57C4.63003 8.13 5.06003 7.75 5.49003 7.75H6.24003V9.75C6.24003 10.16 6.58003 10.5 6.99003 10.5C7.40003 10.5 7.74003 10.16 7.74003 9.75V7.75H12.24V9.75C12.24 10.16 12.58 10.5 12.99 10.5C13.4 10.5 13.74 10.16 13.74 9.75V7.75H14.49C14.93 7.75 15.35 8.13 15.39 8.57L16.09 15.58C16.11 15.76 16.06 15.93 15.94 16.06H15.96Z" fill="black"/>
                        </svg>

                    </button>
                    <button name="검색" className='lg:hidden'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.27 16.47L14.16 13.36C15.12 12.2 15.69 10.71 15.69 9.09C15.69 5.38 12.67 2.37 8.97 2.37C5.27 2.37 2.25 5.39 2.25 9.09C2.25 12.79 5.27 15.81 8.97 15.81C10.52 15.81 11.94 15.28 13.08 14.4L16.21 17.53C16.36 17.68 16.55 17.75 16.74 17.75C16.93 17.75 17.12 17.68 17.27 17.53C17.56 17.24 17.56 16.76 17.27 16.47ZM3.75 9.09C3.75 6.21 6.09 3.87 8.97 3.87C11.85 3.87 14.19 6.21 14.19 9.09C14.19 11.97 11.85 14.31 8.97 14.31C6.09 14.31 3.75 11.97 3.75 9.09Z"/>
                        </svg>
                    </button>
                    <button name="유저" className='hidden lg:block'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 17.25C16.59 17.25 16.25 16.91 16.25 16.5V13.55C16.25 12.97 15.78 12.5 15.2 12.5H4.79C4.21 12.5 3.75 12.97 3.75 13.54V16.5C3.75 16.91 3.41 17.25 3 17.25C2.59 17.25 2.25 16.91 2.25 16.5V13.54C2.25 12.14 3.39 11 4.79 11H15.19C16.6 11 17.74 12.14 17.74 13.55V16.5C17.74 16.91 17.4 17.25 16.99 17.25H17Z" fill="black"/>
                            <path d="M10 9.5C7.93 9.5 6.25 7.82 6.25 5.75C6.25 3.68 7.93 2 10 2C12.07 2 13.75 3.68 13.75 5.75C13.75 7.82 12.07 9.5 10 9.5ZM10 3.5C8.76 3.5 7.75 4.51 7.75 5.75C7.75 6.99 8.76 8 10 8C11.24 8 12.25 6.99 12.25 5.75C12.25 4.51 11.24 3.5 10 3.5Z" fill="black"/>
                        </svg>
                    </button>
                </section>
            </div>
            <section className='hidden h-[78px] w-full uppercase lg:flex justify-center text-body2 relative items-center peer'>
                <ul className='flex gap-3 mr-6 font-bold'>
                    <li><Link href='/'>FURNITURE</Link></li>
                    <li><Link href='/'>LIGHTING</Link></li>
                    <li><Link href='/'>AUDIO</Link></li>
                    <li><Link href='/'>HOME APPLIANCES</Link></li>
                    <li><Link href='/'>LIFE</Link></li>
                </ul>
                <span className='vertical-divder-line'></span>
                <ul className='flex gap-3 ml-6'>
                    <li className='text-red-70'><Link href='/'>세컨핸드 할인</Link></li>
                    <li className='text-blue-60'><Link href='/'>여름 특가</Link></li>
                    <li><Link href='/'>NEW</Link></li>
                    <li><Link href='/'>BEST</Link></li>
                    <li><Link href='/'>SALE</Link></li>
                    <li><Link href='/'>EVENT</Link></li>
                    <li><Link href='/'>BRAND</Link></li>
                </ul>
            </section>

            <section className='absolute w-full bg-primaryWhite left-1/2 -translate-x-1/2 min-h-[494px] z-20 h-full justify-center border-t border-gray-30 lg:peer-hover:flex transition-all hidden hover:flex'>
                <div className='w-[800px] h-full p-7 flex flex-col border-r border-gray-30'>
                    <h1 className='uppercase text-button3 font-bold flex pb-7 cursor-pointer'>
                        ALL FURNITURE
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 15.5C8.37 15.5 8.24 15.45 8.15 15.35C7.95 15.15 7.95 14.84 8.15 14.64L12.8 9.98998L8.15 5.33998C7.95 5.13998 7.95 4.82998 8.15 4.62998C8.35 4.42998 8.66 4.42998 8.86 4.62998L13.86 9.62998C14.06 9.82998 14.06 10.14 13.86 10.34L8.86 15.34C8.76 15.44 8.63 15.49 8.51 15.49L8.5 15.5Z"/>
                        </svg>
                    </h1>
                    <ul className='flex flex-wrap gap-y-7'>
                        {categoryDetail.map (({title, list}, index) => (
                            <li key={title} className='w-1/4 flex flex-col gap-2'>
                                <h2 className='text-body2 font-bold cursor-pointer'>{title}</h2>
                                <ul className='flex flex-col gap-1'>
                                    {list.map ((item, index) => (
                                        <li key={item} className='text-body2 text-gray-60 cursor-pointer hover:text-blue-30'>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-[304px] h-full p-7'>
                    <SwiperContainer data={mainSlides} style={'w-[248px] h-[158px] rounded-md'} />
                    <span className='text-body3 pt-2 block'>아르떼미데 전 상품10% 할인</span>
                    <ul className='flex gap-2 rounded-md mt-7'>
                        <li><Image src={'/image 14.png'} width={120} height={120} alt=""/> <span className='text-body3 pt-2 block'>B&O 베오플레이 HX</span></li>
                        <li><Image src={'/img-area.png'} width={120} height={120} alt=""/> <span className='text-body3  pt-2 block'>Berg&Ridge</span></li>
                    </ul>
                </div>
            </section>
        </header>
    )
}
