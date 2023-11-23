// // "use client"
// import { API } from '@/utils/axios/ApiEndPoints'
// import axiosInstance from '@/utils/axios/AxiosInstance'
// import React, { useEffect } from 'react'

// export const explore = () => {
//     // const resp = async ()=>{
//     //     await axiosInstance.get(API.drmg).then((res)=>{
//     //         console.log(res);
//     //     })
//     // }
//     // useEffect(()=>{
//     //     resp()
//     // },[])
//   return (
//     <div>Hello World</div>
//   )
// }
"use client"
import { API } from '@/utils/axios/ApiEndPoints';
import axiosInstance from '@/utils/axios/AxiosInstance';
import { useRouter, usePathname, useSearchParams   } from 'next/navigation';
import React, { useEffect } from 'react'

const Explore = () => {
  const router = usePathname()
  const router1 = useRouter()
  console.log("============================",router);
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const media_type = searchParams.get('media_type');
      const resp = async ()=>{
        await axiosInstance.get(`${API.drmg}/${id}`).then((res)=>{
            console.log(res);
        })
    }
    useEffect(()=>{
        resp()
    },[])
  return (
    <>
      page  <p>{media_type}    ====     {id}</p>
    </>
  )
}

export default Explore