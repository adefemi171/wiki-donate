const path = require('path')
const axios = require('axios')
const connection = require("../util/db");

exports.getHome = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'))
}

exports.getRegister = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'registration.html'))
}

exports.getReview = (req, res, next) => {
    res.render('preview')
}

exports.postReview = async(req, res, next) => {
    const {
        lname,
        fname,
        street,
        city,
        state,
        country,
        pcode,
        phone,
        email,
        formOfContact,
        formOfPayment,
        freqOfDonation,
        amtOfDonation,
        comments
    } = req.body

    // console.log(formOfContact, formOfPayment, freqOfDonation, country)

    const donation = parseFloat(amtOfDonation)
    let donationInUSD = 0

    if (formOfPayment === 'usd'){
        donationInUSD = donation
    }
    else if (formOfPayment === 'btc'){
        const response = await axios.get('https://blockchain.info/ticker')
        donationInUSD = response.data.USD.last * donation
    }
    else if (formOfPayment === 'euro'){
        donationInUSD = donation * 1.19
    }

    let updatedDonationUSD = 0
    if (freqOfDonation === 'Yearly' || freqOfDonation === 'One-time'){
        updatedDonationUSD = donationInUSD
    }
    else if (freqOfDonation === 'Monthly'){
        updatedDonationUSD = donationInUSD * 12
    }
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
            email: email,
            formOfContact: formOfContact,
            formOfPayment: formOfPayment,
            freqOfDonation: freqOfDonation,
            amtOfDonation: updatedDonationUSD,
            comments: comments
        }
    })
}





exports.submit = async (req, res, next) => {
    const {
        lname,
        fname,
        street,
        city,
        state,
        country,
        pcode,
        phone,
        email,
        formOfContact,
        formOfPayment,
        freqOfDonation,
        amtOfDonation,
        comments
    } = req.body


    // SQL query TO INSERT INTO THAT TABLE
    const sql = "INSERT INTO user (lname, fname, street, city, state, country, pcode, phone, email, formOfContact, formOfPayment, freqOfDonation, amtOfDonation, comments) VALUES (? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ?)";
    const values = [lname,
        fname,
        street,
        city,
        state,
        country,
        pcode,
        phone,
        email,
        formOfContact,
        formOfPayment,
        freqOfDonation,
        amtOfDonation,
        comments]
    await connection.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        res.redirect('/confirmation')

    });
}

exports.confirmation = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'confirm.html'))
}

exports.cancel = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'cancel.html'))
}
