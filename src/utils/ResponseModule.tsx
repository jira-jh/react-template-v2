export const Response = (data?: any, is_error?: boolean, name?: string, message?: string) => {
  const obj = {
    name: name,
    message: message,
    error: is_error,
    data: data
  }
  return obj
}