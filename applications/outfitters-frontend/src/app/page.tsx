import Image from 'next/image';
import Layout from './account/layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center h-[45rem] ">
        <div className="flex flex-col w-[30rem]  max-w-[47.8rem] pt-20 items-center">
          <h1 className="font-bold text-[2.5rem] mb-14">Login</h1>
          <input
            className="p-4 w-full mb-4 border border-black"
            placeholder="username"
          />
          <input
            className="p-4 w-full mb-4 border border-black"
            placeholder="password"
          />
          <div className="flex items-start w-full">
            <p className="text-base">FORGOT YOUR PASSWORD?</p>
          </div>
          <div className="flex py-8 flex-col items-center">
            <button className="bg-black text-white p-2 w-full">Sign in</button>
            <h3 className="text-xl font-light pt-4 w-full">Create Account</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}
