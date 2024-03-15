import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));

  const {
    syncItem,
    item,
    loading,
    error,
  } = state;

  // const [syncItem, setSyncItem] = React.useState(true);
  // const [item, setItem] = React.useState(initialValue);
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);
  const onError = (error) => dispatch({ type:actionTypes.error, payload: error });
  const onSuccess = (parsedItem) => dispatch({ type:actionTypes.success, payload: parsedItem });
  const onSave = (newItem) => dispatch({ type:actionTypes.save, payload: newItem });
  const onSync = () => dispatch({ type:actionTypes.sincronize });

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
          // setItem(parsedItem);
        }
        // setItem(parsedItem);
        // setLoading(false);
        // setSyncItem(true);
        onSuccess(parsedItem)
      } catch (error) {
        // console.log(error);
        // setLoading(false);
        // setError(true);
        onError(error);
      }
    }, 2000);
  }, [syncItem]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      // setItem(newItem);
      onSave(newItem);
    } catch (error) {
        // setLoading(false);
        // setError(true);
        onError(error);
    }

  };

  const sync = () => {
    // setLoading(true);
    // setSyncItem(false);
    onSync();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sync,
  };
}

const initialState = ({ initialValue }) => ({
  syncItem: true,
  item: initialValue,
  loading: true,
  error: false,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    syncItem: true,
    loading: false,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    syncItem: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage };
