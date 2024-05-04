import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { Booking } from "../services/opreation/BookingsAPI";
import { useNavigate } from "react-router-dom";

const BookingModels = ({btn,BikeId,masterToken}) => {
  const {
    register,
    formState:{errors},
    handleSubmit
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onsubmit = (data) =>{
      const formData = new FormData();
      formData.append("Name",data.Name)
      formData.append("PhoneNo",data.PhoneNo)
      formData.append("Liesunce",data.Liesunce)
      formData.append("Date",data.Date)
      formData.append("time",data.time)
      formData.append("BikeId",BikeId)

      dispatch(Booking(formData,masterToken,navigate))
  }

  return (
    <div className=" fixed  bg-fixed z-[9999] bg-white flex flex-col box-shadow rounded-md  left-[540px] w-[540px]">
        <div onClick={btn} className="flex justify-end cursor-pointer p-2"><RxCross2/></div>
        <form className="flex flex-col w-full p-5  gap-y-1 text-start" onSubmit={handleSubmit(onsubmit)}>
            <label className="flex flex-col w-full p-2">
                <p className="text-md font-semibold mx-1.5">Name <span className="text-red-500">*</span></p>
                <input type="text" placeholder="Enter Name" {...register("Name",{required:true })} className="w-full p-1.5 border border-black outline-none mt-1 rounded-sm" />
                {
                   errors.Name && (<span className="text-red-500">Name is Required.</span>)
                }
            </label>
            <label className="flex flex-col w-full p-2">
                <p  className="text-md font-semibold mx-1.5">PhoneNo <span className="text-red-500">*</span></p>
                <input type="text" placeholder="Enter Your PhoneNumber" {...register("PhoneNo",{required:true,maxLength:10,minLength:10})} className="w-full p-1.5 border border-black outline-none mt-1 rounded-sm" />
                {
                   errors.PhoneNo && (<span>Number is Invild.</span>)
                }
            </label>
            <div className="flex  gap-y-1 w-full gap-x-2">
                <label className="flex flex-col w-full p-2">
                    <p className="text-md font-semibold mx-1.5">License<span className="text-red-500">*</span></p>
                    <input type="text" placeholder="Enter Your License Number" {...register("Liesunce",{required:true})} className="w-full p-1.5 border border-black outline-none mt-1 rounded-sm"/>
                    {
                       errors.Liesunce && (
                          <span>
                            License Number is Invild
                          </span>
                       )
                    }
                </label>
                <label className="flex flex-col w-full p-2">
                    <p className="text-md font-semibold mx-1.5">Date<span className="text-red-500">*</span></p>
                    <input type="date" placeholder="Enter Your Laience Number" {...register("Date",{required:true})} className="w-full p-1.5 border border-black outline-none mt-1 rounded-sm"/>
                    {
                       errors.Date && (
                          <span>
                                Date is Required.
                          </span>
                       )
                    }
                </label>
            </div>
            <label className="flex flex-col w-full p-2 mb-2">
                    <p className="text-md font-semibold mx-1.5">Time<span className="text-red-500">*</span></p>
                    <input type="time" placeholder="Enter Your Laience Number" {...register("time",{required:true})} className="w-full p-1.5 border border-black outline-none mt-1 rounded-sm"/>
                    {
                       errors.time && (
                          <span>
                            Time is Requied.
                          </span>
                       )
                    }
                </label>
                <button type="submit" className=" bg-blue-800 text-white font-bold items-center rounded-md p-2 hover:bg-blue-900 transition-all duration-200 ease-in">
                    Book Now
                </button>
        </form>
    </div>
  )
}

export default BookingModels