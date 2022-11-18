import { Accordion } from '@/components/common/Accordion'
import Image from 'next/future/image'
import ssl from '@/images/backgrounds/crop-ticket-1536x961.png'
import bestSecurity from '@/images/backgrounds/foreign-login.png'

export function Helpers({ helpers }) {
    return (
        <>
            {helpers.topic === 'helpful-articles' ? (
                <div className="text-mainText">
                    <h1 className="mb-8 text-[24px] font-medium">
                        Helpful articles
                    </h1>
                    <p className="text-[16px] font-normal leading-7">
                        Check our helpful articles on how to record interviews,
                        request a transcript at landmark, navigate through our
                        portal, payments and more.
                    </p>
                    {helpers.helper.map((helper, index) => (
                        <div key={index}>
                            <p
                                className={`mb-10 mt-10 text-[19px] font-medium text-mainText`}
                            >
                                {helper.title}
                            </p>
                            <div className="rounded-md border-[1px] border-[#ddd]">
                                {helper.items.map((item, k) => (
                                    <a href={item.href} key={k} target="blank">
                                        <div className="group relative border-b-[1px] border-b-[#ddd] p-5 hover:bg-[#fdf6f7]">
                                            {item.tooltip && (
                                                <span className="efore:absolute pointer-events-none absolute top-[-40px] left-1/4 w-[450px] -translate-y-1/2 -translate-x-1/2  rounded bg-white py-5 px-3 text-mainText opacity-0 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.4)] transition transition duration-300 ease-in-out before:absolute before:left-1/2 before:top-full before:left-1/2 before:top-full before:-translate-x-1/2 before:-translate-x-1/2 hover:bg-primaryHover group-hover:opacity-100">
                                                    {item.tooltip}
                                                </span>
                                            )}
                                            <span className="text-[17px] font-medium">
                                                {item.question}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    {helpers.helper.map((helper, index) => (
                        <div key={index}>
                            <p
                                className={`mb-10 text-[19px] font-medium text-mainText ${
                                    index !== 0 && 'mt-10'
                                }`}
                            >
                                {helper.title}
                            </p>
                            {helper.items.map((item, k) => (
                                <Accordion
                                    question={item.question}
                                    answer={item.answer}
                                ></Accordion>
                            ))}
                        </div>
                    ))}
                </>
            )}

            {helpers.topic === 'security_confidentiality' && (
                <>
                    <div className="mt-5 items-center border-b-[1px] border-b-[#ccc] md:mr-10 md:flex">
                        <Image
                            alt=""
                            src={ssl}
                            className=" mx-auto my-10 w-[160px] md:mr-10"
                        />
                        <div>
                            <h3 className="py-5 text-[22px] font-medium">
                                SSL Data Encryption​
                            </h3>
                            <p className="mb-5 text-[16px] leading-8 text-mainText md:mb-0">
                                Each file is encrypted with a unique key, which
                                is also encrypted by a separate master key which
                                rotates regularly.
                            </p>
                        </div>
                    </div>
                    <div className="items-center border-b-[1px] border-b-[#ccc] md:mr-10 md:flex">
                        <Image
                            alt=""
                            src={bestSecurity}
                            className=" mx-auto my-10 w-[160px] md:mr-10"
                        />
                        <div>
                            <h3 className="pb-5 text-[22px] font-medium">
                                Best practices for Data Security
                            </h3>
                            <p className="mb-5 text-[16px] leading-8 text-mainText md:mb-0">
                                Each file is encrypted with a unique key, which
                                is also encrypted by a separate master key which
                                rotates regularly.
                            </p>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
