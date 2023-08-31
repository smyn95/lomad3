import Image from 'next/image'

type Orders = {
    items: any[]
}

export default function ProductsList({ items }: Orders) {
    return (
        <>
            <ul className="mb-[60px] overflow-x-auto whitespace-nowrap">
                {items?.map((item: any, i: number) => (
                    <li key={i} className="w-[8rem] inline-block pr-2">
                        {item?.url && (
                            <Image src={item.url} alt="상품 이미지" width={120} height={120} className="pb-3"/>
                        )}

                        <ul className="flex flex-col">
                            <li className="overflow-hidden relative font-bold whitespace-nowrap pb-2 text-body4">
                                {item.brand} <span className="font-normal block text-body4">{item.name}</span>
                            </li>
                            <li className="before:content[''] before:h-3/4 before:left-0 before:absolute before:top-1/2 before:-translate-y-3/4 before:w-[1px] before:bg-primaryBlack pl-[10px] text-body2 font-bold whitespace-nowrap relative">
                                {item.lumpsumPrice} <span className="text-caption font-normal">NOW</span>
                                {item.discountRate != '0' && (
                                    <span className="text-red-70 font-bold text-body2 block">{item.discountRate}%</span>
                                )}
                            </li>
                            <li className="before:content[''] before:h-3/4 before:left-0 before:absolute before:top-1/2 before:-translate-y-3/4 before:w-[1px] before:bg-primaryBlack pl-[10px] text-body2 font-bold whitespace-nowrap relative">
                                {item.bnplPrice}
                                <span className="font-normal text-caption"> X {item.installment_period}개월</span>
                                {item.bnplDiscountRate != '0' && (
                                    <span className="text-red-70 font-bold text-body2 block">{item.bnplDiscountRate}%</span>
                                )}
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}
