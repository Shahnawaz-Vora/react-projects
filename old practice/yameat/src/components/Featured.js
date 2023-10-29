import React, { useState } from 'react'
import {BsChevronCompactLeft , BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
export default function Featured() {
    const sliders = [
        {
            url: 'https://img.freepik.com/free-psd/electronic-shop-template-banner_23-2148785671.jpg?w=1380&t=st=1683378256~exp=1683378856~hmac=c031a819d0c882d4790fadb3849f9eee89dff79cf923ce774ffc88c02f72006d'
        },
        {
            url: 'https://img.freepik.com/free-psd/landing-page-template-corporate-business_23-2148716173.jpg?w=1380&t=st=1683373675~exp=1683374275~hmac=c1a04cd4dfad4774b5622344680b38a2499d34da7d1c9caf7100988f42cd671f'
        },
        {
            url: 'https://img.freepik.com/free-psd/furniture-facebook-cover-page-template_237398-164.jpg?w=1380&t=st=1683373450~exp=1683374050~hmac=a0564a8596a49da4f40263efd6d95d01bb9be36811e3afc57dc87e2a40b1b62d'
        }
    ]
    const [currentIndex,setCurrentIndex] = useState(0)
    
    const prevSlider = () =>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length -1 : currentIndex -1
        setCurrentIndex(newIndex)
    }
    const nextSlider = () =>{
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const moveToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    } 
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration' style={{backgroundImage:`url(${sliders[currentIndex].url}) `}}>

        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-orange-500' onClick={prevSlider}>
            <BsChevronCompactLeft/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-orange-500' onClick={nextSlider}>
            <BsChevronCompactRight/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((sliderItems,slideIndex)=>(
                    <div onClick={()=>moveToSlide(slideIndex)} key={slideIndex} className='text-2xl cursor-pointer'>
                    <RxDotFilled/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
