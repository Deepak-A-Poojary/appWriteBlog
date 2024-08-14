import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/appWriteConfig.js";
import { Container, Postcard } from "../components";
import authService from "../appwrite/auth.js";
import { useSelector } from "react-redux";

function Home() {
    const [posts, setPosts] = useState([]);

    console.log(posts.length)

    const isLoggedIn = useSelector(state => state.auth.status);

    useEffect(() => {
        appwriteService.getPosts().then(posts => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);
    if (isLoggedIn && posts.length <= 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                No posts are available
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
    
    if (isLoggedIn && posts.length > 0) {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map(post => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <Postcard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        );
    }

    if (!isLoggedIn) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;
