# Take home project

This is a simple e-commerce application that a customer can use to purchase a book, but it's missing the payments functionality — your goal is to integrate Stripe to get this application running!

## Candidate instructions

You'll recieve these by email

## Application overview

This demo is written in [React](https://reactjs.org/) using [Typescript](https://www.typescriptlang.org/) and the [NextJS Framework](https://nextjs.org/). You'll need to retrieve a set of test mode API keys from the Stripe dashboard (you can create a free test account [here](https://dashboard.stripe.com/register)) to run this locally.

For layout and styling, we're using [React Bootstrap](https://react-bootstrap.github.io/) along with [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/). We've selected this combo because of Bootstrap's relative ubiquity within the web development world. That said, feel free to modify styles or layouts or use a styling system/solution that you are more familiar with.

In a production application, we would use a database to store information about the products we're selling. To make things simpler for this project, we've hardcoded our inventory at `/config/inventory.ts`.

## Installation instructions

1. Clone this repository and run `npm install` or `yarn` to install dependencies
2. Rename `sample.env.local` to `env.local` and populate with your Stripe account's test mode API keys
3. Run the application with `npm dev` or `yarn dev`

## About NextJS

If you are already familiar with NextJS, you can likely ignore this section. For those who may have never used NextJS, this information is intended to give you a better understanding of the general architecture employed in a NextJS application.

### Routing

NextJS uses file-system based routing. This means that, within certain directories, files or subdirectories are used as paths in your application. For routing purposes, there are three directories to understand:

- **[`/pages`](/pages/)** - The pages directory contains routing information for your application. For example, if we assume we are running our app locally at `http://localhost:3000` and we want a page at `http://localhost:3000/my-page` we can create a file in the `/pages` directory named `my-page.tsx`. Alternatively, let's say we have multiple routes that we want to build off of our `/my-page` path, we can create a directory named `/my-page` inside the `/pages` directory and any files/directories under our new `/my-page` directory are routes relative to that path. So, if we still wanted to render a page at `http://localhost:3000/my-page` we would add a file named `index.tsx` under our `/my-page` directory. If we wanted to render a page at `http://localhost/my-page/my-other-page` we could add a file named `my-other-page.tsx` (or a directory with that name and an accompanying `index.tsx` file) under the `/my-page` directory.
- **[`/pages/api`](/pages/api)** - You may notice that, within the `/pages` directory there's already a directory named `/api`. This is a special subdirectory that is set aside for back end routes for your application. It's important to note that this directory is _never_ exposed to your end user so you can use it for any server-side code you want to run in your NextJS app. It uses the same file-system based routing that the `/pages` directory uses so all of the details on how you structure your directories and files from above would apply here as well. The only difference is that calling any of the api routes in this directory require that you prepend `/api` to the path. So, if we had a file at `/pages/api/my-api-endpoint.ts`, the route for that API endpoint would be `http://localhost:3000/api/my-api-endpoint`.
- **[`/public`](/public/)** - All of your public, static assets should go into the `/public` folder. NextJS exposes the `/public` folder at the root of your application URL so if you have an image at `/public/my-image.png`, you can access that image at `http://localhost:3000/my-image.png` after you've run the app.

### Dynamic Routing

In modern web development, it's common to utilize portions of the routing path as variables in your code. For example, if we build a site that allows users to sign up, we might want to have user profile information at `/users/{{user_id}}`. You can accomplish this in NextJS by adding brackets to your file or directory name. So, for our user profile example, I might have a file at `/pages/users/[user_id].tsx`. In my code, I can access that variable like this:

```Typescript
import { useRouter } from 'next/router'

...

    const router = useRouter();

    const { user_id } = router.query;

...
```

### Styling

Styling solutions for React are many and varied and you should feel free to use the solution that works best for you. If you prefer CSS, Next does support this natively out-of-the-box. However, you must use CSS modules in NextJS and you must use the naming convention `[name].module.css`. So, if you create a file at `/pages/my-page.tsx` you'll want to have a css file named `my-page.module.css` for styling. You can import this file from anywhere so it's just the naming convention that is important here.

### Environment Variables

Environment variables are supported natively by NextJS. Any variables added to the `/env.local` file are loaded as environment variables when you run your NextJS application. If you need to expose an environment variable to your client-side code (i.e. any files/components that appear in the `/pages` directory, excluding the `/pages/api` directory) you will need to prefix the variable name with `NEXT_PUBLIC_`. For example, if I wanted to create one public and one private environment variable, my `.env.local` file would look like this:

```Shell
NEXT_PUBLIC_MY_PUBLIC_VARIABLE="This gets loaded to the client, anyone can see it!"
MY_SECRET_VARIABLE="This is top secret, it only gets loaded to server-side code in the /pages/api directory!"
```

### References

The information above is a fairly cursory introduction and is hopefully enough to give you some familiarity with NextJS. If you need more information or have additional questions, the links below will take you directly to the NextJS documentation.

- [Routing](https://nextjs.org/docs/routing/introduction)
- [API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Dynamic Routing](https://nextjs.org/docs/routing/dynamic-routes)
- [Built-In CSS Support](https://nextjs.org/docs/basic-features/built-in-css-support)
- [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Typescript](https://nextjs.org/docs/basic-features/typescript)
