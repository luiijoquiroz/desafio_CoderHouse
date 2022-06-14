import { Banner, Layout, MainMenu } from "../../components/index";
import { useState, useEffect } from 'react';

function PageHome(props) {

  console.log(`[PageHome] props:  ${JSON.stringify(props, null, 2)}`)
  const [state, setState] = useState('')

  return (
    <>
       <MainMenu state={state} />
      <Banner state={state} />
      <Layout setState={setState} />
    </>
  );
}

export { PageHome };
