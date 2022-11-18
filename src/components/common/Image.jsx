import Image from "next/future/image"
import { getStrapiMedia } from '@/lib/media';


const BlogImage = ({ image, style }) => {
  const { url, alternativeText, width, height } = image.data.attributes

   const loader = () => {
     return getStrapiMedia(image)
   }
   
  


  return (
    <Image
    loader={loader}
      layout="responsive"
      width={width || "100%"}
      className='w-full'
      height={height || "100%"}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  )
}

export default BlogImage
