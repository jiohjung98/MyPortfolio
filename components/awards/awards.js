import Image from 'next/image';

export default function Awards() {
    return (
        <section className='flex-row'>
            <section className="container mx-auto flex-row md:flex-row flex-col items-center">
                <div className="ml-5 mt-20 mb-5 text-2xl font-semibold">2022 ERICA Software-Up! 제 8회 SW창업 아이디어톤</div>
                <div className="ml-5 text-xl mb-3 font-semibold">최우수상 수상</div>
                <div className="ml-5 text-xl mb-2">한양대학교 ERICA 재학생들이 모여 무박 2일 간 아이디어를 도출하고 구체화하여 사업계획서를 작성하고 발표하는 대회</div>
                <div className="ml-5 text-xl">한양대학교 ERICA 창업동아리 '콘솔브(콘텐츠 자격 증명 플랫폼)' 팀 프로젝트</div>
                <img className='mb-20 mt-10 ml-5 hover:scale-105 transition-transform' src='/Software-up-8.png' alt='software-up 8' width="300" height="500" />
            </section>
            <hr className="w-10/12 mx-auto my-10 border-gray-300"/> 
            <section className="container mx-auto flex-row md:flex-row flex-col items-center">
                <div className="ml-5 mt-20 mb-5 text-2xl font-semibold">2022 ERICA Software-Up! 제 10회 SW창업 아이디어톤</div>
                <div className="ml-5 text-xl mb-3 font-semibold">대상 수상</div>
                <div className="ml-5 text-xl mb-2">한양대학교 ERICA 재학생들이 모여 무박 2일 간 아이디어를 도출하고 구체화하여 사업계획서를 작성하고 발표하는 대회</div>
                <div className="ml-5 text-xl">한양대학교 ERICA 창업동아리 '티미룸(웹툰 공동 드로잉 플랫폼)' 팀 프로젝트</div>
                <img className='mb-20 mt-10 ml-5 hover:scale-105 transition-transform' src='/Software-up-10.png' alt='software-up 10' width="300" height="500" />
            </section>
            <hr className="w-10/12 mx-auto my-10 border-gray-300"/> 
            <section className="container mx-auto flex-row md:flex-row flex-col items-center">
                <div className="ml-5 mt-20 mb-5 text-2xl font-semibold">2023 ERICA Software-Up! 제 5회 SW 메이커톤</div>
                <div className="ml-5 text-xl mb-3 font-semibold">대상 수상</div>
                <div className="ml-5 text-xl mb-2">한양대학교 ERICA 재학생들이 모여 3개월 간 아이디어를 도출하고 구체화하여 사업계획서를 작성하고 개발 결과물을 발표하는 대회</div>
                <div className="ml-5 text-xl">한양대학교 ERICA 창업동아리 ‘졸업시켜조(뮤지션과 업주, 관객 연결 플랫폼)’ 팀 프로젝트</div>
                <img className='mb-20 mt-10 ml-5 hover:scale-105 transition-transform' src='/makerton-5.png' alt='makerton 5' width="300" height="500" />
            </section>
        </section>
    )
};