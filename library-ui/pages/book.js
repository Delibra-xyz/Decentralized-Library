import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import AboutBook    from '../components/AboutBook';
import { useRouter } from 'next/router';

const BookPage = (props) => {
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


export default BookPage;
