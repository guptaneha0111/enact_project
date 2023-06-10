import React from "react";
import Carousel from "./Carousel";

//carousel hero section part
const slides=[
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enPH/Images/hoc-black-pink-tcc_tcm184-1024879.png",
    "https://www.bonds.com.au/media/limesharp_stockists/stockist/image/TOWNSVILLE.JPG",
    "https://smartphotography.in/wp-content/uploads/2014/10/amazon-store.jpg",
    "https://c8.alamy.com/comp/2A3XAG9/american-multinational-computer-technology-company-dell-store-and-logo-seen-in-shenzhen-2A3XAG9.jpg"
]

const Slider=()=>{
    return (
        <>
<div className="mt-3">
    <div>
<Carousel>
    {
        slides.map((el)=>(
<img src={el} alt="imgs" className=" h-80"  />
        ))}
</Carousel>
</div>

</div>


        </>
    )
}
 
export default Slider