import { DefaultRequestBody, rest } from "msw";
import type { Person } from "../types/person";
import type { Product } from "../types/product";

const delay = process.env.NODE_ENV === "test" ? 0 : 1500;

export let currentUser: Person = {
  age: 54,
  hairColor: "brown",
  hobbies: ["swimming", "bicycling", "video games"],
  id: 1,
  name: "John Doe",
};

export let users: Array<Person> = [
  {
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
    id: 1,
    name: "John Doe",
  },
  {
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
    id: 2,
    name: "Brenda Smith",
  },
  {
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
    id: 3,
    name: "Jane Garcia",
  },
];

export let products: Array<Product> = [
  {
    id: 1,
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

type UpdateRequestBody = Person | Product;
type UpdateResponseBody =
  | Person
  | Array<Person>
  | Product
  | Array<Product>
  | undefined;

const handlers = [
  rest.get<DefaultRequestBody, UpdateResponseBody>(
    "/current-user",
    (req, res, ctx) => {
      return res(ctx.delay(delay), ctx.status(200), ctx.json(currentUser));
    }
  ),
  rest.get<DefaultRequestBody, UpdateResponseBody>(
    "/users/:id",
    (req, res, ctx) => {
      const { id } = req.params;
      return res(
        ctx.delay(delay),
        ctx.status(200),
        ctx.json(users.find((user: Person) => user.id === Number(id)))
      );
    }
  ),
  rest.get<DefaultRequestBody, UpdateResponseBody>(
    "/users",
    (req, res, ctx) => {
      return res(ctx.delay(delay), ctx.status(200), ctx.json(users));
    }
  ),
  rest.post<UpdateRequestBody, UpdateResponseBody>(
    "/users/:id",
    (req, res, ctx) => {
      const { id } = req.params;
      const updatedUser = req.body as Person;

      users = users.map((user) =>
        user.id === Number(id) ? updatedUser : user
      );
      return res(
        ctx.delay(delay),
        ctx.status(200),
        ctx.json(users.find((user: Person) => user.id === Number(id)))
      );
    }
  ),
  rest.get<UpdateRequestBody, UpdateResponseBody>(
    "/products",
    (req, res, ctx) => {
      return res(ctx.delay(delay), ctx.status(200), ctx.json(products));
    }
  ),
  rest.get("/products/:id", (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.delay(delay),
      ctx.status(200),
      ctx.json(products.find((product: Product) => product.id === Number(id)))
    );
  }),
  rest.post<UpdateRequestBody, UpdateResponseBody>(
    "/products/:id",
    (req, res, ctx) => {
      const { id } = req.params;
      const updatedProduct = req.body as Product;

      products = products.map((product) =>
        product.id === Number(id) ? updatedProduct : product
      );
      return res(
        ctx.delay(delay),
        ctx.status(200),
        ctx.json(products.find((product: Product) => product.id === Number(id)))
      );
    }
  ),
];

export { handlers };
