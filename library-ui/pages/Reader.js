import React, { useEffect } from "react";
import Layout from "../components/Layout";
import AboutBook from "../components/AboutBook";
import { useRouter } from "next/router";
import { Reader } from "@ethersproject/abi/lib/coders/abstract-coder";
import Author from "./Author";

const Readerbook = (props) => {
  const router = useRouter();
  // useEffect(()=> {
  //         if(!props.account?.address){
  //             router.push('/');
  //         }
  // },[props])
  return (
    <Layout>
    
      <AboutBook />
    </Layout>
  );
};

export default Readerbook;
