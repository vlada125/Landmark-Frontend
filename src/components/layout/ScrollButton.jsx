import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/common/Button'

export default function ScrollButton() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
           in place of 'smooth' */
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)
    }, [])

    return (
        <Button
            variant="solid"
            className={`fixed right-5 bottom-5 z-20 my-2 rounded-sm  bg-[#aca9a9] py-1 px-2 md:py-2  md:px-3  transition duration-300 ease-in-out hover:bg-border hover:text-mainText`}
            style={{ display: visible ? 'inline' : 'none' }}
        >
            <FontAwesomeIcon
                icon={faChevronUp}
                color="white"
                size="lg"
                onClick={scrollToTop}
            />
        </Button>
    )
}
