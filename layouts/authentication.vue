<template>
  <!-- <section>
    <slot />
  </section> -->
  <main>
    <section class="bg-[#1E0221]">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img alt=""
            src="@/assets/img/landing.png"
            class="absolute inset-0 h-full w-full object-cover opacity-80" />

          <div class="hidden lg:relative lg:block lg:p-12">
          </div>
        </section>

        <main
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 w-full bg-white rounded-[50px]  ">
          <div class="max-w-xl lg:max-w-3xl w-9/12">
            <div class="relative -mt-16 block lg:hidden">
              <a class="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#">
                <span class="sr-only">Home</span>
                <svg class="h-8 sm:h-10" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor" />
                </svg>
              </a>

              <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Squid 🦑
              </h1>

              <p class="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
            </div>

            <!-- <div class="w-full">
              <p class="text-[#1D1F2C] font-medium pb-3">Login via Google</p>
              <div>
                <button class="bg-[#FFD5C8] text-[#690571] block py-6 rounded-lg w-full">
                  <div class="flex justify-center items-center px-6 relative">
                    <p>Sign in with Google</p>
                    <div class="absolute right-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M22.1321 10.033C22.1111 9.91786 22.0503 9.81378 21.9604 9.73887C21.8705 9.66395 21.7571 9.62294 21.6401 9.62298H12.2221C12.0899 9.62298 11.963 9.67538 11.8693 9.76872C11.7756 9.86205 11.7227 9.98872 11.7221 10.121V13.99C11.7221 14.1226 11.7748 14.2498 11.8686 14.3435C11.9623 14.4373 12.0895 14.49 12.2221 14.49H16.9571C16.661 15.3509 16.0891 16.0902 15.3301 16.593C14.4032 17.1845 13.3214 17.4873 12.2221 17.463C11.0792 17.4515 9.969 17.0799 9.04943 16.4011C8.12986 15.7223 7.44775 14.7708 7.10012 13.682V13.68C6.7173 12.5516 6.7173 11.3284 7.10012 10.2V10.198C7.44765 9.10947 8.12945 8.15821 9.04862 7.47942C9.96779 6.80064 11.0775 6.42887 12.2201 6.41698C13.5132 6.39535 14.763 6.88271 15.7001 7.77398C15.7945 7.86466 15.9207 7.91473 16.0516 7.91342C16.1824 7.91211 16.3076 7.85953 16.4001 7.76698L19.2681 4.89798C19.3157 4.85047 19.3532 4.79385 19.3784 4.73152C19.4035 4.66919 19.4159 4.60243 19.4147 4.53521C19.4135 4.468 19.3987 4.40172 19.3713 4.34034C19.3439 4.27896 19.3044 4.22374 19.2551 4.17798C17.3509 2.39417 14.8322 1.41345 12.2231 1.43998C10.2754 1.43412 8.36484 1.97266 6.70692 2.99484C5.04899 4.01702 3.7097 5.48216 2.84012 7.22498C2.10563 8.68819 1.72314 10.3028 1.72314 11.94C1.72314 13.5772 2.10563 15.1918 2.84012 16.655C3.70988 18.3976 5.04922 19.8627 6.7071 20.8848C8.36498 21.907 10.2755 22.4456 12.2231 22.44C14.7811 22.5069 17.268 21.594 19.1751 19.888L19.1801 19.886C20.2131 18.8895 21.0263 17.688 21.5676 16.3587C22.1088 15.0294 22.3662 13.6016 22.3231 12.167C22.3231 11.451 22.2581 10.737 22.1321 10.033ZM12.2231 2.43998C14.4002 2.41734 16.514 3.17147 18.1851 4.56698L16.0251 6.72698C14.9488 5.86133 13.6043 5.39807 12.2231 5.41698C10.9888 5.42539 9.78313 5.7902 8.75117 6.46752C7.71922 7.14485 6.90489 8.10585 6.40612 9.23498L3.92612 7.31098C4.74657 5.83088 5.9493 4.59816 7.40874 3.74153C8.86819 2.88489 10.5308 2.43474 12.2231 2.43998ZM2.72312 11.941C2.72068 10.6661 2.97684 9.40401 3.47612 8.23098L6.04912 10.225C5.73619 11.3472 5.73619 12.5337 6.04912 13.656L3.47612 15.65C2.97978 14.476 2.72341 13.2146 2.72212 11.94M12.2221 21.44C10.5296 21.4452 8.86671 20.9959 7.40708 20.1391C5.94745 19.2823 4.7446 18.0493 3.92412 16.569L6.40512 14.645C6.90379 15.7742 7.71809 16.7353 8.75007 17.4126C9.78204 18.0899 10.9877 18.4547 12.2221 18.463C13.3955 18.4807 14.5528 18.1885 15.5771 17.616L15.6871 17.701L18.0501 19.537C16.3825 20.8197 14.3253 21.4914 12.2221 21.44ZM18.8041 18.856L16.4261 17.01C17.2989 16.2515 17.8875 15.2185 18.0951 14.081C18.1083 14.009 18.1055 13.9349 18.0869 13.8641C18.0683 13.7933 18.0344 13.7274 17.9876 13.6711C17.9408 13.6149 17.8822 13.5696 17.8159 13.5384C17.7496 13.5073 17.6773 13.4911 17.6041 13.491H12.7221V10.622H21.2141C21.2861 11.134 21.3221 11.65 21.3221 12.167C21.3943 14.6412 20.4898 17.0434 18.8041 18.856Z"
                          fill="#690571" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div class="border bg-[#F9F5F9] w-full py-0.5 h-0.5 my-6 border-none outline-none rounded-full"></div>
              <form @submit.prevent="handleLogin" class="space-y-2 w-full">
                <div class="w-full">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900 sr-only">Email
                    address</label>
                  <div class="">
                    <input id="email" placeholder="sign in with your username or email" name="email" type="email"
                      autocomplete="email"
                      class="block w-full rounded-t-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div class="w-full">
                  <label for="password"
                    class="block text-sm font-medium leading-6 text-gray-900 sr-only">Password</label>
                  <div class="">
                    <input id="password" placeholder="enter your password" name="password" type="password"
                      autocomplete="current-password"
                      class="block w-full rounded-b-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div class="pt-3">
                  <button type="submit" :disabled="loading"
                    class="flex w-full justify-center rounded-md bg-[#690571] px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">
                    {{  loading ? 'Processing...' : 'Sign In' }}
                  </button>
                </div>
              </form>
              <p class="mt-3 text-center text-sm text-gray-500">
                forgot password?
                <button @click="showForgotPasswordModal = true"
                  class="font-semibold leading-6 text-[#690571] hover:text-[#690571]">reset here</button>
              </p>
            </div> -->
            <section class="w-full">
              <slot />
            </section>
          </div>
        </main>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>
