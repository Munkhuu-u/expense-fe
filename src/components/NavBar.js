import { Plus, Logo } from "@/icons";
export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 max-w-[1200px] m-auto">
      <div className="flex-1">
        <Logo />
        <button className="btn bg-[white] shadow-none border-0">
          Dashboard
        </button>
        <button className="btn bg-[white] shadow-none border-0">Records</button>
      </div>
      <div className="flex-none gap-2 "></div>
      <div className="flex flex-row gap-6">
        <button class="btn bg-primary rounded-3xl text-base-100 hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100">
          <Plus />
          Record
        </button>
        <div role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
