const setStorage = (key, data) => {
    const dataAsString = JSON.stringify(data);
    const encodedData = btoa(dataAsString);
    localStorage.setItem(key, encodedItem);
};

const getStorage = (key) => {
    return JSON.parse(atob(localStorage.getItem(key)));
}

const clearStorage = (key) => localStorage.removeItem(key);

const storageHasData = () => localStorage.length > 0;