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
    toast.error("Already Added this Book.");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wishlist", storedListStr);
    toast.success("Successfully Added this book!");
  }
};

export { addToStoredWishList, getStoredWishList };
