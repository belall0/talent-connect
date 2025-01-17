import Hero from './../components/Hero';
import HomeCards from './../components/HomeCards';
import JobListings from './../components/JobListings';
import ViewAllJobs from './../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings title="Recent Jobs" limit={3} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
