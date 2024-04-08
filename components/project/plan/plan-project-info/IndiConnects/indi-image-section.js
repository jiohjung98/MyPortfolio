import React from 'react';

export default function IndiImageSection() {
  return (
    <section className="flex-row mx-auto">
      <div className="text-center text-lg font-medium">
        <div className='my-3'>인디뮤지션</div>
        <img className="mx-auto mb-5" src='/Indi-1.png' alt='Indi-1' width="720" height="300" />
        <img className="mx-auto mb-20" src='/Indi-2.png' alt='Indi-2' width="720" height="300" />

        <div className='my-3'>공연장 업주</div>
        <img className="mx-auto mb-5" src='/Indi-3.png' alt='Indi-3' width="720" height="300" />
        <img className="mx-auto mb-20" src='/Indi-4.png' alt='Indi-4' width="540" height="300" />

        <div className='my-3'>관객</div>
        <img className="mx-auto mb-5" src='/Indi-5.png' alt='Indi-5' width="720" height="300" />
        <img className="mx-auto mb-20" src='/Indi-6.png' alt='Indi-6' width="720" height="300" />
        </div>
    </section>
  );
}
