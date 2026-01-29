# UK Company Sponsorship Filter

A Python tool to filter and search through the UK Worker and Temporary Worker sponsorship data.

## Description

This script allows users to search for UK companies that hold sponsorship licenses. It processes the official government CSV data and provides filtering options to help identify sponsors in specific locations or with specific names.

### Key Features
- **Filter by City**: Find all sponsors located in a specific town or city.
- **Filter by Keyword**: Search for companies by name (e.g., "Tech", "Solutions").
- **Combined Search**: Narrow down results by applying both city and keyword filters.
- **Export Results**: Save your search results to a new CSV file for further analysis.
- **Interactive CLI**: Simple command-line interface for easy navigation.

## Prerequisites

- Python 3.x
- The source data file: `2025-12-22_-_Worker_and_Temporary_Worker.csv`
  - *Note: This file is excluded from the repository. You must download it from the official UK government website or place your own copy in the project root.*

## Usage

1. **Setup**: Ensure the source CSV file (`2025-12-22_-_Worker_and_Temporary_Worker.csv`) is present in the same directory as the script.

2. **Run the Script**:
   ```bash
   python sponsorship_filter.py
   ```

3. **Menu Options**:
   - `1. Search by City`: Enter a city name (e.g., "London", "Manchester").
   - `2. Search by Keyword`: Enter a term to search within company names.
   - `3. Search by City AND Keyword`: Combine both filters.
   - `4. Exit`: Quit the application.

4. **Saving Results**: After a successful search, you will be prompted to save the results. If you choose 'y', the data will be exported to a CSV file in the current directory.

## Testing

A verification script is included to ensure the core filtering logic works as expected.
```bash
python test_filter.py
```
