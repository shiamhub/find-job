import data from './../../data/job.json'
import JobCard from './JobCard';

// type item = {
//     job_id: string;
//     job_title: string;
//     company: string;
//     location: string;
//     salary: string;
//     job_description: string;
//     requirements: string[];
//     responsibilities: string[];
//     job_type: string;
//     posted_date: string;
//     expiration_date: string;
// }

const Job = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto grid grid-cols-2 gap-5 mt-16">
                {
                    data.map((item) => <JobCard key={item.job_id} item={item}></JobCard>)
                }
            </div>
        </div>
    );
};

export default Job;