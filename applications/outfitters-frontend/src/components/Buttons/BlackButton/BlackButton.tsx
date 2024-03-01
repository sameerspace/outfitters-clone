interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const BlackButton = ({ children, onClick }: Props) => {
  return (
    <button className="flex h-10 w-full items-center justify-center bg-black text-xs font-thin text-slate-300">
      {children}
    </button>
  );
};

export default BlackButton;
