import { useContext } from "react";
import PropTypes from "prop-types";
import { DashboardContext } from "../context/DashboardContext";

const CategoryList = () => {
  const { categories, removeWidgetFromCategoryList } =
    useContext(DashboardContext);

  const handleUncheck = (categoryId, widgetId) => {
    removeWidgetFromCategoryList(categoryId, widgetId);
  };

  return (
    <div className="p-6">
      {categories.map((category) => (
        <div key={category.id} className="category mb-6">
          <h2 className="text-xl font-bold mb-4">{category.name}</h2>
          {category.widgets.map((widget) => (
            <div key={widget.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`widget-${widget.id}`}
                defaultChecked
                onChange={() => handleUncheck(category.id, widget.id)}
                className="mr-2"
              />
              <label htmlFor={`widget-${widget.id}`} className="text-sm">
                {widget.name}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// PropTypes validation
CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoryList;
