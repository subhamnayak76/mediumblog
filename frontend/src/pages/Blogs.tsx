import { AppBar } from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="max-w-3xl w-full">
                    {loading ? (
                        <p>Loading...</p>
                
                    ) : (
                        blogs && blogs.map(blog => (
                            <BlogCard
                                key={blog.id}
                                id={blog.id.toString()}
                                author={{
                                    name: blog.author.name
                                }}
                                title={blog.title}
                                description={blog.content}
                                publishedDate={"2nd Feb 2024"}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}