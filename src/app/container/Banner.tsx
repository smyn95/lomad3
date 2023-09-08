import Image from 'next/image'

export default function Banner({ item }: any) {
    return (
        <>
            <Image src={item.url} alt={item.title} fill className='xl:!w-full xl:!h-full'/>

            <article className="px-8 py-6 xl:px-0">
                <h1 className="text-title3">{item.title}</h1>
                <p className="text-body2">{item.desc}</p>
            </article>
        </>
    )
}
