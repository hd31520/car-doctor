import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const CheckOut = () => {
    const dates = useLoaderData();
    const {img, _id, title, price } = dates;
    const { user } = useContext(AuthContext);
  

    const handleCheckout = event => {

        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
       
        const date =form.date.value;
        const email = form.email.value;
        const message = form.message.value;
         const order ={
            service: title,
            img,
            name,
            date,
            email,
            message,
            price: price,
            service_id: _id
         } 
     
         fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
            
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
         })
    }


    return (
        <div>

            

            <div className="relative ">
                <img className="w-full" src="https://i.postimg.cc/MKrxmm20/checkout.png" alt="" />
                <div className="flex items-center left-0 top-0 absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <h1 className="text-xl lg:text-3xl pl-10 font-bold text-white">Check Out</h1>
                </div>
                <div className="flex items-end justify-center left-0 top-0 absolute w-full h-full ">
                    <h1 className="text-xl lg:text-3xl px-2 lg:px-5 py-1 lg:py-2 font-bold bg-[#FF3811] text-white">Home/Checkout</h1>
                </div>

            </div>

            <div>
                <form onSubmit={handleCheckout} className="card-body grid gap-5 grid-cols-1 p-24 lg:grid-cols-2">
                    <div className="form-control">
                        <label className="label">

                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="Full Name " name='name' className="input input-bordered" required />
                    </div>



                    <div className="form-control">
                        <label className="label">

                        </label>
                        <input type="text" placeholder="Price" defaultValue={price} name="price" className="input input-bordered" required readOnly/>
                    </div>


                    <div className="form-control">
                        <label className="label">

                        </label>
                        <input type="date" placeholder="" name="date" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">

                        </label>
                        <input type="text" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required readOnly />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <textarea className="border-2 rounded-lg p-8" placeholder="Your Message" name="message" id="" cols="30" rows="3"></textarea>
                    </div>





                    <div className="form-control mt-6 lg:col-span-2">
                        <button className="btn  bg-[#FF3811]">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;