import { CatHouse } from "@/icons";

export const Transaction = ({ e }) => {
  return (
    <div
      className={`flex flex-row justify-between bg-base-100 px-6 py-3 rounded-xl`}
    >
      <div className="flex flex-row items-center gap-4">
        <label className="label cursor-pointer">
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
        <CatHouse />
        <div>
          <h2>{e.description}</h2>
          <p className="text-base-300">{e.createdAt}</p>
        </div>
      </div>
      <p
        className={`${
          e.transaction_type == "INCOME" ? "text-error" : "text-accent"
        }`}
      >
        {e.transaction_type == "INCOME" ? "-" : "+"}
        {e.amount}
      </p>
    </div>
  );
};
