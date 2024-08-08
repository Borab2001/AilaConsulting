import Image from "next/image";
import Link from "next/link";


const Header = () => {

    const links = [
        {
            name: 'About',
            url: '/about',
        },
        {
            name: 'Contact',
            url: '/contact',
        },
        {
            name: 'Services',
            url: '/services',
        },
        
    ];

    return (
        <header className="w-full h-16 bg-slate-100 p-4 rounded-2xl flex items-center justify-between">
            <Image src="/aila.svg" width={280} height={280} alt={""} />

            <nav className="flex flex-row space-x-8 uppercase">
                {links.map((link, index) => (
                    <Link href={link.url} key={`link${index}`}>
                        {link.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
 
export default Header;