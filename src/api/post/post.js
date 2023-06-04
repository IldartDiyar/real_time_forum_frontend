import { baseURL } from "../api.js";

export const get_categories = async() => {
    const response = await fetch(`${baseURL}/categories`, {
        headers: {
            Accept: "application/json",
            Credentials: "include",
        },
        method: "GET",
        credentials: "include",
    });
    if (!response.ok) {
        const error = new Error(`Could not fetch the categories. Status: ${categoriesResponse.statusText}`);
        error.status = categoriesResponse.status;
        throw error;
    }
    const categories = await response.json();
    return categories;
}

export const Create_Post_Handler = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('post-title');
    const category = formData.get('post-category');
    const content = formData.get('post-content');
    if (!title || !category || !content) {
        alert(`Create post error, some field is empty`);
        return
    }
    let category1 = [category]
    const NewPost = {
        title: title,
        description: content,
        category: category1
    }
    const response = await fetch(`${baseURL}/post/create`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(NewPost),
    });

    if (response.ok) {
        window.location.href = '/';
        return
    } else {
        const errorMessage = await response.text();
        alert(`
                Registration failed: $ { errorMessage }
                `);
    }
}

export const Get_Posts = async() => {
    const response = await fetch(`${baseURL}/post`, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    });
    if (response.ok) {
        const data = await response.json();
        return data
    } else {
        const errorMessage = await response.text();
        throw errorMessage
    }
}