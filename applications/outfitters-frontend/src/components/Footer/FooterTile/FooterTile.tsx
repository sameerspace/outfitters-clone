import Image from 'next/image';
import Link from 'next/link';

const FooterTile = () => {
  return (
    <>
      <div className="flex w-full justify-center h-1/3 text-white bg-black py-4 px-40 text-xs leading-6">
        <div className="flex flex-col justify-start w-1/4 mt-6">
          <Link href={''}>CAN WE HELP YOU?</Link>
          <div className="mt-4">
            <Link href={''}>SEND EMAIL</Link>
            <br />
            <Link href={''}>CONTACTUS@OUTFITTERS.COM.PK</Link>
          </div>
          <div className="mt-4">
            <Link href={''}>UAN: 042 111</Link>
            <br />
            <Link href={''}>MON-FRI: 9:00 TO 5:30 PST</Link>
          </div>
        </div>
        <div className="flex flex-col w-1/4 mt-6">
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
        <div className="flex flex-col w-1/4 mt-6">
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
        <div className="flex flex-col w-1/4 mt-6">
          <div>DOWNLOAD APP</div>
          <div className="mt-4">
            <div className="flex">
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
      <div className="flex w-full h-20 gap-6 justify-center items-center bg-black border-t-[1px] border-y-white text-white text-xs">
        <p>@ 2024, OUTFITTERS</p>
        <p>/</p>
        <p>TERMS AND CONDITIONS</p>
        <p>/</p>
        PRIVACY POLICY
      </div>
    </>
  );
};

export default FooterTile;
