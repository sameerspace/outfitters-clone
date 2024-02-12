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
        <div className="font-bold italic text-4xl">Outfitters</div>
      </div>
      <div className="flex gap-10 items-end">
        <div className="flex items-center gap-4">
          <div className="border-b-2  border-black h-2 w-20" />
          <div>SEARCH</div>
        </div>
        <div className="flex gap-6 items-end">
          <div>LOGIN</div>
          <HiOutlineShoppingBag size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
