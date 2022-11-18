import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/future/image'
import arrowRight from '@/images/icons/caret-forward-outline.svg'
import arrowDown from '@/images/icons/caret-down-outline.svg'

export function Accordion(props) {
    const [isShowed, setIsShowed] = useState(props.show ? true : false)
    const divHeight = useRef()
    const [height, setHeight] = useState('0px')

    const showAccordion = () => {
        setIsShowed((isShowed) => !isShowed)
        setHeight(isShowed ? '0px' : `${divHeight.current.scrollHeight + 24}px`)
    }

    const {
        question,
        answer,
        showIcon,
        Icon,
        questionSize,
        answerSize,
        questionColChange,
        radius,
    } = props

    return (
        <>
            <div
                className={`light-red flex h-10 h-fit w-full cursor-pointer ${
                    radius && `rounded-md`
                } flex-row items-center justify-between border-[1px] border-[#ddd] py-[12px]   ${
                    isShowed && 'border-b-0'
                }`}
                onClick={() => showAccordion()}
            >
                <p
                    className={` w-[90%] px-[16px] ${
                        questionSize
                            ? `text-[${questionSize}px]`
                            : 'text-[16px]'
                    } font-medium text-mainText transition-all duration-100 ease-in ${
                        questionColChange &&
                        (!isShowed ? 'text-mainText' : 'text-primary')
                    } transition  duration-300 ease-in-out`}
                >
                    {question}
                </p>
                <div className={'relative mr-2 h-2 w-[10%]'}>
                    <Image
                        src={isShowed ? arrowDown : arrowRight}
                        alt="arrow"
                        className={
                            'ml-auto w-[12px] transition-transform duration-300' +
                            (isShowed ? 'active' : '')
                        }
                    />
                </div>
            </div>
            <div
                ref={divHeight}
                style={{ maxHeight: `${height}` }}
                className={`transition-max-height } transform ${
                    !isShowed && 'overflow-hidden'
                }
           border-[1px] border-t-0 border-b-[#ddd] duration-500 ease-in-out ${
               !isShowed && 'border-b-0'
           }`}
            >
                <p
                    className={`m-[24px] mt-0 pt-[24px] text-mainText duration-500 ease-in-out ${
                        !isShowed ? 'opacity-0' : 'opacity-1'
                    } ${answerSize ? `text-[${answerSize}px]` : 'text-[15px]'}`}
                >
                    {answer}
                </p>
            </div>
        </>
    )
}
