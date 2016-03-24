export function configure(aurelia){
    aurelia.use
           .standardConfiguration() 
           .developmentLogging(); // enable debug logging to see aurelia-computed's messages.
    aurelia.start().then(a => a.setRoot());
    
}