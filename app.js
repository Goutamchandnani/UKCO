// ============================================
// State Management
// ============================================
let companiesData = [];
let currentResults = [];

// ============================================
// DOM Elements
// ============================================
const elements = {
    // Upload
    csvFileInput: document.getElementById('csvFileInput'),
    uploadZone: document.getElementById('uploadZone'),
    uploadSection: document.getElementById('uploadSection'),
    fileInfo: document.getElementById('fileInfo'),
    fileName: document.getElementById('fileName'),
    fileStats: document.getElementById('fileStats'),

    // Search
    searchSection: document.getElementById('searchSection'),
    filterTabs: document.querySelectorAll('.tab-btn'),
    filterPanels: {
        city: document.getElementById('cityPanel'),
        keyword: document.getElementById('keywordPanel'),
        combined: document.getElementById('combinedPanel')
    },

    // Inputs
    cityInput: document.getElementById('cityInput'),
    keywordInput: document.getElementById('keywordInput'),
    combinedCityInput: document.getElementById('combinedCityInput'),
    combinedKeywordInput: document.getElementById('combinedKeywordInput'),

    // Buttons
    searchCityBtn: document.getElementById('searchCityBtn'),
    searchKeywordBtn: document.getElementById('searchKeywordBtn'),
    searchCombinedBtn: document.getElementById('searchCombinedBtn'),
    clearBtn: document.getElementById('clearBtn'),
    exportBtn: document.getElementById('exportBtn'),

    // Results
    resultsSection: document.getElementById('resultsSection'),
    resultsCount: document.getElementById('resultsCount'),
    resultsBody: document.getElementById('resultsBody'),
    loadingSpinner: document.getElementById('loadingSpinner'),
    resultsTableWrapper: document.getElementById('resultsTableWrapper'),
    noResults: document.getElementById('noResults'),

    // Toast
    toastContainer: document.getElementById('toastContainer')
};

// ============================================
// File Upload Handling
// ============================================
elements.csvFileInput.addEventListener('change', handleFileSelect);

elements.uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    elements.uploadZone.classList.add('drag-over');
});

elements.uploadZone.addEventListener('dragleave', () => {
    elements.uploadZone.classList.remove('drag-over');
});

elements.uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    elements.uploadZone.classList.remove('drag-over');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        handleFile(file);
    }
}

function handleFile(file) {
    // Check for CSV extension (case-insensitive) or MIME type
    const isCsvExtension = file.name.toLowerCase().endsWith('.csv');
    const isCsvMime = file.type === 'text/csv' ||
        file.type === 'application/vnd.ms-excel' ||
        file.type === 'application/csv' ||
        file.type === 'text/x-csv' ||
        file.type === 'application/x-csv' ||
        file.type === 'text/comma-separated-values' ||
        file.type === 'text/x-comma-separated-values';

    if (!isCsvExtension && !isCsvMime) {
        showToast('Please select a valid CSV file', 'error');
        return;
    }

    showToast('Loading CSV file...', 'success');

    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
            companiesData = results.data;

            // Display file info
            elements.fileName.textContent = `📄 ${file.name}`;
            elements.fileStats.textContent = `${companiesData.length.toLocaleString()} companies loaded`;
            elements.fileInfo.style.display = 'block';

            // Show search section
            elements.searchSection.style.display = 'block';

            showToast(`Successfully loaded ${companiesData.length.toLocaleString()} companies!`, 'success');
        },
        error: function (error) {
            showToast('Error parsing CSV file: ' + error.message, 'error');
        }
    });
}

// ============================================
// Filter Tab Switching
// ============================================
elements.filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const filterType = tab.dataset.filter;

        // Update active tab
        elements.filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update active panel
        Object.values(elements.filterPanels).forEach(panel => {
            panel.classList.remove('active');
        });
        elements.filterPanels[filterType].classList.add('active');
    });
});

// ============================================
// Search Functionality
// ============================================
elements.searchCityBtn.addEventListener('click', () => {
    const city = elements.cityInput.value.trim();
    if (!city) {
        showToast('Please enter a city name', 'error');
        return;
    }
    searchByCity(city);
});

elements.searchKeywordBtn.addEventListener('click', () => {
    const keyword = elements.keywordInput.value.trim();
    if (!keyword) {
        showToast('Please enter a keyword', 'error');
        return;
    }
    searchByKeyword(keyword);
});

elements.searchCombinedBtn.addEventListener('click', () => {
    const city = elements.combinedCityInput.value.trim();
    const keyword = elements.combinedKeywordInput.value.trim();

    if (!city || !keyword) {
        showToast('Please enter both city and keyword', 'error');
        return;
    }
    searchCombined(city, keyword);
});

// Enter key support
elements.cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') elements.searchCityBtn.click();
});

elements.keywordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') elements.searchKeywordBtn.click();
});

elements.combinedKeywordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') elements.searchCombinedBtn.click();
});

// ============================================
// Filter Functions
// ============================================
function filterByCity(data, city) {
    const cityLower = city.toLowerCase().trim();
    return data.filter(row => {
        const rowCity = (row['Town/City'] || '').toLowerCase().trim();
        return rowCity === cityLower;
    });
}

function filterByKeyword(data, keyword) {
    const keywordLower = keyword.toLowerCase().trim();
    return data.filter(row => {
        const orgName = (row['Organisation Name'] || '').toLowerCase();
        return orgName.includes(keywordLower);
    });
}

function searchByCity(city) {
    showLoading();

    setTimeout(() => {
        currentResults = filterByCity(companiesData, city);
        displayResults(currentResults);
        showToast(`Found ${currentResults.length} companies in ${city}`, 'success');
    }, 300);
}

function searchByKeyword(keyword) {
    showLoading();

    setTimeout(() => {
        currentResults = filterByKeyword(companiesData, keyword);
        displayResults(currentResults);
        showToast(`Found ${currentResults.length} companies matching "${keyword}"`, 'success');
    }, 300);
}

function searchCombined(city, keyword) {
    showLoading();

    setTimeout(() => {
        const cityResults = filterByCity(companiesData, city);
        currentResults = filterByKeyword(cityResults, keyword);
        displayResults(currentResults);
        showToast(`Found ${currentResults.length} companies matching "${keyword}" in ${city}`, 'success');
    }, 300);
}

// ============================================
// Display Results
// ============================================
function displayResults(results) {
    elements.loadingSpinner.style.display = 'none';
    elements.resultsSection.style.display = 'block';
    elements.clearBtn.style.display = 'block';

    elements.resultsCount.textContent = `${results.length} ${results.length === 1 ? 'company' : 'companies'} found`;

    if (results.length === 0) {
        elements.resultsTableWrapper.style.display = 'none';
        elements.noResults.style.display = 'block';
        return;
    }

    elements.resultsTableWrapper.style.display = 'block';
    elements.noResults.style.display = 'none';

    // Clear previous results
    elements.resultsBody.innerHTML = '';

    // Add new results with staggered animation
    results.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.style.animationDelay = `${index * 0.02}s`;

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${escapeHtml(row['Organisation Name'] || 'N/A')}</td>
            <td>${escapeHtml(row['Town/City'] || 'N/A')}</td>
            <td>${escapeHtml(row['County'] || 'N/A')}</td>
            <td>${escapeHtml(row['Route'] || 'N/A')}</td>
        `;

        elements.resultsBody.appendChild(tr);
    });
}

function showLoading() {
    elements.resultsSection.style.display = 'block';
    elements.loadingSpinner.style.display = 'block';
    elements.resultsTableWrapper.style.display = 'none';
    elements.noResults.style.display = 'none';
}

// ============================================
// Clear Results
// ============================================
elements.clearBtn.addEventListener('click', () => {
    currentResults = [];
    elements.resultsSection.style.display = 'none';
    elements.clearBtn.style.display = 'none';

    // Clear inputs
    elements.cityInput.value = '';
    elements.keywordInput.value = '';
    elements.combinedCityInput.value = '';
    elements.combinedKeywordInput.value = '';

    showToast('Results cleared', 'success');
});

// ============================================
// Export to CSV
// ============================================
elements.exportBtn.addEventListener('click', () => {
    if (currentResults.length === 0) {
        showToast('No results to export', 'error');
        return;
    }

    const csv = Papa.unparse(currentResults);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `uk_sponsorship_results_${timestamp}.csv`;

    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();

    showToast(`Exported ${currentResults.length} companies to ${filename}`, 'success');
});

// ============================================
// Toast Notifications
// ============================================
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            elements.toastContainer.removeChild(toast);
        }, 300);
    }, 3000);
}

// ============================================
// Utility Functions
// ============================================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// Initialize
// ============================================
console.log('🇬🇧 UK Sponsorship Filter initialized');
