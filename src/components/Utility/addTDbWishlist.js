import { toast } from "react-toastify";
const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wishlist");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    toast.error("Already exists in your Wishlist!");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wishlist", storedListStr);
    toast.success("Successfully Added to your Wishlist!");
  }
};

export { addToStoredWishList, getStoredWishList };
