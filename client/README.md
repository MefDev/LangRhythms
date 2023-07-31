# Introduction

Welcome to our Client Side of LangRhythms This README provides guidelines on how to contribute to this project effectively. As a contributor, it's crucial that you read, understand, and adhere to these guidelines to ensure the consistency and maintainability of the project.

## CSS Styling

For styling, we're leveraging the Tailwind CSS framework. If you prefer not to intertwine CSS with HTML, feel free to separate it into a distinct folder using the @apply directive from Tailwind CSS. Here are some additional style guidelines:

- Avoid Direct Tag Styling: Always use a class to style an HTML element. Directly styling tags can inadvertently affect other elements, causing unintended style changes.

- Localize Component Styles: If your styles are specific to a component or a page, place them inside a style.css file within the respective component or page directory.

## Component Creation

Components in this project are divided into two categories:

`Shared Components:` If the component you are creating is used across multiple pages, create it inside Shared folder.

`Page-Specific Components:` If the component is specific to a single page, create it within the components directory inside the directory of that specific page.

This structure will make our codebase more organized and easier to navigate.

## Responsive Design

Ensure that the components you create are responsive. As we work in a collaborative environment, other developers might find it difficult to understand and modify your styles. If the component is not responsive, it will add extra overhead to the development process, reducing the overall efficiency. Please consider various device sizes during your development process.

## Testing

We highly value test coverage in this project. Whenever you work on a component, we encourage you to write corresponding tests if possible.

Thank you for your contributions to this project. Remember that effective collaboration is key to our success. Please ensure you stick to these guidelines when contributing.
