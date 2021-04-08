const args = process.argv.slice(2);


args.forEach(element => {
setTimeout(() => {

  console.log(element);
process.stdout.write('Ding\n');

}, (element * 1000));
});

