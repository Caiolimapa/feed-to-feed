from Models.ong import db, Categoria, ONG
from app import app
import json

CATEGORIAS = [
    {"id": "orfanatos", "nome": "Orfanatos",
     "descricao": "Abrigos e lares para crianças e adolescentes", "emoji": "👧"},
    {"id": "rua", "nome": "Pessoas em Situação de Rua",
     "descricao": "Apoio e acolhimento para moradores de rua", "emoji": "🏠"},
    {"id": "alimentos", "nome": "Bancos de Alimentos",
     "descricao": "Distribuição de alimentos para famílias carentes", "emoji": "🥫"},
    {"id": "idosos", "nome": "Apoio a Idosos",
     "descricao": "Cuidado e assistência a pessoas idosas", "emoji": "👴"},
]

ONGS = [
    {
        "id": "lar-esperanca", "categoria_id": "orfanatos",
        "nome": "Lar Esperança",
        "descricao": "O Lar Esperança atua há 25 anos oferecendo abrigo, alimentação, educação e carinho para crianças em situação de abandono ou risco social.",
        "endereco": "Rua das Flores, 123 - Centro, São Paulo - SP",
        "necessidades": ["Fraldas", "Leite em pó", "Material escolar", "Roupas infantis"],
        "como_doar": "Aceitamos doações em dinheiro, alimentos, roupas e brinquedos. Voluntários são sempre bem-vindos!",
        "pix": "12.345.678/0001-90",
        "telefone": "(11) 9999-1234",
        "email": "contato@laresperanca.org.br",
        "site": "www.laresperanca.org.br"
    },
    {
        "id": "casa-do-menor", "categoria_id": "orfanatos",
        "nome": "Casa do Menor",
        "descricao": "Proteção e desenvolvimento integral de crianças e adolescentes em situação de vulnerabilidade social.",
        "endereco": "Av. Brasil, 456 - Vila Nova, Rio de Janeiro - RJ",
        "necessidades": ["Roupas infantis", "Brinquedos", "Livros didáticos", "Material de higiene"],
        "como_doar": "Doe através do PIX ou venha pessoalmente.",
        "pix": "98.765.432/0001-10",
        "telefone": "(21) 8888-5678",
        "email": "doacoes@casadomenor.org",
        "site": "www.casadomenor.org"
    },
    {
        "id": "abrigo-luz-do-sol", "categoria_id": "orfanatos",
        "nome": "Abrigo Luz do Sol",
        "descricao": "Acolhimento temporário para crianças até a reintegração familiar.",
        "endereco": "Rua do Sol, 789 - Jardim Primavera, Belo Horizonte - MG",
        "necessidades": ["Fraldas", "Leite", "Roupas (0-5 anos)", "Medicamentos básicos"],
        "como_doar": "Faça sua doação via PIX ou agende entrega presencial.",
        "pix": "11.222.333/0001-44",
        "telefone": "(31) 7777-9012",
        "email": "contato@abrigoluzdosol.org",
        "site": "www.abrigoluzdosol.org"
    },
    {
        "id": "acolhe-sp", "categoria_id": "rua",
        "nome": "Acolhe SP",
        "descricao": "Acolhimento e assistência social para moradores de rua de São Paulo com refeições e dormitório.",
        "endereco": "Rua Augusta, 1200 - Consolação, São Paulo - SP",
        "necessidades": ["Cobertores", "Roupas G/GG", "Alimentos não perecíveis", "Sapatos"],
        "como_doar": "Recebemos doações todos os dias das 8h às 18h.",
        "pix": "55.666.777/0001-88",
        "telefone": "(11) 3333-7890",
        "email": "voluntarios@acolhesp.org",
        "site": "www.acolhesp.org"
    },
    {
        "id": "fraternidade-sf", "categoria_id": "rua",
        "nome": "Fraternidade Sem Fronteiras",
        "descricao": "Há 15 anos levamos amor e dignidade às ruas do Rio com quentinhas e kits de higiene.",
        "endereco": "Av. Atlântica, 500 - Copacabana, Rio de Janeiro - RJ",
        "necessidades": ["Alimentos", "Kits de higiene", "Agasalhos", "Medicamentos"],
        "como_doar": "Participe das caravanas toda sexta-feira à noite.",
        "pix": "44.555.666/0001-22",
        "telefone": "(21) 9876-5432",
        "email": "contato@fraternidadesf.org",
        "site": "www.fraternidadesf.org"
    },
    {
        "id": "rede-solidaria-cwb", "categoria_id": "rua",
        "nome": "Rede Solidária Curitiba",
        "descricao": "Rede de apoio à vulnerabilidade em Curitiba promovendo inclusão social e habitacional.",
        "endereco": "Rua XV de Novembro, 300 - Centro, Curitiba - PR",
        "necessidades": ["Cobertores", "Calçados", "Alimentos", "Material de construção"],
        "como_doar": "Doe roupas de frio e alimentos. Voluntários são essenciais.",
        "pix": "33.444.555/0001-66",
        "telefone": "(41) 3232-1100",
        "email": "redecwb@solidaria.org",
        "site": "www.redesolidariacwb.org"
    },
    {
        "id": "banco-alimentos-sp", "categoria_id": "alimentos",
        "nome": "Banco de Alimentos SP",
        "descricao": "Captamos e distribuímos alimentos para famílias em insegurança alimentar na Grande SP.",
        "endereco": "Av. Paulista, 2001 - Bela Vista, São Paulo - SP",
        "necessidades": ["Arroz", "Feijão", "Óleo de cozinha", "Macarrão", "Leite"],
        "como_doar": "Doe alimentos não perecíveis em nossa sede ou pontos de coleta.",
        "pix": "22.333.444/0001-55",
        "telefone": "(11) 5555-3333",
        "email": "doacao@bancoalimentossp.org",
        "site": "www.bancoalimentossp.org"
    },
    {
        "id": "horta-solidaria", "categoria_id": "alimentos",
        "nome": "Horta Solidária",
        "descricao": "Cultivamos alimentos orgânicos e distribuímos para famílias em insegurança alimentar em Recife.",
        "endereco": "Estrada do Arraial, 100 - Casa Amarela, Recife - PE",
        "necessidades": ["Sementes", "Ferramentas de jardim", "Adubo orgânico", "Mudas"],
        "como_doar": "Doe insumos ou seja voluntário nos finais de semana.",
        "pix": "77.888.999/0001-11",
        "telefone": "(81) 9988-7766",
        "email": "contato@hortasolidaria.org",
        "site": "www.hortasolidaria.org"
    },
    {
        "id": "lar-dos-avos", "categoria_id": "idosos",
        "nome": "Lar dos Avós",
        "descricao": "Cuidado integral e humanizado para idosos em situação de vulnerabilidade.",
        "endereco": "Rua das Acácias, 50 - Jardim das Flores, Porto Alegre - RS",
        "necessidades": ["Fraldas adulto", "Medicamentos", "Cadeiras de rodas", "Material de higiene"],
        "como_doar": "Doe itens de higiene, medicamentos ou visite como voluntário.",
        "pix": "99.000.111/0001-33",
        "telefone": "(51) 3131-4141",
        "email": "voluntarios@lardosavos.org",
        "site": "www.lardosavos.org"
    },
    {
        "id": "viva-bem-idoso", "categoria_id": "idosos",
        "nome": "Viva Bem Idoso",
        "descricao": "Assistência domiciliar para idosos em situação de abandono com cuidadores e serviços de saúde.",
        "endereco": "Av. Dom Hélder Câmara, 200 - Juiz de Fora - MG",
        "necessidades": ["Fraldas geriátricas", "Alimentos", "Roupas de cama", "Equipamentos médicos"],
        "como_doar": "Precisamos de doações e voluntários para visitas nos fins de semana.",
        "pix": "88.777.666/0001-55",
        "telefone": "(32) 9999-0000",
        "email": "contato@vivabemsocial.org",
        "site": "www.vivabemsocial.org"
    },
]

with app.app_context():
    db.create_all()
    for c in CATEGORIAS:
        existing = Categoria.query.get(c['id'])
        if not existing:
            cat = Categoria(id=c['id'], nome=c['nome'], descricao=c.get('descricao'), emoji=c.get('emoji'))
            db.session.add(cat)
    db.session.commit()

    for o in ONGS:
        existing = ONG.query.get(o['id'])
        if not existing:
            ong = ONG(
                id=o['id'],
                categoria_id=o['categoria_id'],
                nome=o['nome'],
                descricao=o.get('descricao'),
                endereco=o.get('endereco'),
                necessidades=json.dumps(o.get('necessidades', []), ensure_ascii=False),
                como_doar=o.get('como_doar'),
                pix=o.get('pix'),
                telefone=o.get('telefone'),
                email=o.get('email'),
                site=o.get('site')
            )
            db.session.add(ong)
    db.session.commit()
    print("✅ Seed completo.")
