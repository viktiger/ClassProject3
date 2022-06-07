drop table if exists RegisterTypeStateAge;
drop table if exists PersonalIncome;
drop table if exists RegisterBrand;

create table RegisterTypeStateAge (
	report_year INT not null,
	vehicles_type TEXT not null,
	states_name TEXT not null,
	register_amount INT not null,
	age_used FLOAT (50) not null,
	PRIMARY KEY (report_year, states_name,vehicles_type)
);

create table PersonalIncome (
	report_year INT not null,
	states_name TEXT not null,
	males_average FLOAT not null,
	females_average FLOAT not null,
	total_average FLOAT not null,
	PRIMARY KEY (report_year, states_name)
);

create table RegisterBrand (
	report_year INT not null,
	brand_name TEXT not null,
	register_amount INT not null,
	PRIMARY KEY (report_year, brand_name)
);
