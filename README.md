# my_namaste_react

Theory:

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
