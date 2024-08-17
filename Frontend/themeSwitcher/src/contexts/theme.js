import {createContext,useContext} from 'react';
import {isReturningOnlyNull} from "eslint-plugin-react/lib/util/jsx.js";

const themeContext = createContext({
    themeMode: 'light',
    darkTheme: ()=>{},
    lightTheme: ()=>{},
});

export default themeContext;

export const themeProvider = themeContext.Provider;

export const useTheme = () => useContext(themeContext);