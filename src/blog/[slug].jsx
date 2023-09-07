import React, { useEffect, useState } from 'react'
//import Image from 'next/future/image'
import BlogImage from '@/components/common/Image'

import { BlogLayout } from '@/components/layout/BlogLayout'
import { Container } from '@/components/common/Container'
import { fetchAPI } from '@/lib/api'
import BlogSide from '@/components/pages/blog/blogside'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

export default function Blogs({ blog, blogs }) {
    console.log(blog)

    return (
        <>
            <BlogLayout title="Blog | Landmark">
                <div className="relative overflow-hidden ">
                    <Container className="relative pt-24 pb-16 text-center md:text-left">
                        <p className="pb-10 text-[14px] font-semibold uppercase leading-9 tracking-[9px]">
                            The lai blog
                        </p>
                        <div className="gap-16 md:flex">
                            <div className="text-[14px] text-grayText md:w-3/4">
                                <h1 className="mb-6 font-poppins text-[32px] font-medium text-black sm:text-[52px]">
                                    {blog.attributes.title}
                                </h1>
                                <p className="pb-6">
                                    by {blog.attributes.name} /{' '}
                                    {blog.attributes.editor} /{' '}
                                    {blog.attributes.topic} /{' '}
                                    {blog.attributes.date}
                                </p>
                                <BlogImage image={blog.attributes.image} />
                                <div className="text-[17px]">
                                    {blog.attributes.detail.summary
                                        .split('/n')
                                        .map((summary, s) => (
                                            <p
                                                className="py-6 leading-8"
                                                key={s}
                                            >
                                                {summary}
                                            </p>
                                        ))}
                                    {blog.attributes.detail.description.map(
                                        (detail, index) => (
                                            <div key={index}>
                                                <h1 className="py-10 text-[32px] font-medium text-black">
                                                    {detail.header}
                                                </h1>
                                                {detail.text
                                                    .split('/n')
                                                    .map((text, t) => (
                                                        <p
                                                            className="leading-8 py-4"
                                                            key={t}
                                                        >
                                                            {text}
                                                        </p>
                                                    ))}
                                                {detail.subtext && (
                                                    <div>
                                                        {detail.subtext.map(
                                                            (sub, s) => (
                                                                <>
                                                                    {' '}
                                                                    <h2 className="py-8 text-[24px] font-medium text-black">
                                                                        •{' '}
                                                                        {
                                                                            sub.header
                                                                        }
                                                                    </h2>
                                                                    <p>
                                                                        {
                                                                            sub.text
                                                                        }
                                                                    </p>
                                                                </>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className='bg-black text-white p-2 py-[80px] px-10 mt-10 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]'>
                                <div className='flex  items-center gap-2'>
                   <a href="" target='_blank'>
                    <span className='rounded-full bg-white w-[32px] h-[32px] flex items-center justify-center'>
                            <FontAwesomeIcon icon={faFacebook} color='black'/>  
                        </span>
                   </a>
                   <a href="" target='_blank'>

                    <span className='rounded-full bg-white w-[32px] h-[32px] flex items-center justify-center'>
                        <FontAwesomeIcon icon={faLinkedin} color='black'/>  
                    </span>
                   </a>
                   <a href="" target='_blank'>

                    <span className='rounded-full bg-white w-[32px] h-[32px] flex items-center justify-center'>
                        <FontAwesomeIcon icon={faTwitter} color='black'/>  
                    </span>
                   </a>

                </div>
                            <h1 className='font-medium pl-10 text-[26px] mt-8'> Get insights on high quality research, culture, business and more.</h1>
                        </div>
                            </div>
                            <div className="md:w-1/4">
                                <BlogSide blogs={blogs} />
                            </div>
                        </div>
                       
                    </Container>
                </div>
            </BlogLayout>
        </>
    )
}

export async function getStaticPaths() {
    const blogsRes = await fetchAPI('/blogs', { fields: ['slug'] })

    return {
        paths: blogsRes.data.map((blog) => ({
            params: {
                slug: blog.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const [blogsRes] = await Promise.all([
        fetchAPI('/blogs', { populate: '*' }),
    ])
    const filterBlogsRes = await fetchAPI('/blogs', {
        filters: {
            slug: params.slug,
        },
        populate: '*',
    })

    return {
        props: { blog: filterBlogsRes.data[0], blogs: blogsRes.data },
        revalidate: 1,
    }
}
