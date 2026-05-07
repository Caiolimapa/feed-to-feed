export interface NGO {
  id: string;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  donationInfo: string;
  pixKey?: string;
  needs: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "orphanages",
    name: "Orfanatos",
    description: "Abrigos e lares para crianças e adolescentes",
    icon: "Baby",
    image: "orphanage",
    count: 3,
  },
  {
    id: "homeless",
    name: "Pessoas em Situação de Rua",
    description: "Apoio e acolhimento para moradores de rua",
    icon: "Home",
    image: "homeless",
    count: 3,
  },
  {
    id: "foodbank",
    name: "Bancos de Alimentos",
    description: "Distribuição de alimentos para famílias carentes",
    icon: "Apple",
    image: "foodbank",
    count: 3,
  },
  {
    id: "elderly",
    name: "Apoio a Idosos",
    description: "Cuidado e assistência a pessoas idosas",
    icon: "Heart",
    image: "elderly",
    count: 2,
  },
];

export const ngos: NGO[] = [
  // Orfanatos
  {
    id: "1",
    name: "Lar Esperança",
    category: "orphanages",
    description: "Acolhimento de crianças de 0 a 12 anos em situação de vulnerabilidade.",
    fullDescription: "O Lar Esperança atua há 25 anos oferecendo abrigo, alimentação, educação e carinho para crianças em situação de abandono ou risco social. Nossa missão é proporcionar um ambiente seguro e acolhedor onde cada criança possa crescer com dignidade e esperança em um futuro melhor.",
    location: "Rua das Flores, 123 - Centro, São Paulo - SP",
    phone: "(11) 9999-1234",
    email: "contato@laresperanca.org.br",
    website: "www.laresperanca.org.br",
    donationInfo: "Aceitamos doações em dinheiro, alimentos, roupas e brinquedos. Voluntários são sempre bem-vindos!",
    pixKey: "12.345.678/0001-90",
    needs: ["Fraldas", "Leite em pó", "Material escolar", "Roupas infantis"],
  },
  {
    id: "2",
    name: "Casa do Menor",
    category: "orphanages",
    description: "Proteção e desenvolvimento integral de crianças e adolescentes.",
    fullDescription: "A Casa do Menor oferece programas de educação, esporte e cultura para crianças e adolescentes em situação de vulnerabilidade social. Com 15 anos de atuação, já impactamos a vida de mais de 2.000 jovens.",
    location: "Av. Brasil, 456 - Vila Nova, Rio de Janeiro - RJ",
    phone: "(21) 8888-5678",
    email: "contato@casadomenor.org.br",
    website: "www.casadomenor.org.br",
    donationInfo: "Doações podem ser feitas via PIX ou transferência bancária. Também aceitamos doações de materiais.",
    pixKey: "98.765.432/0001-10",
    needs: ["Materiais esportivos", "Livros", "Alimentos não perecíveis"],
  },
  {
    id: "3",
    name: "Abrigo Luz do Sol",
    category: "orphanages",
    description: "Acolhimento temporário para crianças até a reintegração familiar.",
    fullDescription: "O Abrigo Luz do Sol trabalha em parceria com o Conselho Tutelar e a Vara da Infância para garantir os direitos das crianças acolhidas, oferecendo suporte psicológico, pedagógico e social enquanto buscamos a reintegração familiar ou adoção.",
    location: "Rua do Sol, 789 - Jardim Primavera, Belo Horizonte - MG",
    phone: "(31) 7777-9012",
    email: "contato@abrigoluzdosol.org.br",
    website: "www.abrigoluzdosol.org.br",
    donationInfo: "Precisamos de voluntários e doações mensais para manter nossas atividades.",
    pixKey: "11.222.333/0001-44",
    needs: ["Produtos de higiene", "Roupas de cama", "Brinquedos educativos"],
  },
  // Pessoas em Situação de Rua
  {
    id: "4",
    name: "Sopão Solidário",
    category: "homeless",
    description: "Distribuição de refeições quentes para moradores de rua todas as noites.",
    fullDescription: "O Sopão Solidário é um projeto que há 10 anos alimenta pessoas em situação de rua nas principais regiões da cidade. Todas as noites, nossa equipe de voluntários prepara e distribui mais de 300 refeições quentes, além de oferecer cobertores e kits de higiene.",
    location: "Praça da Sé - Centro, São Paulo - SP",
    phone: "(11) 6666-3456",
    email: "contato@sopaosolidario.org.br",
    website: "www.sopaosolidario.org.br",
    donationInfo: "Aceitamos doações de alimentos, cobertores e produtos de higiene pessoal.",
    pixKey: "44.555.666/0001-77",
    needs: ["Cobertores", "Alimentos", "Kits de higiene", "Roupas de inverno"],
  },
  {
    id: "5",
    name: "Recomeço",
    category: "homeless",
    description: "Reinserção social e profissional de pessoas em situação de rua.",
    fullDescription: "O Instituto Recomeço oferece programas de capacitação profissional, assistência psicológica e moradia transitória para pessoas que desejam sair da situação de rua. Nosso programa já ajudou mais de 500 pessoas a reconstruírem suas vidas.",
    location: "Rua Augusta, 1000 - Consolação, São Paulo - SP",
    phone: "(11) 5555-7890",
    email: "contato@institutorecomeço.org.br",
    website: "www.institutorecomeço.org.br",
    donationInfo: "Doações financeiras são fundamentais para manter nossos programas de capacitação.",
    pixKey: "77.888.999/0001-22",
    needs: ["Materiais de escritório", "Roupas sociais", "Alimentos"],
  },
  {
    id: "6",
    name: "Acolher SP",
    category: "homeless",
    description: "Centro de acolhimento 24h com banho, alimentação e orientação social.",
    fullDescription: "O Acolher SP funciona como um centro de referência para pessoas em situação de rua, oferecendo banho quente, refeições, pernoite seguro e encaminhamento para serviços de saúde e assistência social.",
    location: "Rua da Consolação, 500 - Centro, São Paulo - SP",
    phone: "(11) 4444-1234",
    email: "contato@acolhersp.org.br",
    website: "www.acolhersp.org.br",
    donationInfo: "Precisamos de toalhas, produtos de higiene e roupas íntimas novas.",
    pixKey: "33.444.555/0001-88",
    needs: ["Toalhas", "Sabonete", "Roupas íntimas novas", "Meias"],
  },
  // Bancos de Alimentos
  {
    id: "7",
    name: "Mesa Brasil",
    category: "foodbank",
    description: "Combate à fome através da coleta e distribuição de alimentos.",
    fullDescription: "O Mesa Brasil é uma rede de bancos de alimentos que combate o desperdício de comida e a fome simultaneamente. Coletamos alimentos que seriam descartados por supermercados e restaurantes e distribuímos para famílias em situação de insegurança alimentar.",
    location: "Av. Paulista, 2000 - Bela Vista, São Paulo - SP",
    phone: "(11) 3333-5678",
    email: "contato@mesabrasil.org.br",
    website: "www.mesabrasil.org.br",
    donationInfo: "Doe alimentos não perecíveis em qualquer ponto de coleta ou faça doações online.",
    pixKey: "55.666.777/0001-33",
    needs: ["Arroz", "Feijão", "Óleo", "Açúcar", "Farinha"],
  },
  {
    id: "8",
    name: "Banco de Alimentos SP",
    category: "foodbank",
    description: "Redistribuição de alimentos para instituições sociais cadastradas.",
    fullDescription: "O Banco de Alimentos SP trabalha na logística de redistribuição de alimentos excedentes da indústria e do comércio para mais de 200 instituições sociais cadastradas que atendem famílias em vulnerabilidade.",
    location: "Rua dos Alimentos, 300 - Pinheiros, São Paulo - SP",
    phone: "(11) 2222-9012",
    email: "contato@bancodealimentossp.org.br",
    website: "www.bancodealimentossp.org.br",
    donationInfo: "Empresas e pessoas físicas podem doar alimentos ou valores monetários.",
    pixKey: "88.999.000/0001-11",
    needs: ["Leite", "Frutas", "Verduras", "Cereais"],
  },
  {
    id: "9",
    name: "Prato Cheio",
    category: "foodbank",
    description: "Cozinha comunitária que prepara 500 marmitas diárias.",
    fullDescription: "O projeto Prato Cheio mantém uma cozinha comunitária que prepara e distribui 500 marmitas diárias para famílias em situação de fome e vulnerabilidade. Contamos com uma equipe de cozinheiros voluntários e doações da comunidade.",
    location: "Rua Comunitária, 150 - Periferia, Guarulhos - SP",
    phone: "(11) 1111-3456",
    email: "contato@pratocheio.org.br",
    website: "www.pratocheio.org.br",
    donationInfo: "Precisamos de doações diárias de alimentos frescos e não perecíveis.",
    pixKey: "22.333.444/0001-55",
    needs: ["Carne", "Legumes", "Temperos", "Embalagens para marmita"],
  },
  // Apoio a Idosos
  {
    id: "10",
    name: "Viver Bem",
    category: "elderly",
    description: "Assistência domiciliar e atividades para idosos em vulnerabilidade.",
    fullDescription: "A ONG Viver Bem oferece assistência domiciliar, atividades recreativas e acompanhamento médico para idosos em situação de vulnerabilidade social. Nosso objetivo é garantir que cada idoso viva com dignidade e qualidade de vida.",
    location: "Rua da Paz, 200 - Vila Mariana, São Paulo - SP",
    phone: "(11) 9876-5432",
    email: "contato@viverbem.org.br",
    website: "www.viverbem.org.br",
    donationInfo: "Aceitamos doações de fraldas geriátricas, medicamentos e alimentos.",
    pixKey: "66.777.888/0001-99",
    needs: ["Fraldas geriátricas", "Medicamentos", "Cadeiras de rodas"],
  },
  {
    id: "11",
    name: "Abraço Grisalho",
    category: "elderly",
    description: "Companhia e cuidado para idosos que vivem sozinhos.",
    fullDescription: "O Abraço Grisalho combate a solidão entre idosos através de visitas domiciliares, ligações telefônicas e atividades em grupo. Nossos voluntários dedicam tempo e carinho para que nenhum idoso se sinta esquecido.",
    location: "Rua da Amizade, 88 - Mooca, São Paulo - SP",
    phone: "(11) 8765-4321",
    email: "contato@abracogrisalho.org.br",
    website: "www.abracogrisalho.org.br",
    donationInfo: "Precisamos de voluntários para visitas e doações para atividades recreativas.",
    pixKey: "99.000.111/0001-66",
    needs: ["Jogos de tabuleiro", "Livros", "Material para artesanato"],
  },
];

export function getNgosByCategory(categoryId: string): NGO[] {
  return ngos.filter((ngo) => ngo.category === categoryId);
}

export function getNgoById(id: string): NGO | undefined {
  return ngos.find((ngo) => ngo.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}
