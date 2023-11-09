import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { NavLink } from 'react-router-dom'
import BackArrow from '../assets/BackArrow'
import Mic from '../assets/Mic'
import Images from '../assets/Images'
import Icon from '../assets/Icon'
import Submit from '../assets/Submit'

export default function Messages() {
    const [active, setActive] = useState(null);
    const [user, setUser] = useState(null);

    const textBox = [
        { id: 1, name: 'Darlene Robertson', text: 'Lorem ipsum dolor sit amet, consectetur ...', avatar: 'avata-1.png', time: '19 minutes ago' },
        { id: 2, name: 'Marvin McKinney', text: 'Lorem ipsum dolor sit amet, consectetur ...', avatar: 'avata-1.png', time: '19 minutes ago' },
        { id: 3, name: 'Eleanor Pena', text: 'Lorem ipsum dolor sit amet, consectetur ...', avatar: 'avata-1.png', time: '19 minutes ago' },
        { id: 4, name: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet, consectetur ...', avatar: 'avata-1.png', time: '19 minutes ago' },
        { id: 5, name: 'Cody Fisher', text: 'Lorem ipsum dolor sit amet, consectetur ...', avatar: 'avata-1.png', time: '19 minutes ago' }
    ]

    const handleClick = (item) => {
        setActive(item.id);
        setUser(item);
    }

    return (
        <div className='grid grid-cols-6 w-full max-h-screen overflow-hidden'>
            <div className='col-span-2 w-full h-screen px-7 border-r-[1px] border-zinc-600'>
                <div className='flex items-center gap-5 align-baseline pt-6'>
                    <NavLink to="/scientist">
                        <BackArrow />
                    </NavLink>
                    <div className='text-2xl font-medium'>Messages</div>
                </div>
                <div className='mt-6 mb-10 bg-[#3F444E] flex items-center rounded-lg pl-3'>
                    <FiSearch className="text-white text-2xl block float-left cursor-pointed" />
                    <input
                        type={"search"}
                        placeholder="Search"
                        className="text-base w-full h-full rounded-lg py-3 px-2 bg-[#3F444E] text-white focus:outline-none ml-2"
                    />
                </div>
                <div>
                    {textBox.map((item, index) => (
                        <div onClick={() => handleClick(item)} key={index} className={`w-full h-fit cursor-pointer rounded-lg hover:bg-[#252F3C] p-4 mb-2 ${active === item.id ? 'bg-[#252F3C]' : ''}`}>
                            <div className='flex gap-3 items-center'>
                                <div className='w-14 h-12 rounded-full overflow-hidden'>
                                    <img src='https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-fb-mac-dinh.jpg' alt='' className='w-full h-full' />
                                </div>
                                <div className='w-full'>
                                    <div className='flex justify-between items-center mb-1'>
                                        <h4 className='text-base font-medium'>{item.name}</h4>
                                        <span className='text-xs opacity-40'>{item.time}</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className={`text-xs font-normal ${index === 0 || index === 1 ? 'text-blue-600' : ''}`}>{item.text}</p>
                                        <div className={`w-4 h-4 bg-[#4476D9] rounded-full flex items-center justify-center ${index === 0 || index === 1 ? 'block' : 'hidden'}`}>
                                            <p className='text-xs font-normal '>2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full max-h-screen col-span-4'>
                {active && (
                    <>
                        <div className='w-full py-3 px-7 border-b-[1px] border-zinc-600'>
                            <div className='w-56 flex items-center gap-4'>
                                <div className='w-14 h-11 rounded-full overflow-hidden'>
                                    <img src='https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-fb-mac-dinh.jpg' alt='' className='w-full h-full' />
                                </div>
                                <div className='w-full'>
                                    <div className='mb-1'>
                                        <h4 className='text-base font-medium'>{user.name}</h4>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className={`w-2 h-2 bg-green-500 rounded-full flex items-center justify-center`}></div>
                                        <p className={`text-xs font-normal`}>Online</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-row-6 max-w-full h-full px-7'>
                            <div className='row-span-5 py-5'>
                                <div className='flex justify-end mb-10'>
                                    <div className='col-span-1 w-1/2 h-fit bg-[#3F444E] rounded-s-xl rounded-t-xl'>
                                        <div className='px-4 py-3'>
                                            Hi Marvin is there any update on the filing?
                                            I want to get this moving fast.
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-1 flex gap-5'>
                                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                                        <img src='https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-fb-mac-dinh.jpg' alt='' className='w-full h-full' />
                                    </div>
                                    <div>
                                        <div className='w-fit h-fit flex justify-start bg-[#3F444E] rounded-e-xl rounded-t-xl mb-2'>
                                            <div className='px-4 py-3 text-left'>
                                                Hi Jase. I will share the estimate to day
                                            </div>
                                        </div>
                                        <div className='w-fit h-fit flex justify-start bg-[#3F444E] rounded-e-xl rounded-t-xl'>
                                            <div className='px-4 py-3 text-left'>
                                                We need to display this while unwrapping the box
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row-span-1 mb-5'>
                                <div className='flex items-center gap-2 bg-[#3F444E] p-4 rounded-xl'>
                                    <Mic />
                                    <input className='w-full bg-transparent outline-none' type='text' placeholder='Type a message' />
                                    <div className='flex items-center gap-3'>
                                        <Images />
                                        <Icon />
                                        <Submit />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
