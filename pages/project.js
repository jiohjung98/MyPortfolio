import Head from 'next/head';
import Layout from "@/components/layout";

export default function Project() {
    return (
        <Layout>
             <Head>
                <title>정지오 포트폴리오</title>
                <meta name='description' content='portfolio' />
                {/* <link rel='icon' href='/favicon.ico'/> */}
            </Head>
            <h1>프로젝트</h1>
        </Layout>
    )
}