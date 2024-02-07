import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-col h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
