import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

from Models.ong import db
from routes.ong_routes import ong_bp

# Carregar variáveis ambiente
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuração PostgreSQL Supabase
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")

# SSL obrigatório Supabase
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
    "connect_args": {
        "sslmode": "require"
    }
}

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializar banco
db.init_app(app)

# Criar tabelas
with app.app_context():
    db.create_all()

# Rotas
app.register_blueprint(ong_bp, url_prefix='/api')

# Rodar servidor
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)