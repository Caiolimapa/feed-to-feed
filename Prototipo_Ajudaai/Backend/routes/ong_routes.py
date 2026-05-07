from flask import Blueprint, jsonify, request
from Models.ong import Categoria, ONG, db
import json

ong_bp = Blueprint('ong_bp', __name__)

def success(data):
    return jsonify({"sucesso": True, "data": data})

def failure(msg, code=400):
    return jsonify({"sucesso": False, "erro": msg}), code

@ong_bp.route('/categorias', methods=['GET'])
def list_categorias():
    cats = Categoria.query.order_by(Categoria.nome).all()
    return success([c.to_dict() for c in cats])

@ong_bp.route('/categorias/<string:id>/ongs', methods=['GET'])
def list_ongs_by_categoria(id):
    ongs = ONG.query.filter_by(categoria_id=id).order_by(ONG.nome).all()
    return success([o.to_dict() for o in ongs])

@ong_bp.route('/ongs/<string:id>', methods=['GET'])
def get_ong(id):
    ong = ONG.query.get(id)
    if not ong:
        return failure("ONG não encontrada", 404)
    return success(ong.to_dict())

@ong_bp.route('/auth/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    email = data.get('email')
    senha = data.get('senha')
    if not email or not senha:
        return failure("Email e senha são necessários", 400)
    # Simples validação demo: aceita qualquer credencial não vazia
    nome = email.split('@')[0]
    user = {"nome": nome, "email": email}
    return success(user)