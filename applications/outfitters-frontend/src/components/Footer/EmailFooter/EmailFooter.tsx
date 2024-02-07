import { FaInstagram, FaPinterest, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';

const EmailFooter: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-52 items-center justify-evenly pb-10">
      <div className="text-2xl">GET THE LATEST TRENDS FIRST</div>
      <input
        className="w-1/3  h-10 border-b-2 border-black placeholder:text-center placeholder:text-black placeholder:font-thin focus:outline-none placeholder:focus:text-xs focus:placeholder:mb-10"
        type="text"
        placeholder="ENTER YOUR EMAIL"
      />
      <div className="flex justify-evenly w-1/4">
        <ImFacebook2 size={25} />
        <FaInstagram size={25} />
        <FaTiktok size={25} />
        <FaYoutube size={25} />
        <FaTwitter size={25} />
        <FaPinterest size={25} />
      </div>
    </div>
  );
};

export default EmailFooter;
