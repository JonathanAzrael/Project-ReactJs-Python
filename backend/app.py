from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

usuarios = {}

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if username in usuarios:
        return jsonify({"message": "Username already exists"}), 409

    # Salva o usuário com a senha hasheada
    usuarios[username] = {
        "password": generate_password_hash(password)
    }

    return jsonify({"message": "User created successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = usuarios.get(username)

    # Verifica se o usuário existe e se a senha está correta
    if user and check_password_hash(user['password'], password):
        return jsonify({"message": "Login successful", "user": username}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Ajuste conforme necessário

usuarios = {}

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = usuarios.get(username)

    if user and check_password_hash(user['password'], password):
        return jsonify({"message": "Login successful", "user": username}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if username in usuarios:
        return jsonify({"message": "Username already exists"}), 409

    usuarios[username] = {
        "password": generate_password_hash(password)
    }

    return jsonify({"message": "User created successfully"}), 201

if __name__ == '__main__':
    app.run(debug=True)


@app.route('/usuarios', methods=['POST'])
def criar_usuario():
    data = request.json
    id = data.get('id')
    nome = data.get('nome')
    email = data.get('email')
    if id in usuarios:
        return jsonify({"message": "Usuário com ID já existe"}), 400
    usuarios[id] = {"nome": nome, "email": email}
    return jsonify({"message": f"Usuário {nome} criado com sucesso"}), 201

@app.route('/usuarios', methods=['GET'])
def listar_usuarios():
    return jsonify(usuarios)

@app.route('/usuarios/<id>', methods=['PUT'])
def atualizar_usuario(id):
    if id not in usuarios:
        return jsonify({"message": "Usuário não encontrado"}), 404
    data = request.json
    nome = data.get('nome')
    email = data.get('email')
    if nome:
        usuarios[id]["nome"] = nome
    if email:
        usuarios[id]["email"] = email
    return jsonify({"message": f"Usuário com ID {id} atualizado com sucesso"}), 200

@app.route('/usuarios/<id>', methods=['DELETE'])
def excluir_usuario(id):
    if id not in usuarios:
        return jsonify({"message": "Usuário não encontrado"}), 404
    del usuarios[id]
    return jsonify({"message": f"Usuário com ID {id} excluído com sucesso"}), 200

if __name__ == '__main__':
    app.run(debug=True)
