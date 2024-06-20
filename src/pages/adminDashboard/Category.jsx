
import Title from "../../components/reusableComponent/Title";
import { Link} from "react-router-dom";
import Button from "../../components/reusableComponent/Button";
import { useMemo, useState } from "react";
import { useGetCategoriesQuery } from "../../App/Category/CategoryApi";
import CategoryTable from "../../components/dashboardComponent/categoryComponents/CategoryTable";



const Category = () => {

  
  const [currentPage, setCurrentPage] = useState(1);
  const { data:getAllCategories, isLoading } = useGetCategoriesQuery(currentPage);

  const Categories = useMemo(() => {
    return { data: getAllCategories?.data ,links:getAllCategories?.meta?.links,isLoading,lastPage:getAllCategories?.meta?.last_page};
  }, [getAllCategories,isLoading ]);

//   const query = useSelector((state) => state.BlogQueryFilter?.query);
//   const { data:filtered,isLoading:loadBysearch } = useFilterBlogsQuery(query);

  
  
  

//   const searched = useMemo(() => {
//     return { data: filtered ?.data ,links:filtered ?.meta?.links,isLoading:loadBysearch };
//   }, [filtered,loadBysearch ]);
  
 

// if( isLoading ==true){
//   return <>Loading</>
// }

console.log(Categories)

  return (
    <section className="flex flex-col gap-10">
     
      <Title title="Category Management"/>
      <div className="flex">
      <Link to="/dashboard/categories/create">
        <Button btn="CREATE Categories"/>
      </Link>
      {/* <SearchBarWrapper/> */}
      </div>
      <CategoryTable categories={Categories}/>
      {/* {isLoading==false?<Pagination currentPage={currentPage} lastPage={Blogs?.lastPage} setCurrentPage={setCurrentPage} links={Blogs?.links}/>:""} */}
    </section>
  )
}

export default Category
// blogs={query?searched:Blogs}