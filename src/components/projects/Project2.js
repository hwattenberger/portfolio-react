import project2Img from './../../images/Trip App Still Image.png';
import TextAnimation from '../TextAnimation';
import Parallax from '../../Parallax';

const tools = ["GraphQL", "Apollo", "Typescript", "React", "NodeJS", "Express", "MongoDB"];

const Project2 = () => {
    return (
        <>
            {/* <div className="relative m-4"> */}
            <div className="flex flex-col-reverse md:flex-row items-center">
                <div className="ml-4">
                    <h2 className="text-2xl p-2"><TextAnimation>Share Travel Experiences - Trips</TextAnimation></h2>
                    <div className="box-border w-full flex flex-wrap">
                        {tools.map((tool)=>(
                        <span className="bg-blue-300 m-1 px-2 py-1 rounded" key={tool}>
                            {tool}
                        </span>
                        ))}
                    </div>
                    <p className="p-2">
                        This is a full stack application for people planning big trips and for people who want to share a trip they were on.
                        For example a trip to northern Europe.
                    </p>
                    <p className="p-2">
                        Features include many different integrations with Mapbox (see all trips on a map, see legs of your trip on a map, choose 
                        where you traveled to via geocoding, select a location on a map if you don't remember the name), native authentication and
                        JWT authorization, using an observer to move a map based on what you are viewing for a trip.
                    </p>
                    <div className="">
                        <a href="https://hwattenberger-trips.netlify.app/" target="_blank" rel="noreferrer"><button className="bg-blue-400 m-1 px-2 py-1 rounded">View Site</button></a>
                        <a href="https://github.com/hwattenberger/trips" target="_blank" rel="noreferrer"><button className="bg-blue-400 m-1 px-2 py-1 rounded">Source Code</button></a>
                    </div>
                </div>
                <Parallax>
                    <div className="bg-pink-600 p-2 rounded h-full flex items-center justify-center">
                        <img src={project2Img} alt="project 2"/>
                    </div>
                </Parallax>
            </div>
        </>
    )
}

export default Project2;