import React from 'react';
import Link from 'next/link';
import NewModel from '@/components/NewModel';

const Planets = [{
    name: 'Mercury',
    model: '/models/mercury.glb',
    description: 'Mercury is the smallest planet in our Solar System and the closest to the Sun. It is also the fastest of the eight planets. It takes Mercury 88 days to orbit the Sun',
    route: '/mercury'
},
{
    name: 'Venus',
    model: '/models/venus.glb',
    description: 'Venus is the second planet from the Sun and is the second brightest object in the night sky after the Moon. ',
    route: '/venus'
},
{
    name: 'Earth',
    model: '/models/earth.glb',
    description: 'Earth is the third planet from the Sun and is the largest of the terrestrial planets. The Earth is the only planet in our solar system not to be named after a Greek or Roman deity.',
    route: '/earth'
},
{
    name: 'Mars',
    model: '/models/mars.glb',
    description: 'Mars is the fourth planet from the Sun and is the second smallest planet in the solar system. ',
    route: '/mars'
},
{
    name: 'Jupiter',
    model: '/models/jupiter.glb',
    description: 'Jupiter is the fifth planet from the Sun and is the largest planet in the solar system. ',
    route: '/jupiter'
},
{
    name: 'Saturn',
    model: '/models/saturn.glb',
    description: 'Saturn is the sixth planet from the Sun and is the second largest in the solar system with an equatorial diameter of 119,300 km. ',
    route: '/saturn'
}, 
{
    name: 'Uranus',
    model: '/models/uranus.glb',
    description: 'Uranus is the seventh planet from the Sun. While being visible to the naked eye, it was not recognised as a planet due to its dimness and slow orbit. ',
    route: '/uranus'
},
{
    name: 'Neptune',
    model: '/models/neptune.glb',
    description: 'Neptune is the eighth and furthest planet from the Sun in the Solar System. It is the fourth-largest planet by diameter and the third-largest by mass.',
    route: '/neptune'
},
{
    name: 'Moon',
    model: '/models/moon.glb',
    description: 'Moon is the only satellite of Earth and is the fifth largest satellite in the Solar System.',
    route: '/neptune'
}
]


function PlanetList() {
    return (
        <div className='mt-10 mx-16'>
            <h1 className='text-3xl text-center font-bold mb-12'>AVAILABLE DESTINATIONS</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {Planets.map((planet, index) => (
                    <div key={index} className='bg-white text-black rounded-md p-4'>
                        <div className='mt-[-50px] flex justify-center'>
                        <NewModel scale={40} modelPath={planet.model}/>
                        </div>
                        <h2 className='text-xl font-bold mb-2'>{planet.name}</h2>
                        <p className='mb-4'>{planet.description}</p>
                        <Link href={planet.route} className='bg-[#BC4627] text-white py-2 px-4 rounded-sm hover:opacity-75'>Know more</Link>
                        </div> 
                ))}
            </div>
        </div>
    );
};



export default PlanetList;

