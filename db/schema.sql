create database burgers_db;
use burgers_db;

create table burgers (
	id int not null auto_increment,
	burger_name varchar(64) not null,
	devoured boolean default false,
	ate_at TIMESTAMP,
    primary key (id)
);

