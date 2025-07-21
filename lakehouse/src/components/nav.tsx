import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { navItems } from "../../data/mock-data";

export default function Nav() {

    return (
    <nav className="fixed top-0 left-0 z-1 right-0 w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="w-32" />

        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  asChild
                  className="focus:bg-transparent active:bg-transparent"
                >
                  <Link
                    href={item.href}
                    className="text-sm text-black hover:text-blue-600 hover:bg-transparent focus:outline-none transition-colors"
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div>
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}