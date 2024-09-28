import { useState, useEffect } from 'react';
import timelineData from './timelineData.js';

function Timeline() {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleExpand = (index) => {
        setExpandedIndex(index);
    };

    return (
        <section id="timeline" className="text-black py-8">
            <div className="container mx-auto flex flex-col items-start lg:flex-row my-12 md:my-24">
                {isLargeScreen ? (
                    // Large screen layout
                    <>
                        {/* Sidebar Project Info */}
                        <div className="flex flex-col w-full lg:sticky lg:top-36 lg:w-1/3 mt-2 lg:mt-12 px-4 lg:px-8">
                            <div>
                                <p className="text-rose-600 uppercase tracking-loose">{timelineData[expandedIndex].date}</p>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-normal lg:leading-relaxed mb-2">{timelineData[expandedIndex].title}</h2>
                                <p className="text-sm sm:text-base text-black mb-4 text-left" dangerouslySetInnerHTML={{ __html: timelineData[expandedIndex].description }}>
                                </p>
                                {timelineData[expandedIndex].link && (
                                    <a href={timelineData[expandedIndex].link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Try it out                                    
                                        </a>
                                )}
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="w-full lg:w-2/3 lg:ml-12 mt-8 lg:mt-0">
                            <div className="container mx-auto w-full h-full">
                                <div className="relative wrap overflow-hidden p-4 h-full">
                                    <div className="border-2-2 absolute h-full border"
                                        style={{ left: '50%', border: '2px solid #F43F5E', borderRadius: '1%' }}></div>
                                    {timelineData.map((data, index) => (
                                        <div
                                            key={index}
                                            className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'
                                                }`}
                                            onMouseEnter={() => setExpandedIndex(index)}
                                        >
                                            <div className="order-1 w-5/12"></div>
                                            <div className={`order-1 w-5/12 px-1 py-4 ${index % 2 === 0 ? 'text-right' : 'text-left'
                                                }`}>
                                                <p className="mb-3 text-base text-rose-600">{data.date}</p>
                                                <h4 className="mb-3 font-bold text-lg sm:text-xl lg:text-2xl">{data.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="relative">
                                    <img className="mx-auto -mt-36 relative z-10" src="https://ldonatelli-lep.com/wp-content/uploads/elementor/thumbs/deskKid-01-oyihoyrtvryyjz83noihsukpv1q4sfkwi9zotty3po.png" alt="Timeline decoration" />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    // Mobile collapsible layout
                    <div className="w-full">
                        {timelineData.map((data, index) => (
                            <div
                                key={index}
                                className="mb-4 border-b border-gray-200"
                            >
                                <div
                                    className="py-4 px-6 flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleExpand(index)}
                                >
                                    <div>
                                        <h4 className="font-bold text-lg">{data.title}</h4>
                                        <p className="text-sm text-rose-600">{data.date}</p>
                                    </div>
                                    <span className="text-2xl">{expandedIndex === index ? '−' : '+'}</span>
                                </div>
                                {expandedIndex === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                                        {data.link && (
                                            <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline block mt-2">
                                                Play the demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Timeline;
