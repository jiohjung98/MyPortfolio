import Image from 'next/image'

export default function ShimpyoInfoSection() {
    return (
        <section>
            <section className="container mx-auto items-center">
                <section className="mb-20">
                    <div className="text-xl font-semibold">프로젝트 개요</div>
                    <div className="my-3">프로젝트 기간: 2023.11.20 ~ 2023.12.15 (리팩토링 기간: 23.12.04 ~ 23.12.05)</div>
                    <div className="my-3">참여 인원: FE 5, BE 3</div>
                    <div className="my-3">패스트캠퍼스 x 야놀자 미니프로젝트 ‘Open API 를 통한 숙소 예약 웹앱 구현하기’ 입니다.</div>
                    <div className="my-3">이 프로젝트는 기업 야놀자와 사용자(숙소 예약자) 모두의 목적성을 고려한 숙소 예약 프로젝트입니다. </div>
                    <div className="my-3">기획 방향성은 다음과 같습니다.</div>
                    <div className="my-3">쉼표가 문장에서 잠시 멈춤과 휴식의 시간을 나타내듯이, 사용자들에게 바쁜 일상에서 벗어나 휴식을 취하고 재충전할 수 있는 숙소를 제공하는 것을 목표로 하는 웹앱을 만들고자 했습니다.</div>
                    <div className="my-3">주요 기능으로는 회원가입 및 로그인, 숙소 리스팅, 숙소 상세 정보, 장바구니, 결제하기 기능이 있고 해당 프로젝트에서 숙소 상세 정보 부분을 맡아서 작업하였습니다.</div>
                </section>
                <section className="mb-20">
                    <div className="text-xl font-semibold">내가 기여한 부분</div>
                    <div className="my-3"> • 숙소 상세 정보 get&장바구니 및 예약하기 post</div>
                    <div className="my-3">&emsp;• 숙소리스트페이지에서 숙소 클릭 시, 해당 숙소 상세 정보를 불러옵니다.</div>
                    <div className="my-3">&emsp;• 장바구니 버튼 클릭 시, post 요청을 통해 숙소를 장바구니에 담습니다.</div>
                    <div className="my-3">&emsp;• 예약하기 버튼 클릭 시, post 요청을 통해 예약하기 페이지로 이동합니다.</div>
                    <div className="my-3"> • 인원에 따른 post 여부</div>
                    <div className="my-3">&emsp;• 숙소 최대인원보다 인원 초과 시 장바구니 및 예약하기 post 방지</div>
                    <div className="my-3"> • 날짜에 따른 post 여부</div>
                    <div className="my-3">&emsp;• 연박 이용 시, 그 기간 내에 다른 유저가 해당 숙소 예약한 경우 post 방지</div>
                    <div className="my-3">&emsp;• 장바구니에 같은 숙소를 같은 날짜에 여러 번 담는 경우 방지</div>
                </section>
                <section className="mb-20">
                    <div className="text-xl font-semibold">리팩토링</div>
                    <div className="my-3"> • 카카오맵 API</div>
                    <div className="my-3">&emsp;• 숙소 위치 마커 렌더링</div>
                    <div className="my-3">&emsp;• 마커 클릭 시 커스텀 오버레이 렌더링 → 클릭 시 길찾기 페이지 이동</div>
                    <div className="my-3"> • 숙소 상세 정보 변경에 따른 추가 정보 get</div>
                    <div className="my-3">&emsp;• 숙소 이미지 슬라이더(케러셀) 구현</div>
                    <div className="my-3">&emsp;• 이미지 없을 시 기본 이미지 렌더링</div>
                    <div className="my-3">&emsp;• 숙소 추가 정보 아이콘 처리 및 상태(boolean = false) 에 따라 취소선 적용</div>
                    <div className="my-3">&emsp;• 숙소 내 룸 정보 get</div>
                    <div className="my-3"> • 장바구니 API 변경에 따른 로직 처리</div>
                    <div className="my-3">&emsp;• 날짜마다 남은 객실 수 만큼 장바구니 담기 기능 구현</div>
                    <div className="my-3"> • 예약하기 API 변경에 따른 로직 처리</div>
                </section>
                <section className="mb-20">
                    <div className="text-xl font-semibold">사용 기술</div>
                    <div className="my-3"> • recoil, react-query 를 통한 상태 관리 구현</div>
                    <div className="my-3"> • TypeScript: 컴파일에서 타입 에러를 발견하여 안정성을 높이기 위해 사용</div>
                    <div className="my-3"> • Axios: 자동 JSON 파싱과 인터셉트 기능으로 중복 코드 개선</div>
                    <div className="my-3"> • Emotion: css prop을 통해 조건부 스타일링을 하기 위해 사용</div>              
                    <div className="my-3"> • 코드 컨벤션: Eslint, prettier</div>
                    <div className="my-3"> • 배포, CI/CD: Netlify</div>
                </section>
                <section className="mb-20">
                    <div className="text-xl font-semibold">트러블 슈팅</div>
                    <div className="my-3 font-medium"> • 문제 배경</div>
                    <img className="mb-10" src='/Shimpyo-problem.png' alt='Shimpyo-problem' width="500" height="300" />
                    <div className="my-3 mb-10">카카오맵 API를 웹앱에 처음 적용해봤는데 크기 및 높이를 설정하는 부분과 요소들을 스타일링 하는데서 많은 문제가 있었습니다. <br/>
                    React는 useEffect 훅을 제공해주는데 이 훅에서 카카오맵 API 코드를 작성하라해서 가이드대로 진행했는데, 위 사진과 같은 오류가 발생했습니다.<br/>
                    React에서는 우리가 HTML의 script 태그에서 로드한 객체는 무조건 window 객체 밑에 붙게 된다는 사실을 알게 되었고, 아래와 같이 "window.kakao" 라는 방식으로 사용해야 함을 알게 되었습니다. </div>
                    <div className="my-3 font-medium"> • 해결 방법</div>
                    <img className="mb-10" src='/Shimpyo-troubleShooting.png' alt='Shimpyo-troubleShooting' width="500" height="300" />
                    <div className="my-3 font-medium"> • 회고</div>
                    <div className="my-3">개발자로서 백엔드와 협업을 처음 해봐서 많은 어려움이 있었습니다.
                    post, get하는 원리 및 방식도 잘 몰랐었고 프론트 개념이 완전히 잡혀있지 않은 상태에서 하니 어려움은 배로 느껴졌었습니다. <br/>
                    그래도 지속적인 회의 및 개발을 통해 최종적으로는 백엔드에서 전달해준 api를 다 잘 사용할 수 있었습니다. <br/>
                    숙소 상세 페이지를 맡아 숙소정보를 불러오고 장바구니에 담고 바로 예약하는 등 많은 api를 사용하는 것이 부담이 되었지만 그만큼 백엔드와의 통신을 공부할 수 있어서 많이 성장하는 계기가 되었던 것 같습니다. <br/>
                    다음 프로젝트 시에는 백엔드 지식을 좀 더 갖춰서 백엔드와의 소통을 더 원활하게 할 수 있는 개발자가 되고싶다는 생각을 가지게 되었습니다. </div>
                </section>
            </section>
        </section>
    )
};