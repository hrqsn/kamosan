async function fetchAPI (query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getAllPostsWithSlug () {
  const data = await fetchAPI(`
    {
      posts {
        slug
      }
    }
  `)
  return data?.allPosts
}

export async function getAllTags () {
  const data = await fetchAPI(`
    query Tags($where: JSON){
      tags(where: $where){
        id
        name
      }
    }
  `)
  return data?.tags
}

export async function getAllPostsForHome () {
  const data = await fetchAPI(
    `
    query Posts($where: JSON){
      posts(sort: "created_at:desc", limit: 10, where: $where) {
        id
        title
        slug
        image {
          url
        }
      }
    }
    `,
    {
      variables: {
        where: {
          tags: {
            name: 'おすすめ'
          }
        }
      }
    }
  )
  return data?.posts
}

export async function getAllPosts () {
  const data = await fetchAPI(
    `
    query Posts($where: JSON){
      posts(sort: "created_at:desc", where: $where) {
        id
        title
        slug
        image {
          url
        }
        tags {
          id
          name
        }
      }
    }
    `
  )
  return data?.posts
}

export async function getPostAndMorePosts (slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      id
      title
      slug
      body
      image {
        url
      }
    }
    morePosts: posts(sort: "created_at:desc", limit: 2, where: $where_ne) {
      id
      title
      slug
      image {
        url
      }
    }
  }
  `,
    {
      variables: {
        where: {
          slug
        },
        where_ne: {
          slug_ne: slug
        }
      }
    })
  return data
}
