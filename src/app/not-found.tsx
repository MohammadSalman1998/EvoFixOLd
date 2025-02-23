// src\app\not-found.tsx

import React from 'react'
import Link from "next/link"
const NotFoundPage = () => {
  return (
    <main className=" relative z-10 grid min-h-screen place-items-center bg-white px-8 py-11 shadow-three  dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
    <div className="text-center ">
      <p className=" font-semibold text-3xl text-primary animate-bounce">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-5xl">صفحة غير متوفرة</h1>
      <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">عذراً، لا يمكننا العثور على هذا الصفحة.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </div>

    <div className="absolute right-0 top-0  z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
    </div>
    <div className="absolute bottom-0 left-20 z-[-1] opacity-30 lg:opacity-100">
      <svg
        width="364"
        height="201"
        viewBox="0 0 364 201"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
          stroke="url(#paint0_linear_25:218)"
        />
        <path
          d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
          stroke="url(#paint1_linear_25:218)"
        />
        <path
          d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
          stroke="url(#paint2_linear_25:218)"
        />
        <path
          d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
          stroke="url(#paint3_linear_25:218)"
        />

        <circle
          opacity="0.8"
          cx="214.505"
          cy="60.5054"
          r="49.7205"
          transform="rotate(-13.421 214.505 60.5054)"
          stroke="url(#paint4_linear_25:218)"
        />
        <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
        <defs>
          <linearGradient
            id="paint0_linear_25:218"
            x1="184.389"
            y1="69.2405"
            x2="184.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_25:218"
            x1="156.389"
            y1="69.2405"
            x2="156.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_25:218"
            x1="125.389"
            y1="69.2405"
            x2="125.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_25:218"
            x1="93.8507"
            y1="67.2674"
            x2="89.9278"
            y2="210.214"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_25:218"
            x1="214.505"
            y1="10.2849"
            x2="212.684"
            y2="99.5816"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint5_radial_25:218"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(220 63) rotate(90) scale(43)"
          >
            <stop offset="0.145833" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.08" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <div className="absolute  bottom-0 left-0  z-[-1] opacity-50 lg:opacity-100">
    <svg xmlns="http://www.w3.org/2000/svg" width={300} height={300} fill="none" viewBox="0 0 24 24">
        <path fill="url(#paint0_linear_25:217)" opacity={0.1} d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    </div>
  </main>
  )
}

export default NotFoundPage