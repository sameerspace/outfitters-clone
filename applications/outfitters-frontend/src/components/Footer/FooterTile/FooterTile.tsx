import Image from 'next/image';
import Link from 'next/link';

const FooterTile = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start w-full justify-center h-1/3 text-white bg-black mt-[5rem] pt-[2.5rem] px-4 lg:px-[10rem] pb-[1rem] text-xs leading-6">
        <div className="flex flex-col justify-start w-full md:w-1/4 px-[2rem]">
          <Link href={''}>CAN WE HELP YOU?</Link>
          <div className="md:hidden sm:w-full md:w-3/4 mt-4">
            <div className="flex justify-between items-center">
              <p>SEND EMAIL</p>
              <a 
              className='break-all'
                href="mailto:contactus@outfitters.com.pk"
                title="mailto:contactus@outfitters.com.pk"
              >
                CONTACTUS@OUTFITTERS.COM.PK
              </a>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="tel:042111116387"
                title="tel:042111116387"
              >
                UAN: 042 111-11-6387{' '}
              </a>
              <p>MON-FRI 9:00 to 5:30 PST</p>
            </div>
          </div>
          <div className="hidden md:block mt-4 break-all">
            <Link href={''}>SEND EMAIL</Link>
            <br />
            <Link href={''} >CONTACTUS@OUTFITTERS.COM.PK</Link>
          </div>
          <div className="hidden md:block mt-4 break-all">
            <Link href={''}>UAN: 042 111</Link>
            <br />
            <Link href={''}>MON-FRI: 9:00 TO 5:30 PST</Link>
          </div>
        </div>
        <div className="hidden md:flex flex-col w-1/4 pl-[2rem]">
          <Link href={''}>HELP</Link>
          <div className="mt-4">
            <Link href={''}>FAQ&apos;s</Link>
            <br />
            <Link href={''}>LOG IN/SIGN UP</Link>
            <br />
            <Link href={''}>HOW TO BUY</Link>
            <br />
            <Link href={''}>PAYMENT</Link>
            <br />
            <Link href={''}>SHIPPING & DELIVERIES</Link>
            <br />
            <Link href={''}>EXCHANGE & RETURNS</Link>
          </div>
        </div>
        <div className="hidden md:flex flex-col w-1/4 pl-[2rem]">
          <Link href={''}>ABOUT OUTFITTERS</Link>
          <div className="mt-4">
            <Link href={''}>ABOUT US</Link>
            <br />
            <Link href={''}>RETAIL STORES</Link>
            <br />
            <Link href={''}>CONTACT US</Link>
            <br />
            <Link href={''}>WORK WITH US</Link>
          </div>
        </div>
        <div className="flex flex-col w-1/2 md:w-1/4 pl-[2rem]">
          <div>DOWNLOAD APP</div>
          <div className="mt-4 w-full">
            <div className="flex w-full">
              <Link href={''}>
                <Image
                  src={'/icons/playstore.webp'}
                  alt="playstore"
                  width={117}
                  height={34}
                />
              </Link>
              <Link href={''}>
                <Image
                  src={'/icons/appstore.png'}
                  alt="apple store"
                  width={117}
                  height={34}
                />
              </Link>
            </div>
            <div className="mt-4">
              <div>PAYMENT METHODS</div>
              <div className="flex mt-4">
                <Image
                  src={'/icons/visa.png'}
                  alt="visa"
                  width={60}
                  height={40}
                />
                <Image
                  src={'/icons/mastercard.png'}
                  alt="mastercard"
                  width={60}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-10 gap-2 md:gap-6 justify-center items-center bg-black border-t-[1px] border-y-white text-white md:text-xs text-[11px]">
        <Link
          href={''}
          className="block md:hidden"
        >
          FAQ&apos;s
        </Link>
        <p className="hidden md:block">@ 2024, OUTFITTERS</p>
        <p>/</p>
        <Link href={''}>TERMS AND CONDITIONS</Link>
        <p>/</p>
        <Link href={''}>PRIVACY POLICY</Link>
      </div>
      <div className="flex md:hidden w-full justify-center bg-black text-white text-[11px] pb-2">
        <p>
          @ 2024, <Link href={''}>OUTFITTERS</Link>
        </p>
      </div>
    </>
  );
};

export default FooterTile;
