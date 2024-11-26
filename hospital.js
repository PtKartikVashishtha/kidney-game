const express = require("express") ;
let port = 3000 ;
const app = express() ;
let data = [{
    name : "PanditjohnSharama",
    kidneys : [{
        condition : "good" ,
    } , {
        condition : "bad" ,   
    }] ,
}]
app.use(express.json()) ;
app.get('/kartik' , (req , res) => {
    jhonKidneys = data[0]["kidneys"].length ;
    let badKidneys = 0 ; 
    for(let i = 0 ; i < data[0]["kidneys"].length ; i++){
        if(data[0].kidneys[i].condition == "bad") {
            badKidneys++ ;
        }
    }
    let goodKidneys = jhonKidneys - badKidneys ;
    res.send('<div style = "margin-top : 250px;"><h1><center><div style = "color : blue ;">TOTAL KIDNEYS : ' + jhonKidneys + 
        '</div><div style = "color : green ;margin-top : 25px;"> GOOD KIDNEYS : ' + goodKidneys + 
        '</div><div style = "color : red ;margin-top : 25px ;"> BAD KIDNEYS : ' + badKidneys + 
        '</div></center><h1></div>') ;
})
app.post('/kartik', (req , res) => {
    const cond = req.body.cond ;
    if(cond == "good" || cond == "bad"){
        data[0]["kidneys"].push({
            condition : cond ,
        }) ;
        res.send("done!") ;
    }
    else{
        res.send("WRONG INPUT") ;
    }
})
app.put('/kartik' , (req , res) => {
    for(let i = 0 ; i < data[0]["kidneys"].length ; i++){
        if(data[0]["kidneys"][i].condition == "bad"){
            data[0]["kidneys"][i].condition = "good" ;
        }
    }
    res.send("DONE!!") ;
})
app.delete('/kartik' , (req , res) => {
    if(data[0]["kidneys"].length == 0){
        res.send("NO KIDNEY") ;
    }
    else{
        const arr = [] ;
        let i = 0 ; 
        while(i < data[0]["kidneys"].length){
            if(data[0]["kidneys"][i]["condition"] == "good"){
                arr.push({
                    condition : "good",
                });
            }
            i++ ;
        }
        data[0].kidneys = arr ;
    res.send("DONE!!") ;
    }
})
app.listen(port , () => {
    console.log("STARTED") ;
}) ; 
