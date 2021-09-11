export const imageUrl = (url) => {
  return process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_STRAPI_API_URL + url : url
}
