import { createContext } from 'react';
import SHOP_DATA from "./shop.data";

const CollectionsContext = createContext(SHOP_DATA); // gives us initial state

export default CollectionsContext;

