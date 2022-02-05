const baseUrl = "https://auth-node-server.herokuapp.com"
// const baseUrl = "http://localhost:5000"

export const userSignup = async ({ email, password }) => {
  try {
    const res = await fetch(baseUrl + "/api/signup", {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ email, password }),
      headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export const userLogin = async ({ email, password }) => {
  try {
    const res = await fetch(baseUrl + "/api/login", {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ email, password }),
      headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export const userLogout = async () => {
  const res = await fetch(baseUrl + "/api/logout", {
    credentials: 'include',
    headers: {'Content-Type': 'application/json'}
  })
  const data = await res.json()
}

export const userAuth = async () => {
  try {
    const res = await fetch(baseUrl + "/api/userAuth", {
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}