import Image from 'next/image'

export default function PawPawInfoSection() {
    return (
        <section>
            <section className="container mx-auto items-center">
                <section className="mb-20">
                    <div className="text-2xl font-semibold py-5">프로젝트 개요</div>
                    <div className="my-3 text-xl font-medium">프로젝트 기간: 2022.07 ~ 2023.06</div>
                    <div className="my-3 text-xl font-medium">참여 인원: PM & FE & UX/UI 1, AI & BE 1</div>
                    <div className="my-3 text-xl font-medium">한양대학교 ERICA 소프트웨어융합대학 졸업캡스톤 ‘인지조화’ 팀 프로젝트입니다.</div>
                    <div className="my-3 text-xl font-medium">반려견을 키우는 가구 수는 해를 거듭할수록 계속해서 증가하지만, 유실되는 반려견 수 또한 계속해서 증가하는 추세임을 알게 되었습니다.<br/>
                    또한 반려견 유실 시 취할 수 있는 조치는 전단지 및 로컬 커뮤니티뿐이고 이러한 방법은 반려견을 찾을 수 있는 골든 타임 놓치기 쉽다는 문제점을 발견했습니다.</div>
                    <div className="my-3 text-xl font-medium">기록된 산책 경로를 통한 잠재적 위치 추정, AI 기술을 통해 사진 및 입력정보로 실종견 중 유사견을 반환하는 서비스가 있다면 위의 문제점을 해결할 수 있다고 생각해 해당 아이디어로 졸업 캡스톤을 진행하였습니다. </div>
                    <div className="my-3 text-xl font-medium">해당 프로젝트에서는 기획자, 개발자, 디자이너로 활동하였습니다. 약 5개월 간 아이디어를 구체화하였고 Figma, Adobe PhotoShop 툴을 통해 프로토타입을 제작했으며 디자인 작업이 끝난 후에는 코틀린을 활용해 안드로이드 어플 개발을 하였습니다.</div>
                    <a className="mt-5 mb-3 text-medium" href="https://www.youtube.com/watch?v=Wk2LWClaQCM&t=317s">발표 링크</a>
                </section>
                <section className="mb-20">
                    <div className="text-2xl font-semibold py-5">내가 기여한 부분</div>
                    <div className="my-3 text-xl font-medium"> • 서비스 기획</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 반려견 시장 규모 및 유실 반려견 규모 분석</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 현재 유실 반려견 현황 및 문제점 도출</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 개 특성 분석 후 유실 시 해결방안 도출</div>
                    <div className="my-3 text-xl font-medium"> • 프론트엔드 개발</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 회원가입 & 회원 정보 및 반려견 정보 DB 저장</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 카카오맵 API 사용 - 현재 위치 기반 주변 목격 및 등록 분실견 마커 반환</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 반려견 분실 혹은 분실 반려견 목격 시, 유실견 등록 기능 구현</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 실시간 위치 기반 산책 기능 구현 및 배변 위치 DB 저장</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 반려견 분실 시 산책 및 배변 기록 바탕 예상 위치 반환 기능 구현</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 디자인</div>
                    <div className="my-3 text-xl font-medium">&emsp; &emsp;• 피그마, 어도비 포토샵 이용해 프로토타입 제작</div>
                    <div className="my-3 text-xl font-medium">&emsp; &emsp;• 어플리케이션 로고 제작</div>
                </section>
                <section className="mb-20">
                    <div className="text-2xl font-semibold py-5">사용 기술</div>
                    <div className="my-3 text-xl font-medium"> • Fragment backstack 사용 - activity stack 보다 메모리 관리에 용이</div>
                    <div className="my-3 text-xl font-medium"> • 암시적 Intent 사용 - 이메일 인증 화면 전환, 전화번호 연결 화면 전환 기능 구현</div>
                    <div className="my-3 text-xl font-medium"> • viewBinding 사용 - 속도 향상 및 NullPointerException 방지 위해 사용</div>
                    <div className="my-3 text-xl font-medium"> • RecyclerView 사용 - View 재활용을 통해 cost 낭비 방지</div>              
                    <div className="my-3 text-xl font-medium"> • kakaomap Polyline 사용 - 실시간 산책 경로 그리기</div>
                </section>
            </section>
        </section>
    )
};
