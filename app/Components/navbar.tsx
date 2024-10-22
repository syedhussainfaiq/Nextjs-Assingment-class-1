import Link from "next/link"
export default function Navbar(){
    return(
        <div>
            <Link href='/Home'>Home</Link>
            <br/>
            <Link href='/About'>About</Link>
            <br/>
            <Link href='/Services'>Services</Link>
            <br/>
            <Link href='/Blog'>Blog</Link>
            <br/>
            <Link href='/Contact'>Contact</Link>

          
            
        </div>
    )
}