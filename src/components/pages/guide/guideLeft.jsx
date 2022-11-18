import Image from 'next/future/image'
import { faFileLines, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gifi from '@/images/gifs/ezgif-3-1131c8cb5ed0.gif'
import { Button } from '@/components/common/Button'

export default function GuideLeft({ description }) {
    function FreeSignComponent(){
        return (
            <div className={`${description ? 'mt-10' : 'mb-10'} rounded-2xl bg-guideBack p-[36px] text-[14px] text-white`}>
            <div className="text-center">
              <Button
                href="/sign-in"
                color="primary"
                className="bg-primary py-[10px] px-[32px] font-medium tracking-[1.5px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
              >
                <span>Sign Up Free</span>
              </Button>
              <p className="mt-4">
                Already have an account?{' '}
                <a href="/new_portal_login" className="font-semibold underline">
                  Log in
                </a>
              </p>
            </div>
          </div>
        )
    }
  return (
    <>
      {description && (
        <div className="rounded-2xl bg-guideBack p-[36px] text-[14px] text-white">
          <p>{description}</p>
        </div>
      )}
      {!description && <FreeSignComponent/>}
      <div className={`${description && 'mt-10'} rounded-2xl bg-guideBack p-[36px] text-[14px] text-white`}>
        <Image src={gifi} alt="" className="rounded-lg" />
        <p className="ml-auto mt-4 text-right text-[13px]">
          <em>*Landmark’s Platform View</em>
        </p>
        <div className="text-center">
          <h1 className="mt-5 text-[22px] font-semibold">
            Join our community of researchers who have used Landmark for over
            100,000 transcripts
          </h1>
          <p className="py-5 text-[15px]">
            Request a free Demo. One of our Account Executives will be pleased
            to guide you through our Platform.
          </p>
          <Button
            href="/sign-in"
            color="primary"
            className="mt-6 bg-primary py-[10px] px-[32px] font-medium tracking-[1.5px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
          >
            <span>Request a Demo</span>
          </Button>
          <p className="mt-4">You can cancel your account at any time.</p>
        </div>
      </div>
      {description && <FreeSignComponent />}
     
      <div className="mt-10 text-[14px] text-grayText">
        <a href="/hc-transcription" className="flex items-center leading-10">
          <FontAwesomeIcon icon={faFileLines} size="md" color="#7a7a7a" />
          <p className="ml-4 tracking-[1px]">FAQ</p>
        </a>
        <a href="/guide/ticket" className="flex items-center leading-10">
          <FontAwesomeIcon icon={faFileLines} size="md" color="#7a7a7a" />
          <p className="ml-4 tracking-[1px]">Request transcript- Guide</p>
        </a>
        <a href="/help-center" className="flex items-center leading-10">
          <FontAwesomeIcon icon={faHeadset} size="md" color="#7a7a7a" />
          <p className="ml-4 tracking-[1px]">Go back to Help Center</p>
        </a>
      </div>
    </>
  )
}
