const M_topic = require('../models/m_topic');

exports.showIndex = (req, res) => {
  M_topic.findAllTopic((err,results)=>{
    if(err) {
      return res.send({
        code:500,
        message:err.message
      });
    }
    res.render('index.html', {
      topics: results
    });
  })

}
