import type { Database } from '@/lib/types/supabase';
import  { SupabaseClient } from '@supabase/supabase-js';

export type TypedSupabaseClient = SupabaseClient<Database>;

export interface PostsWithLikes {
  author_id: string;
  content: string;
  created_at: string;
  id: string;
  is_liked: boolean;
  like_count: number;
  reply_count: number;

  profiles: {
    id: string;
    username: string;
    display_name: string;
    created_at: string;
    avatar: string;
  };
}
