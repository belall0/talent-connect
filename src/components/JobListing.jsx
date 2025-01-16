import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const JobListing = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggledDescription = isExpanded ? job.description : `${job.description.substring(0, 100)} ...`;

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>
        <div className="mb-3">{toggledDescription}</div>
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="mb-2 text-l text-indigo-400 hover:text-indigo-600">
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>

        <h3 className="text-indigo-500 mb-2">{`${job.salary} / Year`}</h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3 flex items-center text-lg ">
            <FaLocationDot className=" mr-1 " />
            <p>{job.location}</p>
          </div>
          <a
            href="job.html"
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
