import { request, gql } from 'graphql-request'


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export const getPosts = async () => {
  const query = gql`
    query MyQuery {
            postsConnection {
              edges {
                node {
                  autor {
                    bio
                    name
                    id
                    foto {
                      url
                    }
                  }
                  createdAt
                  slug
                  title
                  excerpt
                  featuredImage {
                    url
                  }
                  kategories {
                    name
                    slug
                  }
                }
              }
            }
          }
  `
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;

}


export const getRecentPosts = async () => {
  const query = gql`
  query GetPostDetails(){
    posts(
      orderBy:createdAt_ASC
      last:5
    ){
      title
      featuredImage{
        url
      }
      createdAt
      slug

    }
  }
  `
  const result = await request(graphqlAPI, query);
  return result.posts;

}

export const getSimilarPosts = async (categories, slug) => {

  const query = gql`
  query GetPostDetails($slug:String!, $categories:[String!]){
    posts(
      where:{
        slug_not:$slug, AND:{categories_some:{slug_in:$catagories}}
      }
      last:5
    ){
      title
      featuredImage{
        url
      }
      createdAt
      slug

    }
  }
  `

  const result = await request(graphqlAPI, query, {categories, slug});
  return result.posts;

}

export const getCategories = async () => {
  const query = gql`
    query GetKategories {
        kategories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.kategories;
};

export const getCategoriesPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug:String!) {
      postsConnection(where: {kategories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            autor {
              bio
              name
              id
              foto {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            kategories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};


export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        autor{
          name
          bio
          foto {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        kategories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};



export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments=async(slug)=>{
  const query = gql`
  query GetComments ($slug:String!){
    
    kommentars(where:{post:{slug:$slug}}){
        name
        createdAt
        comment
      }
  }
`;

const result = await request(graphqlAPI, query, {slug});

return result.kommentars;
}




