import Image from 'next/image'

export default function Banner({ item }: any) {
    return (
        <>
            <Image src={item.url} alt={item.title} fill />

            <article>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
            </article>
        </>
    )
}
