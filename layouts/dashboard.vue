<template>
    <div>
        <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
        <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
            <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
            <div class="fixed inset-0 bg-gray-900/80" aria-hidden="true"></div>

            <div class="fixed inset-0 flex">
                <!--
          Off-canvas menu, show/hide based on off-canvas menu state.
  
          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->
                <div class="relative mr-16 flex w-full max-w-xs flex-1">
                    <!--
            Close button, show/hide based on off-canvas menu state.
  
            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
                    <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button @click="isSidebarOpen = false" type="button" class="-m-2.5 p-2.5">
                            <span class="sr-only">Close sidebar</span>
                            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <!-- Sidebar component, swap this element with another sidebar if you like -->
                    <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-[#2A1634] px-6 pb-4 ring-1 ring-white/10">
                        <div class="flex h-16 shrink-0 items-center justify-center">
                            <img class="h-8 w-auto" src="@/assets/img/logo.png" alt="Your Company">
                        </div>
                        <nav class="flex flex-1 flex-col gap-y-8">
                            <div class="text-white flex gap-y-3 justify-center items-center flex-col">
                                <img class="h-56 w-48" src="@/assets/img/avatar.png" alt="Your Company">
                                <div>
                                    <p>Linda Blair</p>
                                <p class="text-[#8C8C8C]">lindablair@gmail.com</p>
                                </div>
                            </div>
                            <ul role="list" class="flex justify-center items-center flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" class="-mx-2 space-y-2">
                                        <li>
                                            <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                                            <a href="#"
                                                class="group flex gap-x-3 rounded-md p-2 text-base text-[#BC8FBF] font-semibold leading-6">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7M11.9999 21.5L14.025 21.095C14.2015 21.0597 14.2898 21.042 14.3721 21.0097C14.4452 20.9811 14.5147 20.9439 14.579 20.899C14.6516 20.8484 14.7152 20.7848 14.8426 20.6574L21.5 14C22.0524 13.4477 22.0523 12.5523 21.5 12C20.9477 11.4477 20.0523 11.4477 19.5 12L12.8425 18.6575C12.7152 18.7848 12.6516 18.8484 12.601 18.921C12.5561 18.9853 12.5189 19.0548 12.4902 19.1278C12.458 19.2102 12.4403 19.2984 12.405 19.475L11.9999 21.5ZM13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                                                        stroke="#BC8FBF" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
        
                                                Team management
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="group flex gap-x-3 rounded-md p-2 text-base font-semibold leading-6 text-[#E0E2E7] hover:bg-gray-800 hover:text-white">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16 7.99909L2 21.9991M18 14.9991H9M6.6 18.9991H13.3373C13.5818 18.9991 13.7041 18.9991 13.8192 18.9715C13.9213 18.947 14.0188 18.9066 14.1083 18.8517C14.2092 18.7899 14.2957 18.7034 14.4686 18.5305L19.5 13.4991C19.739 13.2601 19.8584 13.1407 19.9546 13.0349C22.0348 10.7464 22.0348 7.25177 19.9546 4.96332C19.8584 4.85754 19.739 4.73806 19.5 4.49909C19.261 4.26013 19.1416 4.14065 19.0358 4.04449C16.7473 1.96434 13.2527 1.96434 10.9642 4.04449C10.8584 4.14065 10.739 4.26013 10.5 4.49909L5.46863 9.53046C5.29568 9.70342 5.2092 9.78989 5.14736 9.89081C5.09253 9.98028 5.05213 10.0778 5.02763 10.1799C5 10.2949 5 10.4172 5 10.6618V17.3991C5 17.9591 5 18.2392 5.10899 18.4531C5.20487 18.6412 5.35785 18.7942 5.54601 18.8901C5.75992 18.9991 6.03995 18.9991 6.6 18.9991Z"
                                                        stroke="#E0E2E7" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
        
                                                Content Management
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="group flex gap-x-3 rounded-md p-2 text-base font-semibold leading-6 text-[#E0E2E7] hover:bg-gray-800 hover:text-white">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 2C12.375 2 12.745 2.02 13.11 2.061C13.2405 2.07545 13.3669 2.11546 13.482 2.17876C13.5971 2.24206 13.6986 2.3274 13.7806 2.42992C13.8627 2.53243 13.9238 2.65011 13.9604 2.77624C13.997 2.90237 14.0084 3.03447 13.994 3.165C13.9796 3.29553 13.9395 3.42194 13.8762 3.53701C13.8129 3.65208 13.7276 3.75356 13.6251 3.83565C13.5226 3.91773 13.4049 3.97882 13.2788 4.01543C13.1526 4.05204 13.0205 4.06345 12.89 4.049C11.242 3.86464 9.57752 4.19694 8.12668 4.99992C6.67583 5.80291 5.51035 7.03689 4.79147 8.5312C4.07258 10.0255 3.8358 11.7063 4.11389 13.341C4.39198 14.9758 5.17119 16.4837 6.34374 17.6563C7.51629 18.8288 9.02423 19.608 10.659 19.8861C12.2937 20.1642 13.9745 19.9274 15.4688 19.2085C16.9631 18.4896 18.1971 17.3242 19.0001 15.8733C19.8031 14.4225 20.1354 12.758 19.951 11.11C19.9366 10.9795 19.948 10.8474 19.9846 10.7212C20.0212 10.5951 20.0823 10.4774 20.1644 10.3749C20.3301 10.1679 20.5714 10.0352 20.835 10.006C21.0986 9.97683 21.363 10.0536 21.5701 10.2194C21.6726 10.3014 21.7579 10.4029 21.8212 10.518C21.8845 10.6331 21.9246 10.7595 21.939 10.89C21.979 11.255 22 11.625 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM11.968 7.877C12.0339 8.13372 11.9952 8.40611 11.8604 8.63431C11.7256 8.8625 11.5057 9.02785 11.249 9.094C10.5439 9.27871 9.93004 9.71367 9.52204 10.3177C9.11404 10.9217 8.93975 11.6536 9.0317 12.3767C9.12365 13.0998 9.47555 13.7647 10.0217 14.2474C10.5679 14.7301 11.2711 14.9976 12 15C12.665 14.9997 13.3112 14.7786 13.837 14.3714C14.3627 13.9641 14.7384 13.3938 14.905 12.75C14.9713 12.4931 15.1369 12.2731 15.3654 12.1384C15.594 12.0036 15.8666 11.9652 16.1235 12.0315C16.3804 12.0978 16.6004 12.2634 16.7351 12.4919C16.8699 12.7205 16.9083 12.9931 16.842 13.25C16.5352 14.4259 15.8108 15.45 14.8042 16.1308C13.7975 16.8116 12.5774 17.1026 11.3718 16.9495C10.1662 16.7964 9.05754 16.2096 8.25301 15.2987C7.44848 14.3879 7.00307 13.2153 7 12C7.00017 10.8915 7.36857 9.81441 8.04734 8.938C8.7261 8.06158 9.67676 7.43546 10.75 7.158C10.8772 7.12522 11.0096 7.11781 11.1396 7.13621C11.2697 7.1546 11.3948 7.19843 11.5079 7.2652C11.621 7.33197 11.7199 7.42036 11.7988 7.52534C11.8778 7.63031 11.9353 7.74981 11.968 7.877ZM18.504 2.127C18.6865 2.20268 18.8425 2.33074 18.9524 2.49501C19.0622 2.65928 19.1209 2.8524 19.121 3.05V4.88H20.95C21.1478 4.88004 21.341 4.93871 21.5055 5.0486C21.6699 5.15848 21.798 5.31465 21.8737 5.49735C21.9493 5.68005 21.9692 5.88108 21.9306 6.07503C21.892 6.26898 21.7968 6.44715 21.657 6.587L18.12 10.12C17.9325 10.3075 17.6782 10.4129 17.413 10.413H15L13.172 12.242C12.9844 12.4296 12.7299 12.5351 12.4645 12.5351C12.1991 12.5351 11.9446 12.4296 11.757 12.242C11.5694 12.0544 11.4639 11.7999 11.4639 11.5345C11.4639 11.2691 11.5694 11.0146 11.757 10.827L13.586 9V6.586C13.5861 6.32081 13.6915 6.06649 13.879 5.879L17.414 2.343C17.5538 2.20307 17.7321 2.10776 17.9261 2.06913C18.1201 2.0305 18.3212 2.0503 18.504 2.126V2.127ZM17.121 5.464L15.586 7V8.414H17L18.536 6.879H18.121C17.8558 6.879 17.6014 6.77364 17.4139 6.58611C17.2264 6.39857 17.121 6.14422 17.121 5.879V5.464Z"
                                                        fill="#E0E2E7" />
                                                </svg>
        
                                                Challenge Management
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-[#E0E2E7] hover:bg-gray-800 hover:text-white">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 20H3V5" stroke="#E0E2E7" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M21 7L13 14L9 10L3 15" stroke="#E0E2E7" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
        
                                                User Engagement
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="mt-auto">
                                    <div
                                    class="group -mx-2 flex justify-center items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6">
                                    <svg class="cursor-pointer" width="30" height="30" viewBox="0 0 40 40" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" rx="12" fill="white" />
                                        <path
                                            d="M17.395 27.3711L17.9795 28.6856C18.1532 29.0768 18.4368 29.4093 18.7957 29.6426C19.1547 29.8759 19.5736 30.0001 20.0017 30C20.4298 30.0001 20.8488 29.8759 21.2077 29.6426C21.5667 29.4093 21.8502 29.0768 22.0239 28.6856L22.6084 27.3711C22.8164 26.9047 23.1664 26.5159 23.6084 26.26C24.0532 26.0034 24.5677 25.8941 25.0784 25.9478L26.5084 26.1C26.934 26.145 27.3636 26.0656 27.7451 25.8713C28.1265 25.6771 28.4434 25.3763 28.6573 25.0056C28.8714 24.635 28.9735 24.2103 28.951 23.7829C28.9285 23.3555 28.7825 22.9438 28.5306 22.5978L27.6839 21.4344C27.3825 21.0171 27.2214 20.5148 27.2239 20C27.2238 19.4866 27.3864 18.9864 27.6884 18.5711L28.535 17.4078C28.7869 17.0618 28.933 16.6501 28.9554 16.2227C28.9779 15.7953 28.8759 15.3705 28.6617 15C28.4478 14.6292 28.1309 14.3285 27.7495 14.1342C27.3681 13.94 26.9385 13.8605 26.5128 13.9056L25.0828 14.0578C24.5722 14.1114 24.0576 14.0021 23.6128 13.7456C23.1699 13.4883 22.8199 13.0974 22.6128 12.6289L22.0239 11.3144C21.8502 10.9232 21.5667 10.5907 21.2077 10.3574C20.8488 10.1241 20.4298 9.99993 20.0017 10C19.5736 9.99993 19.1547 10.1241 18.7957 10.3574C18.4368 10.5907 18.1532 10.9232 17.9795 11.3144L17.395 12.6289C17.188 13.0974 16.8379 13.4883 16.395 13.7456C15.9503 14.0021 15.4357 14.1114 14.925 14.0578L13.4906 13.9056C13.0649 13.8605 12.6353 13.94 12.2539 14.1342C11.8725 14.3285 11.5556 14.6292 11.3417 15C11.1275 15.3705 11.0255 15.7953 11.048 16.2227C11.0705 16.6501 11.2165 17.0618 11.4684 17.4078L12.315 18.5711C12.617 18.9864 12.7796 19.4866 12.7795 20C12.7796 20.5134 12.617 21.0137 12.315 21.4289L11.4684 22.5922C11.2165 22.9382 11.0705 23.3499 11.048 23.7773C11.0255 24.2047 11.1275 24.6295 11.3417 25C11.5558 25.3706 11.8727 25.6712 12.2541 25.8654C12.6355 26.0596 13.065 26.1392 13.4906 26.0944L14.9206 25.9422C15.4313 25.8886 15.9458 25.9979 16.3906 26.2544C16.8351 26.511 17.1868 26.902 17.395 27.3711Z"
                                            stroke="black" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M19.9999 23C21.6568 23 22.9999 21.6569 22.9999 20C22.9999 18.3431 21.6568 17 19.9999 17C18.3431 17 16.9999 18.3431 16.9999 20C16.9999 21.6569 18.3431 23 19.9999 23Z"
                                            stroke="black" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <svg class="cursor-pointer" width="30" height="30" viewBox="0 0 40 40" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" rx="12" fill="white" />
                                        <path d="M20 23L23 20M23 20L20 17M23 20L12 20" stroke="#14181F" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M12 15V13C12 12.4477 12.4477 12 13 12H27C27.5523 12 28 12.4477 28 13V27C28 27.5523 27.5523 28 27 28H13C12.4477 28 12 27.5523 12 27V25"
                                            stroke="#14181F" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <!-- Static sidebar for desktop -->
        <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-[#2A1634] px-6 pb-4">
                <div class="flex h-16 shrink-0 items-center justify-center">
                    <img class="h-8 w-auto" src="@/assets/img/logo.png" alt="Your Company">
                </div>
                <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7 flex justify-center items-center flex-col">
                        <div class="text-white flex justify-center items-center gap-y-3 flex-col">
                            <img class="h-56 w-48" src="@/assets/img/avatar.png" alt="Your Company">
                            <div class="flex justify-center items-center flex-col">
                                <p>Linda Blair</p>
                            <p class="text-[#8C8C8C]">lindablair@gmail.com</p>
                            </div>
                        </div>
                        <li>
                            <ul role="list" class="-mx-2 space-y-2">
                                <li>
                                    <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                                    <NuxtLink to="/dashboard/team"
                                        class="group flex gap-x-3 rounded-md p-2 text-base text-gray-700 font-semibold leading-6">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7M11.9999 21.5L14.025 21.095C14.2015 21.0597 14.2898 21.042 14.3721 21.0097C14.4452 20.9811 14.5147 20.9439 14.579 20.899C14.6516 20.8484 14.7152 20.7848 14.8426 20.6574L21.5 14C22.0524 13.4477 22.0523 12.5523 21.5 12C20.9477 11.4477 20.0523 11.4477 19.5 12L12.8425 18.6575C12.7152 18.7848 12.6516 18.8484 12.601 18.921C12.5561 18.9853 12.5189 19.0548 12.4902 19.1278C12.458 19.2102 12.4403 19.2984 12.405 19.475L11.9999 21.5ZM13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                                                stroke="#BC8FBF" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>

                                        Team management
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/dashboard/content"
                                        class="group flex gap-x-3 rounded-md p-2 text-base font-semibold leading-6 text-gray-700">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16 7.99909L2 21.9991M18 14.9991H9M6.6 18.9991H13.3373C13.5818 18.9991 13.7041 18.9991 13.8192 18.9715C13.9213 18.947 14.0188 18.9066 14.1083 18.8517C14.2092 18.7899 14.2957 18.7034 14.4686 18.5305L19.5 13.4991C19.739 13.2601 19.8584 13.1407 19.9546 13.0349C22.0348 10.7464 22.0348 7.25177 19.9546 4.96332C19.8584 4.85754 19.739 4.73806 19.5 4.49909C19.261 4.26013 19.1416 4.14065 19.0358 4.04449C16.7473 1.96434 13.2527 1.96434 10.9642 4.04449C10.8584 4.14065 10.739 4.26013 10.5 4.49909L5.46863 9.53046C5.29568 9.70342 5.2092 9.78989 5.14736 9.89081C5.09253 9.98028 5.05213 10.0778 5.02763 10.1799C5 10.2949 5 10.4172 5 10.6618V17.3991C5 17.9591 5 18.2392 5.10899 18.4531C5.20487 18.6412 5.35785 18.7942 5.54601 18.8901C5.75992 18.9991 6.03995 18.9991 6.6 18.9991Z"
                                                stroke="#E0E2E7" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>

                                        Content Management
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/dashboard/challenge"
                                        class="group flex gap-x-3 rounded-md p-2 text-base font-semibold leading-6 text-gray-700">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 2C12.375 2 12.745 2.02 13.11 2.061C13.2405 2.07545 13.3669 2.11546 13.482 2.17876C13.5971 2.24206 13.6986 2.3274 13.7806 2.42992C13.8627 2.53243 13.9238 2.65011 13.9604 2.77624C13.997 2.90237 14.0084 3.03447 13.994 3.165C13.9796 3.29553 13.9395 3.42194 13.8762 3.53701C13.8129 3.65208 13.7276 3.75356 13.6251 3.83565C13.5226 3.91773 13.4049 3.97882 13.2788 4.01543C13.1526 4.05204 13.0205 4.06345 12.89 4.049C11.242 3.86464 9.57752 4.19694 8.12668 4.99992C6.67583 5.80291 5.51035 7.03689 4.79147 8.5312C4.07258 10.0255 3.8358 11.7063 4.11389 13.341C4.39198 14.9758 5.17119 16.4837 6.34374 17.6563C7.51629 18.8288 9.02423 19.608 10.659 19.8861C12.2937 20.1642 13.9745 19.9274 15.4688 19.2085C16.9631 18.4896 18.1971 17.3242 19.0001 15.8733C19.8031 14.4225 20.1354 12.758 19.951 11.11C19.9366 10.9795 19.948 10.8474 19.9846 10.7212C20.0212 10.5951 20.0823 10.4774 20.1644 10.3749C20.3301 10.1679 20.5714 10.0352 20.835 10.006C21.0986 9.97683 21.363 10.0536 21.5701 10.2194C21.6726 10.3014 21.7579 10.4029 21.8212 10.518C21.8845 10.6331 21.9246 10.7595 21.939 10.89C21.979 11.255 22 11.625 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM11.968 7.877C12.0339 8.13372 11.9952 8.40611 11.8604 8.63431C11.7256 8.8625 11.5057 9.02785 11.249 9.094C10.5439 9.27871 9.93004 9.71367 9.52204 10.3177C9.11404 10.9217 8.93975 11.6536 9.0317 12.3767C9.12365 13.0998 9.47555 13.7647 10.0217 14.2474C10.5679 14.7301 11.2711 14.9976 12 15C12.665 14.9997 13.3112 14.7786 13.837 14.3714C14.3627 13.9641 14.7384 13.3938 14.905 12.75C14.9713 12.4931 15.1369 12.2731 15.3654 12.1384C15.594 12.0036 15.8666 11.9652 16.1235 12.0315C16.3804 12.0978 16.6004 12.2634 16.7351 12.4919C16.8699 12.7205 16.9083 12.9931 16.842 13.25C16.5352 14.4259 15.8108 15.45 14.8042 16.1308C13.7975 16.8116 12.5774 17.1026 11.3718 16.9495C10.1662 16.7964 9.05754 16.2096 8.25301 15.2987C7.44848 14.3879 7.00307 13.2153 7 12C7.00017 10.8915 7.36857 9.81441 8.04734 8.938C8.7261 8.06158 9.67676 7.43546 10.75 7.158C10.8772 7.12522 11.0096 7.11781 11.1396 7.13621C11.2697 7.1546 11.3948 7.19843 11.5079 7.2652C11.621 7.33197 11.7199 7.42036 11.7988 7.52534C11.8778 7.63031 11.9353 7.74981 11.968 7.877ZM18.504 2.127C18.6865 2.20268 18.8425 2.33074 18.9524 2.49501C19.0622 2.65928 19.1209 2.8524 19.121 3.05V4.88H20.95C21.1478 4.88004 21.341 4.93871 21.5055 5.0486C21.6699 5.15848 21.798 5.31465 21.8737 5.49735C21.9493 5.68005 21.9692 5.88108 21.9306 6.07503C21.892 6.26898 21.7968 6.44715 21.657 6.587L18.12 10.12C17.9325 10.3075 17.6782 10.4129 17.413 10.413H15L13.172 12.242C12.9844 12.4296 12.7299 12.5351 12.4645 12.5351C12.1991 12.5351 11.9446 12.4296 11.757 12.242C11.5694 12.0544 11.4639 11.7999 11.4639 11.5345C11.4639 11.2691 11.5694 11.0146 11.757 10.827L13.586 9V6.586C13.5861 6.32081 13.6915 6.06649 13.879 5.879L17.414 2.343C17.5538 2.20307 17.7321 2.10776 17.9261 2.06913C18.1201 2.0305 18.3212 2.0503 18.504 2.126V2.127ZM17.121 5.464L15.586 7V8.414H17L18.536 6.879H18.121C17.8558 6.879 17.6014 6.77364 17.4139 6.58611C17.2264 6.39857 17.121 6.14422 17.121 5.879V5.464Z"
                                                fill="#E0E2E7" />
                                        </svg>

                                        Challenge Management
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/dashboard/user"
                                        class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 20H3V5" stroke="#E0E2E7" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M21 7L13 14L9 10L3 15" stroke="#E0E2E7" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        User Engagement
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li class="mt-auto">
                            <div
                                class="group -mx-2 flex justify-center items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6">
                                <svg class="cursor-pointer" width="30" height="30" viewBox="0 0 40 40" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="12" fill="white" />
                                    <path
                                        d="M17.395 27.3711L17.9795 28.6856C18.1532 29.0768 18.4368 29.4093 18.7957 29.6426C19.1547 29.8759 19.5736 30.0001 20.0017 30C20.4298 30.0001 20.8488 29.8759 21.2077 29.6426C21.5667 29.4093 21.8502 29.0768 22.0239 28.6856L22.6084 27.3711C22.8164 26.9047 23.1664 26.5159 23.6084 26.26C24.0532 26.0034 24.5677 25.8941 25.0784 25.9478L26.5084 26.1C26.934 26.145 27.3636 26.0656 27.7451 25.8713C28.1265 25.6771 28.4434 25.3763 28.6573 25.0056C28.8714 24.635 28.9735 24.2103 28.951 23.7829C28.9285 23.3555 28.7825 22.9438 28.5306 22.5978L27.6839 21.4344C27.3825 21.0171 27.2214 20.5148 27.2239 20C27.2238 19.4866 27.3864 18.9864 27.6884 18.5711L28.535 17.4078C28.7869 17.0618 28.933 16.6501 28.9554 16.2227C28.9779 15.7953 28.8759 15.3705 28.6617 15C28.4478 14.6292 28.1309 14.3285 27.7495 14.1342C27.3681 13.94 26.9385 13.8605 26.5128 13.9056L25.0828 14.0578C24.5722 14.1114 24.0576 14.0021 23.6128 13.7456C23.1699 13.4883 22.8199 13.0974 22.6128 12.6289L22.0239 11.3144C21.8502 10.9232 21.5667 10.5907 21.2077 10.3574C20.8488 10.1241 20.4298 9.99993 20.0017 10C19.5736 9.99993 19.1547 10.1241 18.7957 10.3574C18.4368 10.5907 18.1532 10.9232 17.9795 11.3144L17.395 12.6289C17.188 13.0974 16.8379 13.4883 16.395 13.7456C15.9503 14.0021 15.4357 14.1114 14.925 14.0578L13.4906 13.9056C13.0649 13.8605 12.6353 13.94 12.2539 14.1342C11.8725 14.3285 11.5556 14.6292 11.3417 15C11.1275 15.3705 11.0255 15.7953 11.048 16.2227C11.0705 16.6501 11.2165 17.0618 11.4684 17.4078L12.315 18.5711C12.617 18.9864 12.7796 19.4866 12.7795 20C12.7796 20.5134 12.617 21.0137 12.315 21.4289L11.4684 22.5922C11.2165 22.9382 11.0705 23.3499 11.048 23.7773C11.0255 24.2047 11.1275 24.6295 11.3417 25C11.5558 25.3706 11.8727 25.6712 12.2541 25.8654C12.6355 26.0596 13.065 26.1392 13.4906 26.0944L14.9206 25.9422C15.4313 25.8886 15.9458 25.9979 16.3906 26.2544C16.8351 26.511 17.1868 26.902 17.395 27.3711Z"
                                        stroke="black" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M19.9999 23C21.6568 23 22.9999 21.6569 22.9999 20C22.9999 18.3431 21.6568 17 19.9999 17C18.3431 17 16.9999 18.3431 16.9999 20C16.9999 21.6569 18.3431 23 19.9999 23Z"
                                        stroke="black" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <svg class="cursor-pointer" width="30" height="30" viewBox="0 0 40 40" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="12" fill="white" />
                                    <path d="M20 23L23 20M23 20L20 17M23 20L12 20" stroke="#14181F" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M12 15V13C12 12.4477 12.4477 12 13 12H27C27.5523 12 28 12.4477 28 13V27C28 27.5523 27.5523 28 27 28H13C12.4477 28 12 27.5523 12 27V25"
                                        stroke="#14181F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="lg:pl-72">
            <div
                class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                    <span class="sr-only">Open sidebar</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <!-- Separator -->
                <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true"></div>

                <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                    <form class="relative flex flex-1" action="#" method="GET">
                        <label for="search-field" class="sr-only">Search</label>
                        <svg class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clip-rule="evenodd" />
                        </svg>
                        <input id="search-field"
                            class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                            placeholder="Search..." type="search" name="search">
                    </form>
                    <div class="flex items-center gap-x-4 lg:gap-x-6">
                        <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                            <span class="sr-only">View notifications</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>

                        <!-- Separator -->
                        <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true"></div>

                        <!-- Profile dropdown -->
                        <div class="relative">
                            <button @click="isOpen = !isOpen" type="button" class="-m-1.5 flex items-center p-1.5" id="user-menu-button"
                                aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full bg-gray-50"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="">
                                <span class="hidden lg:flex lg:items-center">
                                    <span class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                                        aria-hidden="true">Tom Cook</span>
                                    <svg class="ml-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </button>

                            <!--
                Dropdown menu, show/hide based on menu state.
  
                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
                            <div v-if="isOpen" class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                                tabindex="-1">
                                <!-- Active: "bg-gray-50", Not Active: "" -->
                                <a href="#" class="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem"
                                    tabindex="-1" id="user-menu-item-0">Your profile</a>
                                <a href="#" class="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem"
                                    tabindex="-1" id="user-menu-item-1">Sign out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main class="py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                   <slot />
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
  background-color: #0ba9b9;
  color: '#bc8fb'
}
</style>

<script setup lang="ts">
const isOpen = ref(false)
const isSidebarOpen = ref(false)
</script>
