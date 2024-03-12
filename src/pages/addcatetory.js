import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { categories } from "../utils/categories";

async function handlerAddCategory(e) {
  const AddCategoryURL = "http://localhost:3001/add-category";
  // e.preventDefault();

  // console.log(e.target.name.value);
  // const catName = e.target.name.value;
  const catName = e.name;
  const data = {
    name: catName,
    id: uuidv4(),
  };
  console.log("data:", data);
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

// export default function addcatetory() {
//   return (
//     <div className="w-full flex flex-row">
//       <div>afsdggfasgd</div>
//       <form class="space-y-4" onSubmit={handlerAddCategory}>
//         <input
//           // class="btn btn-block bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100"
//           class="bg-primary"
//           name="name"
//           // value="Add"
//         />
//         <input
//           type="submit"
//           class="btn btn-block bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100"
//           value="Add"
//         />
//       </form>
//       {categories.categories.forEach((e) => {
//         return handlerAddCategory(e);
//       })}
//     </div>
//   );
// }
