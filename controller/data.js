var fs=require("fs")
const axios=require("axios")                      ///by using axios its easy to send asynchrounous http request
axios.get("https://api.merakilearn.org/courses")
.then(res=>{
    meraki_data=res.data
    console.log(meraki_data)
    file=JSON.stringify(meraki_data,null,3)      ///stringify;-use for js object to json string
    fs.writeFileSync("course.json",file)

})


var create=require('../model/connection')
const saral_data=require('./course.json')
for (i of saral_data){
    create('project2').insert({
    id:i.id,
    name:i.name,
    logo:i.logo,
    notes:i.notes,
    days_to_complete:i.days_to_complete,
    short_description:i.short_description,
    type:i.type,
    course_type:i.course_type,
    lang_available:i.lang_available
    })
    .then(()=>{
        console.log('insert')
    }).catch((err)=>{
        console.log("not inserted")
    })

}


