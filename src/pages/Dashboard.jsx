import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import AddWidgetForm from "../components/AddWidgetForm";
import CategoryList from "../components/CategoryList";
import WidgetList from "../components/WidgetList";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const { categories, removeWidget, searchTerm } = useContext(DashboardContext);

  const filteredCategories = categories.map((category) => {
    return {
      ...category,
      widgets: category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    };
  });

  return (
    <div className="dashboard p-6">
      <SearchBar />
      <CategoryList categories={filteredCategories} />
      {filteredCategories.map((category) => (
        <div key={category.id} className="category mb-8">
          <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
          <WidgetList
            widgets={category.widgets}
            categoryId={category.id}
            removeWidget={removeWidget}
          />
          <AddWidgetForm categoryId={category.id} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
