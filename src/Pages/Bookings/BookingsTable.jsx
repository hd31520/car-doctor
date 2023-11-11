


const BookingsTable = ({ booking, handleDelete, handleConfirm }) => {
    const { img, date, email, message, name, price, service, _id, status } = booking;


    return (



        <tr className="h-40">
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded max-h-36">
                            <img className="h-full" src={img} alt="Avatar " />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="font-bold">{service}</div>
                        <div className="text-md ">$ {price}</div>
                    </div>
                </div>
            </td>
            <td className="flex flex-col gap-5">
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{date}</td>
            <td><p> {message} </p></td>
            <th>
                {
                    status === 'confirm' ? <span>confirmed</span>
                   : <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </th>
        </tr>

    );
};

export default BookingsTable;