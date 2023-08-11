type LocationImgProps = {
  imgSrc: string,
  imgAlt: string,
  // variant: "grey" | "blue",
}

const LocationImg = ({ imgSrc, imgAlt }: LocationImgProps) => {
  return (
    <div><img className="lg-hero-shadow-right tw-max-w-[500px] tw-mx-auto tw-w-full tw-shadow-lg tw-shadow-brandingGrey-900/40" src={imgSrc} alt={imgAlt} /></div>
  )
}

export default LocationImg;
