import Image from 'next/image'

export default function ConsolveInfoSection() {
    return (
        <section>
            <section className="container mx-auto items-center">
                <section className="mb-20">
                    <div className="text-2xl font-semibold py-5">프로젝트 개요</div>
                    <div className="my-3 text-xl font-medium">프로젝트 기간: 2022.03 ~ 2022.06</div>
                    <div className="my-3 text-xl font-medium">참여 인원: PM 2, Frontend 2, Backend 1, Design 1</div>
                    <div className="my-3 text-xl font-medium">한양대학교 ERICA 창업동아리 ‘Consolve’ 팀 프로젝트입니다.</div>
                    <div className="my-3 text-xl font-medium">전세계적으로 영상 저작권 침해 문제가 심해지고 있다는 것을 알게 되었습니다.
                     유튜브 시장이 커지고 영상 시장이 커짐에 따라 불법 복제물이 늘어나 저작권자의 저작물이 보호받지 못하고 침해되는 문제가 날이 갈수록 증가하고 있어, 어떻게하면 이러한 문제를 바로잡을 수 있을까에 대해 고민했고 불법 복제물을 선별해주는 플랫폼이 있다면 어떨까?라는 생각을 하게되어 ‘콘솔브’를 기획하게 되었습니다. </div>
                    <div className="my-3 text-xl font-medium">자사의 플랫폼을 통해 다양한 영상 플랫폼에 자동으로 업로드 · 관리하여 사용자의 편의성 강조, 불법적으로 편집된 영상을 잡기 위한 모니터링 시간 단축, 저작권 진흥원의 인증서보다 더 효과적인 저작권 증명 가능 등의 개선점을 도출해내었고 해당 아이디어는 창의성을 인정받아 ‘2022 ERICA Software-Up! 제 8회 SW창업 아이디어톤’ 에서 최우수상을 수상하였습니다.</div>
                </section>
                <section className="mb-20">
                    <div className="text-2xl font-semibold py-5">내가 기여한 부분</div>
                    <div className="my-3 text-xl font-medium"> • 서비스 기획</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 영상 시장 및 영상 플랫폼 성장 추이 분석</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 영상 저작권 침해 사례 조사 및 문제점 도출</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 경쟁사 분석 및 자사 서비스 차별화 전략 도출</div>
                    <div className="my-3 text-xl font-medium">&emsp;• 창업아이템 개발 및 사업화 전략 도출</div>
                </section>
            </section>
        </section>
    )
};
