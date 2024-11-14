import { AppSidebar } from "@/commons/components/AppSidebar";
import Footer from "@/commons/components/Footer";
import Header from "@/commons/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/core/components/ui/sidebar";

const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-dvw">
        <SidebarTrigger />
        <section className="grid grid-rows-[auto_1fr_auto] min-h-[100dvh]">
          <Header />
          <section className="m-2 md:m-10">{children}</section>
          <Footer />
        </section>
      </main>
    </SidebarProvider>
  );
};

export default FormLayout;
