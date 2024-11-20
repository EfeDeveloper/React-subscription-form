import { Button } from "@/core/components/ui/button";
import { Input } from "@/core/components/ui/input";

const Footer = () => {
  const menuOptions = [
    "Pricing and Plans",
    "About Us",
    "Support",
    "Privacy Policy",
    "Terms of Service",
  ];
  return (
    <footer className="flex flex-col justify-center items-center gap-4 px-2 md:px-4 py-3 md:py-10 text-center text-sm text-text-secondary">
      <figure>
        <img
          src="http://fakeimg.pl/40x40?text=Logo&font=lobster"
          alt="footerLogo"
          className="rounded-md w-10 h-10"
        />
      </figure>
      <p>© 2024 Edwin Villa & Johan Guerrero. All rights reserved.</p>
      <div className="flex md:flex-row flex-col gap-2">
        <Input type="email" placeholder="email@example.com" className="w-full" />
        <Button variant="default">Try Now</Button>
      </div>
      <div>
        {menuOptions.map((option) => (
          <Button key={option} variant="link" className="text-text-secondary">
            {option}
          </Button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
