import ContentEditor from "../../reusableComponent/tinyMceEditor/ContentEditor";
import InputLabel from "../../formComponents/InputLabel";
import SubmitBtn from "../../formComponents/SubmitBtn";
import Label from "../../formComponents/Label";
import useBlogUpdate from "../../../hooks/useBlogUpdate";
import { useParams } from "react-router-dom";

const BlogSubmission = () => {

  const {blogId}=useParams();
  
  const { content, setContent, title, setTitle, handleUpdate } =
    useBlogUpdate(blogId);

 

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Blog Submission Form */}
      <main className="container mx-auto px-4 py-6 flex-grow">

        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Write Blog</h1>
          </div>
        </header>


        <section className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleUpdate}>

            {/* Title */}
            <div className="mb-4">
              <InputLabel
                setValue={setTitle}
                value={title}
                labelText="Title"
                type="text"
              />
            </div>

            {/* Category Tag*/}
            <div className="mb-4">
              <Label label={" Choose Category"} />
              <div className="mt-2 flex flex-wrap">
                <span className="bg-blue-200 text-blue-800 p-2 rounded-full mr-2 mb-2 cursor-pointer">
                  #category
                </span>
              </div>
            </div>

            {/* Content */}

            <div className="mb-4 ">
              <Label label={" Content"} />
              <ContentEditor setContent={setContent} content={content} />
            </div>

            {/* Submit Button */}
            <SubmitBtn btn="Add Post" />
          </form>
        </section>
      </main>
    </div>
  );
};

export default BlogSubmission;
