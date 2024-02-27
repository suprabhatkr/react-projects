function renderElement(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    domElement.innerHTML = reactElement.children;
    container.appendChild(domElement);
}
reactElement = {
    type : "a",
    props: {
        href: "https://bing.com/chat",
        target: "_blank"
    },
    children: "Click here for google"
}

mainContainer = document.getElementById("root");

renderElement(reactElement, mainContainer);