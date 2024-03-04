import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React from 'react'
import AboutUs from '../components/home/AboutUs'
import Banner from '../components/home/Banner'
import ContactUs from "../components/home/ContactUs";
import Mission from "../components/home/Mission";
import Projects from "../components/home/Projects";
import Vision from "../components/home/Vision";
import Main from "../layouts/Main";


export default function Home() {
  return (
    <Main>
      <Banner />
      <AboutUs />
      <div className="flex flex-col items-center md:flex-row lg:flex-col md:p-10  md:space-x-5 lg:space-x-0 md:space-y-0 lg:space-y-20">
        <Vision />
        <Mission />
      </div>
      <Projects />
      <ContactUs />
    </Main>
  );
}