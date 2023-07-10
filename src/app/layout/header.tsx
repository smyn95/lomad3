import Image from 'next/image'

export default function Header() {
    return (
        <header className="header flex justify-between items-center fixed px-5 w-full h-14 z-10 top-0 left-0">
            <span className="min-w-[8.4375rem]">
                <Image src="/img-lomad-logo.svg" width={60} height={18} alt="로고" />
            </span>

            <section className="header-buttons flex justify-end gap-3">
                <button name="검색"></button>
                <button name="로그인"></button>
                <button name="장바구니" className="mobile-view"></button>
                <button name="검색" className="mobile-view"></button>
                <button name="유저"></button>
            </section>
        </header>
    )
}
