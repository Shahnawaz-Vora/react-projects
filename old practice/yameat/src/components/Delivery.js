import React from 'react';

export default function Delivery() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-screen-lg'>
        <div className='flex items-center justify-center'>
          <img
            className='w-full md:max-w-none md:h-full object-cover object-center'
            src='https://img.freepik.com/free-vector/new-modern-realistic-front-view-black-iphone-mockup-isolated-white-mobile-template-vector_90220-957.jpg?w=740&t=st=1683380564~exp=1683381164~hmac=f3518c66502d7253027d87aff98a008b29d53167544d16aea1897c41374a8a77'
            alt='mobile app screenshot'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>Get the App</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>
            Limitless Convenience on-demand
          </h1>
          <p className='text-sm md:text-base'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
            a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
