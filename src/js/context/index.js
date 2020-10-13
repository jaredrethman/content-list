import React from "react";

const ContentListContext = React.createContext( {
    display: [],
    queryArgs: [],
    itemInSearch: 0,
    setItemInSearch: () => {
    },
} );

export const ContentListProvider = ContentListContext.Provider;
export const ContentListConsumer = ContentListContext.Consumer;

export default ContentListContext;
