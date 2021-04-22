import { createContext, useContext, useReducer } from "react";

export const AuthContext = createContext();
export const AuthDispatcher = createContext();

const initialState = {
  credentials: {},
  errors: {},
  loading: false,
  authenticated: false,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.loading,
      };
    }

    case "SET_ERRORS": {
      return {
        ...state,
        loading: action.loading,
        errors: action.errors,
      };
    }

    case "SET_USER": {
      return {
        authenticated: true,
        loading: false,
        errors: {},
        ...action.payload,
      };
    }

    case "SET_AUTHENTICATION": {
      return {
        ...state,
        authenticated: action.authenticated,
      };
    }

    case "SET_UNAUTHENTICATED": {
      return initialState;
    }

    default: {
      throw new Error(`Unhandled action Type: ${action.type}`);
    }
  }
};

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthDispatcher.Provider value={dispatch}>
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    </AuthDispatcher.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
export const useAuthDispatcher = () => useContext(AuthDispatcher);
