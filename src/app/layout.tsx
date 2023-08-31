import { Metadata } from 'next'

import '../../styles/globals.css'
import Footer from './layout/footer'
import Header from './layout/header'

export const metadata: Metadata = {
    title: {
        absolute: 'LOMAD(로마드) - 소유의 타이밍',
    },
    description:
        '지금 사고 결제는 나누어 천천히(BNPL, Buy Now Pay Later). 제품은 먼저 받고, 12개월부터 60개월까지 원하는 기간 동안 돈은 조금씩 나누어 내세요. 내 취향을 가격 때문에 포기하는 일 없이, 오늘부터 바로 행복해지세요.',
    keywords:
        'lomad,로마드,BNPL,분납,분납결제,Furniture,Lighting,Audio,Home appliances,소파,테이블,의자, 스토리지,매트리스,리클라이너,거울,테이블 램프,플로어 램프,팬던트 램프,월 램프,스피커,사운드 바,턴테이블,앰프,커피머신,공기청정기',
    icons: {
        icon: 'https://d2t72fqhhsdts3.cloudfront.net/lomad2/images/manifest/favicon-32x32.png',
    },
    openGraph: {
        type: 'website',
        siteName: 'LOMAD(로마드) - 소유의 타이밍',
        title: 'LOMAD(로마드) - 소유의 타이밍',
        url: 'https://www.lomad.co.kr/',
        images: [
            {
                url: 'https://www.lomad.co.kr/og.png',
                width: 800,
                height: 600,
            },
        ],
        description:
            '지금 사고 결제는 나누어 천천히(BNPL, Buy Now Pay Later). 제품은 먼저 받고, 12개월부터 60개월까지 원하는 기간 동안 돈은 조금씩 나누어 내세요. 내 취향을 가격 때문에 포기하는 일 없이, 오늘부터 바로 행복해지세요.',
    },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
