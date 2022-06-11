create database hotel_2e1_03;

use hotel_2e1_03;

create table cliente (
	cod integer not null primary key auto_increment,
    Nome varchar(80) not null,
    CPF int not null,
    Tipo_convenio varchar(40) not null
);

create table servico_copa (
	cod integer not null primary key auto_increment,
    registro varchar(100) not null,
    tipo_servico varchar (40) not null
);

create table reserva (
	cod integer not null primary key auto_increment,
    DataInicio date not null,
    DataFim date not null, 
    quarto int not null,
    valor decimal(9,2),
    cliente_cod_fk integer not null,
    foreign key(cliente_cod_fk) references cliente(cod)
);

create table hospede (
	cod integer not null primary key auto_increment,
	nome varchar(80),
    Reserva_cod_fk integer not null,
    foreign key(Reserva_cod_fk) references reserva(cod),
    Telefone char(15),
    Email varchar(60)
);

create table quarto (
	cod integer not null primary key auto_increment,
    numero int not null,
    andar int not null,
    classificacao varchar(40),
    Hospede_cod_fk integer not null,
    foreign key(Hospede_cod_fk) references hospede(cod)
);

create table servicos (
	cod integer not null primary key auto_increment,
    itens varchar(50) not null,
    tipo varchar(50) not null,
    observacao varchar(100),
    Quarto_cod_fk integer not null,
    servico_copa_cod_fk integer not null,
    foreign key(Quarto_cod_fk) references quarto(cod),
    foreign key(servico_copa_cod_fk) references servico_copa(cod)
);