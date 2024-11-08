import { Footer } from "flowbite-react";

export function FooterComponent({about}:{about:any}) {
  const trademark=about.companyName+'™'
  return (
    <Footer container className="bg-[#133e87] text-[#f3f3e0] mt-[2rem] rounded-none">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand 
            href="/"
            src={about.logo}
            alt="Company Logo"
            name={about.companyName}
          />
          <Footer.LinkGroup>
            <Footer.Link href="/about" className="text-[#f3f3e0]">About</Footer.Link>
            <Footer.Link href="/product" className="text-[#f3f3e0]">Products</Footer.Link>
            {/* <Footer.Link href="#offers" className="text-[#f3f3e0]">Offers</Footer.Link> */}
            <Footer.Link href="/contact" className="text-[#f3f3e0]">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by={trademark} className="text-[#f3f3e0]" year={2024} />
      </div>
    </Footer>
  );
}
