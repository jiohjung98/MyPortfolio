import Image from 'next/image'

export default function IndiInfoSection() {
    return (
        <section>
            <section className="container mx-auto items-center">
                <section className="mb-20">
                    <div className="text-2xl font-semibold py-5">프로젝트 개요</div>
                    <div className="my-3 text-xl font-medium">프로젝트 기간: 2023.03 ~ 2023.06</div>
                    <div className="my-3 text-xl font-medium">참여 인원: PM 1, Frontend 2, Backend 2, Design 2</div>
                    <div className="my-3 text-xl font-medium">한양대학교 ERICA 창업동아리 ‘인디커넥츠’ 팀 프로젝트입니다.</div>
                    <div className="my-3 text-xl font-medium">인디 음악에 대한 수요가 증가하는 추세지만, 언더그라운드에서 활동하는 인디뮤지션이 쉽게 공연장과 컨택할 수 없는 환경이 없다는 점과 업주의 경우 뮤지션의 참여 신청 현황 관리의 어려움을 겪고 있다는 사실을 알게 되었습니다.</div>
                    <div className="my-3 text-xl font-medium">또한 인디 음악을 좋아하는 관객 또한 인디 뮤지션의 공연 현황을 한 눈에 볼 수 없다는 점을 알게 되었습니다. 이러한 문제를 해결하기 위해 뮤지션과 업주, 관객을 연결하는 플랫폼을 기획했습니다. </div>
                    <div className="my-3 text-xl font-medium">지도 핀을 통한 공연장 정보 가시화를 통해 인디뮤지션이 공연장을 간편하게 예약하고 업주는 뮤지션 예약 및 공연을 간편하게 관리할 수 있고 가시화된 뮤지션 및 공연 정보 및 공연 예매 서비스를 제공함으로써 관객의 편리성을 극대화하는 방안을 생각해내었습니다. </div>
                    <div className="my-3 text-xl font-medium">해당 아이디어는 실현 가능성을 인정받아 ‘2023 ERICA Software-Up! 제 5회 SW메이커톤’ 에서 대상을 수상했습니다.</div>
                </section>
                <section className="mb-20">
                    <div className="text-2xl font-semibold py-5">내가 기여한 부분</div>
                    <div className="my-3 text-xl font-medium"> • 서비스 기획</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 인디 음악 시장 및 인디 뮤지션 규모 분석</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 현재 공연장 예약 시스템의 문제점 및 개선방안 도출</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 경쟁사 분석 및 자사 서비스 차별화 전략 도출</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 창업아이템 개발 및 사업화 전략 도출</div>
                </section>
            </section>
        </section>
    )
};
