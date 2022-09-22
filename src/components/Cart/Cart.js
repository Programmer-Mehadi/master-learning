import React from 'react';
const Cart = (props) => {
    
    return (
        <div className='Cart rounded text-2xl shadow-md'>
            <h1 className=' bg-base-300  text-center font-bold rounded-t px-2 py-1'>Your Cart</h1>
            <div className=' text-black p-2 rounded-b flex flex-col gap-2 py-4'>
                <h1><span className='font-medium'>Selected Course:</span> </h1>
                <h1><span className='font-medium'>Tax:</span> </h1>
                <h1><span className='font-medium'>Total Cost:</span> </h1>
            </div>
            <button className='bg-yellow-400 text-black px-3 py-1 font-bold text-xl rounded-b mt-2 w-full'>Confirm Order</button>
        </div>
    );
};

export default Cart;