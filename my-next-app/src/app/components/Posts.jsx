import { use } from "react";

const Posts = ({postsPromise}) => {
    const posts = use(postsPromise);
    console.log(posts)//array of objects
    return (
        <div>
            posts: {
                posts.length
            }
        </div>
    );
};

export default Posts;