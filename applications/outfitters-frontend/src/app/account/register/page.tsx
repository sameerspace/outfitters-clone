const Page = () => {
  return (
    <div className="flex justify-center h-[38rem] ">
      <div className="flex flex-col w-[30rem]  max-w-[47.8rem] pt-20 items-center">
        <h1 className="font-bold text-[2.5rem] mb-14">Create Account</h1>
        <input
          className="px-4 py-[12px] w-full mb-4 border border-black"
          placeholder="First Name"
        />
        <input
          className="px-4 py-[12px] w-full mb-4 border border-black"
          placeholder="Last Name"
        />
        <input
          className="px-4 py-[12px] w-full mb-4 border border-black"
          placeholder="Email"
        />
        <input
          className="px-4 py-[12px] w-full mb-4 border border-black"
          placeholder="password"
        />
        <div className="flex py-8 flex-col items-center">
          <button className="bg-black text-white px-6 py-2 w-full">Create</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
