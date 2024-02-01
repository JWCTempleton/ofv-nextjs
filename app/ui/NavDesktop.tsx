import { routes } from "./routes";

export const NavDesktop = () => {
  return (
    <ul className="hidden sm:flex items-center gap-7 text-md font-bold mr-6">
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <li key={title}>
            <a href={href} className="gap-7 hover:text-sky-500 transition-all">
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
