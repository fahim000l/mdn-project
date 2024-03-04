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
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'


export default function Home() {
  return (
    <Main>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={"Loading"}>
          <Banner />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={"Loading"}>
          <AboutUs />
        </Suspense>
      </ErrorBoundary>
      <div className="flex flex-col items-center md:flex-row lg:flex-col md:p-10  md:space-x-5 lg:space-x-0 md:space-y-0 lg:space-y-20">
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={"Loading"}>
            <Vision />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={"Loading"}>
            <Mission />
          </Suspense>
        </ErrorBoundary>
      </div>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={"Loading"}>
          <Projects />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={"Loading"}>
          <ContactUs />
        </Suspense>
      </ErrorBoundary>
    </Main>
  );
}