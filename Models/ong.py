from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Categoria(db.Model):
    __tablename__ = 'categorias'
    id = db.Column(db.String, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.String(255))
    emoji = db.Column(db.String(10))
    ongs = db.relationship('ONG', backref='categoria', lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "descricao": self.descricao,
            "emoji": self.emoji,
            "qtd_ongs": len(self.ongs)
        }

class ONG(db.Model):
    __tablename__ = 'ongs'
    id = db.Column(db.String, primary_key=True)
    categoria_id = db.Column(db.String, db.ForeignKey('categorias.id'))
    nome = db.Column(db.String(150), nullable=False)
    descricao = db.Column(db.Text)
    endereco = db.Column(db.String(255))
    necessidades = db.Column(db.Text)   # JSON string
    como_doar = db.Column(db.Text)
    pix = db.Column(db.String(50))
    telefone = db.Column(db.String(20))
    email = db.Column(db.String(150))
    site = db.Column(db.String(150))

    def to_dict(self):
        import json
        return {
            "id": self.id,
            "categoria_id": self.categoria_id,
            "nome": self.nome,
            "descricao": self.descricao,
            "endereco": self.endereco,
            "necessidades": json.loads(self.necessidades or "[]"),
            "como_doar": self.como_doar,
            "pix": self.pix,
            "telefone": self.telefone,
            "email": self.email,
            "site": self.site
        }
