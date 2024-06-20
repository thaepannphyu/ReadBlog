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
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";

const Blog = () => {
  const [displayData, setDisplayData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getAllBlogs, isLoading } = useGetBlogsByPageQuery(currentPage);

  //  console.log(getAllBlogs["meta"]['last_page'])
  const Blogs = useMemo(() => {
    return {
      data: getAllBlogs?.data,
      links: getAllBlogs?.meta?.links,
      isLoading,
      lastPage: getAllBlogs?.meta?.last_page,
    };
  }, [getAllBlogs, isLoading]);


  const query = useSelector((state) => state.blogQueryFilter.query);
  const { data: filtered, isLoading: loadBysearch } =
    useFilterBlogsQuery(query);
  const searched = useMemo(() => {
    return {
      data: filtered?.data,
      links: filtered?.meta?.links,
      isLoading: loadBysearch,
    };
  }, [filtered, loadBysearch]);

  
  useEffect(() => {
    if (searched) {
      setDisplayData(searched);
    } else {
      setDisplayData(Blogs);
    }
  }, [setDisplayData, searched, Blogs, query]);

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
        <SearchBarWrapper />
      </div>
      <BlogTable blogs={displayData} />
      {isLoading == false ? (
        <Pagination
          currentPage={currentPage}
          lastPage={Blogs?.lastPage}
          setCurrentPage={setCurrentPage}
          links={Blogs?.links}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default Blog;
// blogs={query?searched:Blogs}
