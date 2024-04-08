import Head from 'next/head';
import Layout from "@/components/layout";
import { useState } from 'react';
import Awards from '@/components/awards/awards';

export default function AboutMe() {

    return (
        <Layout>
            <Head>
                <title>정지오 포트폴리오</title>
                <meta name='description' content='portfolio' />
                {/* <link rel='icon' href='/favicon.ico'/> */}
            </Head>
            <Awards />
        </Layout>
    )
}
