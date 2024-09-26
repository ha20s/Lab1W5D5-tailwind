import './App.css'

function App() {


  return (
    <>
<div className='w-screen bg-[#FAB701]' >

  <div className='mx-48'>
    <ul className='text-neutral-800 font-bold flex justify-around	'>
      <li>All Catogries</li>
      <li>Today Deals</li>
      <li>Electonics</li>
      <li>Clothings</li>
      <li>Computers</li>
      <li>Furnitures</li>
      <li>Mom & Baby</li>
      <li>Books & More</li>
    </ul>
  </div>
  </div>

  <div className='mx-48 py-5 flex justify-around'>

    <div className='p-5 bg-[#F9F9F9]  border-2 border-stone-500 flex items-center'>

<div className='bg-gray-300 rounded p-1 mx-5'>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>

</div>


<div className='p-10'>
  <p className='text-3xl  '>WOODEN MINIMALISTIC CHAIRS</p>
  <p>Sale Up To</p>
  <p className='text-lime-600 text-2xl'>40% Off</p>
  <button className='bg-[#FAB701] p-2 text-black font-bold my-3'>Shop Now</button>

</div>

{/* <div class="bg-repeat ..." style="background-image: url(https://www.freeiconspng.com/thumbs/chair-png/classic-chair-png-3.png)"></div> */}

<img src="https://www.freeiconspng.com/thumbs/chair-png/classic-chair-png-3.png" alt="" width={150} height={100} />
<div className='bg-gray-300 rounded p-1 mx-5'>


<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>

</div>
    

    </div>

    <div className='bg-[#F9F9F9]  border-2 border-stone-500 text-center  text-neutral-800 p-5 pb-0 ml-5'>
      <p className='font-serif' >Giordano</p>
      <p className='text-2xl'>Pack 5 Shoes For Winter</p>
      <p>Start at <font className="text-red-800">99.99Sr</font></p>
      <img className='mx-10' src='https://cdn.pixabay.com/photo/2018/01/10/23/00/hiking-shoes-3074971_1280.png' width={100} height={100}></img>
    </div>


</div>
<div className='mx-48'>

  <p className='py-2 '>Top Categories of The Month</p>
  <hr />

  <div className='flex flex-wrap justify-between py-5 gap-5'> 

    <div className='bg-[#F9F9F9] border-2 border-stone-500  p-5  px-10 flex justify-around'>
      <img src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-smart-tv-internet-png-image_13009806.png" 
      width={100} height={100} alt="" />
      <div className='mx-5'>
        <p className='text-black'>Electonics</p>
        <p>Tv Television</p>
        <p className=' underline underline-offset-1 text-black'>Air Conditioner</p>
        <p>Washing Machines</p>
        <p>Audio & Theators</p>
        <p>Office electonics</p>
      </div>
    </div>

    <div className='bg-[#F9F9F9]  border-2 border-stone-500  p-5 px-10  flex justify-around'>
      <img src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-smart-tv-internet-png-image_13009806.png" 
      width={100} height={100} alt="" />
      <div className='mx-5'>
        <p className='text-black'>Electonics</p>
        <p>Tv Television</p>
        <p className=' underline underline-offset-1 text-black'>Air Conditioner</p>
        <p>Washing Machines</p>
        <p>Audio & Theators</p>
        <p>Office electonics</p>
      </div>
    </div>
    <div className='bg-[#F9F9F9]  border-2 border-stone-500  p-5 px-10  flex justify-around'>
      <img src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-smart-tv-internet-png-image_13009806.png" 
      width={100} height={100} alt="" />
      <div className='mx-5'>
        <p className='text-black'>Electonics</p>
        <p>Tv Television</p>
        <p className=' underline underline-offset-1 text-black'>Air Conditioner</p>
        <p>Washing Machines</p>
        <p>Audio & Theators</p>
        <p>Office electonics</p>
      </div>
    </div>
    <div className='bg-[#F9F9F9]  border-2 border-stone-500  p-5 px-10  flex justify-around'>
      <img src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-smart-tv-internet-png-image_13009806.png" 
      width={100} height={100} alt="" />
      <div className='mx-5'>
        <p className='text-black'>Electonics</p>
        <p>Tv Television</p>
        <p className=' underline underline-offset-1 text-black'>Air Conditioner</p>
        <p>Washing Machines</p>
        <p>Audio & Theators</p>
        <p>Office electonics</p>
      </div>
    </div>
    <div className='bg-[#F9F9F9]  border-2 border-stone-500  p-5  px-10  flex justify-around'>
      <img src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-smart-tv-internet-png-image_13009806.png" 
      width={100} height={100} alt="" />
      <div className='mx-5'>
        <p className='text-black'>Electonics</p>
        <p>Tv Television</p>
        <p className=' underline underline-offset-1 text-black'>Air Conditioner</p>
        <p>Washing Machines</p>
        <p>Audio & Theators</p>
        <p>Office electonics</p>
      </div>
    </div>
    <div className='bg-[#F9F9F9] border-2 border-stone-500  p-5 px-10  flex justify-around'>
      <img src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-smart-tv-internet-png-image_13009806.png" 
      width={100} height={100} alt="" />
      <div className='mx-5'>
        <p className='text-black'>Electonics</p>
        <p>Tv Television</p>
        <p className=' underline underline-offset-1 text-black'>Air Conditioner</p>
        <p>Washing Machines</p>
        <p>Audio & Theators</p>
        <p>Office electonics</p>
      </div>
    </div>


<div className=' bg-[#F9F9F9] border-2 border-stone-500 w-full flex justify-around'>

  <div className='p-10'>
    <p className='text-3xl '>BOSE Bluteooth Wireliss Headphones</p>
    <p>Lorem ipsum dolor siteos nostrum eaque <br /> consectetur cupiditate voluptatem quas quisqui accusamus soluta!</p>
  </div>

  <div className='p-10 '>
  <del>$200.5</del>

  <p className='text-lime-600 text-2xl'>40% Off</p>
  <button className='bg-[#FAB701] p-2 text-black font-bold my-3'>Shop Now</button>
  </div>

  <img className='mx-10 mt-0'  src="https://i.pinimg.com/originals/e3/9f/d8/e39fd8ee088b1715fe54ae4f43a1886c.png" width={100} height={100} alt="" />

</div>

  </div>

</div>


    </>
  )
}

export default App
