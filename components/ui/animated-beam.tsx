'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { type RefObject, forwardRef, useEffect, useId, useState } from 'react';

export const Icons = {
  typescript: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="182"
      height="178"
      fill="none"
      viewBox="0 0 182 178"
    >
      <path fill="#007ACC" d="M0 0H181.622V177.081H0z"></path>
      <path
        fill="#fff"
        d="M144.151 73.383c4.03.985 7.691 3.203 10.523 6.373a29.101 29.101 0 014.033 5.686c.052.224-7.262 5.389-11.697 8.27-.161.114-.8-.618-1.524-1.742a9.8 9.8 0 00-3.342-3.558 9.2 9.2 0 00-4.563-1.417c-5.098-.369-8.383 2.438-8.359 7.13a6.742 6.742 0 00.724 3.313c1.122 2.437 3.205 3.9 9.746 6.88 12.042 5.448 17.211 9.04 20.401 14.144a26.592 26.592 0 013.255 10.55 26.9 26.9 0 01-1.285 11.008c-1.631 3.868-4.217 7.206-7.49 9.669-3.273 2.463-7.113 3.96-11.122 4.336a49.112 49.112 0 01-12.818-.139c-6.511-1.125-12.509-4.409-17.116-9.374a31.383 31.383 0 01-4.384-6.821c.492-.384 1.009-.73 1.548-1.034.748-.448 3.579-2.16 6.248-3.786l4.847-2.986 1.013 1.553a23.128 23.128 0 006.39 6.428 15.012 15.012 0 008.302 2.002 15.134 15.134 0 008.067-2.873 7.852 7.852 0 002.171-4.73 7.985 7.985 0 00-1.225-5.091c-1.306-1.965-3.976-3.617-11.563-7.075-5.95-2.108-11.369-5.603-15.853-10.224a23.68 23.68 0 01-4.619-8.84 37.166 37.166 0 01-.294-11.284c.891-4.32 3.023-8.246 6.109-11.249 3.085-3.003 6.974-4.936 11.14-5.537a40.562 40.562 0 0112.737.418zM104.66 80.76l.052 7.234H82.797v65.413H67.342V88.01H45.426v-7.105a73.127 73.127 0 01.19-7.293c.08-.115 13.405-.17 29.56-.14l29.399.085.085 7.204z"
      ></path>
    </svg>
  ),
  nextjs: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="353"
      height="353"
      fill="none"
      viewBox="0 0 353 353"
    >
      <circle cx="176.5" cy="176.5" r="176.5" fill="#fff"></circle>
      <path
        fill="#000"
        d="M164.94.095c-.759.069-3.174.31-5.348.483-50.138 4.52-97.101 31.569-126.846 73.143C16.183 96.837 5.59 123.058 1.587 150.83.173 160.526 0 163.39 0 176.535c0 13.145.173 16.008 1.587 25.703C11.18 268.515 58.35 324.2 122.325 344.832c11.456 3.691 23.533 6.21 37.267 7.728 5.348.587 28.468.587 33.816 0 23.706-2.622 43.789-8.487 63.595-18.596 3.037-1.553 3.623-1.967 3.209-2.312-.276-.207-13.216-17.561-28.743-38.538l-28.227-38.124-35.369-52.338c-19.461-28.774-35.472-52.304-35.61-52.304-.138-.034-.276 23.219-.345 51.614-.104 49.716-.138 51.717-.759 52.89-.898 1.691-1.588 2.381-3.037 3.14-1.104.552-2.07.656-7.281.656h-5.969l-1.588-1.001a6.45 6.45 0 01-2.312-2.519l-.724-1.552.069-69.175.103-69.21 1.07-1.345c.552-.725 1.725-1.656 2.553-2.105 1.415-.69 1.967-.759 7.937-.759 7.039 0 8.212.276 10.041 2.277.518.552 19.669 29.395 42.581 64.138 22.912 34.743 54.244 82.182 69.634 105.471l27.95 42.333 1.415-.932c12.526-8.142 25.776-19.735 36.266-31.81 22.326-25.635 36.715-56.893 41.546-90.221 1.414-9.695 1.587-12.558 1.587-25.703s-.173-16.009-1.587-25.704C341.82 84.554 294.65 28.869 230.675 8.237 219.391 4.58 207.383 2.062 193.926.544c-3.313-.346-26.122-.725-28.986-.449zm72.257 106.747c1.656.828 3.002 2.415 3.485 4.071.276.897.345 20.08.276 63.31l-.104 62.033-10.938-16.767-10.973-16.768v-45.093c0-29.154.138-45.542.345-46.335.552-1.932 1.76-3.451 3.416-4.348 1.415-.724 1.932-.793 7.35-.793 5.107 0 6.004.069 7.143.69z"
      ></path>
    </svg>
  ),
  reactjs: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2194"
      height="2500"
      viewBox="175.7 78 490.6 436.9"
    >
      <g fill="#11C9FB">
        <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"></path>
        <circle cx="420.9" cy="296.5" r="45.7"></circle>
      </g>
    </svg>
  ),
  tailwindcss: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="515"
      height="320"
      fill="none"
      viewBox="0 0 515 320"
    >
      <path
        fill="url(#paint0_linear_2162_50)"
        d="M257.5 0c-68.666 0-111.584 35.556-128.75 106.667 25.75-35.557 55.791-48.89 90.125-40 19.588 5.07 33.59 19.79 49.088 36.079C293.21 129.285 322.428 160 386.25 160c68.666 0 111.584-35.556 128.75-106.667-25.75 35.557-55.791 48.89-90.125 40-19.588-5.07-33.59-19.79-49.088-36.079C350.54 30.714 321.322 0 257.5 0zM128.75 160C60.084 160 17.166 195.556 0 266.667c25.75-35.557 55.791-48.89 90.125-40 19.588 5.07 33.59 19.789 49.088 36.079C164.46 289.285 193.678 320 257.5 320c68.666 0 111.584-35.556 128.75-106.667-25.75 35.557-55.791 48.89-90.125 40-19.588-5.071-33.59-19.789-49.088-36.079C221.79 190.715 192.572 160 128.75 160z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2162_50"
          x1="-3662.52"
          x2="-2027.97"
          y1="15728.6"
          y2="33439.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FB3E7"></stop>
          <stop offset="0" stopColor="#23E7C5"></stop>
        </linearGradient>
      </defs>
    </svg>
  ),
  github: () => (
<svg 
    width="515"
    height="320" 
    viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
  ),
  supabase: () => (
    <svg 
     width="515"
    height="320" 
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" id="Supabase-Icon--Streamline-Svg-Logos" >
  <desc>
    Supabase Icon Streamline Icon: https://streamlinehq.com
  </desc>
  <path fill="url(#a)" d="M55.7223 93.4383c-2.4014 3.0241-7.2705 1.3672-7.3284-2.4942l-.846-56.4773h37.9752c6.8784 0 10.7146 7.9445 6.4375 13.3315l-36.2383 45.64Z"></path>
  <path fill="url(#b)" fillOpacity=".2" d="M55.7223 93.4383c-2.4014 3.0241-7.2705 1.3672-7.3284-2.4942l-.846-56.4773h37.9752c6.8784 0 10.7146 7.9445 6.4375 13.3315l-36.2383 45.64Z"></path>
  <path fill="#3ecf8e" d="M40.278 2.56189c2.4014-3.024436 7.2705-1.36726 7.3284 2.49417l.3707 56.47724h-37.5c-6.87853 0-10.714819-7.9446-6.43753-13.3315L40.278 2.56189Z"></path>
  <defs>
    <linearGradient id="a" x1="1011.58" x2="3189.12" y1="1286.71" y2="2199.97" gradientUnits="userSpaceOnUse">
      <stop stopColor="#249361"></stop>
      <stop offset="1" stopColor="#3ecf8e"></stop>
    </linearGradient>
    <linearGradient id="b" x1="139.561" x2="1537.44" y1="-762.054" y2="1869.38" gradientUnits="userSpaceOnUse">
      <stop></stop>
      <stop offset="1" stopOpacity="0"></stop>
    </linearGradient>
  </defs>
</svg>
  ),
  javascript: () => (
<svg 
    width="515"
    height="320" 
xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>
  ),
  firebase: () => (
<svg
    width="515"
    height="320" 
viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_firebase</title><path fill="#ffc24a" d="M5.8,24.6l.17-.237L13.99,9.149l.017-.161L10.472,2.348a.656.656,0,0,0-1.227.207Z"></path><path fill="#ffa712" d="M5.9,24.42l.128-.25L13.965,9.114,10.439,2.448a.6.6,0,0,0-1.133.206Z"></path><path fill="#f4bd62" d="M16.584,14.01l2.632-2.7L16.583,6.289a.678.678,0,0,0-1.195,0L13.981,8.971V9.2Z"></path><path fill="#ffa50e" d="M16.537,13.9l2.559-2.62L16.537,6.4a.589.589,0,0,0-1.074-.047L14.049,9.082l-.042.139Z"></path><polygon fill="#f6820c" points="5.802 24.601 5.879 24.523 6.158 24.41 16.418 14.188 16.548 13.834 13.989 8.956 5.802 24.601"></polygon><path fill="#fde068" d="M16.912,29.756,26.2,24.577,23.546,8.246A.635.635,0,0,0,22.471,7.9L5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0"></path><path fill="#fcca3f" d="M26.115,24.534,23.483,8.326a.557.557,0,0,0-.967-.353L5.9,24.569l9.131,5.1a1.912,1.912,0,0,0,1.863,0Z"></path><path fill="#eeab37" d="M16.912,29.6a1.927,1.927,0,0,1-1.878,0L5.876,24.522,5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0L26.2,24.577l-.023-.14Z"></path></g></svg>
  ),
  shopify: () => (
<svg

width="515"
    height="320"
viewBox="-18 0 292 292" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M223.773626,57.3402078 C223.572932,55.8793405 222.29409,55.0718963 221.236945,54.9832175 C220.182133,54.8945386 197.853734,53.2399781 197.853734,53.2399781 C197.853734,53.2399781 182.346604,37.8448639 180.64537,36.1412966 C178.941803,34.4377293 175.616346,34.9558004 174.325836,35.336186 C174.134476,35.3921937 170.937371,36.3793293 165.646977,38.0152206 C160.466266,23.1101737 151.325344,9.41162582 135.241802,9.41162582 C134.798408,9.41162582 134.341011,9.43029505 133.883615,9.45596525 C129.309654,3.40713457 123.643542,0.779440373 118.74987,0.779440373 C81.285392,0.779440373 63.3862673,47.6135387 57.7738299,71.414474 C43.2164974,75.9254268 32.8737437,79.1318671 31.5528956,79.5472575 C23.4271131,82.0956074 23.1704111,82.3523094 22.1039313,90.0090275 C21.2988208,95.8058236 0.0369009009,260.235071 0.0369009009,260.235071 L165.714653,291.277334 L255.485648,271.856667 C255.485648,271.856667 223.971987,58.8010751 223.773626,57.3402078 L223.773626,57.3402078 Z M156.48972,40.8482763 C152.328815,42.1364532 147.598499,43.5996542 142.471461,45.1865388 C142.476129,44.1994032 142.480796,43.2262696 142.480796,42.1644571 C142.480796,32.8998514 141.194953,25.4414939 139.132003,19.5280151 C147.418807,20.5688247 152.937899,29.9967861 156.48972,40.8482763 L156.48972,40.8482763 Z M128.852258,21.3646006 C131.155574,27.1380602 132.65378,35.4225312 132.65378,46.6030666 C132.65378,47.1748118 132.649112,47.6975503 132.644445,48.2272897 C123.52686,51.0510108 113.620499,54.1174319 103.690802,57.1931876 C109.265901,35.6768995 119.716003,25.2851391 128.852258,21.3646006 L128.852258,21.3646006 Z M117.720729,10.8281537 C119.337951,10.8281537 120.966841,11.3765623 122.525722,12.4500431 C110.519073,18.099819 97.6489725,32.3304399 92.2138928,60.7473424 C84.2701352,63.2070135 76.506069,65.6106769 69.3277499,67.834649 C75.6939575,46.1596724 90.8113669,10.8281537 117.720729,10.8281537 L117.720729,10.8281537 Z" fill="#95BF46"> </path> <path d="M221.236945,54.9832175 C220.182133,54.8945386 197.853734,53.2399781 197.853734,53.2399781 C197.853734,53.2399781 182.346604,37.8448639 180.64537,36.1412966 C180.008283,35.5065427 179.149498,35.1821649 178.251042,35.0421456 L165.723988,291.275001 L255.485648,271.856667 C255.485648,271.856667 223.971987,58.8010751 223.773626,57.3402078 C223.572932,55.8793405 222.29409,55.0718963 221.236945,54.9832175" fill="#5E8E3E"> </path> <path d="M135.241802,104.585029 L124.173282,137.510551 C124.173282,137.510551 114.474617,132.334507 102.586984,132.334507 C85.1592573,132.334507 84.2818035,143.272342 84.2818035,146.028387 C84.2818035,161.066452 123.48252,166.828244 123.48252,202.052414 C123.48252,229.764553 105.90544,247.610004 82.2048516,247.610004 C53.7646126,247.610004 39.2212821,229.90924 39.2212821,229.90924 L46.8359944,204.750118 C46.8359944,204.750118 61.7853808,217.585214 74.4011133,217.585214 C82.6435785,217.585214 85.9970391,211.095323 85.9970391,206.353338 C85.9970391,186.736644 53.8369559,185.861524 53.8369559,153.629098 C53.8369559,126.500372 73.3089633,100.246767 112.614694,100.246767 C127.760108,100.246767 135.241802,104.585029 135.241802,104.585029" fill="#FFFFFF"> </path> </g> </g></svg>
  ),
};

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>; // Container ref
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  dotted?: boolean;
  dotSpacing?: number;
}

const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = 'gray',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = '#4d40ff',
  gradientStopColor = '#4043ff',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = false,
  dotSpacing = 6,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState('');

  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : 'none';
  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
      x1: ['90%', '-10%'],
      x2: ['100%', '0%'],
      y1: ['0%', '0%'],
      y2: ['0%', '0%'],
    }
    : {
      x1: ['10%', '110%'],
      x2: ['0%', '100%'],
      y1: ['0%', '0%'],
      y2: ['0%', '0%'],
    };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('pointer-events-none absolute left-0 top-0 transform-gpu stroke-2', className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />
      <motion.path
        d={pathD}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        initial={{
          strokeWidth: pathWidth,
          strokeOpacity: 0,
        }}
        animate={{
          strokeWidth: pathWidth * 1.5, // or any scale factor you prefer
          strokeOpacity: 1,
        }}
        transition={{
          duration: 2, // adjust as needed
          delay: delay, // use the same delay as the gradient animation
        }}
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: '0%',
            x2: '0%',
            y1: '0%',
            y2: '0%',
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
// Add this line after your component definition
AnimatedBeam.displayName = 'AnimatedBeam';

// Then export the component
export { AnimatedBeam };

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
          className
        )}
      >
        {children}
      </div>
    );
  }
);
Circle.displayName = 'Circle';

// Then export the Circle component
export { Circle };
