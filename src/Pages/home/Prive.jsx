import React from 'react'
import Footer from './Footer'

const Prive = () => {
  return (
    <div className='-mt-1'>
        <div className='About h-[200px] flex flex-col justify-center items-center font-bold gap-y-2 mb-10'>
            <h1 className='text-3xl text-white font-mono'>Privacy Policy</h1>
            <p className='font-mono'>Home {"> "}<span className='text-yellow-400'>Privacy Policy</span></p>
        </div>
        <div className='flex flex-col justify-center items-center p-10 gap-y-8'>
            <h1 className='text-4xl font-bold uppercase'>Privacy Policy</h1>
            <p className='items-center text-center w-[90%] text-xl opacity-60 font-medium'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
            </p>
        </div>
        <Footer/>
    </div>
  )
}

export default Prive