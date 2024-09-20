import { useState, useEffect } from 'react';
import timelineData from './timelineData.js';

function Timeline() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [lastHoveredIndex, setLastHoveredIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        setLastHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const currentIndex = hoveredIndex !== null ? hoveredIndex : lastHoveredIndex;

    return (
        <section className="text-black py-8">
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                {isLargeScreen ? (
                    // Large screen layout (existing code)
                    <>
                        {/* Sidebar Project Info */}
                        <div className="flex flex-col w-full md:sticky md:top-36 md:w-1/3 mt-2 md:mt-12 px-8"> 
                            <div>
                                <p className="ml-2 text-rose-600 uppercase tracking-loose">{timelineData[currentIndex].date}</p>
                                <h2 className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">{timelineData[currentIndex].title}</h2>
                                <p className="text-sm md:text-base text-black mb-4">
                                {timelineData[currentIndex].description}
                                </p>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="w-full md:w-2/3 md:ml-12">
                            <div className="container mx-auto w-full h-full">
                                <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
                                    <div className="hidden md:block border-2-2 absolute h-full border"
                                        style={{right: '50%', border: '2px solid #F43F5E', borderRadius: '1%'}}></div>
                                    <div className="hidden md:block border-2-2 absolute h-full border"
                                        style={{left: '50%', border: '2px solid #F43F5E', borderRadius: '1%'}}></div>
                                    {timelineData.map((data, index) => (
                                        <div
                                            key={index}
                                            className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${
                                                index % 2 === 0 ? 'md:flex-row-reverse left-timeline' : 'right-timeline'
                                            }`}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className="order-1 md:w-5/12"></div>
                                            <div className={`order-1 w-full md:w-5/12 px-1 py-4 ${
                                                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                            }`}>
                                                <p className="mb-3 text-base text-rose-600">{data.date}</p>
                                                <h4 className="mb-3 font-bold text-md md:text-2xl">{data.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="relative">
                                    <img className="mx-auto -mt-36 md:-mt-36 hidden md:block relative z-10" src="https://ldonatelli-lep.com/wp-content/uploads/elementor/thumbs/deskKid-01-oyihoyrtvryyjz83noihsukpv1q4sfkwi9zotty3po.png" alt="Timeline decoration" />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    // Small screen hover-to-expand layout
                    <div className="w-full">
                        {timelineData.map((data, index) => (
                            <div 
                                key={index} 
                                className="mb-4 border-b border-gray-200"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="py-4 px-6">
                                    <h4 className="font-bold text-lg">{data.title}</h4>
                                    <p className="text-sm text-rose-600">{data.date}</p>
                                    {hoveredIndex === index && (
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-600">{data.extraInfo}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Timeline;
