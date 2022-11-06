create table app_info
(
    type  varchar(16)  not null,
    value varchar(255) null,
    constraint app_info_pk
        primary key (type)
);
