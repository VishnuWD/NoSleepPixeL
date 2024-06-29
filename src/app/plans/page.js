import React from 'react'

function page() {
  return (
    <main className='bg-[#0F0D0D] grid items-center '>
        <h1 className='text-[9vmin] font-bold text-center md:leading-[75%] pt-[15vh]'>Maintenance and update <br /><span className='text-[5vmin] text-gray-400'>of the website</span></h1>
        <div className="flex flex-col lg:flex-row  lg:justify-center mx-[10vw] gap-14 pb-[15vh] text-zinc-800 mt-10">
    {/* first plan */}
    <div className="flex flex-col items-center lg:w-[50vmin] bg-[#0F0D0D] border-2 p-8 rounded-lg shadow-lg">
        <div>
            <h2 className="font-extrabold text-3xl text-center mb-2">Standard</h2>
            <p className="opacity-60 text-center">For the individual and small teams
            </p>
            <div className="flex flex-col items-center my-8">
                <p className="font-extrabold text-4xl">$99
                </p>
                <p className="text-sm opacity-60">/year
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            
            <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                    <path fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"></path>
                </svg>
                Domain & Hosting
            </p>

            <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                    <path fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"></path>
                </svg> Basic Support
            </p>
            <div className="flex justify-center mt-8 ">
                <button className="px-4 py-2 border-white border-4 hover:bg-white hover:text-[#0F0D0D] font-semibold transition-all rounded-xl">Get
					Started
                    </button>
            </div>
        </div>
    </div>

    {/* second */}
    <div
        className="flex flex-col items-center bg-gradient-to-br lg:w-[50vmin] from-[#0F0D0D] via-[#372d3b] to-[#0F0D0D] p-8 rounded-lg shadow-lg relative border-8 border-[#EDBFFF]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
            className="w-20 shadow-[#0F0D0D] drop-shadow-md h-20 absolute -top-11 -left-11 fill-red-400">
            <path fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                clipRule="evenodd"></path>
        </svg>
        <p className="mono text-sm absolute shadow-[#0F0D0D] shadow-md -top-4 bg-red-400 text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded">
            Recommended
        </p>
        <div>
            <div className="flex gap-4 justify-center">
                <p className="font-extrabold text-3xl mb-2">Pro

                </p>
            </div>
            <p className="opacity-60 text-center">For agencies and businesses

            </p>
            <p className="opacity-60 text-center">
            </p>
            <div className="flex gap-4 justify-center">
                <div className="flex flex-col items-center my-8">
                    <p className="font-extrabold text-4xl">$179

                    </p>
                    <p className="text-sm opacity-60">/year

                    </p>
                </div>
            </div>
        </div>
        <div  className="flex flex-col gap-1">
            <p title='Will make UPDATES in future if needed' className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                    <path fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"></path>
                </svg>
                <b>Future Update</b><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    aria-hidden="true" className="w-4 h-4 ml-1 fill-orange-300 cursor-default">
                    <path fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"></path>
                </svg>
            </p>
           
            <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                    <path fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"></path>
                </svg>
                <b>Hosting</b>
            </p>
           
            <p title='Priority Support' className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                    <path fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"></path>
                </svg>
                Premium Support<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    aria-hidden="true" className="w-4 h-4 ml-1 fill-orange-300 cursor-default">
                    <path fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"></path>
                </svg>
            </p>
            <div className="flex justify-center mt-8">
                <button className="px-4 py-2 border-[#EDBFFF] border-4 hover:bg-[#EDBFFF] hover:text-[#0F0D0D] font-semibold transition-all rounded-xl">Get
					Started
                    </button>
            </div>
        </div>
    </div>
</div>
    </main>
  )
}
// #0F0D0D
// #EDBFFF
export default page