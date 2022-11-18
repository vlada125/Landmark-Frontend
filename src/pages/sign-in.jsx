import Head from 'next/head'
import Image from 'next/future/image'
import { Container } from '@/components/common/Container'
import  logo  from '@/images/logos/landmark-logo.png'
import team from '@/images/backgrounds/Landmark_Team.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
    const gettings = [
        'API Capability','Designated Account Executive​','Data encrypted and stored in Australia','SSL Data Encryption​','Fortune 500 Technology​','Live support by email and chat​'
    ]
    return (
        <>
            <Head>
                <title>Try our service for free | Landmark</title>
            </Head>
           <div className={`bg-[url(../images/backgrounds/fondo-.png)] bg-no-repeat bg-left-bottom bg-[length:82%] pb-20`}>
                <Image src={logo} className='mx-auto w-[180px] py-10' alt=''/>
                <Container>
                    <div className='shadow-[0px_0px_10px_0px_rgb(0,0,0,0.14)] md:gap-10 rounded-3xl p-6 md:p-16 md:flex bg-white h-[600px] sm:h-[600px]'>
                        <div className='md:w-1/2 hidden md:block'>
                            <Image src={team} alt='' className='w-[200px]'/>
                            <h1 className="py-6 text-[22px] font-medium">
                                With Landmark you’ll get:
                            </h1>
                            {gettings.map((getting, index) => (
                                <div className='flex items-center' key={index}>
                                    <FontAwesomeIcon icon={faCheck} className='text-primary'/>
                                    <p className='text-[15px] leading-10 ml-3'>{getting}</p>
                                </div>
                            ))}
                            <div className='p-4'>
                               <a href="/"> <FontAwesomeIcon icon={faArrowLeft} className='text-grayText font-semibold'/>
                                <span className='text-grayText font-semibold text-[15px] ml-1'>Return to Homepage</span></a>
                            </div>
                        </div>
                        <div className='md:w-1/2 h-full'>
                            <iframe src="https://thelai.typeform.com/to/LJpOiE?typeform-embed=embed-widget&typeform-source=landmarktranscription.com.au&typeform-medium=embed-sdk&typeform-embed-id=amf47" frameBorder="0" className='w-full h-[90%] pb-10'></iframe>
                            <hr />
                            <p className='py-6 text-[14px] text-grayText'>Already have an account? <a href="/new_portal_login" className='text-primary'>Log in</a></p>
                        </div>
                    </div>
                </Container>
           </div>
        </>
    )
}
