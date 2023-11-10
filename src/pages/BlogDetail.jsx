// import './index.css'
function BlogDetail() {
    return (
        <div className="flex text-white">
            <div className="flex-2 bg-primary-500 p-3 rounded-xl">
                <div className="flexbg-my-color rounded-lg">
                    <div className="rounded-lg">
                        <img
                            src="https://haycafe.vn/wp-content/uploads/2022/08/Hinh-nen-may-tinh-4K-toi-gian.jpg"
                            alt="Description"
                            className="w-full object-cover h-40 rounded-xl shadow-lg"
                        />
                        <div className="mt-5 mb-3">
                            <b className=" font-medium text-2xl ">Specialized T Cells Patrol Human Cornea</b><br />
                        </div>
                        <div className="mb-3" >
                            <span className="font-normal text-sm opacity-50 ">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum
                                has been the industry standard dummy text
                                ever since the 1500s.  and typesetting industry. Lorem Ipsum<br />
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum
                            </span>
                        </div>
                        <div className="flex">
                            <img
                                src="https://24hstore.vn/upload_images/images/2023/hinh-nen-may-tinh/1-1-hinh-nen-may-tinh-chill-win-10-1.jpg"
                                alt="Description"
                                className=" w-12 h-12 mt-2.5 mb-3 mr-2.5 rounded-full shadow-lg"
                            />
                            <div className="mt-2.5">
                                <div className="">
                                    <h1 className=" font-medium  text-base ">Aparna Nathan, PhD</h1>
                                </div>
                                <div className="" >
                                    <span className="font-normal text-sm opacity-50">
                                        12/31/2022
                                        /
                                        5 min read
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <span className="opacity-50  font-normal text-sm">
                                Brain development is a carefully choreographed dance. Neurons develop specialized functions and, in small hops, move through the brain to get into the correct position. The chemical signals coursing through the resulting network allow animals to think, feel, and live.
                                In neurodevelopmental disorders (NDD), however, hundreds of mutations in the DNA can interrupt this process. But scientists still do not know how each of these mutations interrupts the neurons precise differentiation or migration patterns. Studying these defects directly in embryos or newborns is too dangerous, and other animal models may deviate from human development.<br />
                                In a new <a href="/" className="underline font-bold text-text-blue decoration-text-text-blue-900 cursor-pointer">study</a>. published in Nature, <a href="/" className="underline font-bold text-text-blue decoration-text-text-blue-900  cursor-pointer">Sergiu Pașca,</a> a neuroscientist at Stanford University, and his team combined assembloid technology with CRISPR gene editing to determine the role of neurodevelopmental disease genes during typical brain development and the mayhem that ensues when they are missing.1
                            </span>
                        </div>
                        <div className="mb-3">
                            <span className="opacity-50  font-normal text-base">
                                See also <a href="/" className="underline font-bold text-text-blue decoration-text-text-blue-900  cursor-pointer">“Sergiu Pasca Builds Brains to Study Developmental Disease”</a>
                            </span>
                        </div>
                        <div className="mb-3">
                            <span className="opacity-50  font-normal text-sm">
                                “We finally have this long list of genes that cause autism,” Pașca said. “The question is, how do we understand their function, especially in the context of how complex human brain development is?”<br />
                                The answer might lie not in the skull but in a dish.<br />
                                For the past ten years, scientists have been able to turn stem cells into <a href="/" className="cursor-pointer underline">brain organoids</a> , three-dimensional clumps of cells that grow similar cell types and structures as a human brain.2 Six years ago, Pașcas team took this technology one step further and <a href="/" className="cursor-pointer underline">fused two organoids</a> , where each organoid represented a different brain region.3 This new model, called an assembloid, allowed scientists to artificially simulate interactions that occur within the brain.
                            </span>
                        </div>
                        <div className="flex gap-1 mb-4">
                            <div className="grid-cols-1 ">
                                <img
                                    src="https://i.pinimg.com/originals/81/df/3f/81df3f704ba55281ead0042466b293fa.jpg"
                                    alt="Description"
                                    className="w-72 h-60 mt-2.5 mb-2 rounded-xl shadow-lg"
                                />
                                <div className="ml-2.5">
                                    <span className="font-normal text-xs opacity-50">
                                        Interneurons (green) migrate across the <br /> assembloid.
                                    </span>
                                </div>
                            </div>
                            <div className="mt-1 ml-2">
                                <div className="mb-2.5">
                                    <span className="font-normal text-sm opacity-50 " >
                                        The new study focused on interneurons, which carry critical sensory and motor signals in<br /> the brain. During development, these neurons move from one part of the forebrain to another part<br /> where they regulate excessive firing of other neurons, a process that some suggest<br /> is disrupted in neurodevelopmental disorders.4
                                    </span>
                                </div>
                                <div className="mb-2.5" >
                                    <span className="font-normal  text-base opacity-40"> See also </span>
                                    <span className="font-normal text-base opacity-40 underline">
                                        “Innovation in a Dish”
                                    </span>
                                </div>
                                <div className="" >
                                    <span className="font-normal text-sm opacity-50">
                                        Pașcas team generated more than 1,000 organoids mimicking the parts of the forebrai <br />nwhere interneurons begin and end their journey: the subpallium and the cortex In each <br />subpallium organoid, .they used CRISPR gene editing technology to eliminate one of 425<br /> neurodevelopmental disorder genes curated by the researchers. Then they generated<br /> assembloids by fusing gene-edited subpallium organoids with cortex organoids. By labeling <br />the interneurons with a molecule that emits green light, they could track interneuron <br />generation and movement between the two halves of the assembloid.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <span className="font-normal text-base opacity-50">
                                See also “Sergiu Pasca Builds Brains to Study Developmental Disease”
                            </span>
                        </div>
                        <div className="mb-3">
                            <span className=" font-normal text-sm opacity-50">
                                <a href="/" className="underline cursor-pointer">Kristen Brennand</a> , a geneticist at Yale University who was not involved in the study, said that this study offered a more physiologically relevant human brain context compared to previous studies that used neural progenitor cells. However, she emphasized the importance of repeating the study using more samples. “Three different people can inherit the same risk gene, and one will have autism, another schizophrenia, and a third is unaffected,” she noted. “Rare NDD genes dont act in isolation.”
                                Pașca recognizes that interneuron migration may only drive a subset of cases of neurodevelopmental disorders, but he believes that finding these key disease processes can inspire new drugs to treat or repair the defects. His team has started dissecting how these genes might affect interneuron function.
                                “My lab is known for developing tools, but that was never really the goal,” Pașca said. “My goal is to really try to understand the biology of severe psychiatric disorders.”
                            </span>
                        </div>
                        <div className="grid mb-3 justify-items-end">
                            <div className="flex">
                                <div className="text-center h-8 w-8 mr-2  bg-white rounded-2xl">
                                    <i className="fa-brands fa-vimeo mt-2 text-gray-900"></i>
                                </div>
                                <div className="text-center h-8 w-8 mr-2 bg-white rounded-2xl">
                                    <i className="fa-brands fa-facebook-f mt-2 text-gray-900"></i>
                                </div>
                                <div className="text-center h-8 w-8 mr-2 bg-white  rounded-2xl">
                                    <i className="fa-brands fa-instagram mt-2 text-gray-900"></i>
                                </div>
                                <div className="text-center h-8 w-8 mr-2 bg-white  rounded-2xl">
                                    <i className="fa-brands fa-linkedin-in mt-2 text-gray-900"></i>
                                </div>
                                <div className="text-center h-8 w-8 mr-2 bg-white  rounded-2xl">
                                    <i className="fa-brands fa-youtube mt-2 text-gray-900"></i>
                                </div>
                                <div className="text-center h-8 w-8 mr-2 bg-white  rounded-2xl">
                                    <i className="fa-brands fa-twitter mt-2 text-gray-900"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <h3 className=" font-medium text-sm">Keywords</h3>
                        </div>
                        <hr className="mb-3 opacity-50"></hr>
                        <div className="mb-3">
                            <span className="font-normal text-sm opacity-50">cell biology, CRISPR, interneurons, neuroscience, organoids</span>
                        </div>
                        <div className="mb-3">
                            <h3 className=" font-medium text-sm">View the Project</h3>
                        </div>
                        <hr className="mb-3 opacity-50"></hr>
                        <div className="flex">
                            <img
                                src="https://thuthuatnhanh.com/wp-content/uploads/2023/06/hinh-nen-may-tinh-4k-don-gian-ma-dep-chill.jpg"
                                alt="Description"
                                className=" w-80 h-24 mt-2.5 mb-3 mr-2.5  rounded-lg shadow-lg"
                            />
                            <div className="grid-cols-1 mt-2">
                                <div className="">
                                    <h1 className=" font-medium  text-base ">NATURESGOLD TOKEN</h1>
                                </div>
                                <div className="" >
                                    <span className=" font-normal text-xs opacity-50">
                                        Aparna is a freelance science writer pursuing a PhD in bioinformatics and genomics at Harvard University. Her writing has alsoBlogDetaileared in The Philadelphia Inquirer, Popular Science, PBS NOVA, and more.
                                    </span>
                                </div>
                                <div className="" >
                                    <span className=" font-normal text-xs opacity-50">
                                        View project
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 ml-2.5">
                            <h3 className=" font-medium text-sm">Meet the Author</h3>
                        </div>
                        <hr className="mb-3 opacity-50"></hr>
                        <div className="flex items-center gap-2 mb-10" >
                            <img
                                src="https://24hstore.vn/upload_images/images/2023/hinh-nen-may-tinh/1-1-hinh-nen-may-tinh-chill-win-10-1.jpg"
                                alt="Description"
                                className=" w-16 h-16 rounded-full shadow-lg"
                            />
                            <div className="grid-cols-1 mt-2 ml-1.5">
                                <div className="">
                                    <h1 className=" font-medium  text-base ">Aparna Nathan, PhD</h1>
                                </div>
                                <div className="" >
                                    <span className=" font-normal text-xs opacity-50">
                                        Aparna is a freelance science writer pursuing a PhD in bioinformatics and genomics at Harvard University. Her writing has also appeared in The Philadelphia Inquirer, Popular Science, PBS NOVA, and more.
                                    </span>
                                </div>
                                <div className="" >
                                    <span className=" font-normal text-xs opacity-50">
                                        View profile
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 pl-9">
                <div className="grid-cols-1 whitespace-nowrap mb-4">
                    <p className=" font-medium">Specialized T Cells Patrol Human</p>
                    <p className="mb-1  font-medium">Cornea</p>
                    <span className=" font-thin text-sm opacity-50">USA MERA,PhD.
                        |  12/31/2022
                        |  5 min read
                    </span>
                    <hr className="decoration-my-color opacity-50 mt-2 w-60"></hr>
                </div>
                <div className="grid-cols-1 whitespace-nowrap mb-4">
                    <p className="  font-medium ">Specialized T Cells Patrol Human</p>
                    <p className="mb-1 font-medium">Cornea</p>
                    <span className=" font-thin text-sm opacity-50">USA MERA,PhD.
                        |  12/31/2022
                        |  5 min read
                    </span>
                    <hr className="decoration-my-color opacity-50 mt-2 w-60"></hr>
                </div>
                <div className="grid-cols-1 whitespace-nowrap mb-4">
                    <p className="  font-medium">Specialized T Cells Patrol Human</p>
                    <p className="mb-1 font-medium">Cornea</p>
                    <span className=" font-thin text-sm opacity-50">USA MERA,PhD.
                        |  12/31/2022
                        |  5 min read
                    </span>
                    <hr className="decoration-my-color opacity-50 mt-2 w-60"></hr>
                </div>
                <div className="flex ml-3 mb-11">
                    <div className="text-center h-8 w-8 mr-2  bg-white rounded-2xl">
                        <i className="fa-brands fa-vimeo mt-2 text-gray-900"></i>
                    </div>
                    <div className="text-center h-8 w-8 mr-2 bg-white rounded-2xl">
                        <i className="fa-brands fa-facebook-f mt-2 text-gray-900"></i>
                    </div>
                    <div className="text-center h-8 w-8 mr-2 bg-white  rounded-2xl">
                        <i className="fa-brands fa-instagram mt-2 text-gray-900"></i>
                    </div>
                    <div className="text-center h-8 w-8 mr-2 bg-white  rounded-2xl">
                        <i className="fa-brands fa-linkedin-in mt-2 text-gray-900"></i>
                    </div>
                    <div className="text-center h-8 w-8 mr-2 bg-white  rounded-2xl">
                        <i className="fa-brands fa-youtube mt-2 text-gray-900"></i>
                    </div>
                    <div className="text-center h-8 w-8 mr-2 bg-white  rounded-2xl">
                        <i className="fa-brands fa-twitter mt-2 text-gray-900"></i>
                    </div>
                </div>
                <div className=" mb-3.5">
                    <h2 className=" font-normal text-2xl underline cursor-pointer">Trending</h2>
                </div>
                <div className="  h-24 w-64 rounded-2xl mb-4 bg-my-color">
                    <div className="flex ">
                        <img
                            src="https://i.pinimg.com/originals/81/df/3f/81df3f704ba55281ead0042466b293fa.jpg"
                            alt="Description"
                            className="w-20 h-20 ml-2 my-2 rounded-xl shadow-lg"
                        />
                        <div className="grid-cols-1 ml-2">
                            <span className="text-base cursor-pointer">Specialized T Cells<br />Patrol Human<br />Cornea</span>
                        </div>
                    </div>
                </div>
                <div className="  h-24  w-64 rounded-2xl mb-4 bg-my-color">
                    <div className="flex">
                        <img
                            src="https://i.pinimg.com/originals/81/df/3f/81df3f704ba55281ead0042466b293fa.jpg"
                            alt="Description"
                            className="w-20 h-20 ml-2 my-2 rounded-xl shadow-lg"
                        />
                        <div className="grid-cols-1 ml-2">
                            <span className="text-base">Specialized T Cells<br />Patrol Human<br />Cornea</span>
                        </div>
                    </div>
                </div>
                <div className="  h-24  w-64 rounded-2xl mb-4 bg-my-color">
                    <div className="flex">
                        <img
                            src="https://i.pinimg.com/originals/81/df/3f/81df3f704ba55281ead0042466b293fa.jpg"
                            alt="Description"
                            className="w-20 h-20 ml-2 my-2 rounded-xl shadow-lg"
                        />
                        <div className="grid-cols-1 ml-2">
                            <span className="text-base">Specialized T Cells<br />Patrol Human<br />Cornea</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 pl-9">
        <div className="grid-cols-1 whitespace-nowrap mb-4">
          <p className=" font-medium">Specialized T Cells Patrol Human</p>
          <p className="mb-1  font-medium">Cornea</p>
          <span className=" font-thin text-sm opacity-50">USA MERA,PhD.
            |  12/31/2022
            |  5 min read
          </span>
          <hr className="decoration-my-color opacity-50 mt-2 w-60"></hr>
        </div>
        <div className="grid-cols-1 whitespace-nowrap mb-4">
          <p className="  font-medium ">Specialized T Cells Patrol Human</p>
          <p className="mb-1 font-medium">Cornea</p>
          <span className=" font-thin text-sm opacity-50">USA MERA,PhD.
            |  12/31/2022
            |  5 min read
          </span>
          <hr className="decoration-my-color opacity-50 mt-2 w-60"></hr>
        </div>
        <div className="grid-cols-1 whitespace-nowrap mb-4">
          <p className="  font-medium">Specialized T Cells Patrol Human</p>
          <p className="mb-1 font-medium">Cornea</p>
          <span className=" font-thin text-sm opacity-50">USA MERA,PhD.
            |  12/31/2022
            |  5 min read
          </span>
          <hr className="decoration-my-color opacity-50 mt-2 w-60"></hr>
        </div>
        <div className="flex ml-3 mb-11">
          <div className="text-center h-8 w-8 mr-2  bg-white rounded-2xl">
            <i className="fa-brands fa-vimeo mt-2 text-gray-900"></i>
          </div>
          <div className="text-center h-8 w-8 mr-2 bg-white rounded-2xl">
            <i className="fa-brands fa-facebook-f mt-2 text-gray-900"></i>
          </div>
          <div className="text-center h-8 w-8 mr-2 bg-white  rounded-2xl">
            <i className="fa-brands fa-instagram mt-2 text-gray-900"></i>
          </div>
          <div className="text-center h-8 w-8 mr-2 bg-white  rounded-2xl">
            <i className="fa-brands fa-linkedin-in mt-2 text-gray-900"></i>
          </div>
          <div className="text-center h-8 w-8 mr-2 bg-white  rounded-2xl">
            <i className="fa-brands fa-youtube mt-2 text-gray-900"></i>
          </div>
          <div className="text-center h-8 w-8 mr-2 bg-white  rounded-2xl">
            <i className="fa-brands fa-twitter mt-2 text-gray-900"></i>
          </div>
        </div>
        <div className=" mb-3.5">
          <h2 className=" font-normal text-2xl underline cursor-pointer">Trending</h2>
        </div>
        <div className="  h-24 w-64 rounded-2xl mb-4 bg-my-color">
          <div className="flex ">
            <img
              src="https://i.pinimg.com/originals/81/df/3f/81df3f704ba55281ead0042466b293fa.jpg"
              alt="Description"
              className="w-20 h-20 ml-2 my-2 rounded-xl shadow-lg"
            />
            <div className="grid-cols-1 ml-2">
              <span className="text-base cursor-pointer">Specialized T Cells<br />Patrol Human<br />Cornea</span>
            </div>

          </div>
        </div>
        <div className="  h-24  w-64 rounded-2xl mb-4 bg-my-color">
          <div className="flex">
            <img
              src="https://i.pinimg.com/originals/81/df/3f/81df3f704ba55281ead0042466b293fa.jpg"
              alt="Description"
              className="w-20 h-20 ml-2 my-2 rounded-xl shadow-lg"
            />
            <div className="grid-cols-1 ml-2">
              <span className="text-base">Specialized T Cells<br />Patrol Human<br />Cornea</span>
            </div>
          </div>
        </div>
        <div className="  h-24  w-64 rounded-2xl mb-4 bg-my-color">
          <div className="flex">
            <img
              src="https://i.pinimg.com/originals/81/df/3f/81df3f704ba55281ead0042466b293fa.jpg"
              alt="Description"
              className="w-20 h-20 ml-2 my-2 rounded-xl shadow-lg"
            />
            <div className="grid-cols-1 ml-2">
              <span className="text-base">Specialized T Cells<br />Patrol Human<br />Cornea</span>
            </div>
          </div>
            </div>
        </div>
    )
}
export default BlogDetail