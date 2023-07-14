import Image from 'next/image'

type Orders = {
    items: any[]
}

export default function ProductsList({ items }: Orders) {
    return (
        <>
            <ul className="item-wrap overflow-x-auto whitespace-nowrap">
                {items?.map((item: any, i: number) => (
                    <li key={i} className="w-[7.5rem] inline-block pr-2">
                        {item?.url && (
                            <Image src={item.url} alt="상품 이미지" width={120} height={120} className="pb-3" />
                        )}

                        <ul className="item-info flex flex-col">
                            <li className="overflow-hidden relative font-bold text-xs whitespace-nowrap pb-2">
                                {item.brand} <span className="font-normal block">{item.name}</span>
                            </li>
                            <li className="price text-sm font-bold whitespace-nowrap relative">
                                {item.lumpsumPrice} <span className="text-xs font-normal">NOW</span>
                                {item.discountRate != '0' && (
                                    <span className="salePrice block text-sm">{item.discountRate}%</span>
                                )}
                            </li>
                            <li className="price text-sm font-bold whitespace-nowrap relative">
                                {item.bnplPrice}
                                <span className="text-xs font-normal"> X {item.installment_period}개월</span>
                                {item.bnplDiscountRate != '0' && (
                                    <span className="salePrice block text-sm">{item.bnplDiscountRate}%</span>
                                )}
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}
