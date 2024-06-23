import DisplayedBlogs from "../Blogs/DisplayedBlogs";
import CategoryBadges from "./CategoryBadges.jsx";
import useGetDisplayedBlog from "../../../hooks/useGetDisplayedBlog.js";

const HomeDisplayData = () => {
  const { isLoading,displayedData, setFilterCategory } = useGetDisplayedBlog();

  
  if (isLoading == true) {
    return (
      <main className=" text-center container mx-auto px-6 sticky top-0 bg-gray-50 max-w-[78%] py-5  ">
        loading
      </main>
    );
  }

  return (
    <>
      <CategoryBadges setFilterCategory={setFilterCategory} />
      <DisplayedBlogs blogs={displayedData?.data} />
    </>
  );
};

export default HomeDisplayData;
