// Show and hide tabs
function showTab(tabId) {
    document.getElementById('schedule').style.display = (tabId === 'schedule') ? 'block' : 'none';
    document.getElementById('roaming').style.display = (tabId === 'roaming') ? 'block' : 'none';
}

// Save the state of all checkboxes
function saveChecklist() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
}

// Load the state of all checkboxes on page load
window.onload = function() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = localStorage.getItem(checkbox.id) === 'true';
    });

    // Add event listeners to save changes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', saveChecklist);
    });
};

