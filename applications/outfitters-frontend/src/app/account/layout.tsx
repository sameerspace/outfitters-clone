import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      {children}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
