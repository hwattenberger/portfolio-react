
const knowledgeAreas = ["Javascript", "React", "M/Cache", "SQL", "noSQL", "NodeJS", "HTML", "CSS", "MongoDB" ]
const otherKnowledgeAreas = ["Mapbox", "Authentication", "Material-UI", "Styled Components", "Tailwind", "Framer Motion"]

const AboutMe = () => {

    return (
        <>
            <div className="md:w-6/12 bg-purple-100 p-4 m-4 rounded">
                <h2 className="text-3xl p-4">About Me</h2>
                <p className="p-4"><span className="font-semibold">Origin Story:</span> My coding journey began back in middle school.  I found this amazing website called Neopets and created a guild and to create a webpage for that guild, I needed to know
                    HTML so I googled around and learned about tables and headings.  Then I wanted to make Neopets and I researched and learned Neopets was coded in PHP so I tried to learn
                    all about PHP and MySQL.  I've been coding various things ever since!
                </p>
                <div className="p-4">
                    <span className="font-semibold">Experience With:</span>
                    <div className="box-border w-full flex flex-wrap">
                        {knowledgeAreas.map((area)=>(
                        <span className="bg-blue-300 m-1 px-4 py-1 rounded" key={area}>
                            {area}
                        </span>
                        ))}
                    </div>
                </div>
                <div className="p-4">
                    <span className="font-semibold">And With:</span>
                    <div className="box-border w-full flex flex-wrap">
                        {otherKnowledgeAreas.map((area)=>(
                        <span className="bg-purple-400 m-1 px-4 py-1 rounded" key={area}>
                            {area}
                        </span>
                        ))}
                    </div>
                </div>
                <p className="p-4"><span className="font-semibold">Interests:</span> Coding (of course), cello music/playing, chamber music, piano, attempting to cook, growing people (not in the gardening sense), trying to understand what my cat is saying.</p>
                <h2 className="text-3xl p-4">Contact Me</h2>
                <p className="p-4">Please email me at hwattenberger@gmail.com</p>
          </div>
        </>
    )
}

export default AboutMe;