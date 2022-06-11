-- Criar o DB floricultura
/*Criar o DB 
floricultura*/
create database floricultura_2e1_03;

-- Usar a floricultura
use floricultura_2e1_03;

-- Criar a tabela cliente
create table cliente(
	rg char(13) not null primary key,
    nome varchar(80) not null,
    telefone char (15) not null,
    endereco_comp varchar(120) not null
);

-- Criar a tabela produto
create table produto(
	cod_produto int not null primary key auto_increment,
    nome varchar(80) not null,
    tipo varchar(80) not null,
    preco decimal(9,2) not null,
    qtd_estoque int not null
);

-- Criar a tabela com chave estrangeira item_pedido
create table item_pedido(
	cod_itempedido int not null primary key auto_increment,
    quantidade int not null, 
    valor_total decimal(9,2) not null,
    cod_produto_fk int not null,
    foreign key(cod_produto_fk) references produto(cod_produto)
);

-- Criar a tabela com chave estrangeira pedido
create table pedido(
	cod_pedido int not null primary key auto_increment,
    dt_compra date not null,
    total_pedido decimal(9,2),
    rg_fk char(13) not null,
    cod_itempedido_fk int not null,
    foreign key(rg_fk) references cliente(rg),
    foreign key(cod_itempedido_fk) references itempedido(cod_itempedido)
);
