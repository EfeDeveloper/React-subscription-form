import { AppSidebar } from "@/commons/components/AppSidebar"
import Footer from "@/commons/components/Footer"
import Header from "@/commons/components/Header"
import { SidebarProvider, SidebarTrigger } from "@/core/components/ui/sidebar"

const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
        <SidebarProvider>
        <AppSidebar />
        <main className="w-dvw">
          <SidebarTrigger />
          <section className="flex flex-col gap-20 mx-10">
          <Header />
          {children}
          <Footer />
          </section>
        </main>
      </SidebarProvider>
  )
}

export default FormLayout