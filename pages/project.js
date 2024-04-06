import Head from 'next/head';
import Layout from "@/components/layout";
import { useState } from 'react';
import AllProject from '@/components/project/allProject';
import Development from '@/components/project/develop/development';
import Plan from '@/components/project/plan/plan';

export default function Project() {
    const [category, setCategory] = useState('all');

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    // 카테고리에 따라 렌더링할 컴포넌트를 결정하는 함수
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
                <button onClick={() => handleCategoryChange('all')}>전체</button>
                <button onClick={() => handleCategoryChange('development')}>개발</button>
                <button onClick={() => handleCategoryChange('planning')}>기획</button>
            </div>
            {/* 카테고리에 따라 다른 컴포넌트를 렌더링 */}
            {renderContentByCategory()}
        </Layout>
    )
}
