import PropTypes from "prop-types";
import { useDeleteCategoriesMutation } from "../../../App/Category/CategoryApi";





const CategoryTableData = ({categories}) => {

  const [deleteCategories]=useDeleteCategoriesMutation();
 
  const handleDeleteCategory = async (id) => {
    try {
       await deleteCategories(id);
    } catch (error) {
      console.error('Failed to delete the categories:', error);
    }
  };


  return (
    <>
      {categories?.map((category,index) => {
        return (
          <tr
            key={index+1}
            className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
              {index+1}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
              {category.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
              {category.description.substring(0,25)}
            </td>
            
            <td className="px-6 flex gap-10 justify-end py-4 whitespace-nowrap text-end text-sm font-medium">
              <a
                href={`categories/${category.id}/edit`}
                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                Edit
              </a>
             
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="inline-flex hover:text-red-300 active:text-red-700 items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600  disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                  Delete
                </button>
             
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CategoryTableData;

CategoryTableData.propTypes = {
    categories: PropTypes.array,
};
