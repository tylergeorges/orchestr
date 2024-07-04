export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      likes: {
        Row: {
          id: string;
          liked_at: string;
          post_id: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          liked_at?: string;
          post_id: string;
          user_id?: string;
        };
        Update: {
          id?: string;
          liked_at?: string;
          post_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'likes_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'likes_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts_with_likes';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'likes_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts_with_meta';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'likes_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      posts: {
        Row: {
          author_id: string;
          content: string;
          created_at: string;
          id: string;
          like_count: number;
          reply_count: number;
          reply_to: string | null;
        };
        Insert: {
          author_id?: string;
          content?: string;
          created_at?: string;
          id?: string;
          like_count?: number;
          reply_count?: number;
          reply_to?: string | null;
        };
        Update: {
          author_id?: string;
          content?: string;
          created_at?: string;
          id?: string;
          like_count?: number;
          reply_count?: number;
          reply_to?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'posts_author_id_profiles_id_fk';
            columns: ['author_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      profiles: {
        Row: {
          avatar: string;
          created_at: string;
          display_name: string;
          email: string;
          id: string;
          username: string;
        };
        Insert: {
          avatar?: string;
          created_at?: string;
          display_name?: string;
          email?: string;
          id: string;
          username?: string;
        };
        Update: {
          avatar?: string;
          created_at?: string;
          display_name?: string;
          email?: string;
          id?: string;
          username?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_users_id_fk';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      posts_with_likes: {
        Row: {
          author_id: string | null;
          content: string | null;
          created_at: string | null;
          id: string | null;
          is_liked: boolean | null;
          like_count: number | null;
        };
        Insert: {
          author_id?: string | null;
          content?: string | null;
          created_at?: string | null;
          id?: string | null;
          is_liked?: never;
          like_count?: number | null;
        };
        Update: {
          author_id?: string | null;
          content?: string | null;
          created_at?: string | null;
          id?: string | null;
          is_liked?: never;
          like_count?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'posts_author_id_profiles_id_fk';
            columns: ['author_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      posts_with_meta: {
        Row: {
          author_id: string | null;
          content: string | null;
          created_at: string | null;
          id: string | null;
          is_author: boolean | null;
          is_liked: boolean | null;
          like_count: number | null;
          reply_count: number | null;
          reply_to: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'posts_author_id_profiles_id_fk';
            columns: ['author_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'objects_bucketId_fkey';
            columns: ['bucket_id'];
            isOneToOne: false;
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          }
        ];
      };
      s3_multipart_uploads: {
        Row: {
          bucket_id: string;
          created_at: string;
          id: string;
          in_progress_size: number;
          key: string;
          owner_id: string | null;
          upload_signature: string;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          id: string;
          in_progress_size?: number;
          key: string;
          owner_id?: string | null;
          upload_signature: string;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          id?: string;
          in_progress_size?: number;
          key?: string;
          owner_id?: string | null;
          upload_signature?: string;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: 's3_multipart_uploads_bucket_id_fkey';
            columns: ['bucket_id'];
            isOneToOne: false;
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          }
        ];
      };
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string;
          created_at: string;
          etag: string;
          id: string;
          key: string;
          owner_id: string | null;
          part_number: number;
          size: number;
          upload_id: string;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          etag: string;
          id?: string;
          key: string;
          owner_id?: string | null;
          part_number: number;
          size?: number;
          upload_id: string;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          etag?: string;
          id?: string;
          key?: string;
          owner_id?: string | null;
          part_number?: number;
          size?: number;
          upload_id?: string;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: 's3_multipart_uploads_parts_bucket_id_fkey';
            columns: ['bucket_id'];
            isOneToOne: false;
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 's3_multipart_uploads_parts_upload_id_fkey';
            columns: ['upload_id'];
            isOneToOne: false;
            referencedRelation: 's3_multipart_uploads';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: string[];
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          next_key_token?: string;
          next_upload_token?: string;
        };
        Returns: {
          key: string;
          id: string;
          created_at: string;
        }[];
      };
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          start_after?: string;
          next_token?: string;
        };
        Returns: {
          name: string;
          id: string;
          metadata: Json;
          updated_at: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

// Schema: graphql_public
// Functions
export type ArgsGraphql = Database['graphql_public']['Functions']['graphql']['Args'];
export type ReturnTypeGraphql = Database['graphql_public']['Functions']['graphql']['Returns'];

// Schema: public
// Tables
export type Likes = Database['public']['Tables']['likes']['Row'];
export type InsertLikes = Database['public']['Tables']['likes']['Insert'];
export type UpdateLikes = Database['public']['Tables']['likes']['Update'];

export type Posts = Database['public']['Tables']['posts']['Row'];
export type InsertPosts = Database['public']['Tables']['posts']['Insert'];
export type UpdatePosts = Database['public']['Tables']['posts']['Update'];

export type Profiles = Database['public']['Tables']['profiles']['Row'];
export type InsertProfiles = Database['public']['Tables']['profiles']['Insert'];
export type UpdateProfiles = Database['public']['Tables']['profiles']['Update'];

// Views
export type PostsWithLikes = Database['public']['Views']['posts_with_likes']['Row'];

export type PostsWithMeta = Database['public']['Views']['posts_with_meta']['Row'];

// Schema: storage
// Tables
export type Buckets = Database['storage']['Tables']['buckets']['Row'];
export type InsertBuckets = Database['storage']['Tables']['buckets']['Insert'];
export type UpdateBuckets = Database['storage']['Tables']['buckets']['Update'];

export type Migrations = Database['storage']['Tables']['migrations']['Row'];
export type InsertMigrations = Database['storage']['Tables']['migrations']['Insert'];
export type UpdateMigrations = Database['storage']['Tables']['migrations']['Update'];

export type Objects = Database['storage']['Tables']['objects']['Row'];
export type InsertObjects = Database['storage']['Tables']['objects']['Insert'];
export type UpdateObjects = Database['storage']['Tables']['objects']['Update'];

export type S3MultipartUploads = Database['storage']['Tables']['s3_multipart_uploads']['Row'];
export type InsertS3MultipartUploads =
  Database['storage']['Tables']['s3_multipart_uploads']['Insert'];
export type UpdateS3MultipartUploads =
  Database['storage']['Tables']['s3_multipart_uploads']['Update'];

export type S3MultipartUploadsParts =
  Database['storage']['Tables']['s3_multipart_uploads_parts']['Row'];
export type InsertS3MultipartUploadsParts =
  Database['storage']['Tables']['s3_multipart_uploads_parts']['Insert'];
export type UpdateS3MultipartUploadsParts =
  Database['storage']['Tables']['s3_multipart_uploads_parts']['Update'];

// Functions
export type ArgsCanInsertObject = Database['storage']['Functions']['can_insert_object']['Args'];
export type ReturnTypeCanInsertObject =
  Database['storage']['Functions']['can_insert_object']['Returns'];

export type ArgsExtension = Database['storage']['Functions']['extension']['Args'];
export type ReturnTypeExtension = Database['storage']['Functions']['extension']['Returns'];

export type ArgsFilename = Database['storage']['Functions']['filename']['Args'];
export type ReturnTypeFilename = Database['storage']['Functions']['filename']['Returns'];

export type ArgsFoldername = Database['storage']['Functions']['foldername']['Args'];
export type ReturnTypeFoldername = Database['storage']['Functions']['foldername']['Returns'];

export type ArgsGetSizeByBucket = Database['storage']['Functions']['get_size_by_bucket']['Args'];
export type ReturnTypeGetSizeByBucket =
  Database['storage']['Functions']['get_size_by_bucket']['Returns'];

export type ArgsListMultipartUploadsWithDelimiter =
  Database['storage']['Functions']['list_multipart_uploads_with_delimiter']['Args'];
export type ReturnTypeListMultipartUploadsWithDelimiter =
  Database['storage']['Functions']['list_multipart_uploads_with_delimiter']['Returns'];

export type ArgsListObjectsWithDelimiter =
  Database['storage']['Functions']['list_objects_with_delimiter']['Args'];
export type ReturnTypeListObjectsWithDelimiter =
  Database['storage']['Functions']['list_objects_with_delimiter']['Returns'];

export type ArgsSearch = Database['storage']['Functions']['search']['Args'];
export type ReturnTypeSearch = Database['storage']['Functions']['search']['Returns'];
