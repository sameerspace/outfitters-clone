import { FaInstagram, FaPinterest, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';

const EmailFooter: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-52 items-center justify-evenly pb-10 px-6">
      <div className="text-base md:text-xl">GET THE LATEST TRENDS FIRST</div>
      <input
        className="w-full md:w-[31rem] h-10 border-b-[1px] border-black placeholder:text-center placeholder:text-black placeholder:font-thin focus:outline-none placeholder:focus:text-xs focus:placeholder:mb-10"
        type="text"
        placeholder="ENTER YOUR EMAIL"
      />
      <div className="flex justify-evenly md:justify-center md:gap-10 lg:1/4 w-full   mt-4">
        <ImFacebook2 size={'22px'} />
        <FaInstagram size={'22px'} />
        <FaTiktok size={'22px'} />
        <FaYoutube size={'22px'} />
        <FaTwitter size={'22px'} />
        <FaPinterest size={'22px'} />
      </div>
    </div>
  );
};

export default EmailFooter;
