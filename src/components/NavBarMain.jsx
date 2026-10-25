import { Link } from "react-router"

export default function NavBarMain() {
  return (
    <>
      <div className="flex justify-center gap-5 font-bold py-5 bg-blue-900">
        <Link to="/" className="text-white hover:text-amber-300">Home</Link>
        <Link to="/about" className="text-white hover:text-amber-300">About</Link>
        <Link to="/contact" className="text-white hover:text-amber-300">Contact</Link>
        <Link to="/Product" className="text-white hover:text-amber-300">Product</Link>
      </div>
    </>
  )
}
