
import { Inter } from 'next/font/google'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'

import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()



    return (
        <>

            <h2>hola</h2>
        </>
    )
}
