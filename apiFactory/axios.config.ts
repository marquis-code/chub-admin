import axios, { AxiosResponse } from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export interface CustomAxiosResponse extends AxiosResponse {
  value?: any
  type?: string;
}

axiosInstance.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
	(response:CustomAxiosResponse) => {
		return response
	},
	(err:any) => {
		if (typeof err.response === 'undefined') {
			// useAlert().openAlert({ type: 'ERROR', msg: 'kindly check your network connection' })
      useNuxtApp().$toast.error("kindly check your network connection", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
			return {
				type: 'ERROR',
				...err.response
			}
		}
		if (err.response.status === 401) {
				// logOut()
			// useAlert().openAlert({ type: 'ERROR', msg: 'Unauthorised ERROR' })
      useNuxtApp().$toast.error("Unauthorised ERROR", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
			return {
				type: 'ERROR',
				...err.response
			}
		} else if (statusCodeStartsWith(err.response.status, 4)) {
			if (err.response.data.message) {
				// useAlert().openAlert({ type: 'ERROR', msg: err.response.data.message })
        useNuxtApp().$toast.error(err.response.data.message, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
			} else {
        useNuxtApp().$toast.error(err.response.data.error, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
				// useAlert().openAlert({ type: 'ERROR', msg: err.response.data.error })
			}
			return {
				type: 'ERROR',
				...err.response
			}
		} else if (err.response.status === 500) {
			// useAlert().openAlert({ type: 'ERROR', msg: err?.response?.data?.message || err?.response?.data?.error || 'An error occured' })
      useNuxtApp().$toast.error(err?.response?.data?.message || err?.response?.data?.error || 'An error occured', {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
			return {
				type: 'ERROR',
				...err.response
			}
		} else if (err.response.status === 409) {
      useNuxtApp().$toast.error(err?.response?.data?.message || err?.response?.data?.error || 'An error occured', {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
			// useAlert().openAlert({ type: 'ERROR', msg: err?.response?.data?.message || err?.response?.data?.error || 'An error occured' })
		}
	}
)

const statusCodeStartsWith = (statusCode: number, startNumber: number): boolean => {
  const statusCodeString = statusCode.toString()
  const startNumberString = startNumber.toString()

  return statusCodeString.startsWith(startNumberString)
}



// storipodAxiosInstance.interceptors.request.use((config: any) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// axiosInstance.interceptors.response.use(
//   (response: any) => {
//     return response;
//   },
//   (error) => {
//     if (typeof error.response === "undefined") {
//       useNuxtApp().$toast.error("kindly check your network connection", {
//         autoClose: 5000,
//         dangerouslyHTMLString: true,
//       });
//     } else {
//       useNuxtApp().$toast.error(error.response.data.message, {
//         autoClose: 5000,
//         dangerouslyHTMLString: true,
//       });
//     }
//   }
// );

// storipodAxiosInstance.interceptors.response.use(
//   (response: any) => {
//     return response;
//   },
//   (error) => {
//     if (typeof error.response === "undefined") {
//       useNuxtApp().$toast.error("kindly check your network connection", {
//         autoClose: 5000,
//         dangerouslyHTMLString: true,
//       });
//     } else {
//       useNuxtApp().$toast.error(error.response.data.message, {
//         autoClose: 5000,
//         dangerouslyHTMLString: true,
//       });
//     }
//   }
// );