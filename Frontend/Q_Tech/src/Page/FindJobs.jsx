import Footer from "../Components/Footer";
import FeaturedJobs from "../Components/HomeComponents/Featuredjob";
import LatestJobs from "../Components/HomeComponents/LatestJob";
import SearchSection from "../Components/JobComp/SearchBar";

const FindJobs = () => {
  return (
    <div>
      <SearchSection/>
     <LatestJobs/>
     <FeaturedJobs/>
     <Footer/>
    </div>
  );
};

export default FindJobs;