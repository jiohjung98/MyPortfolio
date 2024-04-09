import React, { useRef, useState } from 'react';

export default function ShimpyoImageSection() {

  return (
    <section>
      <div className="mx-auto">
          <img className="mx-auto mb-20" src='/Shimpyo-structure.png' alt='Shimpyo-structure' width="600" height="400" />
      </div>
      <section className="mx-auto flex-row">
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-1.gif' alt='Shimpyo-1' width="600" height="500" />
      <div className="text-center mb-10">숙소 상제 정보 및 장바구니 post</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-2.gif' alt='Shimpyo-1' width="600" height="500" />
      <div className="text-center mb-10">인원에 따른 장바구니 및 예약하기 여부</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-3.gif' alt='Shimpyo-3' width="600" height="500" />
      <div className="text-center mb-10">예약하기 post</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-4.gif' alt='Shimpyo-5' width="600" height="500" />
      <div className="text-center mb-10">날짜에 따른 장바구니 및 예약하기 여부</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-5.gif' alt='Shimpyo-5' width="600" height="500" />
      <div className="text-center mb-10">동일 숙소 동일 날짜 장바구니 담기 방지</div>
      </section>
      <section className="mx-auto flex-row">
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-1.gif' alt='Shimpyo-1' width="600" height="500" />
      <div className="text-center mb-10">숙소 상제 정보 및 장바구니 post</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-2.gif' alt='Shimpyo-1' width="600" height="500" />
      <div className="text-center mb-10">인원에 따른 장바구니 및 예약하기 여부</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-3.gif' alt='Shimpyo-3' width="600" height="500" />
      <div className="text-center mb-10">예약하기 post</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-4.gif' alt='Shimpyo-5' width="600" height="500" />
      <div className="text-center mb-10">날짜에 따른 장바구니 및 예약하기 여부</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-5.gif' alt='Shimpyo-5' width="600" height="500" />
      <div className="text-center mb-10">동일 숙소 동일 날짜 장바구니 담기 방지</div>
      </section>
      <section className="mx-auto flex-row">
      <div className="text-center mb-5 text-lg font-medium">리팩토링</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-6.gif' alt='Shimpyo-1' width="600" height="500" />
      <div className="text-center mb-10">숙소 상세 페이지 카카오맵 및 정보 추가</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-7.gif' alt='Shimpyo-1' width="600" height="500" />
      <div className="text-center mb-10">객실 수 만큼 장바구니 담기 기능</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-8.gif' alt='Shimpyo-3' width="600" height="500" />
      <div className="text-center mb-10">남은 객실 수 초과 시 장바구니 post 방지</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-9.gif' alt='Shimpyo-5' width="600" height="500" />
      <div className="text-center mb-10">숙소 내 룸 정보 추가, 상태에 따른 취소선</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-10.gif' alt='Shimpyo-5' width="600" height="500" />
      <div className="text-center mb-10">카카오맵 마커 및 커스텀 오버레이, 길찾기</div>
      <img className='mx-auto mb-5 hover:scale-105 transition-transform' src='/Shimpyo-11.gif' alt='Shimpyo-5' width="600" height="500" />
      <div className="text-center mb-10">예약하기 API 변경에 따른 post</div>
      </section>
    </section>
  );
};
