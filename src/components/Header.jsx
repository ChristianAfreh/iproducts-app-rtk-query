import MenuList from "./MenuList";

const Header = () => {
  return (
    <header className="w-full flex flex-row gap-2 justify-between px-8 py-4 bg-white shadow-lg sticky top-0 z-50">
      <a href="/" className="text-2xl font-bold">
        <span
          style={{
            fontFamily: "Satisfy",
            fontWeight: 900,
            fontStyle: "normal",
            fontSize: "3rem",
          }}
        >
          <span className="text-[#0047AB]">i</span>Product
        </span>
      </a>

      <MenuList />
    </header>
  );
};

export default Header;
