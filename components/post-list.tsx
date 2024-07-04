
"use client"

import type { PostsWithLikes } from '@/lib/types/supabase';

interface PostListProps {
    post:PostsWithLikes
};

export const PostList = ({  children}: WithChildren<PostListProps>) => {
    return(
        <div>
            {children}
        </div>
    )
};