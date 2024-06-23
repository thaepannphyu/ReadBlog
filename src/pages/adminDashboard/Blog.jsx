import BlogTable from "../../components/dashboardComponent/blogComponents/BlogTable";
import Title from "../../components/reusableComponent/Title";

import {
  useFilterBlogsQuery,
  useGetBlogsByPageQuery,
} from "../../App/Blog/BlogApi";
import Pagination from "../../components/reusableComponent/Pagination";

import { Link } from "react-router-dom";
import Button from "../../components/reusableComponent/Button";
import SearchBarWrapper from "../../components/reusableComponent/SearchBarWrapper";
import {  useState } from "react";
import useGetDisplayedBlog from "../../hooks/useGetDisplayedBlog";

const Blog = () => {
  const { isLoading,displayedData, setFilterCategory } = useGetDisplayedBlog();
  const [currentPage, setCurrentPage] = useState(1);
 


 

  


  if (isLoading == true) {
    return <>Loading</>;
  }

  return (
    <section className="flex flex-col gap-10">
      <Title title="Blog Management" />
      <div className="flex">
        <Link to="/dashboard/blog/create">
          <Button btn="CREATE BLOG" />
        </Link>
        <SearchBarWrapper setFilterCategory={setFilterCategory} />
      </div>
      <BlogTable isLoading={isLoading} blogs={displayedData} />
      {/* {isLoading == false ? (
        <Pagination
          currentPage={currentPage}
          lastPage={Blogs?.lastPage}
          setCurrentPage={setCurrentPage}
          links={Blogs?.links}
        />
      ) : (
        ""
      )} */}
    </section>
  );
};

export default Blog;
// blogs={query?searched:Blogs}
