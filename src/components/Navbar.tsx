import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export function NavbarComponent({about}:{about:any}) {
  return (
    <Navbar fluid className="bg-[#133e87]">
      <Navbar.Brand as={Link} to="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold" style={{ color: "#f3f3e0" }}>
          {about.companyName}
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button as={Link} to='/contact' color='gray' className="bg-[#CBDCEB] font-bold text-[#133E87] hover:bg-[#CBDCEB] hover:text-[#133e87]">
          Contact 📞
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" className="text-[#f3f3e0]">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" className="text-[#f3f3e0]">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/product" className="text-[#f3f3e0]">
          Products
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact" className="text-[#f3f3e0]">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
