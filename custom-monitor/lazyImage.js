export default element => {
    // store original link text
    const text = element.textContent;

    // replace element text with image
    const image = new Image();
    image.src = element.href;
    image.setAttribute('alt', text);
    element.replaceChild(image, element.firstChild);

    return () => {
        // restore original element state
        element.innerHTML = text;
    };
};
