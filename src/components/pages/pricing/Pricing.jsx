import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'
import Drawer from 'react-drag-drawer'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


export function Pricing() {
    const [isMenuOpened, setIsOpend] = useState(false)
    const handleClick = () => {
        // toggles the menu opened state
        setIsOpend(!isMenuOpened)
    }
    const rates = [
        {
            name: 'Standard – English',
            description:
                'For projects with 1-on-1 interviews or single speakers',
            price: 'Starting at $2.49',
            per: '/ min',
            text: 'Top Features:',
            button: 'Get started',
            features: [
                {
                    content: '99% accuracy or more',
                },
                {
                    content: 'Speaker Tracking',
                },
                {
                    content: 'Standard Language Capture ▸',
                    link: '/help-center/hc?topic=transcription',
                },
                {
                    content: 'Standard Turnaround Time(3-5 business days)',
                },
                {
                    content: 'Available Rush Turnaround Time**',
                },
                {
                    content: 'API Capable',
                },
                {
                    content: 'Enterprise-grade security',
                },
                {
                    content: 'HIPAA compliance',
                },
                {
                    content: 'PHRP Trained Staff',
                },
            ],
        },
        {
            name: 'Plus – English',
            button: 'Get started',
            description:
                'Group interviews with 3 or more speakers or special formatting instructions (e.g. strict-verbatim, time stamping).',
            price: 'Starting at $3.39',
            per: '/ min',
            text: 'All the features of Standard and:',
            features: [
                {
                    content: 'Time Stamps ',
                },
                {
                    content: 'Strict-Verbatim Language Capture',
                },
                {
                    content: 'Available Rush Turnaround Time**',
                },
                {
                    content: 'GuardDuty – Intelligent Threat Detection ▸',
                    link: '/help-center/hc?topic=transcription',
                },
                {
                    content: 'Available Rush Turnaround Time**',
                },
                {
                    content: 'API Capable',
                },
                {
                    content:
                        'Tailored support with a designated professional account executive',
                },
            ],
        },
        {
            name: 'Premium - All languages',
            bold: true,
            button: 'Get a custom quote',
            description:
                'Researchers that code in one language and need transcripts  in a different  one.',
            price: 'Custom Plan',
            per: '',
            text: 'All the features of Standard, Plus and:',
            features: [
                {
                    content: 'Over 25 languages available ▸',
                    link: '/help-center/hc?topic=transcription',
                },
                {
                    content: 'Native professional transcribers and translators',
                },
                {
                    content: 'Specialized in Spanish Transcriptions',
                },
                {
                    content: 'Understanding of dialects',
                },
                {
                    content: 'Translation certificate available',
                },
            ],
        },
    ]
    const conditons = [
        {
            name: 'Transcript Features',
            terms: [
                {
                    content: 'All Audio and Video File Formats',
                },
                {
                    content: 'Strict Verbatim Language Capture ▸',
                    link: '/help-center/hc?topic=transcription',
                },
                {
                    content: 'Speaker Tracking ▸',
                    link: '/help-center/hc?topic=transcription',
                },
                {
                    content: 'Time Stamps ▸',
                    link: '/help-center/hc?topic=transcription',
                },
                {
                    content: 'De-Identification of participants',
                },
                {
                    content: 'Available Rush Turnaround',
                },
                {
                    content: 'Custom Templates',
                },
            ],
        },
        {
            name: 'Security and confidentiality',
            terms: [
                {
                    content: 'SSL Data Encryption',
                },
                {
                    content: 'Two-factor Authentication available',
                },
                {
                    content: 'Fortune 500 Technology',
                },
                {
                    content: 'IRB Assistance',
                },
                {
                    content: 'Confidentiality agreements available ',
                },
            ],
        },
        {
            name: 'Support',
            terms: [
                {
                    content: 'Designated Account Executive',
                },
                {
                    content: 'Live support by email and chat',
                },
                {
                    content: 'Customer direct phone line ▸',
                    tooltip: '02 7202 0557',
                },
                {
                    content: 'Help Center ▸',
                    link: '/help-center',
                },
            ],
            questions: true,
        },
    ]
    return (
        <Container className="relative ">
            <div className="gap-10  md:flex ">
                {rates.map((rate, index) => (
                    <div
                        key={index}
                        className=" mt-6 rounded-t-lg border-b-[10px] border-primary px-[24px] py-[36px] shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:mt-0 md:w-1/3"
                    >
                        <div className="text-center md:text-left">
                            <h1 className="h-[50px] font-poppins text-[24px] font-semibold">
                                {rate.bold ? (
                                    <>
                                        <span>{rate.name.split('-')[0]}</span> –
                                        <span className=" text-primary">
                                            {rate.name.split('-')[1]}
                                        </span>
                                    </>
                                ) : (
                                    rate.name
                                )}
                            </h1>
                            <p className="py-6 text-[15px] text-border md:h-[100px]">
                                {rate.description}
                            </p>
                        </div>
                        <p className="py-6 text-center font-poppins text-[19px] font-semibold">
                            {rate.price}{' '}
                            <span className="text-grayText">{rate.per}</span>
                        </p>
                        <div className="text-center">
                            <Button
                                href="/sign-in"
                                color="primary"
                                className="bg-primary py-[10px] px-[64px] text-[16px] font-medium tracking-[0.8px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
                            >
                                <span>{rate.button}</span>
                            </Button>
                        </div>
                        <p className="mb-6 mt-5 text-[15px] font-semibold text-primary">
                            {rate.text}
                        </p>
                        {rate.features.map((feature, k) => (
                            <div
                                className="flex items-center py-2 text-[14px]"
                                key={k}
                            >
                                <FontAwesomeIcon icon={faCheck} size='lg' color='#CF2231'/>
                                <span className="ml-4 text-mainText">
                                    {feature.link ? (
                                        <a
                                            href={feature.link}
                                            target="_blank"
                                            className="underline"
                                        >
                                            {feature.content}
                                        </a>
                                    ) : (
                                        feature.content
                                    )}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <p className="mx-auto mt-10 text-center text-[14px] italic leading-6 text-border md:w-[80%]">
                All prices are in Australian dollars, GST is included.Prices
                listed above refer to “Standard English Transcription” and “Plus
                English Transcription”. Prices may be affected by specific
                features or foreign language translations. <br /> Please{' '}
                <button className="text-primary underline"  onClick={handleClick}>
                    contact us
                </button>{' '}
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
                                    src='https://thelai.typeform.com/to/ShI5jj'
                                    frameborder="0"
                                    className='w-full h-[90%] pb-10'
                                ></iframe>
                            </div>
                        </Drawer>
                for more information.
            </p>
            <div className="mt-16  gap-10 md:flex md:px-[4%]">
                {conditons.map((condition, index) => (
                    <div
                        key={index}
                        className=" mt-6 rounded-t-lg border-b-[10px] border-primary px-[24px] py-[36px] shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:mt-0 md:w-1/3"
                    >
                        <div className="text-center md:text-left">
                            <h1 className="h-[50px] text-[16px] font-semibold text-mainText">
                                {condition.name}
                            </h1>
                        </div>
                        {condition.terms.map((term, k) => (
                            <div
                                className="flex items-center justify-between border-b-[1px] border-[#d6d6d6] py-4 text-[14px]"
                                key={k}
                            >
                                <span className="ml-4 text-mainText">
                                    {term.link ? (
                                        <a
                                            href={term.link}
                                            target="_blank"
                                            className="underline"
                                        >
                                            {term.content}
                                        </a>
                                    ) : term.tooltip ? (
                                        <>
                                            <span className="group relative">
                                                <span className="pointer-events-none absolute -top-20 left-1/2 w-[300px] -translate-x-1/2 whitespace-nowrap rounded bg-white py-5 px-3 text-mainText opacity-0 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.4)] transition transition duration-300 ease-in-out before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-white  before:content-[''] hover:bg-primaryHover group-hover:opacity-100">
                                                    {term.tooltip}
                                                </span>

                                                <span className="underline">
                                                    {term.content}
                                                </span>
                                            </span>
                                        </>
                                    ) : (
                                        term.content
                                    )}
                                </span>
                               <FontAwesomeIcon icon={faCheck} color='#888' size='lg'/>
                            </div>
                        ))}
                        {condition.questions && (
                            <>
                                <p className="py-4 text-[16px] font-semibold text-mainText">
                                    Questions?
                                </p>
                                <em className="text-[14px]">
                                    <a
                                        href="/help-center/hc?topic=transcription"
                                        target="_blank"
                                        className="text-primary underline"
                                    >
                                        Click here
                                    </a>{' '}
                                    to see all Frequently Asked Questions
                                    regarding transcription.
                                </em>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </Container>
    )
}
