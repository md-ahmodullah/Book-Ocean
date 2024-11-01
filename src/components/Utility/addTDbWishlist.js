const getStoredList = () => {
  const storedListStr = localStorage.getItem("wishlist");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedList = getStoredList();
  if (storedList.includes(id)) {
    console.log(id, "Already Exists!");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wishlist", storedListStr);
  }
};

export { addToStoredWishList, getStoredList };
