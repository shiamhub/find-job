type itemProps = {
    item: {
        job_id: string;
        job_title: string;
        company: string;
        location: string;
        salary: string;
        job_description: string;
        requirements: string[];
        responsibilities: string[];
        job_type: string;
        posted_date: string;
        expiration_date: string;
    }
}

const JobCard = ({ item }: itemProps) => {
    return (
        <div className="shadow rounded-xl bg-base-200 p-12">
            <h1 className="text-3xl font-bold text-yellow-600">{item.job_title}</h1>
            <div className="flex gap-8 mt-3">
                <h5>{item.company}</h5>
                <h5>{item.location}</h5>
                <h5>{item.job_type}</h5>
            </div>

        </div>
    );
};

export default JobCard;