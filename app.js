let submit = document.querySelector('input[type="submit"]');

submit.addEventListener('click', addEducation)

function addEducation(e) {
    e.preventDefault()

}

// let https = require('https');

// async function getUserTransaction(uid, txnType, monthYear) {
//     let runs = 0;

//     function runCheck() {
//         https.get('https://jsonmock.hackerrank.com/api/transactions/search?txnType=' + txnType, (res) => {
//             const {
//                 statusCode
//             } = res;
//             const contentType = res.headers['content-type'];

//             let error;
//             // Any 2xx status code signals a successful response but
//             // here we're only checking for 200.
//             if (statusCode !== 200) {
//                 error = new Error('Request Failed.\n' +
//                     `Status Code: ${statusCode}`);
//             } else if (!/^application\/json/.test(contentType)) {
//                 error = new Error('Invalid content-type.\n' +
//                     `Expected application/json but received ${contentType}`);
//             }
//             if (error) {
//                 console.error(error.message);
//                 // Consume response data to free up memory
//                 res.resume();
//                 return;
//             }

//             res.setEncoding('utf8');
//             let rawData = '';
//             res.on('data', (chunk) => {
//                 rawData += chunk;
//             });
//             res.on('end', () => {
//                 try {
//                     const parsedData = JSON.parse(rawData);
//                     console.log(parsedData);
//                     let records = 0;
//                     for (let i = 0; i < parsedData.data.length; i++) {
//                         console.log(parsedData.data[i].userId)
//                         // if (parsedData.data[i].userId === uid) {
//                         //     records++
//                         // }
//                     }
//                     console.log(records)
//                 } catch (e) {
//                     console.error(e.message);
//                 }
//             });
//         }).on('error', (e) => {
//             console.error(`Got error: ${e.message}`);
//         })
//     }
// }

// getUserTransaction(4, "debit", "02-2019")