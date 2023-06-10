import React, { useState } from "react";
import {ChevronLeft, ChevronRight} from "react-feather"

//carousel hero section part
const Carousel=({children:slides})=>{
   
    return (
        <div className="overflow-hidden relative ">
<div className="flex transition-transform ease-out duration-500" >
    {slides}
    </div>
    <div className="absolute inset-0 flex items-center justify-between ">
        <button  className="p-1 rounded-full shadow bg-white-80 text-white hover:bg-black">
            <ChevronLeft size={40}  />
        </button>
        <button  className="p-1 rounded-full shadow bg-white-80 text-white hover:bg-black">
            <ChevronRight  size={40} />
        </button>
    </div>
        </div>
    )
}

export default Carousel