import baseURL from '@/axios/baseURL';
import instance from '@/axios/instance';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Add from '../components/Add';
import AddButton from '../components/AddButton';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css';

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  debugger;
  const myCookie = ctx.req?.cookies || '';
  let admin = false;
  debugger;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  debugger;
  const res = await axios.get(`${baseURL}products`);
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
