import { promises as fs } from "fs";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  city: string;
}

// users
const Users = [
  {
    id: 1,
    name: "Youssef Daoud",
    email: "youssef@gmail.com",
    password: "12345678",
    age: 30,
    city: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 25,
    password: "12345678",
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    password: "12345678",
    age: 28,
    city: "Chicago",
  },

  {
    id: 4,
    name: "Alice Williams",
    email: "alice.williams@example.com",
    password: "12345678",
    age: 35,
    city: "Houston",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    password: "12345678",
    age: 22,
    city: "Seattle",
  },
  {
    id: 6,
    name: "Eva Davis",
    email: "eva.davis@example.com",
    password: "12345678",
    age: 40,
    city: "Miami",
  },
  {
    id: 7,
    name: "David Wilson",
    email: "david.wilson@example.com",
    password: "12345678",
    age: 32,
    city: "San Francisco",
  },
  {
    id: 8,
    name: "Grace Miller",
    email: "grace.miller@example.com",
    password: "12345678",
    age: 27,
    city: "Denver",
  },
  {
    id: 9,
    name: "Frank Thomas",
    email: "frank.thomas@example.com",
    age: 31,
    password: "12345678",
    city: "Boston",
  },
  {
    id: 10,
    name: "Olivia Moore",
    email: "olivia.moore@example.com",
    password: "12345678",
    age: 29,
    city: "Atlanta",
  },
];

export const authenticateUser = async (email: string, password: string) => {
  try {
    // Read the content of the users.json file
    const usersData = JSON.stringify(Users); // Convert array to JSON string
    const users: User[] = JSON.parse(usersData);

    // Find the user with the provided email
    const user = users.find((user) => user.email === email);

    // Check if the user exists and the password is correct
    if (user && user.password === password) {
      return { success: true, user };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    return { success: false, message: "Internal server error" };
  }
};
