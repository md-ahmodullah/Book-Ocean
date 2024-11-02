import { toast } from "react-toastify";
const getStoredList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredList = (id) => {
  const storedList = getStoredList();
  if (storedList.includes(id)) {
    toast.error("Already exists in Read List!");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    toast.success("Successfully Added to your Read List!");
  }
};

export { addToStoredList, getStoredList };
