import { FaInstagram, FaPinterest, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';

const EmailFooter: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-52 items-center justify-evenly pb-10">
      <div className="text-2xl">GET THE LATEST TRENDS FIRST</div>
      <input
        className="w-[35rem] h-10 border-b-[1px] border-black placeholder:text-center placeholder:text-black placeholder:font-thin focus:outline-none placeholder:focus:text-xs focus:placeholder:mb-10"
        type="text"
        placeholder="ENTER YOUR EMAIL"
      />
      <div className="flex justify-center gap-10 w-1/4 mt-4">
        <ImFacebook2 size={22} />
        <FaInstagram size={22} />
        <FaTiktok size={22} />
        <FaYoutube size={22} />
        <FaTwitter size={22} />
        <FaPinterest size={22} />
      </div>
    </div>
  );
};

export default EmailFooter;
