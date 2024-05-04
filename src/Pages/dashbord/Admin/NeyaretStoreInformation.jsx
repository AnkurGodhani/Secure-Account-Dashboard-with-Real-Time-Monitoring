import React from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table'
import { Information } from '../../../data/storeInfo'
import { Link } from 'react-router-dom'

const NeyaretStoreInformation = () => {
  return (
    <div className='p-8 flex flex-col justify-center items-center uppercase select-none'>
        <h1>Information About Store</h1>
        <Table className="my-10 border-2 shadow-lg shadow-gray-500">
            <Thead className=" border-2 border-gray-800 p-5 bg-gray-800 text-white">
                <Tr className="border-2">
                    <Th className="p-4 border-2 border-gray-600">No</Th>
                    <Th className="p-4 border-2 border-gray-600">City Name</Th>
                    <Th className="p-4 border-2 border-gray-600">Address</Th>
                    <Th className="p-4 border-2 border-gray-600">OpenTime</Th>
                    <Th className="p-4 border-2 border-gray-600">Close Time</Th>
                </Tr>
            </Thead>
            <Tbody className="border-2">
                {
                    Information.map((store,index)=>(
                        <Tr key={index} className="border-2 font-semibold text-lg">
                            <Td className="border-2"><div className='flex justify-center items-center p-2.5'>{index + 1 }</div></Td>
                            <Td className="border-2"><div className='flex justify-center items-center p-2.5'>{store.city}</div></Td>
                            <Td className="border-2"><Link to={store.link} className='flex justify-center items-center p-2.5 hover:underline hover:bg-yellow-400'>{store.address}</Link></Td>
                            <Td className="border-2"><div className='flex justify-center items-center p-2.5 text-green-600'>{store.opentime}</div></Td>
                            <Td className="border-2"><div className='flex justify-center items-center p-2.5 text-red-500'>{store.closeTime}</div></Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
    </div>
  )
}

export default NeyaretStoreInformation