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
