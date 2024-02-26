import { Navbar } from "@/components";
export const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};
