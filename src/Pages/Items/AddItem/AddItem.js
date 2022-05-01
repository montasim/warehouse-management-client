import React from 'react';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
    const navigate = useNavigate();

    return (
        <div className='mx-10 mt-32 mb-20'>
            <div className='mb-4 p-4 flex justify-between items-center bg-orange-100 rounded-lg'>
                <button onClick={() => navigate('/inventory')} type="button" className="flex items-center px-6 py-2.5 bg-gray-800 text-white font-semibold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-600 hover:text-white hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                    <RiCheckboxMultipleBlankLine className='mr-3 text-xl' />
                    Manage Inventories
                </button>
                <div className="xl:w-96">
                    <input
                        type="search"
                        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none
      "
                        id="exampleSearch"
                        placeholder="Search here..."
                    />
                </div>
            </div>

            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
                <h2 className='my-8 text-2xl text-gray-600'>Add Item To Inventory</h2>
                <form>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                            placeholder="Product Name" name='productName' />
                    </div>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                            placeholder="Image Link" name='imageLink' />
                    </div>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                            placeholder="Seller Name" name='sellerName' />
                    </div>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                            placeholder="Description" name='description' />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6">
                            <input type="number" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Unit Price" name='unitPrice' />
                        </div>
                        <div className="form-group mb-6">
                            <input type="number" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                                aria-describedby="emailHelp124" placeholder="Quantity" name='quantity' />
                        </div>
                    </div>
                    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Add New Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;