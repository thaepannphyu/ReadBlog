
import TextAreaCustom from "../../formComponents/TextAreaCustom";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { useAuthUserQuery } from "../../../App/Auth/Auth";
import useCommentCreate from "../../../hooks/useCommentCreate";

const CommentCreate = ({ blogId }) => {
  const { allComments, textareaValue, handleChange, handleComment } =
    useCommentCreate(blogId);
  const { data: user } = useAuthUserQuery();

  return (
    <>
      <div
        id={`hs-basic-modal${blogId}`}
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div className="hs-overlay-open:opacity-100  hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-2xl sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col max-h-screen  bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex   justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 className=" font-semibold text-gray-800 dark:text-white">
                Modal title
              </h3>
              <button
                type="button"
                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                data-hs-overlay="#hs-basic-modal">
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 flex flex-col gap-5   overflow-y-auto">
              {allComments?.map((comment) => {
                
                if (user?.data?.user.id == comment?.id) {
                  return (
                    <div key={nanoid()} className="w-[80%] self-end">
                      <a className=" flex-row-reverse  inline-flex w-full items-start  ">
                        <img
                          alt="blog"
                          src="https://dummyimage.com/104x104"
                          className="size-9 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow  flex justify-end flex-col -my-1 px-3">
                          <div className="mt-1 shadow px-3 py-2 self-end rounded-full bg-blue-200  leading-relaxed text-gray-800 dark:text-neutral-400">
                            <p>{comment?.pivot.body}</p>
                          </div>
                        </span>
                      </a>
                    </div>
                  );
                }

                return (
                  <div key={nanoid()} className="w-[80%] self-start">
                    <a className="  inline-flex w-full  items-start ">
                      <img
                        alt="blog"
                        src="https://dummyimage.com/104x104"
                        className="size-9 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex justify-end flex-col -my-1 px-3">
                        <div className="mt-1 shadow px-3 py-2 self-start rounded-2xl bg-blue-200  leading-relaxed text-gray-800 dark:text-neutral-400">
                          <p>{comment?.pivot.body}</p>
                        </div>
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <TextAreaCustom
                value={textareaValue}
                handleChange={handleChange}
                className={"w-[80%] border-blue-50 rounded border-2 "}
              />
              <a
                onClick={handleComment}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#">
                Add
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCreate;

CommentCreate.propTypes = {
  blogId: PropTypes.number.isRequired,
};
