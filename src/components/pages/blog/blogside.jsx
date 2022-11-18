import React from 'react'
import Image from 'next/future/image'
import whitelogo from '@/images/logos/Landmark-Logo-White-1024x491.png'
import { Button } from '@/components/common/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function BlogSide({blogs}) {
    return (
        <>
            <p className='font-semibold text-mainText text-[15px]'>Latest Posts</p>
            <ul className='list-disc mt-4 list-outside ml-4'>
                {
                    blogs.map((blog, index) => (
                        <a href={`/blog/${blog.attributes.slug}`}><li key={index} className='text-primary text-[14px]'>{blog.attributes.title}</li></a>
                    ))
                }
            </ul>
            <div className='bg-black text-white p-2 text-center py-[140px] mt-10 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]'>
                <Image src={whitelogo} className='w-[140px] mx-auto' alt=''/>
                <h1 className='font-semibold text-[20px] mt-8'> We specialize in working with qualitative researchers to transform their media files into actionable insights.</h1>
                
                <h1 className='font-medium uppercase text-[17px] my-10 tracking-[0.01em]'> Try it for free. <span className='font-light'> NO CREDIT CARD REQUIRED.</span></h1>
                <Button className='uppercase text-[11px] font-medium hover:text-primary transition duration-300  tracking-[1.5px] bg-white  rounded-none px-10 py-2 text-mainText' href='/sign-in'>Get started
                    <FontAwesomeIcon icon={faChevronRight} className='ml-4'/>
                </Button>
            </div>
                <div className='flex justify-center items-center mt-8 gap-2'>
                   <a href="" target='_blank'>
                    <span className='rounded-full bg-[#3b5998] w-[32px] h-[32px] flex items-center justify-center'>
                            <FontAwesomeIcon icon={faFacebook} color='white'/>  
                        </span>
                   </a>
                   <a href="" target='_blank'>

                    <span className='rounded-full bg-[#1a85bd] w-[32px] h-[32px] flex items-center justify-center'>
                        <FontAwesomeIcon icon={faLinkedin} color='white'/>  
                    </span>
                   </a>
                   <a href="" target='_blank'>

                    <span className='rounded-full bg-[#1da1f2] w-[32px] h-[32px] flex items-center justify-center'>
                        <FontAwesomeIcon icon={faTwitter} color='white'/>  
                    </span>
                   </a>

                </div>
        </>
    )
}