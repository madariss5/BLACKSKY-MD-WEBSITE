import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title = 'BlackSky-MD Bot' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;