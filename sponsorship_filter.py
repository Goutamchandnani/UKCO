import csv
import sys
import os
import re

CSV_FILE = "2025-12-22_-_Worker_and_Temporary_Worker.csv"

def load_data(filepath):
    """
    Loads company data from the CSV file.
    """
    data = []
    if not os.path.exists(filepath):
        print(f"Error: File '{filepath}' not found.")
        return []

    try:
        with open(filepath, mode='r', encoding='utf-8', errors='replace') as f:
            reader = csv.DictReader(f)
            # Ensure headers are stripped of whitespace if needed, though DictReader usually handles well.
            for row in reader:
                data.append(row)
    except Exception as e:
        print(f"Error reading file: {e}")
        return []
        
    return data

def filter_by_city(data, city):
    """
    Returns a list of companies where the city matches exactly (case-insensitive).
    """
    results = []
    city_lower = city.lower().strip()
    
    for row in data:
        row_city = row.get("Town/City", "").strip().lower()
        if row_city == city_lower:
            results.append(row)
            
    return results

def filter_by_keyword(data, keyword):
    """
    Returns a list of companies where the keyword is found in the organisation name (case-insensitive).
    """
    results = []
    keyword_lower = keyword.lower().strip()
    
    for row in data:
        row_name = row.get("Organisation Name", "").lower()
        if keyword_lower in row_name:
            results.append(row)
            
    return results

def save_to_csv(results, filename):
    """
    Saves the list of dictionaries to a CSV file.
    """
    if not results:
        return
        
    try:
        # Get fieldnames from the first result
        fieldnames = list(results[0].keys())
        
        with open(filename, mode='w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(results)
        print(f"Successfully saved {len(results)} records to '{filename}'.")
    except Exception as e:
        print(f"Error saving file: {e}")

def sanitize_filename(text):
    """
    Sanitizes a string to be safe for filenames.
    """
    return re.sub(r'[^\w\s-]', '', text).strip().replace(' ', '_')

def print_results(results):
    if not results:
        print("No companies found.")
        return

    print(f"\nFound {len(results)} companies:")
    print("-" * 80)
    
    for i, row in enumerate(results, 1):
        print(f"{i}. {row.get('Organisation Name', 'Unknown Name')}")
        print(f"   City: {row.get('Town/City', 'N/A')}")
        print(f"   County: {row.get('County', 'N/A')}")
        print(f"   Route: {row.get('Route', 'N/A')}")
        print("-" * 40)

def handle_save_prompt(results, default_filename):
    if not results:
        return

    choice = input(f"\nDo you want to save these results to a CSV file? (y/n): ").strip().lower()
    if choice == 'y':
        filename = input(f"Enter filename [default: {default_filename}]: ").strip()
        if not filename:
            filename = default_filename
        
        if not filename.endswith('.csv'):
            filename += '.csv'
            
        save_to_csv(results, filename)

def main():
    print(f"Loading data from {CSV_FILE}...")
    data = load_data(CSV_FILE)
    
    if not data:
        print("No data loaded. Exiting.")
        return

    print(f"Loaded {len(data)} records.")

    while True:
        print("\n--- UK Sponsorship Filter ---")
        print("1. Search by City")
        print("2. Search by Keyword (Company Name)")
        print("3. Search by City AND Keyword")
        print("4. Exit")
        
        try:
            choice = input("Enter your choice: ").strip()
        except EOFError:
            break

        matches = []
        default_filename = "results.csv"

        if choice == '1':
            city = input("Enter city name: ").strip()
            if city:
                matches = filter_by_city(data, city)
                print_results(matches)
                default_filename = f"companies_in_{sanitize_filename(city)}.csv"
                handle_save_prompt(matches, default_filename)
                
        elif choice == '2':
            keyword = input("Enter keyword: ").strip()
            if keyword:
                matches = filter_by_keyword(data, keyword)
                print_results(matches)
                default_filename = f"{sanitize_filename(keyword)}_companies.csv"
                handle_save_prompt(matches, default_filename)

        elif choice == '3':
            city = input("Enter city name: ").strip()
            keyword = input("Enter keyword: ").strip()
            
            if city and keyword:
                # Optimized: Filter by city first (usually smaller subset), then keyword
                city_matches = filter_by_city(data, city)
                matches = filter_by_keyword(city_matches, keyword)
                print_results(matches)
                default_filename = f"{sanitize_filename(keyword)}_companies_in_{sanitize_filename(city)}.csv"
                handle_save_prompt(matches, default_filename)
                
        elif choice == '4':
            print("Exiting.")
            break
        else:
            print("Invalid choice, please try again.")

if __name__ == "__main__":
    main()
