function updateRecords(records, id, prop, value) {
  // Check if value is an empty string
  if (value === "") {
    // Delete the prop property from the album
    delete records[id][prop];
  } else if (prop !== "tracks") {
    // If prop is not 'tracks' and value is not empty
    // Assign value to the album's prop
    records[id][prop] = value;
  } else {
    // If prop is 'tracks' and value is not empty
    if (!records[id].hasOwnProperty("tracks")) {
      // If the album doesn't have a tracks property, create an empty array
      records[id]["tracks"] = [];
    }
    // Add value to the end of the album's existing tracks array
    records[id]["tracks"].push(value);
  }

  // Return the entire records object
  return records;
}

// Example usage
updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Mamma Mia");
updateRecords(recordCollection, 2548, "artist", "");
