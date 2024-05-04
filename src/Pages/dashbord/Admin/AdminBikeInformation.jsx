import React from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useDispatch,useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { setLoading } from '../../../Silces/authSlices'
import { getAllStoreDetil } from '../../../services/opreation/storeAPI'
import { IoArrowRedo } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { DeletingStore } from '../../../services/opreation/storeAPI';


const AdminBikeInformation = () => {
    const {loading,token} = useSelector((state)=>state.auth)
    const [stores,setstores] = useState([])
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const fectchStore = async () =>{
            dispatch(setLoading(true))
            const result = await getAllStoreDetil(token);
            if(result){
                setstores(result)
            }
            dispatch(setLoading(false))
        }
        fectchStore();
    },[])

    const handleDelete =async (storeId) =>{
        dispatch(DeletingStore({storeId:storeId},token))
        const result = await getAllStoreDetil(token)
        if(result){
             setstores(result)
        }
   }

  return (
    <div className='p-8 flex flex-col justify-center items-center uppercase select-none'>
         <header className='flex text-3xl items-center font-bold opacity-50 gap-x-5'><IoArrowRedo/> View Bike Store </header>
        <Table className="my-10 border-2 shadow-lg shadow-gray-500">
            <Thead className=" border-2 border-gray-800 p-5 bg-gray-800 text-white">
            <Tr className="border-2">
                <Th className="p-4 border-2 border-gray-600">NO</Th>
                <Th className="p-4 border-2 border-gray-600">Image</Th>
                <Th className="p-4 border-2 border-gray-600">BikeName</Th>
                <Th className="p-4 border-2 border-gray-600">Price</Th>
                <Th className="p-4 border-2 border-gray-600">Description</Th>
                <Th className="p-4 border-2 border-gray-600">BrandName</Th>
                <Th className="p-4 border-2 border-gray-600 ">Actions</Th>
            </Tr>
            </Thead>
            <Tbody className="border-2">
                {
                    loading ? (<div className='loader'></div>) : stores?.length > 0 ? (
                        stores?.map((items,index) => (
                            <Tr key={index} className="border-2 font-semibold text-lg">
                                <Td className="border-2">
                                    <div className='flex justify-center items-center'>
                                     {index + 1}
                                    </div>
                                </Td>
                                <Td className="flex justify-center items-center p-2 gap-y-2">
                                     <img src={items.thambiln} width={100} />
                                </Td>
                                <Td className="border-2">
                                     <div className='flex justify-center items-center'>
                                        {items.BikeName}
                                     </div>
                                </Td>
                                <Td className="border-2  text-green-500">
                                    <div className='flex justify-center items-center'>
                                        {items.price}
                                    </div>
                                </Td>
                                <Td className="border-2">
                                    <div className='flex justify-center items-center'>
                                         {items.description.slice(0,15) + "..."}
                                    </div>
                                </Td>
                                <Td className="border-2">
                                    <div className='flex justify-center items-center'>
                                        {items.BrandName}
                                    </div>
                                </Td>
                                <Td className="border-2">
                                    <button className='flex justify-center items-center mx-auto bg-red-500 text-white p-2 rounded-md font-bold hover:bg-red-600 transition-all duration-150 ease-in-out gap-x-2 ' onClick={() => handleDelete(items._id)}>
                                        Delete <MdDeleteForever/>
                                    </button>
                                </Td>
                            </Tr>
                        ))
                    ) : (
                        <Td className="flex  justify-center items-center p-2 mx-auto"> Items Not Found </Td>
                    )
                }
            </Tbody>
        </Table>
    </div>
  )
}

export default AdminBikeInformation