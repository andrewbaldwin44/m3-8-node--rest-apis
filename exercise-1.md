# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of what it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer
| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | Returns data from the API based on the endpoint and parameters provided |
| `/test`  | `POST`  | Creates a new record |
| `/test`  | `PUT`  | Updates an existing record |
| `/test`  | `DELETE`  | Deletes an existing record |

/seating GET get most recent seating arrangement status
/seating PUT update current seating arrangement status
/seating DELETE destroy a table/seat
/seating POST create new table/seat

/stock GET get everything that is in stock
/stock/:item GET get most recent specific food/drink stock
/stock/:item PUT update specific food/drink stock
/stock/:item POST create specific food/drink stock
/stock/:item PATCH modify specific food/drink stock (such as the price)
/stock/:item DELETE remove specific food/drink from stock

/sales GET get all revenue with most recent at the top
/sales/:sale GET get a specific sale

/expenses GET all expenses
/expenses/:type GET get a specific expense type (overhead, wages, etc.)
/expenses/:type POST add new expense to database

/employees GET get a list of all employees
/employees/:employee GET info on a specific employee
/employees/:employee POST create a new employee
/employees/:employee PUT modify info on a specific employee
/employees/:employee DELETE delete a specific employee

/employees/schedule GET schedule on all employees
/employees/schedule POST create new schedule for employees

/employees/schedule/:id GET specific employee schedule
/employees/schedule/:id PUT modify schedule for employees
/employees/schedule/:id DELETE delete employee schedule

/customers GET get all customers
/customers/:customer GET get specific customer info (name, order, where they live, social insurance, place of worship, religion, name of relatives, SKU of couch, favourite type of potato, next of kin, mothers maiden name, hometown, pets first name, first best friends name, bank pin, where they bank, drivers license, passport, credit card, payment method, cellphone number)
/customers/:customer POST create new customer
/customers/:customer PUT update customers social insurance number
/customers/:customer DELETE (but we won't really)
