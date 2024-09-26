import React, { useEffect, useRef, useMemo } from 'react';
import { Card } from "@nextui-org/react";
import PropTypes from 'prop-types';

const InfiniteMovingCards = ({ experiences }) => {
    const containerRef = useRef(null);

    // Memoize rotations based on experiences
    const rotations = useMemo(() => {
        return experiences.concat(experiences).map(() => Math.random() * 10 - 5);
    }, [experiences]);

    useEffect(() => {
        const container = containerRef.current;
        const scrollSpeed = 1; // Speed of scrolling
        const intervalTime = 18; // Interval time for scrolling

        const animateCards = () => {
            container.scrollLeft += scrollSpeed;
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
            }
        };

        const interval = setInterval(animateCards, intervalTime); // 60fps

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden whitespace-nowrap" ref={containerRef}>
            <div className="flex">
                {rotations.map((rotation, index) => (
                    <Card 
                        key={index} 
                        shadow="sm" 
                        isPressable
                        className="card min-w-[310px] h-[210px] m-4 flex flex-col items-center justify-center transform transition-transform duration-300 rounded-2xl bg-white"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    >
                        <img 
                            src={experiences[index % experiences.length]?.image} 
                            alt={`Experience ${index + 1}`} 
                            className="w-auto max-h-24 object-cover rounded-lg mb-4" 
                        />
                        <h2 className="text-base font-bold">{experiences[index % experiences.length]?.title}</h2>
                        <p className="text-gray-600">{experiences[index % experiences.length]?.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

// Prop types for validation
InfiniteMovingCards.propTypes = {
    experiences: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired
};

export default InfiniteMovingCards;
