import Container from "@/app/(components)/Container"


{/* <div class="[ py-1 md-py-2 xl-pb-5 xl-pt-15 ]"> */ }
{/*   <div class="[ container-de ]"> */ }
{/*     <div class="[ grid ] [ row-gap-2 gap-2 md-gap-3 ] [ md-grid-cols-2 ] [ lg-gap-5 ] [ items-center ]"> */ }
{/*       <div class="[ img-col ]"><img class="[ md-max-mx-auto md-ml-auto ] [ b-rad ] [ content-shadow-left ]" src="https://www.telcoplus.org/wp-content/uploads/2023/06/July-23-CD-website.jpg" alt="" srcset="" /></div> */ }
{/*     </div> */ }
{/*   </div> */ }
{/* </div> */ }

type PromoProps = {
  imgSrc: string
  imgAlt: string
}

const Promo = ({ imgSrc, imgAlt }: PromoProps) => {
  return (
    <div className="tw-py-4 md:tw-py-8 xl:tw-pb-20 xl:tw-pt-60">
      <Container>
        <div className="">
          <img src={imgSrc} alt={imgAlt} className="b-rad tw-mx-auto content-shadow-left" />
        </div>
      </Container>
    </div>
  )
}

export default Promo
