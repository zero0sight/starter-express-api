const express = require('express')
const app = express()

app.all('/', (req, res) => {
//   let url = new URL(req.originalUrl, `https://${req.hostname}`);
//   let realhostname = url.pathname.split('/')[2];
//   let realpathname = url.pathname.split('/')[1];
//   url.hostname = realhostname;
//   url.pathname = '/' + realpathname;
//   url.protocol = "https";
  let newUrl = new URL("www.digikala.com");

  res.redirect(newUrl);
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started on port 3000')
})


// const express = require('express')
// const app = express()
// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send(req.url)
    
//     let realhostname = "digikala.com";
//     let realpathname = "";
//     url.hostname = realhostname;
//     url.pathname = '/'+ realpathname;
//     url.protocol = "https";
//     let new_request = new Request(url, request);
//     return fetch(new_request);
// //     res.send("wtf")
// })
// app.listen(process.env.PORT || 3000)



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
