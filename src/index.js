const { SyncHook } = require('tapable');
const hook = new SyncHook(['name', 'oth']);

hook.tap('A', (name, oth) => {
    console.log(`hello A ${name} ${oth}`);
});

hook.tap('B', (name, oth, res) => {
    console.log(`hello B ${name} ${oth} ${res}`);
});

hook.call('ahonn', 'params');
