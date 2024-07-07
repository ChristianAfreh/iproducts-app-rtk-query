import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavLink.module.css";

const MenuList = () => {
  const menuItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "Cart",
      path: "/cart",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
  ];
  const [activeItem, setActiveItem] = useState(menuItems[0].title);

  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <nav className="flex flex-row gap-4 justify-evenly">
      {menuItems.map((menuItem, index) => (
        <NavLink
          onClick={() => handleClick(menuItem.title)}
          to={menuItem.path}
          key={index}
          className={
            styles.navLink +
            " " +
            (activeItem === menuItem.title ? `${styles.activeLink}` : "")
          }
        >
          <span>{menuItem.title}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default MenuList;
