import os
from flask import Flask
from flask_cors import CORS
from Models.ong import db
from routes.ong_routes import ong_bp

app = Flask(__name__)
CORS(app)

# Definir o caminho correto do banco de dados
basedir = os.path.abspath(os.path.dirname(__file__))
db_path = os.path.join(basedir, 'Database', 'db.sqlite3')

app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{db_path}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Criar tabelas se não existirem
with app.app_context():
    db.create_all()

app.register_blueprint(ong_bp, url_prefix='/api')

if __name__ == "__main__":
    app.run(debug=True, port=5000)

#arquivo principal (inicia o servidor)