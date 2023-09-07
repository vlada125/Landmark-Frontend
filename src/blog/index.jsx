import React, { useEffect, useState } from 'react'
//import Image from 'next/future/image'
import BlogImage from '@/components/common/Image'

import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/common/Container'
import ReactPaginate from 'react-paginate'
import { fetchAPI } from '@/lib/api'
import placeholder from '@/images/backgrounds/placeholder.png'


function Items({ currentBlog }) {
    return (
        <div className="py-10 text-center">
            <a href={`/blog/${currentBlog.attributes.slug}`}>
                {currentBlog.attributes.image ? (
                    <BlogImage image={currentBlog.attributes.image} />
                ) : (
                    <Image src={placeholder} className="w-full" alt="placeholder" />
                )}

            </a>
            <div className="w-full border-[6px] border-[#CF2231] bg-black p-10 text-left">
                <a
                    href={`/blog/${currentBlog.attributes.slug}`}
                    className="text-[21px] text-primary"
                >
                    {currentBlog.attributes.title}
                </a>
                <p className="py-3 text-[14px] text-white">
                    <span className="uppercase">THE LAI BLOG​ </span>
                    {currentBlog.attributes.title} by{' '}
                    {currentBlog.attributes.name} /{' '}
                    {currentBlog.attributes.editor} /{' '}
                    {currentBlog.attributes.topic} /{' '}
                    {currentBlog.attributes.date} For some years now and today,
                </p>
            </div>
        </div>
    )
}

function PaginatedItems({ blogs }) {
    // We start with an empty list of items.
    const [currentBlog, setCurrentBlog] = useState(blogs[0])

    useEffect(() => {
        // Fetch items from another resources.
        setCurrentBlog(blogs[0])
    }, [])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        setCurrentBlog(blogs[event.selected])
    }

    return (
        <>
            <Items currentBlog={currentBlog} />
            <div className="flex text-center">
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={blogs.length}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}

export default function Blogs({ blogs }) {

    return (
        <>
            <MainLayout title="Blog | Landmark" footer={true}>
                <div className="relative overflow-hidden md:px-[10%]">
                    <Container className="relative pt-24 pb-16 text-center md:text-left">
                        <h1 className="mb-6 font-poppins text-[32px] font-medium  sm:text-[52px]">
                            The power of the written word.
                            <span className="anim-typewriter text-primary">
                                |
                            </span>
                        </h1>
                        <p className="pb-10 font-poppins text-[22px] leading-9 text-mainText">
                            Get the inspiration you need to develop your own
                            research, articles and ideas –
                        </p>
                        <PaginatedItems itemsPerPage={1} blogs={blogs} />
                        <div className="sm:flex justify-center gap-4 mt-6">
                            {blogs.map((currentBlog, index) => (
                                <div key={index} className="sm:w-1/2 md:w-1/3">
                                    <Items currentBlog={currentBlog} />
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </MainLayout>
        </>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [blogsRes] = await Promise.all([
        fetchAPI('/blogs', { populate: '*' }),
    ])

    return {
        props: {
            blogs: blogsRes.data,
        },
        revalidate: 1,
    }
}
