-- Database: pt-danielcotes-db-2

-- DROP DATABASE IF EXISTS "pt-danielcotes-db-2";

CREATE DATABASE "pt-danielcotes-db-2"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Spain.1252'
    LC_CTYPE = 'Spanish_Spain.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


    -- Table: public.Libros

-- DROP TABLE IF EXISTS public."Libros";

CREATE TABLE IF NOT EXISTS public."Libros"
(
    isbn text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Libros_pkey" PRIMARY KEY (isbn)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Libros"
    OWNER to postgres;



    -- Table: public.Prestamos

-- DROP TABLE IF EXISTS public."Prestamos";

CREATE TABLE IF NOT EXISTS public."Prestamos"
(
    id text COLLATE pg_catalog."default" NOT NULL,
    fecha_maxima_devolucion timestamp with time zone NOT NULL,
    "Usuario_id" bigint,
    "Libro_id" text COLLATE pg_catalog."default",
    CONSTRAINT "Prestamos_pkey" PRIMARY KEY (id),
    CONSTRAINT "fk_Prestamo_Libro" FOREIGN KEY ("Libro_id")
        REFERENCES public."Libros" (isbn) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "fk_Prestamo_Usuario" FOREIGN KEY ("Usuario_id")
        REFERENCES public."Usuarios" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Prestamos"
    OWNER to postgres;


    -- Table: public.Usuarios

-- DROP TABLE IF EXISTS public."Usuarios";

CREATE TABLE IF NOT EXISTS public."Usuarios"
(
    id bigint NOT NULL,
    tipo integer,
    CONSTRAINT "Usuario_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Usuarios"
    OWNER to postgres;