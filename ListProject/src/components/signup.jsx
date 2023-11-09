import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { GrImage } from 'react-icons/gr'
function SignUp() {
    return (
        <div class=" bg-grey-lighter min-h-screen flex flex-col ">
            <div class="container max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
                <h1 class="text-3xl text-center pb-8">Scientist Sign Up</h1>
                {/* Form Photo - Name, Email*/}
                <div class="bg-[#2F3338] px-6 py-8 rounded-lg shadow-md text-black w-full">
                    <div class=" flex ">
                        <div><p class="text-white pb-1 font-medium w-1">Photo</p></div>
                        
                        <div class="flex w-3/5 ">
                            <div class="flex w-2/3 pt-11 ">
                                <div class="bg-[#3F444E] rounded w-32 h-32 p-10">
                                    <div class="bg-white w-12 h-12 rounded-full p-4 "><GrImage /></div>
                                </div>
                            </div>
                            <div className="flex w-3/5 pt-10 b">
                                <div className="pt-7">

                                    <div className="p-3 flex text-sm leading-6 text-gray-600">

                                        <p className="">Drag and drop image here, or click add image</p>
                                    </div>
                                    <label
                                        htmlFor="file-upload"
                                        className="py-2 px-4 relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span >Add Image</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                </div>

                            </div>


                        </div>
                        <div class="w-3/5 ">
                            {/* Name */}
                            <p class="text-white pb-1 font-medium">Name</p>
                            <input
                                type="text"
                                class="block bg-[#3F444E] w-full p-3 rounded-lg mb-4"
                                name="Phone number"
                                placeholder="tran thanh dat" />

                            {/* Email */}
                            <p class="text-white pb-1 font-medium">Email</p>
                            <input
                                type="text"
                                class="block bg-[#3F444E]  w-full p-3 rounded-lg mb-4"
                                name="Phone number"
                                placeholder="Username@gmail.com" />

                        </div>
                    </div>
                    {/* Phone number */}
                    <p class="text-white pb-1 font-medium">Phone number</p>
                    <input
                        type="text"
                        class="block bg-[#3F444E]  w-full p-3 rounded-lg mb-4"
                        name="Phone number"
                        placeholder="Username@gmail.com" />

                    {/* Password */}
                    <p class="text-white pb-1 font-medium">Password</p>
                    <input
                        type="password"
                        class="block bg-[#3F444E]  w-full p-3 rounded-lg mb-4"
                        name="Password"
                        placeholder="***************" />

                    {/* Confirm password */}
                    <p class="text-white pb-1 font-medium">Confirm password </p>
                    <input
                        type="password"
                        class="block bg-[#3F444E]  w-full p-3 rounded-lg mb-4"
                        name="Confirm password"
                        placeholder="***************" />

                    {/* Linked-in */}
                    <p class="text-white pb-1 font-medium">Linked-in</p>
                    <input
                        type="link"
                        class="block bg-[#3F444E]  w-full p-3 rounded-lg mb-4"
                        name="Link-in"
                        placeholder="Username@gmail.com" />

                    {/* Workplace */}
                    <p class="text-white pb-1 font-medium">Workplace</p>
                    <input
                        type="text"
                        class="block bg-[#3F444E]  w-full p-3 rounded-lg mb-4"
                        name="Workplace"
                        placeholder="Username@gmail.com" />

                    {/* Position */}
                    <p class="text-white pb-1 font-medium">Position</p>
                    <input
                        type="text"
                        class="block bg-[#3F444E]  w-full p-3 rounded-lg mb-4"
                        name="Position"
                        placeholder="Username@gmail.com" />

                    <div class="flex text-white justify-center " >
                        <div className="mr-11  ">
                            <button class="bg-transparent hover:bg-indigo-600 text-white-700 font-semibold hover:text-white  border border-white color-white hover:border-transparent w-32 py-2 px-4 rounded-lg">
                                Cancel
                            </button>
                        </div>
                        <button class="bg-transparent hover:bg-indigo-600 text-white-700 font-semibold hover:text-white  border border-white color-white hover:border-transparent w-32 py-2 px-4 rounded-lg">
                            View more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp