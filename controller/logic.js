var knex=require("../model/connection")
const bodyparser=require("body-parser")
var meraki_data=require("../controller/course.json");
const res = require("express/lib/response");
const fs=require("fs")

const get_method=(req,res)=>{
    res.json(meraki_data)
}
const post_method=(req,res)=>{
    const data={
        id: meraki_data.length+1,
        name: req.body.name,
        logo: req.body.log,
        notes: req.body.notes,
        days_to_complete: req.body.days_to_complete,
        short_description: req.body.short_description,
        type: req.body.type,
        course_type:req.body.course_type,
        lang_available: req.body.lang_available

    }
    // console.log( data);
    knex('project2').insert( data).then(()=>{
        fs.writeFileSync("course.json",JSON.stringify(meraki_data,null,3))  
        res.send({message:"data post successfully"})
        console.log("Data inserted")
    }).catch((err)=>{
        console.log("Data does not inserted")
    })
}

const select_method=(req,res)=>{
    knex("project2").select("*")
    .then((data)=>{
        fs.writeFileSync("course.json",JSON.stringify(meraki_data,null,3))  
        res.send({message:"Data selected successfully",data:data})
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
}

const get_by_id=(req,res)=>{
    knex('project2').select("*").where({id:req.params.id})
    .then((data)=>{
        res.send(data)

    })
}




const put_method=(req,res) =>{
    knex.from("project2").where("id","=",req.params.id)
    .update({   id: req.body.id,
        name: req.body.name,
        logo: req.body.log,
        notes: req.body.notes,
        days_to_complete: req.body.days_to_complete,
        short_description: req.body.short_description,
        type: req.body.type,
        course_type:req.body.course_type,
        lang_available: req.body.lang_available

                })
    .then((data)=>{
        fs.writeFileSync("course.json",JSON.stringify(meraki_data,null,3))  
        // console.log(username)
        res.send("data updated")
    }).catch((err)=>{
        console.log(err)
    })
    }




const deleted=(req,res)=>{
    knex.delete("*").from("project2").where("id","=",req.params.id)
    .then((data)=>{
        fs.writeFileSync("course.json",JSON.stringify(meraki_data,null,3))  
        res.send({message:"delete succesfully",data:data})
    }).catch((err)=>{
        res.send({message:"data delete"})
        console.log(err)
    })
}


module.exports={post_method,
                get_method,
                select_method,
                get_by_id,
                put_method,
            deleted}         //Thus using module.exports we can use these functions in some other file:

