import React from 'react';
import Shoe_image from "../assets/shoe_image.png";
import Flipkart from "../assets/flipkart.png";
import amazon from "../assets/amazon.png";

const main = () => {
    return (

        <div className='flex gap-5   box-border justify-center align-middle mb-20 mt-20 max-w-screen-xl '>
            <div className='w-3/5'>
                <div className='text-8xl font-bold pl-14'>
                    YOUR FEET
                    DESERVE
                    THE BEST
                </div>
                <div className='mt-2 px-20 py-18'>
                    <p className='text-gray-700 font-semibold pt-8'>
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>
                </div>
                <div className='m-2 pl-16 flex  gap-x-10 p-8  -mb-2'>
                    <button className='py-1 px-4 bg-red-700 text-white font-semibold' >Shop Now</button>
                    <button className='py-1 px-4 bg-white text-gray-500 font-semibold border-2 border-gray-300' >Category</button>
                </div>
                <h5 className='text-sm pl-20 text-gray-500 p-4'>Also Available On</h5>
                <div className='flex pl-20 gap-7'>
                    <img src={Flipkart} alt="#" />
                    <img src={amazon} alt="#" />
                </div>

            </div>

            <div className=' '>
                <img src={Shoe_image} alt="#" />
            </div>
        </div>

    )
}

export default main
