import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import Layout from "@/components/layout";

const TextFadeIn = ({ text, onComplete }) => {
  const [index, setIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => {
        if (prevIndex >= text.length - 1) {
          clearInterval(timer);
          setShowFullText(true);
          onComplete && onComplete(); 
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [text, onComplete]);

  const transitions = useTransition(showFullText ? text : text.slice(0, index + 1), {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 0.1 }, 
  });

  return (
    <>
      {transitions((style, char) => (
        <animated.span style={style}>{char}</animated.span>
      ))}
    </>
  );
};

export default function Home() {
  const [completedFirst, setCompletedFirst] = useState(false);
  const [completedSecond, setCompletedSecond] = useState(false);
  const [completedThird, setCompletedThird] = useState(false); 
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (completedThird) {
      setShowButton(true);
    }
  }, [completedThird]);

  return (
    <Layout className="container">
      <Head>
        <title>정지오 포트폴리오</title>
        <meta name='description' content='portfolio' />
        {/* <link rel='icon' href='/favicon.ico'/> */}
      </Head>
      <section className="flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-60 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            {/* 이미지 */}
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <TextFadeIn text="안녕하세요 ! 프론트엔드 개발자 정지오입니다." onComplete={() => setCompletedFirst(true)} />
            </h1>
            <p className="mb-1 leading-relaxed">
              {completedFirst && (
                <TextFadeIn text="모든 일에는 성공과 실패가 아닌, 성공과 배움이 있다고 생각합니다." onComplete={() => setCompletedSecond(true)} />
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {completedSecond && (
                <TextFadeIn text="실패가 아닌 배움을 경험하고 그 경험을 바탕으로 더 발전될 내일을 기대합니다." onComplete={() => setCompletedThird(true)} />
              )}
            </p>
            <Link href="/project">
            <div className="flex justify-center">
              {showButton && (
                <animated.button 
                  className="project-btn"
                  style={{ opacity: showButton ? 1 : 0 }}
                >
                  프로젝트 보러가기
                </animated.button>
              )}
            </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-black-900 font-bold my-10 text-2xl">교육 사항</h1>
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">웹 프론트엔드 부트캠프</span>
              <span className="mt-1 text-gray-500 text-sm">2023/07 - 2024/01</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">패스트캠퍼스 x 야놀자 웹 프론트엔드 부트캠프 1기</h2>
              <p className="leading-relaxed">경쟁력 있는 개발자가 되기 위해 웹 프론트엔드 개발 능력도 갖춘 개발자가 되고 싶다는 생각으로 패스트캠퍼스 x 야놀자 웹 프론트엔드 부트캠프 1기 교육과정을 수료했습니다. Js, React, Next 등을 배우며 웹 개발에 필요한 기술들을 배우고 실제 기업 제시 프로젝트를 통해 프로그래밍 능력을 향상시켰습니다. 또한 해당 교육에서는 그룹장 및 전체 리더로 활동하면서 커뮤니케이션 능력과 리더십을 기를 수 있었습니다.</p>
              <section className='flex flex-col xl:flex-row'>
                <img className='my-10 mr-10' src='/Fastcampus-course-completion.png' alt='Fastcampus-course-completion' width="300" height="500" />
                <img className='my-10 mr-10' src='/Fastcampus-Group-Leader.png' alt='Fastcampus-Group-Leader' width="300" height="500" />
                <img className='my-10' src='/Fastcampus-Leader.png' alt='Fastcampus-Leader' width="300" height="500" />
              </section>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">UMC 3rd</span>
              <span className="mt-1 text-gray-500 text-sm">2022/09 - 2023/02</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">IT 연합 동아리 University MakeUs Challenge 3rd Android 파트</h2>
              <p className="leading-relaxed">IT 연합 동아리 UMC 에서 안드로이드 파트 구성원으로 활동하며 안드로이드 생태계에 대해 배우고 Kotlin 언어를 학습하며 안드로이드 어플리케이션 개발 프로젝트에 참여하였습니다. 이 활동을 통해 협업 방법을 배우고 프론트엔드 개발자가 되고자 하는 꿈이 생겼습니다.</p>
              <img className='my-10' src='/Umc-3rd.png' alt='Umc-3rd' width="300" height="500" />
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">한양대학교 ERICA</span>
              <span className="text-sm text-gray-500">2019/03 - 2024/08</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">한양대학교 ERICA 캠퍼스 소프트웨어융합대학 ICT융합학부 미디어테크놀로지전공</h2>
              <p className="leading-relaxed">GPA: 3.97 / 4.5</p>
              <p className="leading-relaxed">제 1전공: ICT융합학부 (4.07 / 4.5)</p>
              <p className="leading-relaxed">복수전공: 컴퓨터학부 (4.08 / 4.5)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
};