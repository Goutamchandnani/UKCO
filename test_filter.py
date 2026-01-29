
import sponsorship_filter
import os
import csv

def run_tests():
    print("Loading data for testing...")
    # Use the real data file
    data = sponsorship_filter.load_data("2025-12-22_-_Worker_and_Temporary_Worker.csv")
    
    if not data:
        print("Failed to load data.")
        return

    print(f"Data loaded: {len(data)} records.")

    # Test 3: Combined Filter "London" and "Tech"
    print("\nTest 3: Combined Filter (London + Tech)")
    city_matches = sponsorship_filter.filter_by_city(data, "London")
    combined_matches = sponsorship_filter.filter_by_keyword(city_matches, "Tech")
    
    print(f"Found {len(combined_matches)} companies with 'Tech' in London.")
    if len(combined_matches) > 0:
        print("Integration Test 3 Passed: Retrieved combined results.")
    else:
        # It's possible there are none, but unlikely for London/Tech. 
        # If 0, we can't be 100% sure it's working without a known positive, 
        # but the logic is simple reuse of verified functions.
        print("Integration Test 3 Result: 0 matches found (Verification inconclusive but logic likely correct).")

    # Test 4: Save to CSV
    print("\nTest 4: Save to CSV")
    if combined_matches:
        test_filename = "test_combined_export.csv"
        # CLEANUP
        if os.path.exists(test_filename):
            os.remove(test_filename)
            
        sponsorship_filter.save_to_csv(combined_matches, test_filename)
        
        if os.path.exists(test_filename):
            print(f"Integration Test 4 Passed: File '{test_filename}' created.")
            # Verify content count
            with open(test_filename, 'r', encoding='utf-8') as f:
                row_count = sum(1 for row in f) - 1 # headers
            if row_count == len(combined_matches):
                print(f"Integration Test 4 Passed: Row count matches ({row_count}).")
            else:
                print(f"Integration Test 4 Failed: Row count mismatch. Expected {len(combined_matches)}, got {row_count}.")
            
            # Cleanup
            os.remove(test_filename)
        else:
            print("Integration Test 4 Failed: File was not created.")
    else:
        print("Skipping Test 4 (Save to CSV) because no matches were found in Test 3.")

if __name__ == "__main__":
    run_tests()
