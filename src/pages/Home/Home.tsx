import Job from '../Job/Job';
import img from './../../assets/jobs.jpg';
const Home = () => {
    return (
        <>
            <div className="bg-no-repeat bg-center bg-cover h-screen" style={{ backgroundImage: `url(${img})` }} >
                <h1>Home</h1>
                <Job></Job>
            </div>
            <Job></Job>
        </>
    );
};

export default Home;