import { Button } from "@/core/components/ui/button";

const Header = () => {
  return (
    <header>
      <section className="flex justify-end gap-4 m-2 md:m-10">
        <Button variant="default">Log in</Button>
        <Button variant="outline">Get Started</Button>
      </section>
    </header>
  );
};

export default Header;
