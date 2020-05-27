import Head from 'next/head';
import Narbar from './NavBar';

const Layout = (props) => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/lux/bootstrap.min.css"
      />
    </Head>
    <Narbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
