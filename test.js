const path = require('path');


class mocked_log{
    error(msg) {
        console.log(`ERROR:${msg}`);
    };
    debug(msg) {
        console.log(`DEBUG:${msg}`);
    };
};
const log = new mocked_log();

global.log =  log
const last = require(path.join(__dirname, '/main.js'));

function test_last() {
    const myname = new last('Hi', 'From Test')
    myname.name.print_hi();
    myname.print_full();
};
test_last();
