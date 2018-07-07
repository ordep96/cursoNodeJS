'use strict';

const conn = require('./team-schema');


class TeamModel{

  getAll(cb){
    conn.find({}, (err,docs) => {
        if(err) console.log(err);
        cb(docs)
    });
  }


  getOne(id,cb){
    conn.findOne({_id:id}, (err,data) => {
      if(err) throw err
      cb(data)
    })
  }


  save(data,cb){
    conn.count({_id:data._id}, (err,count) => {
        if(err) throw err;
        console.log('Numeros de Documentos', count)
        if(count === 0){
          conn.create(data, (err) => {
            if(err) throw err;
            cb();
          })
        }else if(count === 1){
           conn.findOneAndUpdate(
             {_id:data._id},
             {
               name:data.name,
               twitter:data.twitter,
               country:data.country,
               side:data.side
             },
             (err) => {
               if(err) throw err;
               cb();
             })
        }
    })
  }


  delete(id,cb){
    conn.remove({_id:id}, (err) => {
      if(err) throw err;
      cb()
    })
    /* conn.query('DELETE FROM team WHERE id = ?',id, cb); */
  }

}

module.exports = TeamModel;