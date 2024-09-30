import Link from "next/link";


const Navbar = () => {
    return (
        <div className="bg-teal-700 text-white p-3 flex gap-6 justify-center">
            
            <Link href={'/Home'}>Home</Link>
            <Link href={'/menu'}>Menu</Link>
            <Link href={'/contact'}>Contact</Link>
            <Link href={'/login'}>Login</Link>

        </div>
    );
};

export default Navbar;