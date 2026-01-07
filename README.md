# dataform-example
This is an example dataform project that includes:
* Defining sources using javascript
* Creating a simple dimensional model and an aggregate table using SQL
* Creating a staging view with use of resolve to enable handling incremental loads into multiple target tables via one staging table
* Defining and using a helper javascript method (surrogate key)

Note: The model is just intended for demonstration, it's not a fully fledged data model (e.g. you probably wouldn't want price on a type 1 dimension table, etc.)
