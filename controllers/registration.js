const path = require('path')

exports.getHome = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'))
}

exports.getRegister = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'registration.html'))
}

exports.getReview = (req, res, next) => {
    res.render('preview')
}

exports.postReview = (req, res, next) => {
    console.log(req.body)
    const {
        lname,
        fname,
        street,
        city,
        state,
        country,
        pcode,
        phone,
        eaddress,
        formOfContact,
        formOfPayment,
        freqOfDonation,
        amtOfDonation,
        comments
    } = req.body
    return res.render('preview', {
        registrationDetails: {
            lastName: lname,
            firstName: fname,
            street: street,
            city: city,
            state: state,
            country: country,
            pcode: pcode,
            phone: phone,
            eaddress: eaddress,
            formOfContact: formOfContact,
            formOfPayment: formOfPayment,
            freqOfDonation: freqOfDonation,
            amtOfDonation: amtOfDonation,
            comments: comments
        }
    })
}