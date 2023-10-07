import Image from 'next/image'

function About() {
    return (
        <div className="mt-10">
        <h1 className="text-3xl text-center font-bold">ABOUT THE PROJECT</h1>
        <div>
            <Image src="./astronaut.svg" alt="astro" width={100} height={100}/>
        </div>
        </div>
    );
}

export default About;