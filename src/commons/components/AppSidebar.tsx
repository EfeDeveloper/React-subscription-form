import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/core/components/ui/sidebar";
import { HandCoins, Lightbulb, PackageSearch } from "lucide-react";

const items = [
  {
    title: "Solutions",
    icon: Lightbulb,
  },
  {
    title: "Products",
    icon: PackageSearch,
  },
  {
    title: "Pricing",
    icon: HandCoins,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-5">
            <figure>
              <img
                src="http://fakeimg.pl/40x40?text=Logo&font=lobster"
                alt="sidebarLogo"
                className="rounded-md w-10 h-10"
              />
            </figure>
          </SidebarGroupLabel>
          <SidebarGroupLabel>Subscription Form</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <section className="cursor-pointer">
                      <item.icon />
                      <span>{item.title}</span>
                    </section>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
