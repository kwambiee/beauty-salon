import Link from "next/link";
import { menuItems } from "@/data/data";

const MenuItems = () => {
  return (
    <div className="relative">
      <ul className="py-0 px-[30px] max-w-[500px] mx-auto list-outside text-nowrap">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="flex items-center leading-8 uppercase hover:mr-4 hover:font-semibold text-white font-medium"
            >
              <div className="h-[2.8px] w-full hover:opacity-100 bg-white mr-4 opacity-50 "></div>
              <p className="">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
