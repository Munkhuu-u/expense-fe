import { Plus, Logo } from "@/icons";
export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <Logo />
        </a>
        <a className="btn border-0">Dashboard</a>
        <a className="btn border-0">Records</a>
      </div>
      <div className="flex-none gap-2 ">
        <a className="btn rounded-full">
          {" "}
          <Plus />
          Record
        </a>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar "
        >
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
