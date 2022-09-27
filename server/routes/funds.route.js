const router = require('express').Router();
const fundData = require('../data/funds.json');
const fundDataDetails = require('../data/funds_detail.json')


router.get('/', (req, res) => {
    res.send('Server is running!');
})

router.get('/funds', (req, res) => {
    // const data = {"response":{"@type":"success","data":{"schemelist":{"@recordcount":"42","scheme":[{"osch":"46","csch":"158","isch":"4","StartedOnDate":"12/10/1999 12:00:00 AM","MF_COCODE":"21273","SumOfTotalNav":"171139.2921","CompanyLongName":"HDFC Mutual Fund","FundType":"Joint Venture Indian","TodaysDate":"9/30/2015 12:00:00 AM","FundHouse":"HDFC Asset Management Company Ltd","Address":"Roman House, 3rd Floor, H.T.ParekhMarg, 169 Backbay Reclamation,Churchgate, Mumbai - 400 020","Telephone":"022 - 6631 6333","Website":"www.hdfcfund.com","Email":"cliser@hdfcindia.com"},{"osch":"58","csch":"317","isch":"30","StartedOnDate":"6/22/1993 12:00:00 AM","MF_COCODE":"3583","SumOfTotalNav":"164709.9943","CompanyLongName":"ICICI Prudential Mutual Fund","FundType":"Joint Venture Indian","TodaysDate":"9/30/2015 12:00:00 AM","FundHouse":"ICICI Prudential Asset Management Co Ltd","Address":"3rd Floor, Hallmark Business Plaza,Sant Dyaneshwar Marg,Bandra (East), Mumbai 400051","Telephone":"(B)26428000","Website":"www.icicipruamc.com","Email":"enquiry@icicipruamc.com"},{"osch":"47","csch":"200","isch":"26","StartedOnDate":"2/24/1995 12:00:00 AM","MF_COCODE":"19712","SumOfTotalNav":"153884.805","CompanyLongName":"Reliance Mutual Fund","FundType":"Indian Private","TodaysDate":"9/30/2015 12:00:00 AM","FundHouse":"Reliance Capital Asset Management Company Ltd","Address":"One India Bulls Centre - Tower One,11th & 12th floor, Jupiter Mills Compound,Elphinstone Road, Mumbai 400013","Telephone":"022-30994600/Touchbase30301111","Website":"www.reliancemutual.com","Email":"customer_care@reliancemutual.com"},{"osch":"66","csch":"177","isch":"10","StartedOnDate":"9/5/1994 12:00:00 AM","MF_COCODE":"5946","SumOfTotalNav":"133698.7889","CompanyLongName":"Birla Sun Life Mutual Fund","FundType":"Joint Venture Indian","TodaysDate":"9/30/2015 12:00:00 AM","FundHouse":"Birla Sunlife Asset Management Company Ltd","Address":"One India Bulls Centre ,Tower 1, 17th Flr,Jupiter Mill Compound,841,S.B. Marg,Elphinstone Road Mumbai 400 013","Telephone":"43568000","Website":"www.birlasunlife.com","Email":"connect@birlasunlife.com"}]}}}}
    res.json({data: fundData});
})

router.get('/funds/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    const fund = fundDataDetails.filter(fund => fund["AMC_code"] === id);
    console.log(fund);
    if(fund.length === 0) {
       res.status(404).json({message: "No such fund found"});
    } 
    else {
    res.status(200).json({ data: fund[0] })
    }
})



module.exports = router;