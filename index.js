const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const { array } = req.body;

    const evenNumbers = array.filter(item => typeof item === 'number' && item % 2 === 0);
    const oddNumbers = array.filter(item => typeof item === 'number' && item % 2 !== 0);
    const upperCaseAlphabets = array.filter(item => typeof item === 'string' && item.match(/[a-zA-Z]/));

    const response = {
        status: "Success",
        userID: 123,
        emailID: "example@example.com",
        collegeRollNumber: "CRN123",
        evenNumbers: evenNumbers,
        oddNumbers: oddNumbers,
        upperCaseAlphabets: upperCaseAlphabets.map(char => char.toUpperCase())
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
