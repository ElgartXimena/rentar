const environment = {
  
  "development" : {  
    production: false,
    hostBackend: 'http://localhost:8000'
  },

    
  "production" : {  
    production: true,
    hostBackend: '/api'
  },

};

export default environment[process.env.NODE_ENV];
