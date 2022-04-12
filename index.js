//Code your solutions in this file
function writeCards(names, event) {
    const recipients =[];
    for (let i = 0; i < names.length; i++) {
      recipients.push(names[i]);
      recipients[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return recipients;
  }

function countDown(integer) {
    while(integer >= 0) {
        console.log(integer);
        integer--;
    }
  }