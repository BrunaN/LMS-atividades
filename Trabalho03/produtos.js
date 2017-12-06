let produtos = [
    {
      nome : 'Jogos Vorazes',
      valor: 25,
      id : 1,
      image : 'jogos.jfif',
      descricao : 'Mistura de ficção científica com reality show.'
    },
    {
      nome : 'Harry Potter',
      valor: 45,
      id : 2,
      image : 'hp.jpeg',
      descricao : 'É o segundo livro dos sete volumes da série de fantasia Harry Potter.'
    },
    {
      nome : 'Lugares Incríveis',
      valor: 35,
      id : 3,
      image : 'li.jpg',
      descricao : 'Violet Markey tinha uma vida perfeita, mas todos os seus planos deixam de fazer sentido quando ela e a irmã sofrem um acidente de carro.'
    },
    {
      nome : 'Fahrenheit 451',
      valor: 19,
      id : 4,
      image : 'fh.jpg',
      descricao : 'Fahrenheit 451 é um romance distópico de ficção científica soft, escrito por Ray Bradbury e publicado pela primeira vez em 1953.'
    },
    {
      nome : 'O Mundo Assombrado Pelos Demônios',
      valor: 50,
      id : 5,
      image : 'om.jpg',
      descricao : 'The Demon-Haunted World, lançado em 1997 é um livro de Carl Sagan publicado originalmente em 1995.'
    },
    {
      nome : 'Bilhões e Bilhões',
      valor: 55,
      id : 6,
      image : 'bb.jpg',
      descricao : 'É um livro de Carl Sagan e Ann Druyan publicado originalmente pela Random House em 1997.'
    }
];

$(function(){

    let $divProdutos = $("#divProdutos");

    function adicionarProdutos(){
        $divProdutos.html("");
        for(let i=0, len = produtos.length; i < len; i++){
            adicionarProduto(produtos[i]);
        }
    }

    function adicionarProduto(produto){
        let template = [
            '<div class="col-sm-4 col-md-3 produto" id="produto'+produto.id+'">',
                '<div class="thumbnail" >',
                    '<img src="img/'+produto.image+'" class="img-responsive">',
                    '<div class="caption">',
                        '<div class="row">',
                            '<div class="col-md-6 col-xs-6">',
                                '<h3>'+produto.nome+'</h3>',
                            '</div>',
                            '<div class="col-md-6 col-xs-6 price">',
                                '<h3><label>R$ '+produto.valor+',00</label></h3>',
                            '</div>',
                        '</div>',
                        '<p>'+produto.descricao+'</p>',
                        '<div class="row">',
                            '<form class="form carrinho" role="form" novalidate>',
                                '<div class="col-md-6 form-group">',
                                    '<input type="number" placeholder="quantidade" class="form-control" name="qtd" min="1" value="1">',
                                '</div>',
                                '<div class="col-md-6">',
                                    '<button type="submit" href="#" class="btn btn-default btn-product"><span class="glyphicon glyphicon-shopping-cart"></span></button>',
                                '</div>',
                            '</form>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('');

        $divProdutos.append(template);

        $("form", "#produto"+produto.id).submit(function(){
            let qtd = $("input", this).val();
            qtd = parseInt(qtd);
            addCarrinho(produto, qtd);
            exibirCarrinho();
            return false;
        });
    }

    adicionarProdutos();
});
