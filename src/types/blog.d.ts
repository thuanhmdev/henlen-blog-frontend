export {};
declare global {
  type TBlog = {
    id: string;
    content: string;
    thumbnail: string;
    keyword: any;
    createAt: any;
    updateAt: any;
    blogger: any;
    blogger: TUser;
    bloggerEmail: string;
  };
}
