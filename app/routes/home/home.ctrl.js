const users = {
   id: ['ckacl','rhemddj','ghdrlfehd'],
   pw: ['1234','1234','1234'],
};

const output = {
   index: (req, res)=>{
      res.render('home/index');
   },
   login: (req, res)=>{
      res.render('home/login');
   },
};




module.exports = {
   output,
   process,
}