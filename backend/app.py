from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
# Configuração do CORS para aceitar requisições do front-end React
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

usuarios = {}

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    if username in usuarios:
        return jsonify({"message": "Username already exists"}), 409
    usuarios[username] = {"password": generate_password_hash(password)}
    return jsonify({"message": "User created successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    user = usuarios.get(username)
    if user and check_password_hash(user['password'], password):
        return jsonify({"message": "Login successful", "user": username}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/usuarios', methods=['POST'])
def criar_usuario():
    data = request.json
    id = data.get('id')
    nome = data.get('nome')
    email = data.get('email')
    if id in usuarios:
        return jsonify({"message": "Usuário com ID já existe"}), 400
    usuarios[id] = {"nome": nome, "email": email}
    return jsonify({"message": "Usuário criado com sucesso"}), 201

@app.route('/usuarios', methods=['GET'])
def listar_usuarios():
    return jsonify(usuarios)

@app.route('/usuarios/<id>', methods=['PUT'])
def atualizar_usuario(id):
    data = request.json
    if id not in usuarios:
        return jsonify({"message": "Usuário não encontrado"}), 404
    usuarios[id].update({
        "nome": data.get('nome', usuarios[id]['nome']),
        "email": data.get('email', usuarios[id]['email'])
    })
    return jsonify({"message": "Usuário atualizado com sucesso"}), 200

@app.route('/usuarios/<id>', methods=['DELETE'])
def excluir_usuario(id):
    if id not in usuarios:
        return jsonify({"message": "Usuário não encontrado"}), 404
    del usuarios[id]
    return jsonify({"message": "Usuário excluído com sucesso"}), 200

if __name__ == '__main__':
    app.run(debug=True)
