const knex=require('knex')({
    client:'mysql',
    connection:{
        host:'127.0.0.1',
        user:'root',
        password:'Pooja@123',
        database: 'curd_opeartion'
    }
})

knex.schema.hasTable('project2').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('project2', function(t) {
        t.string('id',255);
        t.string('name', 255);
        t.string('logo', 255);
        t.string('notes', 255);
        t.string('days_to_complete', 255);
        t.string('short_description', 255);
        t.string('type', 255);
        t.string('course_type', 255);
        t.string('lang_available', 255);


      })
      .then(()=>{
          console.log("Table created")
      }).catch(()=>{
          console.log("Table already exits")
      })
    }

  });




  

  module.exports=knex


  
