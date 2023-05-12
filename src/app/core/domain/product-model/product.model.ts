export interface ProductModal {
  id: number;
  name: string;
  description: string;
}

export interface RegisterProduct {
  name: string;
  discription: string;
}

export interface UpdateProduct {
  NAME: string;
  DESCRIPTION: string;
  ID: string;
  CODE?: string;
}

export interface RegisterProductSender {
  records: Record[];
}

export interface Record {
  fields: Fields;
}

export interface Fields {
  Address:  string;
  Name:     string;
  Visited?: boolean;
}


