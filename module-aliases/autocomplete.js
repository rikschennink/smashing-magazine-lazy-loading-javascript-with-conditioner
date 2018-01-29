export default element => {
    // This component is for demo purpose only, do not use it in production
    // Use Awesomplete by Lea Verou instead http://leaverou.github.io/awesomplete/

    // database
    var db = [
        'C',
        'C++',
        'Go',
        'Java',
        'Python',
        'PHP',
        'Erlang',
        'Haskell',
        'Go',
        'JavaScript',
        'Scala',
        'Ruby'
    ];

    // creates the search result list
    var output = document.createElement('ul');
    output.addEventListener('click', select);
    element.parentNode.insertBefore(output, element.nextSibling);

    // selects an item
    function select(e) {
        element.value = e.target.textContent;
        output.innerHTML = '';
    }

    // filters the input
    function search() {
        if (!element.value.length) {
            update([]);
            return;
        }
        var regex = new RegExp(element.value, 'i');
        update(
            db.filter(function(entry) {
                return regex.test(entry);
            })
        );
    }

    // renders the search results
    function update(results) {
        output.innerHTML = results
            .map(function(result) {
                return '<li><button type="button">' + result + '</button></li>';
            })
            .join('');
    }

    // listen for input
    element.addEventListener('input', search);
};
