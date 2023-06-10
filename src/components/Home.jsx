import React from "react";
import {TbShirt} from "react-icons/tb"
import {GiSonicShoes} from "react-icons/gi"
import {BsHandbag} from "react-icons/bs"
import {ImSpoonKnife} from "react-icons/im"
import {TbCategory} from "react-icons/tb"

const Home=()=>{
    return(

<>

{/* 9 cards section */}

        <div className="grid grid-cols-3 lg:grid-cols-9 gap-4 mt-4">
<div className="bg-green-500 rounded-md h-28 w-22 cursor-pointer ">
    <p className="lg:px-14 px-8 pt-6 text-white text-2xl "><TbShirt/></p>
   <h1 className="lg:px-8 px-2 pt-2 text-white text-2xl ">Travel</h1> 
</div>

<div className="bg-indigo-500 rounded-md h-28 w-22 cursor-pointer ">
    <p className="lg:px-14 px-8 pt-6 text-white text-3xl "><GiSonicShoes/></p>
   <h1 className="lg:px-6 px-2 pt-1 text-white lg:text-2xl text-xl ">Alcohol</h1> 
</div>

<div className="bg-lime-500 rounded-md h-28 w-22 cursor-pointer ">
    <p className="lg:px-14 px-8 pt-6 text-white text-2xl "><BsHandbag/></p>
   <h1 className="lg:px-6 px-2 pt-2 text-white lg:text-2xl text-xl ">Markets</h1> 
</div>

<div className="bg-fuchsia-500 rounded-md h-28 w-22 cursor-pointer ">
    <p className="lg:px-14 px-8 pt-6 text-white text-2xl "><ImSpoonKnife/></p>
   <h1 className="lg:px-6 px-2 pt-2 text-white lg:text-2xl text-xl ">Fashion</h1> 
</div>

<div className="bg-emerald-500 rounded-md h-28 w-22 cursor-pointer ">
    <p className="lg:px-14 px-8 pt-6 text-white text-2xl "><TbShirt/></p>
   <h1 className=" px-2 pt-2 text-white lg:text-2xl text-base ">Technology</h1> 
</div>

<div className="bg-pink-500 rounded-md h-28 w-22 cursor-pointer ">
    <p className="lg:px-14 px-8 pt-6 text-white text-2xl "><GiSonicShoes/></p>
   <h1 className="lg:px-10 px-4 pt-2 text-white text-2xl ">Food</h1> 
</div>

<div className="bg-teal-500 rounded-md h-28 w-22 cursor-pointer ">
    <p className="lg:px-14 px-8 pt-6 text-white text-2xl "><BsHandbag/></p>
   <h1 className="lg:px-8 px-2 pt-2 text-white text-2xl ">Fitness</h1> 
</div>

<div className="bg-rose-500 rounded-md h-28 w-22 cursor-pointer ">
    <p className="lg:px-14 px-8 pt-6 text-white text-2xl "><ImSpoonKnife/></p>
   <h1 className="lg:px-10 px-4 pt-2 text-white text-2xl ">Baby</h1> 
</div>

<div className="bg-cyan-500 rounded-md h-28 w-22 cursor-pointer ">
    <p className="lg:px-14 px-8 pt-6 text-white text-2xl "><TbCategory/></p>
   <h1 className="lg:px-4 px-2 pt-2 text-white lg:text-2xl text-base ">Categories</h1> 
</div>
 </div>



{/* 4 cards section */}

 <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-4 justify-items-center">

 <div className="">
   <div className="rounded-lg overflow-hidden shadow-lg max-w-sm">
      <img src="https://www.bonds.com.au/media/limesharp_stockists/stockist/image/TOWNSVILLE.JPG"
       alt="first" className="w-full" />
       <div className="px-6 py-4">
<div className="font-bold text-xl mb-2">
   Flipkart
</div>
<p className="text=gray-600">Up to 8% cashback</p>
<div className="grid grid-flow-col gap-5 pb-2 mt-2">
   <span className="bg-gray-200 rounded-full px-4 py-4 font-base mb-2 w-24 text-sm">upto 8%</span>
<span className="bg-gray-200 rounded-full px-4 py-1 font-base mb-2 text-sm">was 4%</span>
   <span className="bg-gray-200 rounded-full px-4 py-4 font-base mb-2 text-sm">cashback</span>
</div>
       </div>
   </div>
 </div>


 <div className="">
   <div className="rounded-lg overflow-hidden shadow-lg max-w-sm">
      <img src="https://www.bonds.com.au/media/limesharp_stockists/stockist/image/TOWNSVILLE.JPG"
       alt="first" className="w-full" />
       <div className="px-6 py-4">
<div className="font-bold text-xl mb-2">
   Bonds
</div>
<p className="text=gray-600">Up to 6% cashback</p>
<div className="grid grid-flow-col gap-5 pb-2 mt-2">
   <span className="bg-gray-200 rounded-full px-4 py-4 font-base mb-2 w-24 text-sm">upto 6%</span>
<span className="bg-gray-200 rounded-full px-4 py-1 font-base mb-2 text-sm">was 3%</span>
   <span className="bg-gray-200 rounded-full px-4 py-4 font-base mb-2 text-sm">cashback</span>
</div>
       </div>
   </div>
 </div>


 <div className="">
   <div className="rounded-lg overflow-hidden shadow-lg max-w-sm">
      <img src="https://www.bonds.com.au/media/limesharp_stockists/stockist/image/TOWNSVILLE.JPG"
       alt="first" className="w-full" />
       <div className="px-6 py-4">
<div className="font-bold text-xl mb-2">
   Amazon
</div>
<p className="text=gray-600">Up to 10% cashback</p>
<div className="grid grid-flow-col gap-5 pb-2 mt-2">
   <span className="bg-gray-200 rounded-full px-4 py-4 font-base mb-2 w-24 text-sm">upto 10%</span>
<span className="bg-gray-200 rounded-full px-4 py-1 font-base mb-2 text-sm">was 5%</span>
   <span className="bg-gray-200 rounded-full px-4 py-4 font-base mb-2 text-sm">cashback</span>
</div>
       </div>
   </div>
 </div>


 <div className="">
   <div className="rounded-lg overflow-hidden shadow-lg max-w-sm">
      <img src="https://www.bonds.com.au/media/limesharp_stockists/stockist/image/TOWNSVILLE.JPG"
       alt="first" className="w-full" />
       <div className="px-6 py-4">
<div className="font-bold text-xl mb-2">
   Dell
</div>
<p className="text=gray-600">Up to 14% cashback</p>
<div className="grid grid-flow-col gap-5 pb-2 mt-2">
   <span className="bg-gray-200 rounded-full px-4 py-4 font-base mb-2 w-24 text-sm">upto 14%</span>
<span className="bg-gray-200 rounded-full px-4 py-1 font-base mb-2 text-sm">was 7%</span>
   <span className="bg-gray-200 rounded-full px-4 py-4 font-base mb-2 text-sm">cashback</span>
</div>
       </div>
   </div>
 </div>
</div>


{/* rates section part */}

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Rates</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">On kid shoes, on women shoes, on men shoes, on clothes</p>
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto  ">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-300 rounded-tl rounded-bl">Term</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-300">Rates</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-300">Tips</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-300">Price</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-300 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">Kid</td>
            <td class="px-4 py-3">before $500</td>
            <td class="px-4 py-3">30% save</td>
            <td class="px-4 py-3 text-lg text-gray-900">$350</td>
            <td class="w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Women</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">before $800</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">10% save</td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$720</td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Men</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">before $1000</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">20% save</td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$800</td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Cloth</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">before $600</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">10% save</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$540</td>
            <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
     
      <button class="flex ml-auto text-gray-800 bg-teal-300 border-0 py-2 px-6 focus:outline-none font-bold hover:bg-indigo-600 hover:text-white rounded">Know More</button>
    </div>
  </div>
</section>


{/* 6 div section */}

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2 lg:px-16 mb-5 px-2">

<div className="flex rounded-full bg-white shadow-lg h-20 w-80 ">
<div className="bg-blue-600 rounded-lg">
<h1 className="px-4 pt-3 text-white">Up to 20% cashback</h1>
<p className="px-10 text-white">End in 3 days</p>
</div>
<div>
   <button className="px-5 bg-blue-600 text-white rounded-full mt-3 ml-4 w-26 h-10">Shop Offer</button>
   <p className="pl-14">More</p>
</div>
</div>

<div className="flex rounded-full bg-white shadow-lg h-20 w-80 ">
<div className="bg-blue-600 rounded-lg">
<h1 className="px-4 pt-3 text-white">Up to 20% cashback</h1>
<p className="px-10 text-white">End in 3 days</p>
</div>
<div>
   <button className="px-5 bg-blue-600 text-white rounded-full mt-3 ml-4 w-26 h-10">Shop Offer</button>
   <p className="pl-14">More</p>
</div>
</div>

<div className="flex rounded-full bg-white shadow-lg h-20 w-80 ">
<div className="bg-blue-600 rounded-lg">
<h1 className="px-4 pt-3 text-white">Up to 20% cashback</h1>
<p className="px-10 text-white">End in 3 days</p>
</div>
<div>
   <button className="px-5 bg-blue-600 text-white rounded-full mt-3 ml-4 w-26 h-10">Shop Offer</button>
   <p className="pl-14">More</p>
</div>
</div>

<div className="flex rounded-full bg-white shadow-lg h-20 w-80 ">
<div className="bg-blue-600 rounded-lg">
<h1 className="px-4 pt-3 text-white">Up to 20% cashback</h1>
<p className="px-10 text-white">End in 3 days</p>
</div>
<div>
   <button className="px-5 bg-blue-600 text-white rounded-full mt-3 ml-4 w-26 h-10">Shop Offer</button>
   <p className="pl-14">More</p>
</div>
</div>

<div className="flex rounded-full bg-white shadow-lg h-20 w-80 ">
<div className="bg-blue-600 rounded-lg">
<h1 className="px-4 pt-3 text-white">Up to 20% cashback</h1>
<p className="px-10 text-white">End in 3 days</p>
</div>
<div>
   <button className="px-5 bg-blue-600 text-white rounded-full mt-3 ml-4 w-26 h-10">Shop Offer</button>
   <p className="pl-14">More</p>
</div>
</div>

<div className="flex rounded-full bg-white shadow-lg h-20 w-80 ">
<div className="bg-blue-600 rounded-lg">
<h1 className="px-4 pt-3 text-white">Up to 20% cashback</h1>
<p className="px-10 text-white">End in 3 days</p>
</div>
<div>
   <button className="px-5 bg-blue-600 text-white rounded-full mt-3 ml-4 w-26 h-10">Shop Offer</button>
   <p className="pl-14">More</p>
</div>
</div>


{/* bottom single div */}

<div className="flex rounded-full bg-white shadow-lg h-20 w-80 px-4 py-6 text-center  lg:ml-96 mt-10 ml-0">
   <p> Promo code is required. Excludes mobile phone.</p>
  </div>
</div>
 </>
    )
}
export default Home
