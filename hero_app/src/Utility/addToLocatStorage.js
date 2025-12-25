//make two function

const getStoredApp = () => {
  const storedAppString = localStorage.getItem("appList");
  if (storedAppString) {
    const storedAppData = JSON.parse(storedAppString);
    return storedAppData;
  } else {
    return [];
  }
};

const addToLocalStorage = (id) => {
  const storedAppData = getStoredApp();
  if (storedAppData.includes(id)) {
    alert("App Already Installed");
  } else {
    storedAppData.push(id);
    console.log(storedAppData);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("appList", data);
  }
};

//make another function for remove
const removeFromStoredApp = (id) => {
  const storedApp = getStoredApp();
  //true if both are not equal
  const remaining = storedApp.filter(
    (appId) => parseInt(appId) !== parseInt(id)
  );
  localStorage.setItem("app-installation", JSON.stringify(remaining));
};
export { getStoredApp, addToLocalStorage, removeFromStoredApp };
