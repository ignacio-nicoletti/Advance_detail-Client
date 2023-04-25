"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useEffect, useState } from "react";
import { getProduct, postlogin } from "../redux/api";
import { Navbar } from "../components/navbar/navbar";
import LandingPage from "./landingpage";
import { log } from "console";

export default function Home() {
const token=localStorage.getItem('token')
console.log(token);

const dispatch=useDispatch<AppDispatch>()
  useEffect(() => {
dispatch(getProduct(token))


  });
  let info= useSelector((state:RootState)=>state.product)
  console.log(info);
  
  return (
    <div className={""}>
      <Navbar />
    </div>
  );
}
