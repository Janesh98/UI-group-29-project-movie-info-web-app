$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let input  = $('#searchText').val();
        search(input);
        e.preventDefault();
    });
});

function search(input) {
    console.log(input);
}