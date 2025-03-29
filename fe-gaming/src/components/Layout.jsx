import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="max-w-[375px] mx-auto min-h-screen relative overflow-x-hidden"
         style={{
           background: 'linear-gradient(180deg, #5A1F1F 0%, #3A1C1C 50%, #000000 100%)'
         }}>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: 'linear-gradient(to right, #4b5563, #1f2937)',
          borderLeft: '4px solid #f97316'
        }}
      />
      <Toaster position="top-center" />
      <Header />
      <main className="pb-16 pt-16 flex flex-col gap-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;