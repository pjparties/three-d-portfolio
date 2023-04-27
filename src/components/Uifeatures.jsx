import React from 'react'
import Fcard from './Fcard'
import Footer from './Footer'
import Navbar from './Navbar'
import Pricings from './Pricings'
import Pagetitle from './Pagetitle'
import { SectionWrapper } from '../hoc'

const Uifeatures = () => {
    return (
        <div className='wrapper-body'>
            <Navbar/>

            <Pagetitle title={'We create highly interactive UI/UX Design'} subtitle={'for Modern web applications.'} subtext={'We specialize in providing top-notch UI/UX designing, website development, application development, software development, and digital advertising services. We have a team of experienced professionals who are dedicated to delivering the best results for our clients'}/>
            
            
            <Fcard/>
            
            <div class="relative max-w-screen-xl mx-6 p-4 px-4 bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
                <div class="relative">
                    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
                            <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                                Features
                            </p>
                            <h4 class="mt-2 text-2xl font-extrabold leading-8  text-white sm:text-3xl sm:leading-9">
                                Complete design of UI UX 
                            </h4>
                            <p class="mt-4 text-lg leading-6  text-gray-300">
                                We offer a complete design of the user interface and user experience of your website. We will create a unique design that will make your website stand out from the competition. Making your website more attractive and easier to use.
                            </p>
                            <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span align='left' class="ml-4 text-base font-medium leading-6  text-gray-200">
                                            Figma and Adobe XD designs
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span align='left' class="ml-4 text-base font-medium leading-6  text-gray-200">
                                            Interactive and Responsive
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span align='left' class="ml-4 text-base font-medium leading-6  text-gray-200">
                                            Complete personal support
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6  bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span align='left' class="ml-4 text-base font-medium leading-6  text-gray-200">
                                            Attractive and modern
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                            <div class="relative space-y-4">
                                <div class="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="src/assets/uiux1.jpg" alt="1" />
                                    <img class="w-40 rounded-lg shadow-lg md:w-64" width="260" src="src/assets/uiux2.jpg" alt="2" />
                                </div>
                                <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img class="w-24 rounded-lg shadow-lg md:w-40" width="170" src="src/assets/uiux3.jpg" alt="3" />
                                    <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="src/assets/uiux4.jpg" alt="4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Pricings/>

            <Footer/>

        </div>
    )
}

export default (Uifeatures)