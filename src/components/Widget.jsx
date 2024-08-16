import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

const Widget = ({ widget, categoryId }) => {
  const { removeWidget } = useContext(DashboardContext);

  return (
    <div className="relative p-4 border rounded-lg shadow-sm bg-white flex flex-col justify-between">
      <button
        onClick={() => removeWidget(categoryId, widget.id)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        <CloseIcon />
      </button>
      <div>
        <h3 className="text-lg font-semibold mb-2">{widget.name}</h3>
        <p className="text-sm text-gray-600">{widget.text}</p>
      </div>
    </div>
  );
};

// PropTypes validation
Widget.propTypes = {
  widget: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  categoryId: PropTypes.number.isRequired,
};

export default Widget;
