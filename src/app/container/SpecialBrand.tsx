import { specialBrand } from '@/service/data';
import Image from 'next/image';

export default function SpecialBrand() {
  return (
    <>
      <section className='text-center hidden xl:block my-24'>
        <h1 className='text-title2 mb-6 uppercase'>special brand</h1>
        <ul className='flex gap-[10px]'>
          {specialBrand.map(({url, brand}, i) => (
            i <= 2 && (
              <li className='flex w-1/3 flex-col items-center gap-5 text-body1 cursor-pointer' key={i}>
                <Image
                  src={url}
                  alt=""
                  width={217}
                  height={217}
                  className="rounded-full"
                />
                {brand}
              </li>
            )))}
        </ul>
      </section>
    </>
  );
}