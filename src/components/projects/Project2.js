import project2Img from './../../images/Trip App Still Image.png'

const Project2 = () => {
    return (
        <div className="relative m-4">
            <h2 className="text-3xl">Project 2 - Share travel experiences - Trips</h2>
            <div className="bg-blue-300	rounded p-2 flex">
                <div>
                <p className="p-2">This is a full stack application for people planning big trips and for people who want to share a trip they were on.
                            For example a trip to northern Europe.
                </p>
                <p className="p-2">
                Features include many different integrations with Mapbox (see all trips on a map, see legs of your trip on a map, choose 
                            where you traveled to via geocoding, select a location on a map if you don't remember the name), native authentication and
                            JWT authorization, using an observer to move a map based on what you are viewing for a trip.
                </p>
                <p className="p-2">
                If you visit site and do not want to create your own user, you can use the following: <br/>
                            User: hilary <br/>
                            Password: hilary
                </p>
                </div>
                <div>
                <img src={project2Img} className=""/>
                </div>
            </div>
            {/* <div className="w-1/2 p-4 bg-blue-300 rounded absolute bottom-500">
                <img src={project1Img} className=""/>
            </div> */}
        </div>
    )
}

export default Project2;