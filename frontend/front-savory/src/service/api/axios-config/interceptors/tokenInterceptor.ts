export const tokenInterceptor = (request: any) => {
  const user = localStorage.getItem(process.env.APP_NAME as string)
  if (user && request.headers) {
    const { token } = JSON.parse(user)
    request.headers.Authorization = `Bearer ${token}`
  }
  return request
}
