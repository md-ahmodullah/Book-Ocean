import { PiSortAscendingBold } from "react-icons/pi";
export default function SortBy({ sort, onSort }) {
  return (
    <div>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn btn-primary m-1 text-xl">
          <PiSortAscendingBold className="text-xl" />
          {sort ? sort : "Sort By"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => onSort("Rating")}>
            <a>Rating</a>
          </li>
          <li onClick={() => onSort("Pages")}>
            <a>Pages</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
