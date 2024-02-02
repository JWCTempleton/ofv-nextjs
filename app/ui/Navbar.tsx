import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

export default function NavBar() {
  return (
    <div className="bg-slate-900">
      <nav className="flex h-[60px] items-center justify-end mr-4">
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
}
