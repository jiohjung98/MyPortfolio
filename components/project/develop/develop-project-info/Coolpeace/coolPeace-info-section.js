import Image from 'next/image'

export default function CoolPeaceInfoSection() {
    return (
        <section>
            <section className="container mx-auto items-center">
                <section className="mb-20">
                    <div className="text-xl font-semibold">프로젝트 개요</div>
                    <div className="my-3">프로젝트 기간: 2023.12.13 ~ 2023.1.29</div>
                    <div className="my-3">참여 인원: PM 5, FE 6, BE 3, UI/UX 1</div>
                    <div className="my-3">패스트캠퍼스 x 야놀자 파이널 프로젝트 ‘B2B 셀프 쿠폰 백오피스 웹앱’ 입니다.</div>
                    <div className="my-3">이 프로젝트는 기업 야놀자와 사용자(숙박 업주) 모두의 목적성을 고려한 셀프 쿠폰 서비스 도입 프로젝트입니다. </div>
                    <div className="my-3">기획 방향성은 다음과 같습니다.</div>
                    <div className="my-3"> • 자유도 높은 쿠폰 설정과 사용 현황 안내를 통해 쿠폰 운영에 대한 사용자의 자율성과 투명성을 확보한다. </div>
                    <div className="my-3"> • 사용자 특성을 고려한 화면 구성, 데이터 기반 맞춤 쿠폰을 통해 편의성을 증대한다.</div>
                    <div className="my-3">주요 기능으로는 로그인 및 회원가입, 누적 리포트, 쿠폰 등록, 쿠폰 조회, 정산 관리가 있고 저는 정산 관리 페이지를 맡았습니다.</div>
                </section>
                <section className="mb-20">
                    <div className="text-xl font-semibold">내가 기여한 부분</div>
                    <div className="my-3"> • 지난 정산 내역을 받아옵니다. (첫 정산 내역부터 지난 달 정산 내역까지)</div>
                    <div className="my-3">&emsp;• 기본 정렬값: 정산 완료일 최근 순</div>
                    <div className="my-3">&emsp;• 정렬 옵션에 따라 화면 렌더링</div>
                    <div className="my-3">&emsp;• 페이지네이션 기능 구현</div>
                    <div className="my-3">&emsp;• Concurrent UI Pattern 적용</div>
                    <div className="my-3">&emsp;• error-boundary, suspense 적용을 통한 사용자 경험 개선</div>
                    <div className="my-3">&emsp;• useTransition 을 통한 불필요한 스켈레톤 UI 렌더링 방지</div>
                    <div className="my-3"> • 정산 예정 내역을 받아옵니다.</div>
                    <div className="my-3">&emsp;• 다음 달 1일에 결제되는 이번 달 결제 금액을 받아옵니다.</div>
                    <div className="my-3"> • 지난 달 정산 내역을 받아옵니다.</div>
                    <div className="my-3"> • 캘린더 기간 선택 기능 구현</div>
                    <div className="my-3">&emsp;• 조회 시작할 달과 조회 끝낼 달을 선택해 해당 범위의 정산 내역만 불러옵니다.</div>
                    <div className="my-3"> • 모바일 및 반응형 화면 구현</div>
                    <div className="my-3"> • 엑셀 다운로드 기능 구현</div>
                    <div className="my-3">&emsp;• 업주가 쉽고 편리하게 정산 내역을 관리할 수 있도록 엑셀 기능을 구현했습니다.</div>
                </section>
                <section className="mb-20">
                    <div className="text-xl font-semibold">사용 기술</div>
                    <div className="my-3"> • Concurrent UI Pattern</div>
                    <div className="my-3"> • 어플리케이션 보일러플레이트 코드 : Vite (react-swc-ts, React 18)</div>
                    <div className="my-3"> • 스타일 : emotion (styled), reset css</div>
                    <div className="my-3"> • 코드 컨벤션 : Eslint, prettier</div>
                    <div className="my-3"> • 배포, CI/CD : Vercel (+ Github Actions)</div>
                    <div className="my-3"> • 테스트 : Jest</div>
                    <div className="my-3"> • 비동기 처리, 상태 관리, 에러 컨트롤 : Axios, React-Query, Recoil, react-error-boundary</div>
                </section>
                <section className="mb-20">
                    <div className="text-xl font-semibold">프론트엔드 팀의 러닝 포인트</div>
                    <div className="my-3">저희 프론트엔드 팀의 주요 러닝 포인트는 “단단하고 사용자 경험이 좋은 어플리케이션은 어떤 것일까?” 에 있습니다. <br/>
                    저희가 깨닫게 된  ‘단단하고 사용자 경험이 좋은 어플리케이션’ 은 “팀 상황에 적합한 컨벤션과 서비스 상황에 적합한 기술이 적용된 어플리케이션” 입니다. <br/>
                    먼저 요구 사항 분석을 통해 서로 다른 비즈니스 및 비동기 요청 로직을 기준으로 컴포넌트들을 분리했습니다. <br/>
                    이렇게 분리한 컴포넌트들을 어떻게 독립적으로 잘 관리하여 사용자에게 쾌적한 경험을 보장할지 고민했습니다. <br/>
                    여러 논의 끝에 저희는  “Concurrent UI Pattern” 을 사용하기로 결정했습니다. <br/><br/>

                    해당 패턴은 렌더링 작업에 대한 우선순위를 분할하고, 사용자 경험을 최적화하는 “React 18 버전의 “ConcurrentMode” 를 활용한 UI 패턴입니다. <br/>
                    저희가 Concurrent UI Pattern 에 기대한 효과는 크게 두 가지입니다. <br/> <br/>
                    첫 번째는 기존 개발 경험 개선, 두 번째는 사용자 경험 향상 입니다. <br/>
                    저희는 react-error-boundary 와 더불어서 React Concurrent Mode 에서 제공하는 Suspense 를 활용하여 선언형 코드 스타일을 팀 컨벤션에 도입했습니다. <br/>
                    코드를 작성하는 방법으로는 크게 명령형 코드 스타일과 선언형 코드 스타일로 구분할 수 있습니다.<br/>
                    명령형 코드 스타일은 API 요청 상태에 따라 “어떻게” UI를 보여줄 것인지를 서술하기 때문에, 로딩&실패&성공에 대한 결과가 한 컴포넌트에 작성되게 됩니다.<br/>
                    이러한 기존 코드 스타일은 API 요청 상태에 따른 절차를 일일이 작성해야하기에, 팀 개발 경험을 저해하고 유지보수에 어려움을 줄 수 있다고 판단했습니다. <br/>
                    따라서 어떻게가 아닌, "무엇" 을 보여줄지에 초점을 둔 "선언형 코드 스타일" 을 컨벤션으로 결정했습니다.<br/>
                    “useSuspenseQuery” 를 활용하여 API 요청에 성공한 상태의 코드만 컴포넌트에 작성하고, 로딩, 에러 상태의 코드는 컴포넌트 외부를 감싸고있는 “Suspense” 와 “Error-Boundary” 에 위임했습니다. <br/>
                    이를 통해 선언적이고 독립적으로 각 상태에 대한 코드를 관리할 수 있었습니다. <br/> <br/>
                    더불어, 저희 팀은 네트워크 상태에 따른 다변적인 사용자 환경에 대응하고자 했습니다. <br/>
                    다변적인 환경에서도 유연한 UI 변경을 보장하는 것이 ‘좋은 사용자 경험’ 이라 정의하고 독립적으로 컴포넌트들의 로딩과 에러 상태를 관리함으로써 이를 효과적으로 수행했습니다. <br/>
                    또한 비즈니스적으로 중요한 UI를 먼저 보여주기 위해, 후순위 UI에 대한 동적 임포트를 적용하여 렌더링의 우선순위를 관리했습니다. <br/>
                    모든 비동기 컴포넌트에 로딩화면을 추가하고, 실제 배포 환경에서 로딩 화면 QA 를 진행하였습니다. <br/>
                    하지만 API 호출이 있을 때마다 스켈레톤이 화면에 보여지는 시간이 너무 짧아, 오히려 불편한 인상을 받았습니다. <br/>
                    특히 서비스의 타겟층을 고려해 보았을 때, 야놀자 숙박업체 사장님들은 한국의 빠른 인터넷 속도에서 서비스를 이용하시는 상황이며, 이 상황에서 무조건 스켈레톤을 노출하는 것은 오히려 사용자에게 나쁜 경험을 줄 수 있다는 점을 깨닫게 되었습니다. <br/>
                    또한 스켈레톤 화면이 모든 비동기 데이터 요청 컴포넌트에 적용되면서 성능 저하를 이르 킬 수 있다는 점도 고려하게 되었습니다. <br/>
                    이를 개선하기 위해 최초 렌더링 이후 로딩 화면이 필요없는 컴포넌트에서 “useTransition” 을 사용하였습니다. 이를 통해 상태 변경 시, UI 를 차단하지 않음으로써 깜빡임 현상을 해결했습니다. <br/>
                    선언형 컴포넌트로 기존 개발 경험을 개선하고 서비스 상황에 맞는 선택적인 Concurrent Mode 에서의 기술 도입을 통해 “팀 상황에 적합한 컨벤션과 서비스 상황에 적합한 기술이 적용된 어플리케이션” 을 완성할 수 있었습니다.</div>
                </section>
            </section>
        </section>
    )
};