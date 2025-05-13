//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// GENERIC NEXT PAGE ELEMENT
router.post('*', function (req, res, next) {
    console.log(req.body);
    if (req.body['next-page']) {
      res.redirect(req.body['next-page']);
    } else {
      next();
    }
  });

    // STP Did you verify the claimant’s identity?

    router.post('/identity-answer', function(request, response) {

      var passedidentity = request.session.data['passedidentity']
      if (passedidentity == "yes"){
          response.redirect("/stp/tasklist")
      } else {
          response.redirect("/stp/about-to-disallow")
      }
  })

  // STP-1 Did you verify the claimant’s identity?

  router.post('/identity-answer-1', function(request, response) {

    var passedidentity1 = request.session.data['passedidentity1']
    if (passedidentity1 == "yes"){
        response.redirect("/stp-1/how-verify-identity")
    } else {
        response.redirect("/stp-1/do-next-identity")
    }
})

  // STP-1 What do you want to do next?

  router.post('/donext-answer-1', function(request, response) {

    var donext = request.session.data['donext']
    if (donext == "disallow"){
        response.redirect("/stp-1/about-to-disallow")
    } else {
        response.redirect("/stp-1/tasklist")
    }
})
