import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  return (
    <>
      <main className="container mx-auto sticky top-3 z-10 px-2 flex justify-center ">
        <div className="grid grid-flow-col justify-stretch items-center absolute  font-bold bg-black opacity-60 shadow-lg bg-gray/30 border rounded-3xl md:py-0 lg:py-[0.1em] px-[2em] w-[80%]">
          <h1 className="text-white">Parking Share</h1>
          <MobileNav />
        </div>
      </main>
    </>
  );
};

export default Navbar;
