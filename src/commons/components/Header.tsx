import { Button } from '@/core/components/ui/button';
import { useSidebar } from '@/core/components/ui/sidebar';
import { LayoutPanelLeft } from 'lucide-react';

const Header = () => {
  function CustomTrigger() {
    const { toggleSidebar } = useSidebar();

    return (
      <button onClick={toggleSidebar} className="flex gap-2">
        <LayoutPanelLeft className="text-text-secondary" />
        <span className="font-semibold text-text-secondary cursor-pointer">Menu</span>
      </button>
    );
  }

  return (
    <header>
      <section className="flex justify-between items-center gap-4 m-2 md:m-6 align-center">
        <CustomTrigger />
        <div className="flex justify-end gap-4">
          <Button variant="default">Log in</Button>
          <Button variant="outline">Get Started</Button>
        </div>
      </section>
    </header>
  );
};

export default Header;
