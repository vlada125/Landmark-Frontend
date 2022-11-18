import Image from 'next/future/image'
import { Button } from '@/components/common/Button'
import bg from '@/images/backgrounds/Landmark_Team.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function HelpSide({ selected, topicSelect }) {
    const navItems = [
        {
            nav: 'Transcription',
        },
        {
            nav: 'Pricing and Payment',
        },
        {
            nav: 'Security and Confidentiality',
        },
        {
            nav: 'Your account',
        },
        {
            nav: 'Helpful Articles',
        },
    ]
    return (
        <div className="relative text-center">
            <div className="flex items-center h-[50px]">
                <FontAwesomeIcon
                    icon={selected.icon}
                    size="3x"
                    color={selected.iconCol}
                />
                <h1 className="ml-5 font-poppins text-[24px] font-semibold text-mainText">
                    {selected.breadcrumb}
                </h1>
            </div>
            <div className="mx-auto mt-8 flex w-fit flex-col md:mx-0">
                {navItems.map((nav, index) => (
                    <Button
                        variant="outline"
                        className={`my-2 rounded border-[1px] py-2 px-10  text-[14px] font-normal text-border hover:text-mainText ${
                            selected.breadcrumb === nav.nav
                                ? 'border-[2px] border-primary'
                                : 'border-[#7a7a7a]'
                        } transition duration-300  ease-in-out hover:border-[#111]`}
                        key={index}
                        onClick={() => topicSelect(index)}
                    >
                        {nav.nav}
                    </Button>
                ))}
            </div>
            <Image src={bg} className="mx-auto" alt="" />
        </div>
    )
}
