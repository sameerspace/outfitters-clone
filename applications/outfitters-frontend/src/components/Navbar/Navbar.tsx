import Image from 'next/image';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center px-8 justify-between">
      <div className="flex gap-2">
        <Image
          src={'/icons/hamburger.png'}
          alt="hamburger"
          width={30}
          height={30}
        />
        <Image
          src={'/icons/outfitters-logo.svg'}
          alt="outfitters"
          className="w-[104px] h-[25px] md:w-[150px] md:h-[36px]"
          width={150}
          height={36}
        />
      </div>
      <div className="flex gap-4 md:gap-10 items-end">
        <div className="flex items-center gap-4">
          <div className="hidden md:block border-b-2  border-black h-2 w-20" />
          <div>SEARCH</div>
        </div>
        <div className="flex gap-1 md:gap-6 items-end">
          <div className="hidden md:block">LOGIN</div>
          <HiOutlineShoppingBag size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
