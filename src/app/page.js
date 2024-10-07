'use client'

import AboutComponent from "@/components/About";
import Banner from "@/components/Banner";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MemberShipForm from "@/components/MemberShipForm";
import RegistrationForMejban from "@/components/RegistrationForMejban";
import Services from "@/components/Services"


export default function Home() {
  return (
    <div className="w-full">
      <Banner></Banner>
      <Courses></Courses>
      <AboutComponent></AboutComponent>
    </div>
  );
}
