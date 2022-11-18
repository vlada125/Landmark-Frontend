import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

import { AuthLayout } from '@/components/layout/AuthLayout'
import { Button } from '@/components/common/Button'
import { TextField } from '@/components/common/Fields'
import logo from '@/images/logos/landmark-logo.png'
import team from '@/images/backgrounds/Landmark_Team.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import background from '@/images/backgrounds/fondo-.png'
import tip from '@/images/gifs/imageedit_3_8113441318.gif'

export default function Login() {
    return (
        <>
            <Head>
                <title>Landmark Associates, Inc. | Transcription Portal</title>
            </Head>
            <div
                className={`flex h-full items-center justify-center bg-[url(../images/backgrounds/summer2019.png)] bg-[length:100%] bg-left-bottom bg-no-repeat`}
            >
                <Container>
                    <div className="mx-auto rounded-2xl bg-white p-8 shadow-[5px_5px_20px_20px_rgb(168,168,168,0.53)] md:w-[400px]">
                        <div className="">
                            <Image
                                src={logo}
                                className="mx-auto w-[115px] py-10"
                                alt=""
                            />
                            <div className="flex items-start">
                                <p className="text-[17px] font-normal">
                                    Sign-in
                                </p>
                                <div className="float-right ml-auto">
                                    <p className="mb-4">
                                        <a
                                            href="https://thelai.com/form/"
                                            target="_blank"
                                            className="text-border underline transition duration-300 hover:text-primary"
                                        >
                                            Forgot your username?
                                        </a>
                                    </p>
                                    <span className="group relative">
                                        <span className=" absolute top-10 left-1/2 w-full -translate-x-1/2 rounded bg-white py-5 px-3 text-[13px] leading-9 text-mainText opacity-0 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.4)] transition transition duration-300 ease-in-out  group-hover:opacity-100 md:min-w-[500px]">
                                            <Image
                                                src={tip}
                                                className="mx-auto w-full"
                                                alt=""
                                            />
                                            <a
                                                href="https://na72.salesforce.com/secur/forgotpasswordp.jsp?orgId=00DA0000000H5z5&portalId=060A00000009MyZ&retURL=%2Fsecur%2Flogin_portal.jsp"
                                                className="underline transition duration-300 hover:text-primary"
                                            >
                                                Click here
                                            </a>
                                            <br />
                                            <span className="">
                                                Enter your username (normally
                                                your email) An email with a
                                                temporary password will be sent
                                                If you didn't received an email,
                                                please chat with us on the lower
                                                right ➘
                                            </span>
                                            <hr className='border-primary border-[2px]'/>
                                        </span>

                                        <span className="underline">
                                            <a
                                                href="https://na72.salesforce.com/secur/forgotpasswordp.jsp?orgId=00DA0000000H5z5&portalId=060A00000009MyZ&retURL=%2Fsecur%2Flogin_portal.jsp"
                                                target="_blank"
                                                className="text-border underline transition duration-300 hover:text-primary"
                                            >
                                                Forgot your password?
                                            </a>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <input
                                type="text"
                                className="form-control w-full border-none px-0  text-[17px] font-normal"
                                placeholder="Username"
                            />
                            <input
                                type="password"
                                className="form-control w-full border-none px-0  text-[17px] font-normal"
                                placeholder="Password"
                            />
                            <div className="w-full text-center">
                                <Button
                                    href="/sign-in"
                                    color="primary"
                                    className="my-6 bg-[#bababa] py-[14px] px-[40px] font-poppins text-[14px] font-semibold tracking-[0.8px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
                                >
                                    <span>Login</span>
                                </Button>
                            </div>
                            <p className="text-[10px]">
                                Usage is monitored and compliance enforced, by
                                entering your user credentials and clicking on
                                the login button above, you agree that you have
                                read and will abide by Landmark's &nbsp;
                                <a
                                    href="https://thelai.com/terms-and-conditions"
                                    className="text-border underline transition duration-300 hover:text-primary"
                                >
                                    Terms of Service
                                </a>
                                &nbsp; and &nbsp;
                                <a
                                    href="https://thelai.com/privacy-policy"
                                    className="text-border underline transition duration-300 hover:text-primary"
                                >
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
