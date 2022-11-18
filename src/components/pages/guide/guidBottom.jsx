import Image from 'next/future/image'
import { Button } from '@/components/common/Button'
import file from '@/images/icons/lai-files-1024x1024.png'

export default function GuideBottom({getStart}) {
  return (
    <>
      
      <div className="mt-10 rounded-2xl bg-guideBack p-[36px] text-[14px] text-white">
        <div className="text-center">
            <Image src={file} alt='' className='w-[100px] mx-auto'/>
          <h1 className="mt-5 text-[22px] font-semibold">
          Join our community of researchers who have used Landmark for over 100,000 transcripts
          </h1>
          <p className="py-5 text-[15px]">
          Request a free Demo. One of our Account Executives will be pleased to guide you through our Platform.
          </p>
          {
            getStart ? (<div className='flex items-center justify-center gap-10'>
                <Button
            href="/sign-in"
            color="primary"
            className="mt-6 bg-primary py-[10px] px-[32px] font-medium tracking-[1.5px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
          >
            <span>Get Started</span>
          </Button>
          <Button
            href="/sign-in"
            variant="outline"
            className="mt-6 bg-transparent border-white py-[10px] px-[42px] font-medium tracking-[1.5px] text-white transition  duration-300 ease-in-out white"
          >
            <span className='text-white'>login</span>
          </Button>
            </div>) : (<Button
                href="/sign-in"
                color="primary"
                className="mt-6 bg-primary py-[10px] px-[32px] font-medium tracking-[1.5px] text-white transition  duration-300 ease-in-out hover:bg-primaryHover"
              >
                <span>Request a Demo</span>
              </Button>)
          }
          
          <p className="mt-4">You can cancel your account at any time.</p>
        </div>
      </div>
    </>
  )
}
