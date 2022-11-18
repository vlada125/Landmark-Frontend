import {useState} from 'react'
import { Container } from '@/components/common/Container'
import { Accordion } from '@/components/common/Accordion'
import Drawer from 'react-drag-drawer'


export function FreQuestion() {
    const [isMenuOpened, setIsOpend] = useState(false)
    const handleClick = () => {
        // toggles the menu opened state
        setIsOpend(!isMenuOpened)
    }
    const questions = [
        {
            question: 'Is Landmark secure?',
            answer: (
                <span>
                    Yes.{' '}
                    <strong>
                        We believe security and privacy is a basic human right.
                    </strong>{' '}
                    That’s why security and privacy by Default are the guiding
                    principles for us in everything we do as a company. <br />{' '}
                    <br />
                    Our system was designed based on the best practices of other
                    leading technology firms and offers our clients the best
                    environment for their data.
                </span>
            ),
        },
        {
            question: 'What is Landmark for organizations?',
            answer: 'Landmark for organizations is a model for larger organizations. It allows your organization to partner with us and provide your researchers with greater benefits than what they could obtain as an individual client. It also eases the transcription process, since landmark gets acquainted with all required documents and specifications you may have.',
        },
        {
            question: 'How can my organization partner with Landmark?',
            answer: (
                <span>
                    It’s very simple, fill out this{' '}
                    <button
                        onClick={handleClick}
                        className="text-[14px] font-normal leading-8 text-primary mr-1"
                    >
                         form 
                    </button>
                    <Drawer
                        open={isMenuOpened}
                        onRequestClose={() =>
                            setIsOpend(
                                !isMenuOpened
                            )
                        }
                        direction="left"
                        modalElementClass='w-[90%] md:w-1/2 ml-auto'
                    >
                        <div className="h-screen bg-white">
                            <iframe
                                src='https://form.typeform.com/to/kYgtbass?typeform-medium=embed-snippet'
                                frameborder="0"
                                className='w-full h-[90%] pb-10'
                            ></iframe>
                        </div>
                    </Drawer>
                    {/*<a
                        href="https://form.typeform.com/to/kYgtbass?typeform-medium=embed-snippet"
                        className="text-primary underline"
                    >
                        form
                    </a>{' '}*/}
                    so that one of our account executives may contact you in
                    order to identify the size of your organization and how we
                    can best serve you (price, turnaround times, transcription
                    specifications, etc.).
                </span>
            ),
        },
    ]
    return (
        <>
            <Container className="py-10 ">
                <h1 className="pb-20 text-center text-[22px] font-semibold text-mainText">
                    Frequently asked questions
                </h1>
                <div className="md:px-[60px]">
                    {questions.map((question, index) => (
                        <div className="py-2" key={index}>
                            <Accordion
                                question={question.question}
                                answer={question.answer}
                                questionSize={18}
                                answerSize={16}
                                questionColChange={true}
                                radius={6}
                            ></Accordion>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}
