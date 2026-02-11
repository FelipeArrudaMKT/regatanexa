
import { OrderStatus } from './types';

export const FAQ_DATA = [
  {
    question: "Isso funciona sem eu treinar?",
    answer: "Sim. A regata foi desenvolvida para potencializar a queima de calorias em atividades normais do cotidiano."
  },
  {
    question: "Vocês são confiáveis?",
    answer: "Somos 100% confiáveis. Oferecemos Pagamento na Entrega, o que significa que você só paga ao receber."
  },
  {
    question: "Posso abrir o pacote antes de pagar?",
    answer: "Sim! Você pode conferir o produto no ato da entrega para garantir que está tudo conforme o pedido."
  },
  {
    question: "Quanto tempo para ver resultado?",
    answer: "Os resultados variam, mas muitos clientes relatam redução de inchaço em 7 a 15 dias de uso contínuo."
  },
  {
    question: "Realizam troca?",
    answer: "Sim, realizamos trocas em até 7 dias após o recebimento (produto com etiqueta e sem marcas de uso)."
  }
];

export const PACKAGES = [
  { id: '1', title: '1 peça', price: 'R$ 119,90', description: 'Ideal para experimentar' },
  { id: '2', title: '2 peças', price: 'R$ 169,90', description: 'Mais vendido - 30% OFF' },
  { id: '3', title: '3 peças', price: 'R$ 219,90', description: 'Kit completo - 44% OFF' },
  { id: '4', title: '4 peças', price: 'R$ 259,90', description: 'Pacote Exclusivo' }
];

export const SIZES = [
  { label: 'M', weight: '60–74kg' },
  { label: 'G', weight: '75–94kg' },
  { label: 'GG (2XG)', weight: '95–135kg' }
];
