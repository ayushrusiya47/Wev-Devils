//FUNCTION FOR ADMINS

const client = require("../conifgs/db");
const jwt = require("jsonwebtoken");

// For getting list of users for fest or particular event at a page for given items per page
exports.getList = (req, res) => {
    client
        //Fetching users from database ordered by email
        .query(
            `SELECT name, email, e1, e2, e3, e4
          FROM users 
          ORDER BY name
          `
        )
        .then((data) => {
            res.status(200).json(data.rows); // Returning array of users for given page
        })
        .catch((err) => {
            res.status(500).json({
                error: "Database error in admin getList for all users",
            });
        });
    // // For list of users registered for a particular event
    // else {
    //   client
    //     //Fetching users from database registered for a particular event ordered by email
    //     .query(
    //       `SELECT name, email, e1, e2, e3, e4
    //       FROM users 
    //       WHERE ${event} = TRUE
    //       ORDER BY email
    //       OFFSET ${items * (page - 1)} ROWS
    //       FETCH NEXT ${items} ROWS ONLY
    //       `
    //     )
    //     .then((data) => {
    //       res.status(200).json(data.rows); // Returning user list as array
    //     })
    //     .catch((err) => {
    //       res.status(500).json({
    //         error: "Database error in admin getList for particular event ",
    //       });
    //     });
    // }


};

// Returns the current no. of user registered for the fest and individual events also
exports.count = (req, res) => {
    var email = req.email;
    //If the user is admin
    if (email == "Admin@techx.com") {
        var arr = { total: 0, e1: 0, e2: 0, e3: 0, e4: 0 }; // For storing no. of registrations
        client
            // For all users registered in fest
            .query(
                `SELECT 
      COUNT(*)
      FROM users
      WHERE TRUE 
        `
            )
            .then((data) => {
                arr.total = parseInt(data.rows[0].count); //The query gives string hence converting to int
            })
            .catch((err) => {
                res.status(500).json({
                    error: "Database error in admin count! 1",
                });
            });

        client
            //For users registered in e1
            .query(
                `SELECT 
      COUNT(*)
      FROM users
      WHERE e1 = TRUE 
        `
            )
            .then((data) => {
                arr.e1 = parseInt(data.rows[0].count); //The query gives string hence converting to int
            })
            .catch((err) => {
                res.status(500).json({
                    error: "Database error in admin count! 2",
                });
            });

        client
            //For users registered in e2
            .query(
                `SELECT 
      COUNT(*)
      FROM users
      WHERE e2 = TRUE 
        `
            )
            .then((data) => {
                arr.e2 = parseInt(data.rows[0].count); //The query gives string hence converting to int
            })
            .catch((err) => {
                res.status(500).json({
                    error: "Database error in admin count! 3",
                });
            });

        client
            //For users registered in e3
            .query(
                `SELECT 
      COUNT(*)
      FROM users
      WHERE e3 = TRUE 
        `
            )
            .then((data) => {
                arr.e3 = parseInt(data.rows[0].count); //The query gives string hence converting to int
            })
            .catch((err) => {
                res.status(500).json({
                    error: "Database error in admin count! 4",
                });
            });

        client
            //For users registered in e4
            .query(
                `SELECT 
      COUNT(*)
      FROM users
      WHERE e4 = TRUE 
        `
            )
            .then((data) => {
                arr.e4 = parseInt(data.rows[0].count); //The query gives string hence converting to int
                res.status(200).json(arr); //Sending data here because this is last query and it will run after rest of query are completed
                //to be checked synchronous asynchronous pata nhi kya (-_-)
            })
            .catch((err) => {
                res.status(500).json({
                    error: "Database error in admin count! 5",
                });
            });
    }

    //If the user is not admin
    else {
        res.status(401).send("AUTHENTICATION FAILED! LOG IN AGAIN.");
    }
};

// For cancelling an event
exports.eventClose = (req, res) => {
    const { event } = req.body;
    var email = req.email;

    //If the user is admin
    if (email == "Admin@techx.com") {
        client
            .query(
                `UPDATE USERS
        SET ${event} = NULL`
            )
            .then(() => {
                res.sendStatus(204);
            })
            .catch((err) => {
                res.status(500).json({
                    error: "Database error in cancel event",
                });
            });
    }

    //If user is not admin
    else {
        res.status(401).send("AUTHENTICATION FAILED! LOG IN AGAIN.");
    }
};

//To restart a cancelled event
exports.eventOpen = (req, res) => {
    const { event } = req.body;
    var email = req.email;
    //If user is admin
    if (email == "Admin@techx.com") {
        client
            .query(
                `UPDATE USERS
      SET ${event} = FALSE`
            ) // If someone was registered before cancel, he will be unregistered -- TO BE FIXED
            .then(() => {
                res.sendStatus(204);
            })
            .catch((err) => {
                res.status(500).json({
                    error: "Database error in open event",
                });
            });
    }
    //If user is not admin
    else {
        res.status(400).send("AUTHENTICATION FAILED! LOG IN AGAIN.");
    }
};
