// Show and hide tabs
function showTab(tabId) {
    document.getElementById('schedule').style.display = (tabId === 'schedule') ? 'block' : 'none';
    document.getElementById('roaming').style.display = (tabId === 'roaming') ? 'block' : 'none';
}

// Toggle strikethrough on checked items
function toggleStrikethrough(checkbox) {
    const row = checkbox.closest('tr');
    if (checkbox.checked) {
        row.classList.add('checked');
    } else {
        row.classList.remove('checked');
    }
}

// Save the state of all checkboxes
function saveChecklist() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        localStorage.setItem(checkbox.id, checkbox.checked);
        toggleStrikethrough(checkbox); // Apply strikethrough based on saved state
    });
}

// Load the state of all checkboxes on page load
window.onload = function() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = localStorage.getItem(checkbox.id) === 'true';
        toggleStrikethrough(checkbox); // Apply strikethrough on load if checked

        // Add event listener to save changes and toggle strikethrough
        checkbox.addEventListener('change', saveChecklist);
    });
};
