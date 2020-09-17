const path = require('path');
const last = require(path.join(__dirname, '/main.js'));

class mocked_log{
    error(msg) {
        console.log(`ERROR:${msg}`);
    };
    debug(msg) {
        console.log(`DEBUG:${msg}`);
    };
};
const log = new mocked_log();


function test_last() {
    const myname = new last('Hi', 'From Test')
    myname.name.print_hi();
    myname.print_full();
};
module.exports(log);
test_last();
