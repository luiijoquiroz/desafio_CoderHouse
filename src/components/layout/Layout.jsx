import {  Footer, Header } from '../index';
import './Layout.css'

const Layout = ({setState }) => {

  return (
    <>
      <Header setState={setState} />
      <Footer />
    </>
  );
}

export{ Layout }


