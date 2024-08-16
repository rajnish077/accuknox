import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";

const WidgetList = ({ widgets, categoryId, removeWidget }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {widgets.map((widget) => (
        <div
          key={widget.id}
          className="relative p-4 border rounded-lg shadow-lg bg-white flex flex-col justify-between"
        >
          <h3 className="text-lg font-semibold mb-2">{widget.name}</h3>
          <p>{widget.text}</p>
          <button
            onClick={() => removeWidget(categoryId, widget.id)}
            className="absolute top-2 right-2 text-red-600"
          >
            <CloseIcon />
          </button>
        </div>
      ))}
    </div>
  );
};

// PropTypes validation
WidgetList.propTypes = {
  widgets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  categoryId: PropTypes.number.isRequired,
  removeWidget: PropTypes.func.isRequired,
};

export default WidgetList;
