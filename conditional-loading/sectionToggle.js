export default element => {
    // This component is for demo purpose only, do not use it in production
    // Use Section Toggle by Heydon Pickering instead https://inclusive-components.design/collapsible-sections/

    // get section to toggle so we can hide it
    const target = element.nextElementSibling;

    // setup toggle button
    const btn = document.createElement('button');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML =
        element.textContent +
        '<svg aria-hidden="true" focusable="false" viewBox="0 0 16 10"><polyline stroke="#333" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="2 2 8 8 14 2"></polyline></svg>';
    btn.onclick = function() {
        const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
        btn.setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;
    };
    element.textContent = '';
    element.appendChild(btn);

    // hide the section
    target.hidden = true;

    return () => {
        element.nextElementSibling.hidden = false;
        element.textContent = element.firstChild.textContent;
    };
};
