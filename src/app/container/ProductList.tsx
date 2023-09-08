import Image from 'next/image'

type Orders = {
    items: any[];
    size?: string;
}

export default function ProductsList({ items, size }: Orders) {
    return (
        <>
            <ul className="mb-[60px] overflow-x-auto whitespace-nowrap lg:flex lg:flex-wrap gap-y-8">
                {items?.map((item: any, i: number) => (
                    <li key={i} className={`w-[8rem] inline-block pr-2 ${size}`}>
                        {item?.url && (
                            <Image src={item.url} alt="상품 이미지" width={120} height={120} className="pb-3 lg:w-[232px]"/>
                        )}

                        <ul className="flex flex-col">
                            <li className="overflow-hidden relative font-bold whitespace-nowrap pb-2 text-body4 lg:text-body2 lg:font-bold">
                                {item.brand} <span className="font-normal block text-body4 lg:text-body2">{item.name}</span>
                            </li>
                            <li className="before:content[''] before:h-3/4 before:left-0 before:absolute before:top-1/2 before:-translate-y-3/4 before:w-[1px] before:bg-primaryBlack pl-[10px] text-body2 font-bold whitespace-nowrap relative lg:text-title3">
                                {item.lumpsumPrice} <span className="text-caption font-normal lg:text-body2">NOW</span>
                                {item.discountRate != '0' && (
                                    <span className="text-red-70 font-bold text-body2 block lg:inline-block lg:pl-1">{item.discountRate}%</span>
                                )}
                            </li>
                            <li className="before:content[''] before:h-3/4 before:left-0 before:absolute before:top-1/2 before:-translate-y-3/4 before:w-[1px] before:bg-primaryBlack pl-[10px] text-body2 font-bold whitespace-nowrap relative lg:text-title3 lg:font-bold">
                                {item.bnplPrice}
                                <span className="font-normal text-caption lg:text-body2"> X {item.installment_period}개월</span>
                                {item.bnplDiscountRate != '0' && (
                                    <span className="text-red-70 font-bold text-body2 block lg:inline-block lg:pl-1">{item.bnplDiscountRate}%</span>
                                )}
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}