# my_namaste_react

Assignment 01 Inception:

1.  What is Emmet?
    A. Emmet is toolkit for the web-developer that significantly improves the HTMl and CSS Workflow.
    Emmet helps you to write the code more efficiently by using abbreviations and shortcuts that expands
    into fully HTML and CSS code Snippets.

    HTML Abbreviation:
    If you type div>p#myId.myClass\*3, and then trigger the Emmet expansion (often by pressing the "Tab" key), Emmet will generate the following HTML code:

        "<div>
            <p id="myId" class="myClass"></p>
            <p id="myId" class="myClass"></p>
            <p id="myId" class="myClass"></p>
        </div>"

        CSS Abbreviation:
        If you type bgc:red;fw:bold, and then trigger the Emmet expansion, Emmet will generate the following
        CSS code:
        background-color: red;
        font-weight: bold;

2.  What is Difference between Library and framework?
    A. A library is a collection of pre-written code for specific task used as needed and
    Framework provides the structural foundation for building application with guidelines and tools.

3.  Why is React known as React?
    A.React is known as React because it revolves round the concepts of reactive user interface.
    it effectively updates and re-render the component is response to change in data ensuring reactive and dynamic user experience.

4.  what is cross origin in script tag?
    A.In the context of the script tag "cross origin" refers to the script loaded from one domain and tries to interact with another domain.This interaction can lead to the security issue due to the browser same origin policy.Which restrict such interaction to prevent unauthorized access to data.Cross origin request can be managed through technique like CORS(Cross-Origin resource sharing) headers and JSONP(Json with padding).

5.  what is the difference between react.development.js and react.production.js via CDN ?
    A.The difference between react.development.js and react.production.js lies in their intended use case and optimization at different stages of development and deployment.

    1.React.development.js

    - The version is meant for development purpose.
    - It includes additional warning and debugging information to help developer to identify potential issue during the development.
    - The file size is larger due to the included debugging information.

      2.React.Production.js

    - This version is intended for the production deployment.
    - It is optimized for performance and has minimized the size.
    - It exclude the debugging information and warning found in the development version making it suitable for using it in production environment.

    When developing,It is common to use the react.development.js to aid in debugging and identifying the issue.
    when deploying your application to a production environment you would switch to the react.production.js
    to ensure the optimal performance and reduced the file size.

6.  what is difference between async and defer ?
    A.The term "async" and "defer" refers to the attribute <script> tag in html and they effect how the external javascript file is being executed on the webpage.

    1.ASYNC(attribute async):

    - When you include the async attribute in the script tag the browser will continue parsing the html document while simultaneously fetching the external javascript file
    - The javascript file is executed immediately as soon as its get downloaded regardless of whether the html parsing is completed or not.
    - This is a useful script that don't rely on page structure or any other script such as analyst tracking code.

      2.DEFER(attribute defer):

    - when you include the differ attribute in the script tag. The browser will download the external javascript file while parsing the HTML Document.
    - The execution of javascript file is deferred until the browser parsing is completed.
    - This is useful when the script relies on page structure or other script. script with the defer attribute are executed in the order they appears in the document.

Assignment 02: Ignite our App

1. What is NPM ?
   A.NPM stands for "Node Package Manager " it is a package manager for javascript and Node.js which allows developer to easily manage and install various libraries, frameworks and tools that can be used in their projects.NPM simplifies the process of sharing and distributing code making it easier for developer to collaborate and build application using third party code component.It is crucial tool in the javascript and nodejs ecosystem and is commonly used to handle dependencies, manage project configuration and streamline the development workflow.

2. What is parcel/webpack ? why do we need it
   A.Parcel and webpack are both popular build tool used in the web development to bundle optimize and manage assets for modern web application. They help developer to streamline the process of preparing code and assets for deployment to production environment.

3. What is .parcel-cache
   A.The .parcel-cache directory is created by the parcel bundler to store cached build results and optimizations, which speeds up future builds of your project by avoiding redundant processing. its safe to delete if you want to clear cached data.

4. What is NPX?
   A.NPX is command line tool that comes with npm(node package manager).It is used to run the package and binaries from the npm registry temporarily without having to install them globally on your system.It is particularly useful for executing the command line tools provided by the npm packages without the need for manual installation.

5. What is difference between devDependencies vs dependencies
   A.'Dependencies' are needed to your app to run while devDependencies are only needed for development and build process. The former is crucial for users, while the latter is for developer.

6. What is Tree Shaking?
   A.Tree Shaking is a process that removes unused code from the javascript bundle making your app smaller and faster.

7. What is Hot Module Replacement(HMR)?
   A.Hot Module Replacement(HMR) is a development feature that allows you to see code changes instantly in your running application, without needing to refresh the whole page or lose the current state.

8. List Down you favorite 5 superpowers of Parcel and Describe any 3 of them in yor own words.
   A. 1. Zero Configuration:

   - Parcel is known for its "Zero-configuration" approach. You don't need complex configuration files to get started.
   - It automatically detects and configure assets types,transform and dependencies reducing setup time.

   2. Built-in Asset Handling:

   - Parcel supports a wide range of assets out of the box including javascript,CSS,HTML,Images,fonts and more .
   - It Handles asset bundling,minification and optimization seamlessly without requiring additional configuration

   3. Effortless code splitting:

   - Parcel enables automatic code splitting which means your application is split into smaller chunks that are loaded only when needed.
   - The optimize initial load times and improves performance as users only download the parts of the application they interact with.

   4. Hot Module Replacement:

   - Just like webpack,parcel supports HMR, allowing developers to see instant code changes in the browser without page refresh.
   - This accelerates the development process and improve the productivity by maintaining application state during updates.

   5. Fast build speed:

   - Parcel caching mechanism optimizes build times by reusing cached results for unchanged assets.
   - It leverages parallel processing to speed up builds, resulting in quicker turnaround times for development .

9. What is .gitIgnore ? what should we add and add not into it?
   A. '.gitIgnore' file specifies files and directories to exclude from the version control add generated files,dependencies and sensitive data. Don't add important config files or essential project code. Keep the repository clean and focused in the code that needs to be shared.

10. What is the difference between package.json and package-lock.json ?
    A.Package.json is for project details and dependencies package-lock-json ensures consistent,exact dependency versions for reliable builds.

11. Why should I not modify package-lock.json?
    A.Modifying 'package-lock.json' can lead to inconsistency, conflicts and version problems. it is best practice to let npm manage it automatically based on the changes in package.json

12. What is node_modules > is it a good idea to push that on git?
    A.Node_modules is where project dependencies are stored.It's not recommended to push it to git due to size,redundancy and maintenance issue instead commit package.json package-lock.json and use .gitIgnore to exclude the node_modules

13. what is the dist folder?
    A.Dist folder holds the optimized and ready-to-deploy version of your project,typically containing minified code,images and other assets. it's generated during the build process for the production use.

14. what is 'Browserlists' Read about the diff bundlers:Vite, webpack, parcel
    A.Browserlist is a configuration tool that defines which browser your project should support its used to optimize compatibility for the front-end development.

15. Read about (^)caret and (~)Tilda
    A.Caret(^): Allows updates within the same minor version.
    Tilda(~): Allows updates within the same major version.

16. Read about Scripts types in HTML(MDN Docs)
    A.The 'script' elements in html is used to include Javascript code. The type attribute specifies the type of content usually set as 'text/javascript'. In modern HTML the attribute is often omitted as browser assume javascript by default.

# Parcel

- Dev Build
- Local Server
- HMR - Hot module replacement
- File Watching Algorithm (Written in C++)
- Caching Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing (Read about it)
- Code Splitting
- Differential Bundling -> support older browser
- Diagnostic
- Error Handling
- HTTPS (helps you to convert http to https)
- Beautiful Diagnostics
- Reliable caching
- Tree Shaking (Algorithm to remove unused code)
- Different Dev and Production bundles

Assignment 03 - Laying the Foundation

1.  What is JSX?
    A. JSX stands for "Javascript XML" and it's a syntax extension for JavaScript often used with React.js JSX allows you to write HTML like code within your javascript code. Making it easier to describe the structure of the user interface in React component

    const element = <h1>Hello JSX!</h1>

    In the example the '<h1>' element with text hello JSX is written using jsx syntax jsx allows you to include html like tags and elements directly in your javascript code. Under the hood, JSX is transpiled(converted) into Javascript code that react can understand

    Here how the above look like after transpilation

    const element = React.createElement("h1",{},"Hello JSX!");

    React uses these 'React.createElement' calls to create a virtual representation of the DOM elements, which it can then effectively update when your components state change.

    Using JSX makes it more intuitive to work with React component because it closely resembles the final output you want to render. However it's important to note that jsx is not pure HTML but a syntax for the javascript that React can process.

2.  Superpower of JSX?
    A.JSX, while not a superpower in the traditional sense, offers several powerful advantages when used in conjunction with React and other Javascript libraries/framework:

    1.Declarative UI: JSX allows developers describe to declare the structure of their user interfaces in a more declarative manner. You Describe what the UI should look like and React takes care of updating the actual DOM to match that description efficiently.

    2.Component Composition:JSX Facilitates the creation of reusable UI component. You can define your custom component using JSX and compose them together to build complex interfaces.This promotes a modular and maintainable codebase.

    3.JavaScript Integration:JSX seamlessly integrates JavaScript expressions and logic. You can embed JavaScript expressions within curly braces {} in JSX elements. This makes it easy to handle dynamic data and compute values within your UI.

    4.Readability: JSX code is often more readable and visually representative of the UI structure compared to manipulating the DOM directly through JavaScript. It's easier to understand the component hierarchy and relationships.

    5.Tooling Support: JSX is well-supported by development tools and editors. Many code editors provide syntax highlighting, auto-completion, and error checking for JSX, which can enhance the development experience.

    6.Static Analysis: JSX allows for static analysis of your code, enabling tools and linters to catch potential errors and issues at compile-time rather than runtime. This can help prevent common bugs.

    7.Server-Side Rendering: JSX is not limited to the browser. It can also be used for server-side rendering with technologies like Next.js. This enables improved SEO and initial page load performance.

    8.Ecosystem: JSX is a core part of the React ecosystem, which has a large and active community. This means access to a vast library of pre-built components, tutorials, and resources to help you build powerful web applications efficiently.

3.  React.creteElement vs JSX
    A.
    JSX:

    - Declarative and readable.
    - Transpiles to `React.createElement`.
    - Preferred for defining React components.

    React.createElement:

    - Programmatic and explicit.
    - Used when you need to create elements dynamically.
    - Lower-level approach compared to JSX.

    In most cases, developers prefer JSX due to its readability and simplicity. However, JSX is ultimately transpiled into `React.createElement` calls behind the scenes.

4.  Benefits of JSX
    A.
    1.Readability: JSX makes your code more readable and resembles the final UI structure, making it easier for developers to understand the component hierarchy and relationships.

    2.Declarative Syntax: It allows for a declarative approach to defining UI components, focusing on what the UI should look like rather than the low-level DOM manipulation.

    3.Component Composition: JSX promotes the creation of reusable UI components, facilitating a modular and maintainable codebase.

    4.Integration with JavaScript: JSX seamlessly integrates JavaScript expressions and logic, making it easy to handle dynamic data and compute values within your UI.

    5.Tooling Support: JSX is well-supported by development tools, providing features like syntax highlighting, auto-completion, and error checking, which enhance the development experience.

    6.Static Analysis: JSX enables static analysis of your code, helping tools and linters catch potential errors and issues at compile-time, preventing common bugs.

5.  Behind the Scenes of jsx
    A.Behind the scenes, JSX is transpiled into plain JavaScript code using a tool like Babel. This transformation process involves parsing JSX syntax, converting JSX elements into React.createElement calls, bundling the code, and executing it in the browser using the React library. This enables browsers to understand and render the JSX-based React components.

6.  Babel & parcel role is jsx ?
    A.
    Babel: Babel is a JavaScript compiler that plays a crucial role in transpiling JSX code into JavaScript. It recognizes JSX syntax and converts it into equivalent JavaScript code, ensuring compatibility with all browsers.
    Parcel: Parcel is a popular web application bundler that can handle JSX transpilation among other tasks. It helps bundle all your JavaScript files, including the transpiled JSX, and prepares your project for production by optimizing and minifying the code.

7.  Components
    A.In React, components are the building blocks of the user interface. They encapsulate the UI logic and can be either functional components or class components. Components can be thought of as custom HTML elements that you can reuse throughout your application. They have their own state, properties (props), and can be nested inside one another to create complex UI hierarchies.

8.  Functional Component
    A.A functional component in React is a JavaScript function that returns JSX elements. Functional components are simple and concise, making them a preferred choice when the component doesn't need to manage state or lifecycle methods. They receive data through props and can be used for rendering UI based on that data. Functional components have become more popular with the introduction of React Hooks, which allows them to handle state and side effects as needed, making them more versatile.

9.  Composing component
    Composing components in React is a fundamental concept that allows you to build complex user interfaces by combining and nesting smaller, reusable components. This approach promotes modularity, maintainability, and reusability in your application. Here's how you can compose components in React:

10. **Create Individual Components:**
    Start by defining individual components that represent specific UI elements or functionality. These components can be either functional components or class components, depending on your needs.

    ```jsx
    // Example of two individual components
    function Header() {
      return <header>This is the header</header>;
    }

    function Sidebar() {
      return <aside>This is the sidebar</aside>;
    }
    ```

11. **Combine Components:**
    To compose components, you can include one component within another component's JSX by using the component's name as if it were an HTML tag. This is how you nest components.

    ```jsx
    // Composing components by nesting
    function App() {
      return (
        <div>
          <Header />
          <Sidebar />
          <main>This is the main content</main>
        </div>
      );
    }
    ```

    In this example, the `Header` and `Sidebar` components are composed within the `App` component.

12. **Pass Data with Props:**
    You can pass data (props) from parent components to child components to customize their behavior and content.

    ```jsx
    function Greeting(props) {
      return <p>Hello, {props.name}!</p>;
    }

    function App() {
      return (
        <div>
          <Header />
          <Sidebar />
          <main>
            <Greeting name="John" />
          </main>
        </div>
      );
    }
    ```

    In this case, the `Greeting` component receives the `name` prop from its parent `App` component.

13. **Reusability:**
    Composing components allows you to reuse them throughout your application. You can use the same component multiple times with different props or in different parts of your app.

    ```jsx
    function App() {
      return (
        <div>
          <Header />
          <Sidebar />
          <main>
            <Greeting name="John" />
            <Greeting name="Jane" />
          </main>
        </div>
      );
    }
    ```

    Here, the `Greeting` component is reused for both "John" and "Jane."

14. **Hierarchical Composition:**
    You can create a hierarchy of components, with each component focusing on a specific part of the UI. This hierarchical approach makes it easier to manage and maintain your application.

    ```jsx
    function Page() {
      return (
        <div>
          <Header />
          <Sidebar />
          <main>
            <Content />
          </main>
        </div>
      );
    }

    function Content() {
      return (
        <div>
          <Greeting name="John" />
          <Greeting name="Jane" />
        </div>
      );
    }
    ```

    In this example, the `Content` component is composed within the `Page` component, creating a hierarchy.

    By composing components in React, you can build complex user interfaces in a modular and organized way, making your code easier to understand, maintain, and extend. It also encourages the reuse of components, leading to more efficient development and better code maintainability.

Assignment 04 - Talk is cheap,Show me code!

Theory:

1. Is JSX mandatory for React?
   A.No, JSX is not mandatory for React, but it is highly recommended. JSX is a more readable and expressive way to define React elements and components. While you can write React without JSX by using React.createElement, JSX simplifies the process and is the standard way of defining components in React.

2. Is ES6 mandatory for React?
   A.ES6 (ECMAScript 2015) features are not mandatory for React, but they are commonly used and recommended. ES6 features like arrow functions, classes, destructuring, and let and const declarations can make your React code more concise and readable. However, React itself does not require ES6; you can write React applications using ES5 JavaScript.

3. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent><TitleComponent/>}
   A.
   {TitleComponent}: This is a reference to the TitleComponent variable or component. It's typically used when you want to pass the component itself as a prop to another component.

   {<TitleComponent/>}: This is JSX syntax and represents the rendering of the TitleComponent. It will create an instance of TitleComponent when rendered.

   {<TitleComponent><TitleComponent/>}: This JSX syntax is incorrect because it's attempting to nest TitleComponent elements without any parent element. It should be wrapped in a parent element.

4. How can I comment in JSX?
   A.You can add comments in JSX using curly braces {/_ Your comment here _/}. For single-line comments, you can use // as you would in regular JavaScript.

5. What is <React.Fragments></React.Fragments> and <></>
   A.<React.Fragment> and <></> (short syntax) are used to group multiple JSX elements without adding extra nodes to the DOM. This is especially useful when you need to return adjacent JSX elements from a component without wrapping them in a container div or other element.

6. what is virtual DOM?
   A.The virtual DOM (VDOM) is a concept in React where an in-memory representation of the actual DOM is maintained. React uses the virtual DOM to optimize updates by comparing it with the real DOM and applying only the necessary changes. This process increases performance and reduces unnecessary re-rendering of components.

7. what is Reconciliation in React?
   A.Reconciliation in React is the process of updating the virtual DOM and determining which parts of the actual DOM need to be modified to reflect the latest component state. React's diffing algorithm (reconciliation) ensures that only the necessary changes are made, minimizing performance overhead.

8. what is React Fiber?
   A.React Fiber is an internal architectural change in React's core algorithm that allows for asynchronous rendering and better control over the rendering process. It improves the ability to interrupt rendering and handle concurrent updates, leading to smoother user interfaces.

9. Why we need keys in React? when do we need keys in React?
   A.Keys in React are used to help React identify which items have changed, been added, or been removed in a list of components. They are essential when rendering dynamic lists using map() or other iterators. Keys ensure efficient updates and should be unique within the list.

10. Can we use index as keys in React?
    A.While using the index as keys is possible, it is generally not recommended for dynamic lists with items that can change or be reordered. It may lead to performance issues and incorrect rendering in some cases. It's better to use unique and stable identifiers as keys.

11. What is props in React? Ways to use them?
    A.Props (short for properties) in React are used to pass data from a parent component to a child component. They are read-only and help you create dynamic and reusable components. You can access props in functional components as function arguments and in class components via this.props.

12. What is Config Driven UI?
    A.Config-driven UI is an approach where the user interface and its behavior are defined using configuration data rather than hardcoding them into the application's code. This approach allows for

/

- Header
  ->Logo
  ->Nav link
  Body
  -> Search bar
  -> RestaurantContainer
  -> IMG
  -> Star Ratting
  -> Name of the restaurant
  -> cuisine,etc,delivery time
- Footer
  -> Copyright
  -> Links
  -> Address
  -> Contact

# React Hooks(Normal JS utility function)

Two Types of Export/Import

1.Default Import/Export
-export default Component
-import Component from "path"

2.Named Export/Import
-export const Component;
-import {Component} from "path"

Assignment 05-Let's get Hooked.

Theory:

1. What is the difference between Named Export, Default export and \* as export?
   A.Named Function Export: When you export a function using its name it is known as Named function export. These export allow you to export multiple function, Variables or classes from a module by specifying their names
   For Example:
   export function myFunction(){

   }
   Default Export: A default export is used when you want to export a single value (function,class or Object) as the default export from a module .You can only have one default export per module.
   For Example:
   export default function myFunction(){

   }

   "\* as Export"(namespace export):The \* as export is used to export an entire module as an object it allows you to access all the exports from that module using a specific name
   For Example: export \* as myModule from './anotherModule'
   then you can access export from 'anotherModule' using myModule.myExport.

2. What is the importance if config.js file?
   A.'config.js' file is often used to store configuration settings for an application. its importance lie in the following aspects.

   Centralized Configuration: It provides a single place to store configuration variables like API keys, database URLs, environment-specific settings, and more. This centralization simplifies configuration management.

   Security: Sensitive information, such as API keys or database credentials, should not be hard-coded into your application. Storing them in a config.js file helps protect these sensitive details.

   Ease of Maintenance: When configuration settings change, you only need to update the config.js file instead of searching through your codebase for scattered configuration values.

   Environment Management: config.js can be used to manage configurations for different environments (development, production, testing) by switching between different configuration files or values.

3. What are the React Hooks?
   A.React Hooks are functions that allow you to "hook into" React state and lifecycle features from functional components. They were introduced in React 16.8 to enable state management, side-effects, and other React features in functional components, making them more powerful and versatile. Some commonly used hooks include useState, useEffect, useContext, and useReducer.

4. Why do we need a useState Hook?
   A.The useState hook is essential in React for managing and updating component state in functional components. Here's why it's needed:

   State Management: It allows functional components to have their own state, just like class components. State is essential for managing dynamic data and UI interactions.

   Reactivity: When state changes, the component re-renders, ensuring that the UI reflects the latest data. Without useState, you wouldn't have a way to manage component state.

   Simplicity: The useState hook simplifies state management by providing a straightforward way to declare and update state variables within functional components, eliminating the need for class-based component syntax.

   Avoiding Class Components: useState makes it possible to use functional components for most use cases, reducing the need for class components and promoting a more modern and concise coding style.

Assignment 06 - Explore the world

1. What is microservice ?
   A.A microservice is a software architecture style that structure an application as a collection of small,independent deployable service. each microservice focuses on a specific business capability and can communicate with other services through API's.

2. What is microservice architecture?
   A.Microservice architecture is an approach to designing and building software applications as a collection of loosely coupled independently deployable services.These services are organized around specific business capabilities and can
   be developed, deployed and scaled independently.

3. What is the difference between monolith and microservice?
   A.In a monolith,the entire application is a single,tightly integrated codebase while in microservice, the application is composed of many small, independent services Monoliths are typically easier to develop but harder to scale and maintain,while microservice offers greater scalability and flexibility but can be more complex to manage.

4. Why do we need useEffect Hooks?
   A.useEffect is React hook used to perform side effects in functional components.It is used for task such as data fetching, DOM manipulation and subscribing to external data source. It allows you to manage these side effects and keep them in sync with component lifecycle.

5. What is Optional chaining?
   A. Optional chaining is a Javascript feature that allows you to safely access nested properties of an object without worrying about whether intermediate properties exist. It uses the '?' syntax to prevent errors and accessing properties of null or undefined object.

6. What is Shimmer UI?
   A.Shimmer UI is a loading animation or placeholder effect used in user interface to indicate that content is being loaded. It typically consists of subtle animation placeholder elements that mimic the appearance of real content providing a smoother user experience during loading.

7. What is the difference between JS expression and JS statement.
   A.An expression in javascript produces a value such as calculation or function call and can be part of larger expression .Statement on the other hand are standalone instruction that perform action but do not produce values for example 'x+2' is an expression while if(x > 5) {} is a statement.

8. What is conditional rendering explain with a code example.
   A.Conditional rendering in React involves rendering different JSX based on certain conditions.Here is an example:

function App(){
const isLoggedIn = true;

    return(
      <div>
        {isLoggedIn ? (
          <p>Welcome User!!!</p>
        ) : (
          <p>Please log in to access your account</p>
        )}
      </div>
    )

}

9. What is CORS?
   A.CORS(Cors Origin Resource Sharing) is a security feature implemented by web browser to control and restrict request made from one domain (origin) to another. it prevents unauthorized access to resources on different domains and ensure security in web application.

10. What is async and await?
    A.async and await is keyword in javascript used for asynchronous programming async is used to define an asynchronous function and await is used inside an async function to pause execution until promise is resolved, making asynchronous code more readable and manageable.

11. What is the use of const json = await data.json(); in getRestaurants()?
    A.The code is typically used in a function that fetches data from an API it awaits the response (data) abd then converts it to a JSON format using the json() method. The results is stored in the json constant allowing you to work with the data as a javascript object.

# Types of Routing in web page

React Router Dom

React is single page application because it supports Client Side Routing where everything is loaded before we just need to interchange the component it does not make any network call not fetching any new page.

- Client side routing
- Server side routing
