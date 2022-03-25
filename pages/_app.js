import '../styles/globals.css';
import SidenavBar from 'common/components/SideNavBar';
import TopNavBar from 'common/components/TopNavBar';
import Head from 'next/head';
import { AppProvider } from 'common/appContext';
import navRoutes from 'common/navRoutes';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider value={{ state: { count: 1 } }}>
      <Head>
        <title>Beautiful Next App</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </Head>

      <SidenavBar menus={navRoutes} />
      <TopNavBar />
      <div
        style={{
          marginLeft: 215,
          marginTop: 15,
          marginRight: 15,
        }}
      >
        <Component {...pageProps} />
      </div>
      <style jsx global>{`
        body {
          background-color: #E4E5E6
        }
      `}</style>
    </AppProvider>
  );
}

export default MyApp;
