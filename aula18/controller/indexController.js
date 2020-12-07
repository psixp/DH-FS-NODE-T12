const IndexController = {
    showSobre:(req, res) =>{
        res.render('sobre', {nomeDoVisitante:"Pablo Cardias"});
      },
    showIndex:(req, res,) =>{
        res.render('index', { title: 'Express' });
      }
}

// exportação
module.exports = IndexController
