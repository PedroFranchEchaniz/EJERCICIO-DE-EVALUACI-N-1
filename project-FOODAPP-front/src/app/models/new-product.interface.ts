// Generated by https://quicktype.io

export interface ProductAllDetails {
    id:          string;
    nombre:      string;
    imagen:      string;
    descripcion: string;
    precio:      number;
    tags:        string[];
    categoria:   Categoria;
}

export interface Categoria {
    nombre: string;
}
