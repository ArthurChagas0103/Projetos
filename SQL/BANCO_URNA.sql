create database banco_urna;

use banco_urna;

create table Partido(
	id_partido int not null primary key auto_increment,
    nome_partido varchar(80) not null,
    sigla_partido varchar(15) not null
);

create table Candidato(
	id_candidato int not null primary key auto_increment,
    nome_candidato varchar(80) not null,
    endereco_candidato varchar(120) not null,
    foreign key (partido_id_fk) references Partido(id_partido),
    partido_id_fk int not null,
    foreign key (cargo_id_fk) references Cargo(id_cargo),
    cargo_id_fk int not null
);

create table Cargo(
	id_cargo int not null primary key auto_increment,
    nome_cargo varchar(80) not null,
    descricao_cargo varchar(120) not null
);

create table Eleitor(
	id_eleitor int not null primary key auto_increment,
    nome_eleitor varchar(80) not null,
    endereco_eleitor varchar(120) not null
);

create table Voto(
	id_voto int not null primary key auto_increment,
    dt_voto date not null,
    quantidade_voto int not null,
    foreign key (eleitor_id_fk) references Eleitor(id_eleitor),
    eleitor_id_fk int not null,
    foreign key (cargo_id_fk) references Cargo(id_cargo),
    cargo_id_fk int not null
);

insert into Partido values
(default, "Partido dos Trabalhadores","PS"),
(default, "Partido Socialista Brasileiro","PSB"),
(default, "Movimento Democrático Brasileiro","MDB");

insert into Cargo values
(default, "Presidente","Roubar"),
(default, "Deputado","Roubar"),
(default, "Prefeito","Roubar");

insert into Candidato values
(default, "Luiz Inácio Lula","Avenida dos Andradas, 145 - Capital Paulista - São Paulo", 1, 1),
(default, "Alessandro Molon","Rua Benjamin de Coco, 197 - Rambisburgo - Rio de Janeiro", 2, 2),
(default, "Pedrinho da Balsa","Rua João Carneiro, 2000 - Acará - Pará", 3, 3);

insert into Eleitor values
(default, "Arthur Gomes","Rua dos Buganvilles, Jardim Monsenhor Horta, 160 - Ibirité - MG"),
(default, "Janete Vieira Gomes Chagas","Rua dos Buganvilles, Jardim Monsenhor Horta, 160 - Ibirité - MG"),
(default, "Flávio Parreira Chagas","Rua dos Buganvilles, Jardim Monsenhor Horta, 160 - Ibirité - MG");

insert into Voto values
(default, '2022-10-03', 5, 1, 1),
(default, '2022-10-02', 5, 2, 2),
(default, '2022-10-02', 5, 3, 3);

UPDATE Partido SET sigla_partido = "PT" WHERE id_partido = 1;
UPDATE Cargo SET descricao_cargo = "Roubar tudo" WHERE id_cargo = 1;
UPDATE Candidato SET nome_candidato = "Luiz Inácio Lula da Silva" WHERE id_candidato = 1;
UPDATE Eleitor SET nome_eleitor = "Arthur Gomes Chagas" WHERE id_eleitor = 1;
UPDATE Voto SET dt_voto = '2022-10-02' WHERE id_voto = 1;

select sigla_partido from Partido;
select descricao_cargo from Cargo;
select nome_candidato from Candidato;
select nome_eleitor from Eleitor;
select dt_voto from Voto;

DELETE FROM Partido WHERE id_partido = 2;
DELETE FROM Cargo WHERE id_cargo = 2;
DELETE FROM Candidato WHERE id_candidato = 2;
DELETE FROM Eleitor WHERE id_eleitor = 2;
DELETE FROM Voto WHERE id_voto = 2;