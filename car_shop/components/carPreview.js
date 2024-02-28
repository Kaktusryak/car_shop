import Link from "next/link";


export default function CarPreview({car}){

const style={
    backgroundImage: "url(" + `../images/showcase/${car.id}/1.png` + ")",
}

    return(

        <Link href={`vehicle/${car.id}`} style={style} className="w-4/5 border border-gray-50 border-solid h-48 place-self-center rounded-3xl flex flex-col  justify-end mb-4 bg-cover bg-center">
            <div className="w-full h-7 " >
                {car.brand}
            </div>

        </Link>
            
        

    )
}