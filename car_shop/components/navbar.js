import Link from "next/link";


export default function Navbar(){
    return(
        <div className="w-full h-14 border-b-2 flex justify-between">
            <div className="flex ">
                <Link href="/" className="h-full flex items-center px-4">Home</Link>
                <Link href="/showcase" className="h-full flex items-center px-4">Showcase</Link>
            </div>
            <div>
                <Link href="/cart" className="h-full flex items-center px-4">Cart</Link>
            </div>
            
            
        
        
        </div>
    )
}