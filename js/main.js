$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let s  = $('#searchText').val();
        console.log(s);
        e.preventDefault();
    });
});