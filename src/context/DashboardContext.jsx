import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    // Example data
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "1",
          name: "Cloud Accounts",
          text: "Connected: 2, Not Connected: 2",
        },
        {
          id: "2",
          name: "Cloud Account Risk Assessment",
          text: "Total: 9659, Passed: 7253, Failed: 1689",
        },
      ],
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [],
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const addWidget = (categoryId, widgetName, widgetText) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: [
                ...category.widgets,
                {
                  id: Date.now().toString(),
                  name: widgetName,
                  text: widgetText,
                },
              ],
            }
          : category
      )
    );
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      )
    );
  };

  const removeWidgetFromCategoryList = (categoryId, widgetId) => {
    removeWidget(categoryId, widgetId);
  };

  return (
    <DashboardContext.Provider
      value={{
        categories,
        addWidget,
        removeWidget,
        removeWidgetFromCategoryList,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

// PropTypes validation
DashboardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardProvider;
