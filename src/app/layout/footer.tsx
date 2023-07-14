'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
    const [openFooterInfo, setOpenFooterInfo] = useState(false)

    const handleInfoToggle = () => {
        setOpenFooterInfo((prev) => !prev)
    }

    return (
        <footer className="px-10 py-10 bg-[#1e1e1e] text-[#8e8e8e] text-[.8125rem] font-light">
            <div className="flex justify-between flex-wrap gap-5 pb-5">
                <span>
                    <i className="tel-icon block object-contain h-6 w-auto mb-2"></i>
                    <Link href="tel:02-523-0615" className="text-[#fff]">
                        02-523-0615
                    </Link>
                </span>
                <span>
                    <i className="mail-icon block object-contain h-6 w-auto mb-2"></i>
                    <Link href="" className="text-[#fff]">
                        메일 문의
                    </Link>
                </span>
                <p>평일 10:00 ~ 18:00 토, 일, 공휴일 휴무</p>
            </div>

            <div>
                <ul className="flex flex-wrap justify-between py-5 gap-y-4">
                    {['B2B 구매 문의', '스타트업 패키지', '입점 문의', '고객센터'].map((title, i) => (
                        <li key={i} className="w-2/4 font-bold">
                            {title}
                        </li>
                    ))}
                    <li className="pt-6 flex gap-6">
                        <span>회사소개</span>
                        <span>이용약관</span>
                        <span className="font-bold">개인정보처리방침</span>
                    </li>
                </ul>
            </div>

            <div className="footer-info-wrapper border-none relative">
                <p className={`${openFooterInfo ? 'mb-40' : ''} flex justify-between py-5 duration-75`}>
                    <span>
                        <span className="pr-2">(주)리체</span> ©2023 Liche Co.
                    </span>
                    <button
                        onClick={handleInfoToggle}
                        className="info-btn flex items-center gap-3"
                        data-open={openFooterInfo}
                    >
                        사업자 정보 <span></span>
                    </button>
                </p>

                <ul className="footer-info flex flex-col gap-1 pb-5" data-open={openFooterInfo}>
                    <li>서울특별시 서초구 바우뫼로 162, 4층, 6층</li>
                    <li>
                        대표이사 : 김홍규 <span className="pl-4">개인정보보호책임자 : 신보아</span>
                    </li>
                    <li>사업자등록번호: 723-86-01708</li>
                    <li>
                        <Link href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=7238601708" target="_blank">
                            [사업자정보확인]
                        </Link>
                    </li>
                    <li>통신판매업 신고 : 2022-서울서초-1820</li>
                    <li>팩스 : 02-525-0613</li>
                    <li>메일 : official@liche.co.kr</li>
                </ul>
            </div>

            <div className="social-icons pt-5 flex gap-3">
                {[
                    ['', 'instagram-icon'],
                    ['', 'blog-icon'],
                    ['', 'apple-icon'],
                    ['', 'google-store-icon'],
                ].map(([url, className]) => (
                    <Link
                        key={className}
                        href={url}
                        className={`${className} block object-contain h-5 mb-2 w-5 border border-solid rounded-3xl border-[#646464] p-4`}
                    ></Link>
                ))}
            </div>
        </footer>
    )
}
