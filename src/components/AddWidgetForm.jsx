import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { DashboardContext } from "../context/DashboardContext";

const AddWidgetForm = ({ categoryId }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const { addWidget } = useContext(DashboardContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (widgetName && widgetText) {
      addWidget(categoryId, widgetName, widgetText);
      setWidgetName("");
      setWidgetText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Widget
      </button>
    </form>
  );
};

// PropTypes validation
AddWidgetForm.propTypes = {
  categoryId: PropTypes.number.isRequired,
};

export default AddWidgetForm;
