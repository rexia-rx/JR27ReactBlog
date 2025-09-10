import React from "react";

export default function Pagination({
  paginate,
  postsPerPage,
  currentPage,
  totalPosts,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex flex-wrap rounded">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              href="#"
              className={`text-blue-800 border border-gray-300 py-2 px-3 -ml-px mb-4 inline-block ${currentPage === number ? "bg-[#61dafbaa] text-white" : ""}`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
