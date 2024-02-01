import Navbar from '@/components/Navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
    </div>
  );
};

export default Layout;
