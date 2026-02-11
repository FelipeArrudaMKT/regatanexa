
export enum OrderStatus {
  NEW = 'Novo',
  CONTACTED = 'Em contato',
  SCHEDULED = 'Agendado',
  SENT = 'Enviado',
  COMPLETED = 'Concluído',
  CANCELLED = 'Cancelado'
}

export interface Order {
  id: string;
  createdAt: string;
  package: string;
  price: string;
  size: string;
  name: string;
  whatsapp: string;
  email?: string;
  deliveryDate: string;
  cep?: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  notes?: string;
  adminNotes?: string;
  status: OrderStatus;
}
