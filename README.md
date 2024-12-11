-   keyboard support
-   fully accessible

*   A heading comp, a button comp, a content comp, and a parent comp (wrapper)

-   mapp over to provide the multiple rows

-   Rule for Centering Content Using Flexbox:

    -   Make the parent a Flex container:
    -   Align items horizontally and vertically:
        -   justify-content: center;
        -   align-items: center;
        -   height: 100vh;

-   Accessiblity rules:
    -   Semantic elements (NEVER USE A DIV AS A CLICKABLE ELEMENT)
    -   explicitly ttell the browser that a element is hidden using aria-hidden=true, and aria-expanded (to the visibility controlling element)
    -   couple the visibility controlling button with the controlled expanding element using aria-controls
    -   dynamically added content should be focused automatically
    -   keyboard operable
