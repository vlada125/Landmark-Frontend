import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'

export function GetQuote() {
    return (
        <div className="bg-primary">
            <Container className="lg:pt-26 relative py-24 text-center text-white md:text-left">
                <div className="md:flex">
                    <div className="md:w-[70%]">
                        <h1 className="mb-6 text-2xl text-[25px] font-bold leading-9">
                            We specialize in working with qualitative
                            researchers to transform their media files into
                            actionable insights.
                        </h1>
                        <p className="text-sm text-[16px] font-thin leading-7">
                            <strong className="font-semibold">
                                TRY IT FOR FREE .
                            </strong>{' '}
                            NO CREDIT CARD REQUIRED.
                        </p>
                    </div>
                    <div className="mt-5 text-center md:mt-0 md:w-[30%]">
                        <Button
                            href="/pricing"
                            color="white"
                            className="bg-white py-[10px] px-[36px] font-poppins text-[14px] font-semibold tracking-[1.5px] text-border transition duration-300 ease-in-out hover:bg-white hover:text-black"
                        >
                            <span>Get a Quote</span>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
