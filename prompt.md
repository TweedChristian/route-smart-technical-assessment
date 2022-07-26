Given the following API: https://rickandmortyapi.com/api/character/?page=2 

Call the API, after retrieving the result, display a simple HTML table with 5 columns: name/gender/type/species/created, with id being the hidden column. Notice the “created” field returns a string like this: "2017-11-04T22:41:07.171Z", we would like it to be converted into user-friendly format, such as: “YYYY-MM-DD HH:mm:ss”. 

Once the table is done, implement a search bar on top of the table. A search bar can be just a simple text input. When a user types, the table will search for each cell, and returns the rows that have at least 1 cell containing the keyword. E.g.: if user type in letter “a”, then table should only show rows that have letter “a” appear in any of the cells. 

Error handling: Can you describe what happens if “created” returns null on one record, and how are you going to handle it in the code?