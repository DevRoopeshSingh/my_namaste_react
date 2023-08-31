# my_namaste_react

Chapter 1 Theory:

1.  What is Emmet?
    A. Emmet is toolkit for the web-developer that significantly improves the HTMl and CSS Workflow.
    Emmet helps you to write the code more efficiently by using abbreviations and shortcuts that expands
    into fully HTML and CSS code Snippets.

    HTML Abbreviation:
    If you type div>p#myId.myClass\*3, and then trigger the Emmet expansion (often by pressing the "Tab" key), Emmet will generate the following HTML code:

       <div>
            <p id="myId" class="myClass"></p>
            <p id="myId" class="myClass"></p>
            <p id="myId" class="myClass"></p>
        </div>

        CSS Abbreviation:
        If you type bgc:red;fw:bold, and then trigger the Emmet expansion, Emmet will generate the following
        CSS code:
        background-color: red;
        font-weight: bold;

2.  What is Difference between Library and framework?
    A. A library is a collection of pre-written code for specific task used as needed and Framework provides the structural foundation for building application with guidelines and tools.

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

Chapter 2 Theory:

1. What is NPM ?
   A.NPM stands for "Node Package Manager " it is a package manager for javascript and Node.js which allows developer to easily manage and install various libraries, frameworks and tools that can be used in their projects.NPM simplifies the process of sharing and distributing code making it easier for developer to collaborate and build application using third party code component.It is crucial tool in the javascript and nodejs ecosystem and is commonly used to handle dependencies, manage project configuration and streamline the development workflow.

2. What is parcel/webpack ? why do we need it
   A.Parcel and webpack are both popular build tool used in the web development to bundle optimize and manage assets for modern web application. They help developer to streamline the process of preparing code and assets for deployment to production environment.

3. What is .parcel-cache
   A.The .parcel-cache directory is created bu the parcel bundler to store cached build results and optimizations, which speeds uo future builds of your project by avoiding redundant processing. its safe to delete if you want to clear cached data.

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

   4. Hot module replacement:

   - Just like webpack,parcel supports HMR, allowing developers to see instant code changes in the browser without page refresh.
   - This accelerates the development process and improve the productivity by maintaining application state during updates.

   5. Fast build speed:

   - Parcel caching mechanism optimizes build times by reusing cached results for unchanged assets.
   - It laverages parallel processing to speed up builds, resulting in quicker turnaround times for development .

9. What is .gitIgnore ? what should we add and add not into it?
   A. '.gitIgnore' file specifies files and directories to exclude from the version control add generated files,dependencies and sensitive data.Don't add important config files or essential project code. Keep the repository clean and focused in the code that needs to be shared.

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

15. Read about ^-caret and ~-Tilda
    A.Caret(^): Allows updates within the same major version.
    Tilda(~): Allows updates within the same minor version.

16. Read about Scripts types in HTML(MDN Docs)
    A.The 'script' elements in html is used to include Javascript code. The type attribute specifies the type of content usually set as 'text/javascript'. In modern HTML the attribute is often omitted as browser assume javascript by default.

# Parcel

- Dev Build
- Local Server
- HMR - Hot module replacement
- File Watching Algorithm (Written in C++)
- caching Faster Builds
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
