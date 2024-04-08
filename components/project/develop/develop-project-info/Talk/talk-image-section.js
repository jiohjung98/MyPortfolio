import React, { useRef, useState } from 'react';

export default function TalkImageSection() {

  return (
    <section>
      <section className="mx-auto">
        <section className="flex mx-auto" style={{ justifyContent: 'space-between', maxWidth: '600px' }}>
          <section className="flex-row">
            <img className='mx-auto mb-5' src='/Talk-1.png' alt='Talk-1' width="300" height="150" style={{ marginRight: '10px' }} />
            <div className="text-center mb-10">유저목록 - 유저 모달에서 채팅하기</div>
          </section>
          <section className="flex-low">
            <img className='mx-auto mb-5' src='/Talk-2.png' alt='Talk-1' width="300" height="150" style={{ marginLeft: '10px' }} />
            <div className="text-center mb-10">채팅방 존재 x, 새로운 채팅방 생성</div>
          </section>
        </section>
        <section className="flex mx-auto" style={{ justifyContent: 'space-between', maxWidth: '600px' }}>
          <section className="flex-row">
            <img className='mx-auto mb-5' src='/Talk-3.png' alt='Talk-3' width="300" height="150" style={{ marginRight: '10px' }} />
            <div className="text-center mb-10">내 채팅 목록</div>
          </section>
          <section className="flex-low">
            <img className='mx-auto mb-5' src='/Talk-4.png' alt='Talk-4' width="300" height="150" style={{ marginLeft: '10px' }} />
            <div className="text-center mb-10">채팅할 유저 선택</div>
          </section>
        </section>
        <section className="flex mx-auto" style={{ justifyContent: 'space-between', maxWidth: '600px' }}>
          <section className="flex-row">
            <img className='mx-auto mb-5' src='/Talk-5.png' alt='Talk-5' width="300" height="150" style={{ marginRight: '10px' }} />
            <div className="text-center mb-10">1:1 채팅방 존재 시 해당 채팅방으로 이동</div>
          </section>
          <section className="flex-low">
            <img className='mx-auto mb-5' src='/Talk-6.png' alt='Talk-6' width="300" height="150" style={{ marginLeft: '10px' }} />
            <div className="text-center mb-10">채팅할 유저 여러 명 선택</div>
          </section>
        </section>
        <section className="flex mx-auto" style={{ justifyContent: 'space-between', maxWidth: '600px' }}>
          <section className="flex-row">
            <img className='mx-auto mb-5' src='/Talk-7.png' alt='Talk-7' width="300" height="150" style={{ marginRight: '10px' }} />
            <div className="text-center mb-10">채팅방 이름 지정 및 프라이빗 채팅 여부 선택</div>
          </section>
          <section className="flex-low">
            <img className='mx-auto mb-5' src='/Talk-8.png' alt='Talk-8' width="300" height="150" style={{ marginLeft: '10px' }} />
            <div className="text-center mb-10">프라이빗 단체채팅방 생성</div>
          </section>
        </section>
        <section className="flex mx-auto" style={{ justifyContent: 'space-between', maxWidth: '600px' }}>
          <section className="flex-row">
            <img className='mx-auto mb-5' src='/Talk-9.png' alt='Talk-10' width="300" height="150" style={{ marginRight: '10px' }} />
            <div className="text-center mb-10">프라이빗 채팅 - 내 채팅 페이지에 표시</div>
          </section>
          <section className="flex-low">
            <img className='mx-auto mb-5' src='/Talk-10.png' alt='Talk-11' width="300" height="150" style={{ marginLeft: '10px' }} />
            <div className="text-center mb-10">프라이빗 채팅 - 오픈 채팅 페이지에 표시 X</div>
          </section>
        </section>
      </section>
    </section>
  );
};
