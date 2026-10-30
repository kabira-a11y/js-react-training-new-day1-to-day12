
# User Directory

A React application that displays users from JSONPlaceholder.

## How to Run

1. Open the project folder in VS Code.
2. Install dependencies:

   npm install

3. Start the development server:

   npm run dev

## Features

- Display all users
- Search users by name
- Filter users by city
- View user details and posts
- Add and remove favourite users
- Loading and error states
- React Router navigation
- Custom useFetch hook
- Responsive styling with CSS Modules

## State Management

- UsersPage: search text and selected city.
- FavouritesContext: shared favourite users.
- useFetch: API data, loading and error states.
- UserDetailPage: user and post data through useFetch.

FavouritesContext is used because favourites are shared
between the users list, detail page and favourites page.
