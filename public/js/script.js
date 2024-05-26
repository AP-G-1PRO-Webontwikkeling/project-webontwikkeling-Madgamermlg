// Function to handle search input
function handleSearch() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var rows = document.querySelectorAll('#dataTable tbody tr');
    rows.forEach(function (row) {
        var nameCell = row.querySelector('td:nth-child(2)'); // Assuming the "Naam" column is the second column
        if (nameCell) {
            var nameText = nameCell.textContent.toLowerCase();
            if (nameText.includes(searchInput)) {
                row.style.display = '';
            }
            else {
                row.style.display = 'none';
            }
        }
    });
}
// Function to handle sorting by criteria
function handleSort() {
    var table = document.getElementById('dataTable');
    var tbody = table.querySelector('tbody');
    var rows = Array.from(tbody.querySelectorAll('tr'));
    var sortCriteria = document.getElementById('sortCriteria').value;
    rows.sort(function (a, b) {
        var valueA, valueB;
        switch (sortCriteria) {
            case 'nameAsc':
                valueA = a.querySelector('td:nth-child(2)').textContent.toLowerCase();
                valueB = b.querySelector('td:nth-child(2)').textContent.toLowerCase();
                return valueA.localeCompare(valueB);
            case 'nameDesc':
                valueA = a.querySelector('td:nth-child(2)').textContent.toLowerCase();
                valueB = b.querySelector('td:nth-child(2)').textContent.toLowerCase();
                return valueB.localeCompare(valueA);
            case 'cardNumberAsc':
                valueA = parseInt(a.querySelector('td:nth-child(5)').textContent, 10);
                valueB = parseInt(b.querySelector('td:nth-child(5)').textContent, 10);
                return valueA - valueB;
            case 'cardNumberDesc':
                valueA = parseInt(a.querySelector('td:nth-child(5)').textContent, 10);
                valueB = parseInt(b.querySelector('td:nth-child(5)').textContent, 10);
                return valueB - valueA;
            default:
                return 0;
        }
    });
    // Remove existing rows and append sorted rows
    tbody.innerHTML = '';
    rows.forEach(function (row) { return tbody.appendChild(row); });
}
// Add event listener to search input
document.getElementById('searchInput').addEventListener('input', handleSearch);
// Add event listener to sort button
document.getElementById('sortButton').addEventListener('click', handleSort);
