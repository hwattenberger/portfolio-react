import project3Img from './../../images/Substring KMT Search Still Image.png'

const Project3 = () => {
    return (
        <div className="relative m-4">
            <h2 className="text-3xl">Project 3 - Substring KMT Search</h2>
            <div className="bg-blue-300	rounded p-2 flex">
                <div>
                <p className="p-2">This is a fun little React app that helps visualize what happens in a substring search using the KMT algorithm 
                (Knuth-Morris-Pratt algorithm). Built to test out tailwind and Redux (which is not needed for an app of this scale).
                </p>
                </div>
                <div>
                <img src={project3Img} className=""/>
                </div>
            </div>
            {/* <div className="w-1/2 p-4 bg-blue-300 rounded absolute bottom-500">
                <img src={project1Img} className=""/>
            </div> */}
        </div>
    )
}

export default Project3;