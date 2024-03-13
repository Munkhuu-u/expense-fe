import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { categories } from "../utils/categories";

async function handlerAddAllCategory(e) {
  const AddCategoryURL = "http://localhost:3001/add-all-category";
  const catName = e.name;
  const data = {
    name: catName,
    id: uuidv4(),
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const fetchData = await fetch(AddCategoryURL, options);
  const fetchJSON = await fetchData.json();
}

async function handlerDeleteRow(e) {
  e.preventDefault();
  const AddCategoryURL = "http://localhost:3001/delete-row";

  const tableName = e.target.table.value;
  const rowName = e.target.row.value;
  const data = {
    table: tableName,
    row: rowName,
  };

  console.log("data: ", data);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const fetchData = await fetch(AddCategoryURL, options);
  const fetchJSON = await fetchData.json();
}

export default function dbActions() {
  return (
    <div className="w-full flex flex-row">
      <div>afsdggfasgd</div>
      <button
        className="border-2"
        onClick={() =>
          categories.categories.forEach((e) => {
            return handlerAddAllCategory(e);
          })
        }
      >
        ADD ALL CATEGORIES
      </button>

      <form class="space-y-4" onSubmit={handlerDeleteRow}>
        <input
          type="name"
          placeholder="Table NAME"
          name="table"
          class="w-full input input-bordered"
        />
        <input
          type="name"
          placeholder="Row NAME"
          name="row"
          class="w-full input input-bordered"
        />
        <input
          type="submit"
          class="btn btn-block bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100"
          value="DELETE ROW"
        />
      </form>
    </div>
  );
}
