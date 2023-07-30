import noImage from '../assets/no-image-placeholder-6f3882e0.webp';

const getCropedImageUrl = (url:string) => {
   if(url === null) return noImage;
   const index = url.indexOf('media/') + 'media/'.length; //index of returns upto 'm' in media. the media/ have additional length
   return url.slice(0, index) +  'crop/600/400/' + url.slice(index);
}

export default getCropedImageUrl;