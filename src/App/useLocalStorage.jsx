import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [syncItem, setSyncItem] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
        setSyncItem(true);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [syncItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const sync = () => {
    setLoading(true);
    setSyncItem(false);
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sync,
  };
}

export { useLocalStorage };
