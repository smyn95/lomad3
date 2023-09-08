'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
    const [openFooterInfo, setOpenFooterInfo] = useState(false)

    const handleInfoToggle = () => {
        setOpenFooterInfo((prev) => !prev)
    }

    return (
        <footer className="px-10 py-10 bg-gray-90 text-gray-60 text-body3 relative xl:mt-[-80px]">
            <div className="flex justify-between flex-wrap gap-5 pb-5 border-b border-b-gray-70 xl:justify-start xl:gap-[60px]">
                <span className='flex flex-col gap-1 xl:flex-row xl:items-center xl:gap-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 1C18.55 1 19 1.45 19 2V22C19 22.55 18.55 23 18 23H6C5.45 23 5 22.55 5 22V2C5 1.45 5.45 1 6 1H18ZM18 0H6C4.9 0 4 0.9 4 2V22C4 23.1 4.9 24 6 24H18C19.1 24 20 23.1 20 22V2C20 0.9 19.1 0 18 0Z"  fill="white"/>
                        <path d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5Z"  fill="white"/>
                    </svg>
                    <Link href="tel:02-523-0615" className="text-primaryWhite">
                        02-523-0615
                    </Link>
                </span>
                <span className='flex flex-col gap-1 xl:flex-row xl:items-center xl:gap-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 4C22.55 4 23 4.45 23 5V19C23 19.55 22.55 20 22 20H2C1.45 20 1 19.55 1 19V5C1 4.45 1.45 4 2 4H22ZM22 3H2C0.9 3 0 3.9 0 5V19C0 20.1 0.9 21 2 21H22C23.1 21 24 20.1 24 19V5C24 3.9 23.1 3 22 3Z" fill="white"/>
                        <path d="M12 14.5C11.87 14.5 11.74 14.45 11.65 14.35L4.65 7.34999C4.45 7.14999 4.45 6.83999 4.65 6.63999C4.85 6.43999 5.16 6.43999 5.36 6.63999L12.01 13.29L18.66 6.63999C18.86 6.43999 19.17 6.43999 19.37 6.63999C19.57 6.83999 19.57 7.14999 19.37 7.34999L12.37 14.35C12.27 14.45 12.14 14.5 12.02 14.5H12Z" fill="white"/>
                    </svg>

                    <Link href="" className="text-primaryWhite">
                        메일 문의
                    </Link>
                </span>
                <p>평일 10:00 ~ 18:00 토, 일, 공휴일 휴무</p>
            </div>

            <div className='border-b border-b-gray-70'>
                <ul className="flex flex-wrap justify-between py-5 gap-y-4 xl:flex-row xl:justify-start xl:items-center xl:gap-5">
                    {['B2B 구매 문의', '스타트업 패키지', '입점 문의', '고객센터'].map((title, i) => (
                        <li key={i} className="w-2/4 font-bold xl:w-auto">
                            {title}
                        </li>
                    ))}
                    <li className="pt-6 flex gap- xl:pt-0 xl:gap-5 xl:ml-[60px]">
                        <span>회사소개</span>
                        <span>이용약관</span>
                        <span className="font-bold">개인정보처리방침</span>
                    </li>
                </ul>
            </div>

            <div className="border-none relative">
                <p className={`${openFooterInfo ? 'mb-40' : ''} flex justify-between py-5 duration-300`}>
                    <span>
                        <span className="pr-2">(주)리체</span> ©2023 Liche Co.
                    </span>
                    <button
                        onClick={handleInfoToggle}
                        className="flex items-center xl:hidden"
                        data-open={openFooterInfo}
                    >
                        사업자 정보 
                        <span className={`${openFooterInfo ? '' : 'rotate-180'}`}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 12.5002C14.87 12.5002 14.74 12.4502 14.65 12.3502L10 7.70023L5.35001 12.3502C5.15001 12.5502 4.84001 12.5502 4.64001 12.3502C4.44001 12.1502 4.44001 11.8402 4.64001 11.6402L9.64001 6.64023C9.84001 6.44023 10.15 6.44023 10.35 6.64023L15.35 11.6402C15.55 11.8402 15.55 12.1502 15.35 12.3502C15.25 12.4502 15.12 12.5002 15 12.5002Z" fill="#8E8E8E"/>
                            </svg>
                        </span>
                    </button>
                </p>

                <ul className={`absolute top-[-130px] duration-300 direction-normal flex flex-col gap-1 pb-5 -z-50 ${openFooterInfo ? 'animate-slideDown' : 'animate-slideUp'} xl:static xl:w-[700px] xl:flex-wrap xl:flex-row`} data-open={openFooterInfo}>
                    <li className='w-auto'>서울특별시 서초구 바우뫼로 162, 4층, 6층</li>
                    <li className='w-auto'>
                        대표이사 : 김홍규 <span className="pl-4">개인정보보호책임자 : 신보아</span>
                    </li>
                    <li className='w-auto'>사업자등록번호: 723-86-01708</li>
                    <li className='w-auto'>
                        <Link href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=7238601708" target="_blank">
                            [사업자정보확인]
                        </Link>
                    </li>
                    <li className='w-auto'>통신판매업 신고 : 2022-서울서초-1820</li>
                    <li className='w-auto'>팩스 : 02-525-0613</li>
                </ul>
            </div>

            <div className="social-icons pt-5 flex gap-3 xl:pt-0">
                <Link
                    href=""
                    className="flex items-center w-8 h-8 mb-2 border border-solid rounded-3xl border-gray-70 justify-center"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 2H6.5C4.01 2 2 4.01 2 6.5V13.5C2 15.99 4.01 18 6.5 18H13.5C15.98 18 18 15.99 18 13.5V6.5C18 4.01 15.98 2 13.5 2ZM16.55 13.48C16.5 14.59 16.03 15.3 15.74 15.59C14.76 16.6 13.63 16.6 10 16.6C6.37 16.6 5.25 16.6 4.26 15.59C3.96 15.29 3.5 14.59 3.45 13.48C3.4 12.36 3.37 10.46 3.39 10C3.38 9.54 3.4 7.64 3.45 6.52C3.5 5.41 3.97 4.7 4.26 4.41C5.24 3.4 6.37 3.4 10 3.4C13.63 3.4 14.75 3.4 15.74 4.41C16.04 4.71 16.5 5.41 16.55 6.52C16.6 7.64 16.63 9.54 16.61 10C16.62 10.46 16.6 12.36 16.55 13.48ZM10 5.87C7.72 5.87 5.87 7.72 5.87 10C5.87 12.28 7.72 14.13 10 14.13C12.28 14.13 14.13 12.28 14.13 10C14.13 7.72 12.28 5.87 10 5.87ZM10 12.68C8.52 12.68 7.32 11.48 7.32 10C7.32 8.52 8.52 7.32 10 7.32C11.48 7.32 12.68 8.52 12.68 10C12.68 11.48 11.48 12.68 10 12.68ZM15.22 5.7C15.22 6.23 14.79 6.66 14.26 6.66C13.73 6.66 13.3 6.23 13.3 5.7C13.3 5.17 13.73 4.74 14.26 4.74C14.79 4.74 15.22 5.17 15.22 5.7Z"/>
                    </svg>
                </Link>
                <Link
                    href=""
                    className="flex items-center w-8 h-8 mb-2 border border-solid rounded-3xl border-gray-70 justify-center"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.89 8.0099C2.39 8.0499 1.91 8.2699 1.56 8.6299V6.1499H0V12.6699H1.58V12.1599C1.87 12.5999 2.37 12.8499 2.89 12.8299C4.16 12.7799 5.15 11.6999 5.1 10.4299C5.1 10.4199 5.1 10.4099 5.1 10.3999C5.1 10.3999 5.02 8.0199 2.89 8.0199V8.0099ZM2.55 11.4499C1.99 11.4499 1.54 10.9999 1.54 10.4399C1.54 9.8799 1.99 9.4299 2.55 9.4299C3.11 9.4299 3.56 9.8799 3.56 10.4399C3.56 10.9999 3.11 11.4499 2.55 11.4499Z"/>
                        <path d="M5.6001 6V7.51C5.6001 7.51 6.3101 7.48 6.3101 8.81V12.67H7.8201V8.45C7.8201 8.45 7.8801 6 5.6001 6Z"/>
                        <path d="M11.5101 8.02977C11.5101 8.02977 8.92008 8.02976 8.92008 10.4398C8.89008 11.7298 9.91008 12.7998 11.2001 12.8298C11.3001 12.8298 11.4101 12.8298 11.5101 12.8198C11.5101 12.8198 14.1501 12.8198 14.1501 10.4398C14.1801 9.12977 13.1401 8.03977 11.8301 8.00977C11.7201 8.00977 11.6201 8.00977 11.5101 8.01977V8.02977ZM11.5101 11.4498C10.9501 11.4498 10.5001 10.9998 10.5001 10.4498C10.5001 9.88977 10.9501 9.43976 11.5001 9.43976C12.0601 9.43976 12.5101 9.88977 12.5101 10.4398C12.5101 10.9998 12.0601 11.4498 11.5101 11.4498Z"/>
                        <path d="M18.4702 8.19004V8.63004C18.1402 8.25004 17.6602 8.03004 17.1602 8.03004C15.9702 7.99004 14.9702 8.93004 14.9302 10.12C14.9302 10.22 14.9302 10.33 14.9402 10.43C14.9402 10.43 14.9202 12.75 17.0902 12.75C17.6102 12.76 18.1202 12.54 18.4602 12.15V12.52C18.5402 13.06 18.1702 13.57 17.6202 13.65C17.5702 13.65 17.5102 13.66 17.4602 13.66H17.0802V15.05H17.6902C18.9402 15.06 19.9702 14.05 19.9802 12.8C19.9802 12.74 19.9802 12.67 19.9802 12.61V8.20004H18.4602L18.4702 8.19004ZM17.5402 11.45C16.9802 11.45 16.5302 11 16.5302 10.44C16.5302 9.88004 16.9802 9.43004 17.5402 9.43004C18.1002 9.43004 18.5502 9.88004 18.5502 10.44C18.5502 10.99 18.1002 11.44 17.5402 11.44V11.45Z"/>
                    </svg>
                </Link>
                <Link
                    href=""
                    className="flex items-center w-8 h-8 mb-2 border border-solid rounded-3xl border-gray-70 justify-center"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2001 2.89C10.7901 2.08 11.7101 1.57 12.7101 1.5C12.8001 2.43 12.5001 3.35 11.8801 4.06C11.3301 4.82 10.4301 5.25 9.50006 5.18C9.40006 4.35 9.66006 3.53 10.2001 2.89Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.64 6.09006C10.18 6.09006 11.18 5.35006 12.49 5.35006C13.74 5.30006 14.93 5.90006 15.62 6.95006C14.54 7.58006 13.88 8.73006 13.89 9.98006C13.89 11.4001 14.74 12.6801 16.05 13.2401C16.05 13.2401 14.54 17.4801 12.51 17.4801C11.58 17.4801 10.85 16.8501 9.86 16.8501C8.87 16.8501 7.86 17.5001 7.21 17.5001C5.35 17.5001 3 13.4801 3 10.2401C3 7.00006 4.99 5.39006 6.85 5.39006C8.06 5.39006 9 6.09006 9.63 6.09006H9.64Z"/>
                    </svg>
                </Link>
                <Link
                    href=""
                    className="flex items-center w-8 h-8 mb-2 border border-solid rounded-3xl border-gray-70 justify-center"
                >
                    <Image src="/ico-footer-aos.png" width={20} height={20} alt=""/>
                </Link>
            </div>
        </footer>
    )
}
