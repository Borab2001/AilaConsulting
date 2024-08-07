import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full h-16 bg-slate-100 p-4 rounded-2xl flex items-center justify-between">
            <Image src="/aila.svg" width={280} height={280} alt={""} />

            <nav className="flex flex-row space-x-8 uppercase">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/services">Services</Link>
            </nav>
        </header>
    );
}
 
export default Header;