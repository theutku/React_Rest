import App from './app';


console.log('Booting app ...');

App().init().then(() => console.log('Application initialized...')).catch((err) => {
    console.log(err);
    process.exit(2);
});