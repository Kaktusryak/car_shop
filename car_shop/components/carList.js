import CarPreview from "./carPreview"





export default function CarList({data}){

    
    const carList = data.map((item)=>{
        return (<CarPreview key={item.id} car={item}/>)
    })


    return(

        <div className="grid grid-cols-3 px-24 gap-4 text-center ">
            
            {carList}


        </div>
        

    )
}