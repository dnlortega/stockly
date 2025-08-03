import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon, BookAIcon } from "lucide-react";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* IMAGEM */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">STOCKLY</h1>
      </div>
      {/* BOTÕES */}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
            <LayoutGridIcon size={20} />
            Dashboard
        </SidebarButton>

        <SidebarButton href="/products">
            <PackageIcon size={20} />
            Produtos
        </SidebarButton>

        <SidebarButton href="/sales">
            <ShoppingBasketIcon size={20} />
            Vendas
        </SidebarButton>
    
        <SidebarButton href="/about">
            <BookAIcon size={20} />
            Sobre
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
