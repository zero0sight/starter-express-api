const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send(req.url)
  
  if (url.pathname.startsWith('/')) 
  {
      let realhostname = "digikala.com";
      let realpathname = "";
      url.hostname = realhostname;
      url.pathname = '/'+ realpathname;
      url.protocol = "https";
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
//     res.send("wtf")
})
app.listen(process.env.PORT || 3000)



/*export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      let realhostname = "morteza.persiangolf.click";
      let realpathname = "pepsi";
      url.hostname = realhostname;
      url.pathname = '/'+ realpathname;
      url.protocol = "https";
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};*/
