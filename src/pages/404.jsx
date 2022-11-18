import Image from 'next/future/image'

import { Container } from '@/components/common/Container'
import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/common/Button'
import notfound from '@/images/backgrounds/404-the-lai-1024x576.png'

const NotFound = () => {
    return (
        <MainLayout title="Page Not found" footer={true}>
            <Container className="h-full">
                <div className="md:flex h-full items-center text-center">
                    <div className="md:w-[60%]">
                        <Image src={notfound} className="m-auto" alt="" />
                    </div>
                    <div className="text-center md:w-[40%] md:text-left">
                        <h1 className="mb-4 font-poppins text-[32px] font-bold md:text-5xl">
                            OOOPS!
                        </h1>
                        <h1 className="mb-2 font-poppins text-[32px] font-bold">
                            404 Error
                        </h1>
                        <p className="text-[16px] md:text-[19px]">
                            Sorry, we couldn’t transcribe the page you were re
                            looking for. Check out our homepage to see what we
                            can do for you.
                        </p>
                        <Button
                            href="/"
                            color="primary"
                            className="mt-6 bg-primary py-[15px] px-[36px] text-[17px] font-semibold tracking-[1.5px] transition  duration-300 ease-in-out hover:bg-primaryHover"
                        >
                            <span className="flex">
                                Go to Homepage{' '}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#fff"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-play ml-2 w-[14px]"
                                >
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </span>
                        </Button>
                    </div>
                </div>
            </Container>
        </MainLayout>
    )
}

//Error.getInitialProps = ({ res, err }) => {
//  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
//  //  console.log(res ? res : "");
//  return { statusCode }
//}

export default NotFound
