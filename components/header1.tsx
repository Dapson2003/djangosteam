import Link from "next/link"; 

export default function header(){
    return <header className="grid grid-cols-7 bg-gray-200 h-16">
        <nav className="col-span-5 col start-2">
            <h1>Sinno Shop</h1>
            <Link href={"/"}> ALL </Link>
        </nav>

    </header>

}