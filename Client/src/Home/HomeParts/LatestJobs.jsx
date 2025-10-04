import { Badge } from "../../components/ui/badge";
import SpotlightCard from "../../components/SpotlightCard.jsx";
import { Button } from "../../components/ui/button.jsx"; // optional, if you have a styled button component

const LatestJobs = () => {
  // Example jobs data
  const jobs = [
    {
      title: "Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Backend Developer",
      company: "Innovatech",
      location: "Bangalore, India",
      type: "Internship",
    },
    {
      title: "AI/ML Engineer",
      company: "DataWave",
      location: "Hyderabad, India",
      type: "Full-time",
    },
    {
      title: "Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Backend Developer",
      company: "Innovatech",
      location: "Bangalore, India",
      type: "Internship",
    },
    {
      title: "AI/ML Engineer",
      company: "DataWave",
      location: "Hyderabad, India",
      type: "Full-time",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-white text-3xl font-bold mb-6 flex items-center justify-center">
        Latest Job Openings
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.slice(0, 6).map((job, index) => (
          <SpotlightCard
            key={index}
            className="custom-spotlight-card p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            spotlightColor="rgba(0, 229, 255, 0.1)"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1">
                  {job.title}
                </h2>
                <p className="text-gray-300 mb-1">{job.company}</p>
                <p className="text-gray-400 text-sm">{job.location}</p>
                <div>
                  <Badge
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                              text-white font-semibold px-4 py-1.5 rounded-full shadow-md 
                                hover:scale-105 transition-transform duration-200 mt-6 mr-2"
                    variant="ghost"
                  >
                    Internship
                  </Badge>
                  <Badge
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                              text-white font-semibold px-4 py-1.5 rounded-full shadow-md 
                                hover:scale-105 transition-transform duration-200 mt-6 mr-2"
                    variant="ghost"
                  >
                    PartTime
                  </Badge>
                  <Badge
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                              text-white font-semibold px-4 py-1.5 rounded-full shadow-md 
                                hover:scale-105 transition-transform duration-200 mt-6 mr-2"
                    variant="ghost"
                  >
                    10LPA
                  </Badge>
                </div>
              </div>
              ~
              <div className="mt-4">
                <Button className=" cursor-pointer w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold">
                  Apply Now
                </Button>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
