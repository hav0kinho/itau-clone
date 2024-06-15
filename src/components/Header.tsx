import Image from "next/image";

import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";

import Logo from "@/assets/logo.svg";
import IconUser from "@/assets/icon-user.svg";

export function Header() {
  return (
    <header className="flex items-center w-full h-20 bg-primary-orange">
      <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="Logo" />
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name="Para você" />
              </li>
              <li>
                <ItemMenu name="Para empresas" />
              </li>
              <li>
                <ItemMenu name="Serviços" />
              </li>
              <li>
                <ItemMenu name="Ajuda" />
              </li>
            </ul>
          </div>
          <Search />
        </div>
        <button className="flex items-center gap-4 bg-primary-blue p-5 rounded-lg">
          <Image src={IconUser} alt="Icon user" />
          <span className="text-white font-bold">Acessar conta</span>
        </button>
      </div>
    </header>
  );
}
