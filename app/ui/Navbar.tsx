import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

export default function NavBar() {
  return (
    <div className="bg-slate-800">
      <nav className="container flex h-[60px] items-center justify-end">
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
}
