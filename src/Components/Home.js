import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <section className="conteiner mainConteiner">
      <Head title="Fotos" description="Home do site Dogs, com feed de fotos." />
      <Feed />
    </section>
  );
};

export default Home;
