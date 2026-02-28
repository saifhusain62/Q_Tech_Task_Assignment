import React from 'react'
import HeroSection from '../Components/HomeComponents/Herosection'
import CompaniesimgSection from '../Components/HomeComponents/Companiesimg'
import CategorySection from '../Components/HomeComponents/Company'
import SignUpfree from '../Components/HomeComponents/SignUpfree'
import FeaturedJobs from '../Components/HomeComponents/Featuredjob'
import LatestJobs from '../Components/HomeComponents/LatestJob'
import Footer from '../Components/Footer'
function Home() {
  return (
    <>
      <HeroSection/>
      <CompaniesimgSection/> 
      <CategorySection/>
      <SignUpfree/>
      <FeaturedJobs/>
      <LatestJobs/>
      <Footer/>
    </>
  )
}

export default Home
