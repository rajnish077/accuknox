import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";

const ChartWidget = ({ widget }) => {
  const data = {
    labels: ["Passed", "Failed"],
    datasets: [
      {
        label: widget.name,
        data: [7253, 1689], // Example data
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="relative p-4 border rounded-lg shadow-sm bg-white flex flex-col justify-between">
      <h3 className="text-lg font-semibold mb-2">{widget.name}</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

// PropTypes validation
ChartWidget.propTypes = {
  widget: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChartWidget;
