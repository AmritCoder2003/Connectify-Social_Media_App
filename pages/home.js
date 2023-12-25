import PropTypes from "prop-types";
import Image from 'next/image';
import Comment from "./comment";
const Home = ({ posts}) => {
  return (
    <div className="p-3 bg-white">
      {posts.map((post)=>(
        <div className="border-2 border-blue-900 rounded-md mt-5 bg-sky-500" key={`post-${post._id}`}>
        <div className="px-2.5 py-2.5">
          <div className="flex flex-col p-2 rounded-md bg-teal-300 ">
            <Image
              src="data:image/png;base64,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"
              alt="user-pic"
              width={40}
              height={40}
              className='rounded-full'
            />
            <div className='flex flex-col'>
              <span className="font-semibold text-base text-black">{post.user.name}</span>
              <span className="font-semibold text-xs text-blue-900">a minute ago</span>
            </div>
          </div>
        </div>
        <div className=" pl-2 font-normal not-italic text-base py-1.5 ml-3 border-b-2 w-1/4 bg-white text-black">{post.content}</div>

       
          <div className="m-3 p-1 w-32 flex border-t-2 border-b-2 border-blue-900 bg-blue-900 rounded-md px-1.5 py-2.5 font-normal text-sm">
            <div className="flex items-center ml-4 ">
              <Image
                src="data:image/png;base64,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"
                alt="user-pic"
                width={18}
                height={18}
                className='rounded-md cursor-pointer'
              />
              <span className='ml-2'>5</span>
            </div>

            <div className="flex items-center ml-4 ">
              <Image
                src="data:image/png;base64,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"
                alt="user-pic"
                width={18}
                height={18}
                className='rounded-md cursor-pointer'
              />
              <span className='ml-2'>2</span>
            </div>
          </div>
       

        <div className="mt-4 px-2.5 py-2.5 ">
          <input
            className="p-1.5 rounded-lg h-9 m-0 w-full test-base border-2 box-border border-blue-900 outline-none text-black"
            placeholder="Start typing a comment"
          />
        </div>

        <div className="px-2.5 py-2.5 ">
              {post.comments.map((comment) => (
                <Comment comment={comment} />
              ))}
        </div>
      </div>
      ))}
      
    </div>
  );
};
Home.propTypes={
  posts:PropTypes.array.isRequired,
}
export default Home;