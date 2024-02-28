import { Login } from "../components";

export default function login() {
  return (
    <div className="flex flex-row h-screen">
      <div className={`w-1/2`}>
        <Login />
      </div>
      <div className="w-1/2 bg-blue-600"></div>
    </div>
  );
}
