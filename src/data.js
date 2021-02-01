import { v4 as uuid } from 'uuid'

export const defaultUser = {
    id: uuid(),
    username: 'username',
    name: 'name',
    profile_image:
        'https://images.pexels.com/photos/3821963/pexels-photo-3821963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    // profile_image:
    // "https://instagram.com/static/images/anonymousUser.jpg/23e7b3b2a737.jpg"
}

export function getDefaultUser() {
    return {
        id: uuid(),
        username: 'username',
        name: 'name',
        profile_image:
            'https://images.pexels.com/photos/3821963/pexels-photo-3821963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }
}

export const defaultPost = {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
    user: defaultUser,
    media:
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    comments: [],
    created_at: '2020-02-28T03:08:14.522421+00:00',
}

export function getDefaultPost() {
    return {
        id: uuid(),
        likes: 10,
        caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
        user: defaultUser,
        media:
            'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        comments: [],
        created_at: '2020-02-28T03:08:14.522421+00:00',
    }
}

export const defaultNotifications = [
    {
        id: uuid(),
        type: 'follow',
        user: defaultUser,
        created_at: '2020-02-29T03:08:14.522421+00:00',
    },
    {
        id: uuid(),
        type: 'like',
        user: defaultUser,
        post: defaultPost,
        created_at: '2020-02-29T03:08:14.522421+00:00',
    },
]

export const defaultCurrentUser = {
    id: uuid(),
    username: 'me',
    name: 'myself',
    profile_image:
        'https://images.pexels.com/photos/3821963/pexels-photo-3821963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    website: 'https://react12.io',
    email: 'me@gmail.com',
    bio: 'This is my bio',
    phone_number: '555-555-5555',
    posts: Array.from({ length: 10 }, () => getDefaultPost()),
    followers: [defaultUser],
    following: [defaultUser],
}
