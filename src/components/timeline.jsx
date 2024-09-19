import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from '../images/image.jpeg';
import "../style/home.css";

function Timeline() {
    return (
        <div>
            <div class="w-full px-4 bg-rose-50 text-gray-800 dark:bg-white dark:text-rose-100">
                <div class="tree-wrapper relative md:w-[10px] min-h-[50vh] md:mx-auto ">
                    <div
                        class="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]">
                        <div
                            class="pointer p-4 bg-rose-500 text-white aspect-square w-[70px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
                            HSC</div>
                        <div class="details md:max-w-sm p-5 bg-white dark:bg-gray-800 shadow-md rounded-md my-3">
                            <div class="course-title font-bold text-lg text-rose-600 dark:text-rose-400">B.Sc.</div>
                            <div class="institution font-semibold">Feni Govt College</div>
                            <div class="location text-sm text-gray-600 dark:text-rose-200">Feni, Bangladesh</div>
                            <div class="flex justify-between text-sm text-gray-600 dark:text-rose-200 mt-2">
                                <div class="starting-year">2015</div>
                                <div class="graduation-year">2017</div>
                            </div>
                            <div class="description text-sm mt-2 dark:text-rose-100">Its a short journey of my educational life in the Feni Gov't college and I tried to make the best use of time in this short period</div>
                            <div class="result font-semibold text-rose-600 dark:text-rose-300 mt-2">GPA 4.58</div>
                        </div>
                    </div>
                    <div
                        class="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]">
                        <div
                            class="pointer p-4 bg-rose-500 text-white aspect-square w-[70px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
                            HSC</div>
                        <div class="details md:max-w-sm p-5 bg-white dark:bg-gray-800 shadow-md rounded-md my-3">
                            <div class="course-title font-bold text-lg text-rose-600 dark:text-rose-400">B.Sc.</div>
                            <div class="institution font-semibold">Feni Govt College</div>
                            <div class="location text-sm text-gray-600 dark:text-rose-200">Feni, Bangladesh</div>
                            <div class="flex justify-between text-sm text-gray-600 dark:text-rose-200 mt-2">
                                <div class="starting-year">2015</div>
                                <div class="graduation-year">2017</div>
                            </div>
                            <div class="description text-sm mt-2 dark:text-rose-100">Its a short journey of my educational life in the Feni Gov't college and I tried to make the best use of time in this short period</div>
                            <div class="result font-semibold text-rose-600 dark:text-rose-300 mt-2">GPA 4.58</div>
                        </div>
                    </div>
                    <div
                        class="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]">
                        <div
                            class="pointer p-4 bg-rose-500 text-white aspect-square w-[70px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
                            HSC</div>
                        <div class="details md:max-w-sm p-5 bg-white dark:bg-gray-800 shadow-md rounded-md my-3">
                            <div class="course-title font-bold text-lg text-rose-600 dark:text-rose-400">B.Sc.</div>
                            <div class="institution font-semibold">Feni Govt College</div>
                            <div class="location text-sm text-gray-600 dark:text-rose-200">Feni, Bangladesh</div>
                            <div class="flex justify-between text-sm text-gray-600 dark:text-rose-200 mt-2">
                                <div class="starting-year">2015</div>
                                <div class="graduation-year">2017</div>
                            </div>
                            <div class="description text-sm mt-2 dark:text-rose-100">Its a short journey of my educational life in the Feni Gov't college and I tried to make the best use of time in this short period</div>
                            <div class="result font-semibold text-rose-600 dark:text-rose-300 mt-2">GPA 4.58</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;