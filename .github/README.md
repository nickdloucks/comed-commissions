# comed-commissions

This is a tool for generating commissions statements for CoMedical Inc.'s sales representatives. Development will be stairstepped in multiple phases as follows:

First, it will be a basic tool for generating a static commissions statement for accounting to use for the purpose of payroll. It will take in CSV data containing sales tracings, and process the data according to the commissions parameters of each sales rep. It will output a PDF and/or HTML statement indicating how much the rep will be paid on the 5th and 20th of the month.

The next phase will involve formatting the commissions statement data into JSON format. It will send this data to the Web Connect's .NET API. It will eventually be configured in such a way so as to be visible to the appropriate sales rep in their personal P21 Connect account.

Once the reps are able to view their static commissions statements in their P21 Connect account, the next step will be to make a visual report of all their statements in P21 Connect.

This is a tentative outline for the project, and will be adjusted according to the preferences of CoMedical management and sales reps.