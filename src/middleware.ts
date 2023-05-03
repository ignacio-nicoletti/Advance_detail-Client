// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useSelector } from 'react-redux';
import { RootState } from './redux/store/store';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const { auth } = useSelector((state: RootState) => state.Auth);
  // console.log(auth);
 
  
  console.log(request.nextUrl.pathname);
  if(request.nextUrl.pathname==="/"){}
        // return NextResponse.rewrite(new URL('/landingpage', request.url))

    // }else{console.log("paso");}
  
    // return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/carrito'],
}