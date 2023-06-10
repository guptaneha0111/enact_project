import React from "react";

//navbar section
const Navbar=()=>{
    return (
        <>
        <header class="text-gray-600 body-font bg-teal-300 h-15 ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span class="ml-3 w-60 cursor-pointer"><img  src="https://enacton.com/wp-content/uploads/2022/09/cropped-EnactOn-Technologies-Pvt.-Ltd_Logo.png" alt="" /></span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-gray-900 hover:text-white text-xl cursor-pointer font-bold">Shop</a>
      <a class="mr-5 text-gray-900 hover:text-white text-xl cursor-pointer font-bold">Wallet</a>
      <a class="mr-5 text-gray-900 hover:text-white text-xl cursor-pointer font-bold">More</a>
      </nav>
   <input type="text" placeholder="Search online stores" className="border mt-3 pl-5 lg:mt-0 h-10" />
  </div>
</header>
        </>
    )
}

export default Navbar