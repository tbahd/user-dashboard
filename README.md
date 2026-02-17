
# 🧑‍💻 User Dashboard

A responsive React dashboard that fetches and displays user data with search functionality and modal details view.

Built with **React**, **Hooks**, and **Tailwind CSS** following clean component architecture principles.

---

## 🚀 Features

* ✅ Fetch users from API using `useEffect`
* ✅ Async/await data fetching
* ✅ Loading and error states
* ✅ Responsive grid layout (Tailwind CSS)
* ✅ Search filter (case-insensitive)
* ✅ Clickable user cards
* ✅ Modal view for user details
* ✅ Clean component composition (no messy prop drilling)

---

## 🧠 Architecture

The project follows separation of concerns:

```
App (data + state + effects)
 ├── Layout (page structure)
 ├── UserList (maps users)
 │     └── UserCard (single user display)
 └── UserModal (details popup)
```



## 🔎 Search Functionality

Filtering is handled in `App`:

```js
const filteredUsers = users.filter(user =>
  user.name.toLowerCase().includes(searchTerm.toLowerCase())
);
```

The filtered list is passed down to `UserList`.

---


## 🌐 Data Source

User data is fetched from:

```
https://jsonplaceholder.typicode.com/users
```

---

## 📚 Concepts Practiced

* React Hooks (`useState`, `useEffect`)
* Conditional rendering
* Async data fetching
* Component composition
* Lifting state up
* Event handling

---

## 🏆 Learning Outcome

This project demonstrates the ability to:

* Structure a React application properly
* Manage state effectively
* Separate UI from logic
* Build reusable components
* Handle real-world UI patterns (modals, search, loading states)

---

## 📄 License

This project is for learning purposes.
