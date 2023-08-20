export const responseHandler = async (response) => {
  if (response.ok) {
    return await response.json()
  }else {
    return {
        status: response.status,
        statusText: response.statusText,
        url: response.url
    }
  }
}

export const oAuthGetOptions = () => ({
  methods: "GET",
  header: "content-type: application/json",
})

export const oAuthPostOptions = body => ({
  method: "POST",
  headers: {
    "accept": "application/json",
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(body)
})