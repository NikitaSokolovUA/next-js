export const getAllPosts = async() => {
    const response = await fetch('/api/posts')
    if(!response.ok) throw new Error("Cant fetch posts")

    return response.json()
}

export const getPostByID =  async () => {}