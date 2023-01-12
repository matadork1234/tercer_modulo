create database tercer_modulo;

create table users (
	id serial primary key,
	fullname varchar(85) not null,
	age integer not null
);