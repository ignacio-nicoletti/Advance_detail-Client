'use client'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store/store'
import { useEffect, useState } from 'react'
import { getProduct, postlogin } from '../redux/api'


export default function Home() {

  const dispatch = useDispatch<AppDispatch>()
  const { products }: any = useSelector<RootState>((state) => state.product)

  let values: {
    email: "nachoo_lp@hotmail.com",
    password: 123123

  }


  useEffect(() => {
    dispatch(postlogin(values))
  }

    , []);

  let token: string;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token') || "";

  }

  console.log(products);




  return (
    <>

      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(getProduct(token))}
          >
            Increment
          </button>


          {
            products?.map((e: object | any) => (


              <div>
                <h1>{e.name}</h1>
              </div>

            ))

          }


        </div>
      </div>
    </>
  )
}
