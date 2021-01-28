import Head from 'next/head';
import React from 'react';
import db from '../../../db.json';

function Meta() {
  return (
    <Head>
      <title key="title" name="og: title">{db.title}</title>
      <meta property="og:title" content={db.title} />
      <meta property="og:image" content={db.bg} />
      <meta property="og:description" content={db.description} />
      <meta property="og:url" content="https://imersao-react-project.vercel.app/" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,600&display=swap" rel="stylesheet" />
      <link rel="shortcut icon" href={db.favicon} />
    </Head>
  );
}
export default Meta;
