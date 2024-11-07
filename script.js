// Show and hide tabs
function showTab(tabId) {
    document.getElementById('schedule').style.display = (tabId === 'schedule') ? 'block' : 'none';
    document.getElementById('checklist').style.display = (tabId === 'checklist') ? 'block' : 'none';
}

// Toggle dropdown for roaming acts
document.getElementById('roaming-acts').addEventListener('change', function() {
    document.getElementById('roaming-acts-dropdown').style.display = this.checked ? 'block' : 'none';
});

// Save checklist state
function saveChecklist() {
    document.querySelectorAll('#checklist-form input[type="checkbox"]').forEach(checkbox => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
}

// Load checklist state on page load
window.onload = function() {
    document.querySelectorAll('#checklist-form input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = localStorage.getItem(checkbox.id) === 'true';
    });

    // Display dropdown if "Roaming Acts" is checked
    document.getElementById('roaming-acts-dropdown').style.display = document.getElementById('roaming-acts').checked ? 'block' : 'none';

    // Add event listeners to save changes
    document.querySelectorAll('#checklist-form input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', saveChecklist);
    });
};
