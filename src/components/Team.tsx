import Image from 'next/image'

const data = [
    {
        image:"/mee.jpg",
        name:'Dias Nugumanov',
        text:'Team lead, web-dev'
    },
    {
        image:"/bek.jpg",
        name:'Bek Slambek',
        text:'web-dev, designer'
    },
    {
        image:"/Zhibek.jpg",
        name:'Zhibek Zhumagul',
        text:'web-dev, AI developer'
    },
    {
        image:"/mee.jpg",
        name:'Yerassyl Serik',
        text:'3d modeling'
    },
    {
        image:"/Alikh.jpg",
        name:'Alikhan Serikov',
        text:'designer'
    },
    {
        image:"/user.jpg",
        name:'You',
        text:'THE BEST USER'
    }
]



function Team() {
    return (
        <div className="mt-10">
            <div>
                <h1 className="text-3xl text-center font-bold">ABOUT THE TEAM</h1>
            </div>
            <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 mx-16 justify-items-center">
            {
                data.map((currmember, index) :any => {
                    let member = (
                        <div className="bg-white w-52 text-center h-[250px] rounded-lg text-black flex justify-center flex-col items-center">
                            <div className='relative h-32 w-32'>
                                <Image src={currmember.image} alt='photo' fill className=" rounded-full" />
                            </div>
                            <div className="font-bold text-xl">{currmember.name}</div>
                           
                            <h4 className="font-normal text-base">{currmember.text}</h4>
                            
                        </div>
                      )
                    return(member)
                })

            }
            </div>
        </div>
    );
}




export default Team;