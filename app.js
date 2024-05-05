const express=require("express");
// const https=require("https");
const bodyparser=require("body-parser");
const app=express();
const date=require(__dirname+"/date.js");

// console.log(date());

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
// let nitems=["BUY FOOD","COOK FOOD","EAT FOOD"];
let nitems=[];
let workitems=[];
app.get("/",function(req,res)
     {
        // let today= new Date();
      
        // let currentday=today.getDay();
      
    // if(currentday===6||currentday===0)
    // {
    //   day="weekend";
      
    // //   res.send("<h1>weekend</h1>");
    // }
    //   else
    //   {
    // //   res.write("<p>going on work</p>");
    // //   res.write("<h1>going on work</h1>");
    // //   res.write("<h1>going on work</h1>");
    // //   res.send();
    // day="weekday";
    // // res.sendFile(__dirname+"/index.html");
    // // res.render("list", {kindofday:day});
    //   }

    //   res.render("list", {kindofday:day});
    //  });

    // if(currentday==0)
    //     day="SUNDAY";
    //     else if(currentday==1)
    //     day="monday";
    //     else if(currentday==2)
    //     day="tuesday";
    //     else if(currentday==3)
    //     day="wednesday";
    //     else if(currentday==4)
    //     day="thursday";
    //     else if(currentday==5)
    //     day="friday";
    //     else if(currentday==6)
    //     day="saturday";
    //    res.render("list",{kindofday:day});

    // let options={
    //     weekday:"long",
    //     day:"numeric",
    //     month:"long"
    //  };
    //   let day=today.toLocaleDateString("en-us",options);

      let day=date();
       res.render("list",{listTitle:day, newlistitems:nitems});
     });

     app.post("/",function(req,res)
     {
        let item=req.body.newitem;
       if(req.body.list==="work list")
        {
            workitems.push(item);
            res.redirect("/work");
        }
        else
        {
            nitems.push(item);
         res.redirect("/");
        }
     });
   app.get("/work",function(req,res){
      res.render("list",{listTitle:"work list",newlistitems:workitems});
   });

   app.get("/about",function(req,res){
    res.render("about");
 });
  
//    app.post("/work",function(req,res){
//        let item=req.body.newitem;
//        workitems.push(item);
//        res.redirect("/work");
//    });

app.listen(2010,function()
{
   console.log("server is running on port 2010");
});
 