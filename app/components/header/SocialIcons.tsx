import FontAwesomeIconBrand from "@/app/components/utils/FontAwesomeIconBrand";
import Link from "next/link";
import navItems from "@/app/components/header/navItems";
export default function Main() {
  return (
    <div className="flex justify-end items-center">
      {navItems.map((item) => {
        if (item.faIcon != null)
          return (
            <div key={item.text}>
              <Link
                href={item.href}
                target="_blank"
                className="text-primary hover:text-site_orange transition-colors duration-300 text-2xl font-titillium mr-4"
              >
                <FontAwesomeIconBrand icon={item.faIcon} />
              </Link>
            </div>
          );
      })}
    </div>
  );
}
