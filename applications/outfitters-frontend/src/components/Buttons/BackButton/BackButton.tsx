import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <img
      src="/icons/backbtn.png"
      alt="back button"
      width={'25px'}
      onClick={() => router.back()}
    />
  );
};

export default BackButton;
