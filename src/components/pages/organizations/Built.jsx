import {useState} from 'react'
import Image from 'next/future/image'
import { Container } from '@/components/common/Container'

import { Button } from '@/components/common/Button'
import waveBack from '@/images/backgrounds/wave-back.svg'
import gif from '@/images/gifs/Landmark-welcome.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Drawer from 'react-drag-drawer'


export function Built() {
    const [isMenuOpened, setIsOpend] = useState(false)
    const handleClick = () => {
        // toggles the menu opened state
        setIsOpend(!isMenuOpened)
    }
    const specializes = [
        'Special price for all members of your organization',
        'Shared accounts for team projects​',
        'High-level security and confidentiality',
        'Simplified payment options',
    ]
    return (
        <div className="relative overflow-hidden">
            <Image
                src={waveBack}
                className="absolute h-[180px] w-full origin-top scale-[1.8]"
                alt=""
            />
            <Container className="relative py-20 md:py-[140px] text-center md:text-left">
                <div className="md:flex md:px-10">
                    <div className="md:w-1/2 ">
                        <h1 className="mb-10 font-poppins text-[32px] font-semibold  sm:text-5xl">
                            Built with researchers, for researchers
                        </h1>
                        <p className="mb-3 text-[17px] font-semibold text-mainText md:pr-16">
                            Learn how Landmark supports research organizations
                            of all sizes:
                        </p>
                        {specializes.map((specialize, key) => (
                            <div className="flex items-center py-2" key={key}>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    size="xl"
                                    color="#CF2231"
                                />
                                <span className="ml-2 text-left text-[15px] md:text-[17px] text-mainText">
                                    {specialize}
                                </span>
                            </div>
                        ))}
                        <Button
                            color="primary"
                            onClick={handleClick}
                            className="mt-6 bg-primary py-[14px] px-[72px]  text-[18px] md:text-[17px] font-semibold tracking-[1.2px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
                        >
                            <span>Contact Sales</span>
                        </Button>
                        <Drawer
                            open={isMenuOpened}
                            onRequestClose={() =>
                                setIsOpend(
                                    !isMenuOpened
                                )
                            }
                            direction="left"
                            modalElementClass='w-[90%] md:w-1/2 ml-auto z-30'
                        >
                            <div className="h-screen bg-white z-20">
                                <iframe
                                    src='https://form.typeform.com/to/kYgtbass?typeform-medium=embed-snippet'
                                    frameborder="0"
                                    className='w-full h-[90%] pb-10'
                                ></iframe>
                            </div>
                        </Drawer>
                        <p className="my-5 text-center text-mainText md:ml-[58px] md:text-left">
                            No credit card required
                        </p>
                    </div>
                    <div className="flex items-center md:w-1/2">
                        <Image
                            src={gif}
                            className="m-auto w-full md:w-[55%] rounded-2xl"
                            alt=""
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}
