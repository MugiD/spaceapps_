import Chat from '@/components/Chat'


export default function Guide({params}: {params: {slug: string}}) {
    return (
    <div>
        {/* {params.slug} */}
        <Chat planetname={params.slug}/>
    </div>
    )
}