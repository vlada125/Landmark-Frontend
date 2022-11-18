import Image from 'next/future/image'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'
import bg from '@/images/backgrounds/Landmark_Team.png'

export function Try() {
    return (
        <div className="try-back border-t-[1px] border-[rgba(122,122,122,0.44)]">
            <Container className="relative pt-[40px] pb-16 text-center md:pt-[70px] md:text-left">
                <div className="text-center ">
                    <h1 className="mb-8 text-[25px] font-semibold ">
                        Get started with Landmark and ensure your research data
                        gets the attention it deserves!
                    </h1>
                    <p className="text-sm text-[16px] font-thin leading-7">
                        <strong className="font-semibold">
                            TRY IT FOR FREE .
                        </strong>{' '}
                        NO CREDIT CARD REQUIRED.
                    </p>
                </div>
                <div className="mt-10 items-center justify-center gap-10 md:flex">
                    <Button
                        href="/sign-in"
                        color="primary"
                        className="bg-primary py-[10px] px-[36px] text-[16px] font-medium tracking-[1.5px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
                    >
                        <span>Create a free account</span>
                    </Button>
                </div>
            </Container>
        </div>
    )
}
