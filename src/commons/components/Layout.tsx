import { AppSidebar } from "@/commons/components/AppSidebar";
import Footer from "@/commons/components/Footer";
import Header from "@/commons/components/Header";
import { SidebarProvider } from "@/core/components/ui/sidebar";

const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-dvw">
        <section className="grid grid-rows-[auto_1fr_auto] min-h-[100dvh]">
          <Header />
          <section className="mx-2 md:mx-10">{children}</section>
          <Footer />
        </section>
      </main>
    </SidebarProvider>
  );
};

export default FormLayout;
