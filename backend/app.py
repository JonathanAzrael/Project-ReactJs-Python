from flask import Flask, request, jsonify

app = Flask(__name__)

usuarios = {}

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
