import Head from 'next/head';
import Layout from "@/components/layout";
import { useState } from 'react';
import AllProject from '@/components/project/allProject';
import Development from '@/components/project/develop/development';
import Plan from '@/components/project/plan/plan';

export default function Project() {
    const [category, setCategory] = useState('all');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const renderContentByCategory = () => {
        switch (category) {
            case 'all':
                return <AllProject/>
            case 'development':
                return <Development />
            case 'planning':
                return <Plan />
            default:
                return <AllProject/>
        }
    };

    return (
        <Layout>
            <Head>
                <title>정지오 포트폴리오</title>
                <meta name='description' content='portfolio' />
                {/* <link rel='icon' href='/favicon.ico'/> */}
            </Head>
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
            <select className="category-select" value={category} onChange={handleCategoryChange} style={{ background: 'none' }}>
                <option value="all">전체</option>
                <option value="development">개발</option>
                <option value="planning">기획</option>
            </select>
            </div>
            {renderContentByCategory()}
            <style jsx>{`
                .category-select {
                    width: 60px; 
                    height: 40px; 
                    font-size: 18px;
                }
            `}</style>
        </Layout>
    )
}
