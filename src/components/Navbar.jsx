import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Image,
} from "@nextui-org/react";
import Logo from "../assets/logo.png";
import {
  Link,
  Link as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom"; // Rename Link to avoid conflict
import { useState, useEffect } from "react";

export default function Nav() {
  const location = useLocation();
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const isActive = (path) => activePath === path;

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigasi ke halaman /about
    navigate("/about");

    // Menggunakan setTimeout untuk memberi waktu sebelum menggulir
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Menunggu sebentar sebelum menggulir
  };

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      variant="floating"
      className="shadow-lg bg-white"
    >
      <NavbarBrand>
        <RouterLink to="/" className="flex items-center">
          <Image src={Logo} className="w-10 h-10" alt="Logo" />
          <p className="font-bold text-xl text-inherit ml-2">MYPortf</p>
        </RouterLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6 justify-center">
        <NavbarItem>
          <RouterLink
            to="/"
            className={`text-foreground ${
              isActive("/")
                ? "text-blue-600 font-semibold "
                : "hover:text-blue-500 transition-colors duration-300"
            }`}
          >
            Home
          </RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink
            to="/about"
            className={`text-foreground ${
              isActive("/about")
                ? "text-blue-600 font-semibold "
                : "hover:text-blue-500 transition-colors duration-300"
            }`}
          >
            About
          </RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink
            to="/experience"
            className={`text-foreground ${
              isActive("/experience")
                ? "text-blue-600 font-semibold "
                : "hover:text-blue-500 transition-colors duration-300"
            }`}
          >
            Experience
          </RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink
            to="/skills"
            className={`text-foreground ${
              isActive("/skills")
                ? "text-blue-600 font-semibold "
                : "hover:text-blue-500 transition-colors duration-300"
            }`}
          >
            Skills
          </RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink
            to="/interest"
            className={`text-foreground ${
              isActive("/interest")
                ? "text-blue-600 font-semibold "
                : "hover:text-blue-500 transition-colors duration-300"
            }`}
          >
            Interest
          </RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink
            to="/awards"
            className={`text-foreground ${
              isActive("/awards")
                ? "text-blue-600 font-semibold "
                : "hover:text-blue-500 transition-colors duration-300"
            }`}
          >
            Awards
          </RouterLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <Button
          auto
          flat
          onClick={handleClick}
          className="bg-gradient-to-r from-blue-500 to-purple-800 text-white"
        >
          Contact Me
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
