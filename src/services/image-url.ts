const getCropedImageUrl = (url:string) => {
   const index = url.indexOf('media/') + 'media/'.length; //index of returns upto 'm' in media. the media/ have additional length
   return url.slice(0, index) +  'crop/600/400/' + url.slice(index);
}

export default getCropedImageUrl;