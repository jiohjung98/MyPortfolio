import Image from 'next/image'

export default function TalkInfoSection() {
    return (
        <section>
            <section className="container mx-auto items-center">
                <section className="mb-20">
                    <div className="text-2xl font-semibold py-5">프로젝트 개요</div>
                    <div className="my-3 text-xl font-medium">프로젝트 기간: 2023.11.06 ~ 2023.11.16</div>
                    <div className="my-3 text-xl font-medium">참여 인원: FE 5</div>
                    <div className="my-3 text-xl font-medium">패스트캠퍼스 x 야놀자 토이프로젝트 2 ‘소켓을 이용한 채팅 웹앱 구현하기’ 입니다.</div>
                    <div className="my-3 text-xl font-medium">이 프로젝트는 기업 야놀자와 사용자(숙소 예약자) 모두의 목적성을 고려한 숙소 예약 프로젝트입니다. </div>
                    <div className="my-3 text-xl font-medium">야놀자에서 제시한 API 를 기반으로 실시간 채팅 서비스를 구현했습니다.</div>
                    <div className="my-3 text-xl font-medium">주요 기능으로는 회원가입 및 로그인, 유저목록페이지, 채팅방목록, 채팅생성, 오픈채팅조회, 마이페이지가 있고 해당 프로젝트에서 채팅생성을 맡아서 작업하였습니다.</div>
                </section>
                <section className="mb-20">
                    <div className="text-2xl font-semibold py-5">내가 기여한 부분</div>
                    <div className="my-3 text-xl font-medium"> • 유저목록에서 유저 선택 후 채팅하기</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 두 유저 간 1:1 채팅방이 이미 존재하면 해당 채팅방으로 이동합니다.</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 두 유저 간 1:1 채팅방이 존재하지 않으면 새로운 채팅을 생성합니다.</div>
                    <div className="my-3 text-xl font-medium"> • 채팅페이지에서 채팅 버튼 클릭 후 채팅하기</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 유저 1명 선택</div>
                    <div className="my-3 text-xl font-medium">&emsp; &emsp;• 두 유저 간 1:1 채팅방이 이미 존재하면 해당 채팅방으로 이동합니다.</div>
                    <div className="my-3 text-xl font-medium">&emsp; &emsp;• 두 유저 간 1:1 채팅방이 존재하지 않으면 새로운 채팅을 생성합니다.</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 유저 여러 명 선택</div>
                    <div className="my-3 text-xl font-medium">&emsp; &emsp;• 프라이빗한 채팅방 생성: 오픈채팅 목록에는 보여지지 않는 단체 채팅방을 생성합니다.</div>
                    <div className="my-3 text-xl font-medium">&emsp; &emsp;• 오픈 채팅방 생성: 오픈채팅 목록에 보여지는 채팅방을 생성해 다른 유저가 채팅방에 입장 가능합니다.</div>
                </section>
                <section className="mb-20">
                    <div className="text-2xl font-semibold py-5">사용 기술</div>
                    <div className="my-3 text-xl font-medium"> • useState, useReducer 를 활용한 상태 관리 구현</div>
                    <div className="my-3 text-xl font-medium"> • TypeScript: 컴파일에서 타입 에러를 발견하여 안정성을 높이기 위해 사용</div>
                    <div className="my-3 text-xl font-medium"> • Next.js 를 활용한 서버 사이드 렌더링 구현</div>
                    <div className="my-3 text-xl font-medium"> • styled-component 를 사용한 스타일 구현</div>              
                    <div className="my-3 text-xl font-medium"> • 코드 컨벤션: Eslint, prettier</div>
                    <div className="my-3 text-xl font-medium"> • 배포, CI/CD: Netlify</div>
                </section>
                <section className="mb-20">
                    <div className="text-2xl font-semibold py-5">트러블 슈팅</div>
                    <div className="my-3 text-xl font-medium font-medium"> • 문제 배경</div>
                    <div className="my-3 text-xl font-medium mb-10">두 유저 간 채팅방이 이미 존재하는 경우, 새로운 채팅방을 생성하는 것이 아니라 기존의 채팅방으로 이동해야하는데, 계속 새로운 채팅방이 생성되는 문제가 발생했습니다.</div>
                    <div className="my-3 text-xl font-medium font-medium"> • 해결 방법</div>
                    <div className="my-3 text-xl font-medium mb-10">로그인 사용자와 선택된 사용자의 ID 를 정렬해서 채팅방 이름을 생성했습니다.</div>
                    <img className="mb-10" src='/Talk-troubleShooting.png' alt='Talk-troubleShooting' width="500" height="300" />
                    <div className="my-3 text-xl font-medium mb-10">정의한 chatName이 chat 목록 중에 있는 채팅 이름과 같으면 enterChatRoom() 을 통해 기존 채팅방으로 이동하고 없는 경우 createChatRoom() 을 통해 새 채팅방을 생성합니다.</div>
                </section>
            </section>
        </section>
    )
};
