usuarios = {}

def criar_usuario(id, nome, email):
    if id in usuarios:
        return f"Usuário com ID {id} já existe."
    usuarios[id] = {"nome": nome, "email": email}
    return f"Usuário {nome} criado com sucesso."

def listar_usuarios():
    if not usuarios:
        return "Nenhum usuário cadastrado."
    return [f"ID: {id}, Nome: {dados['nome']}, Email: {dados['email']}" for id, dados in usuarios.items()]

def atualizar_usuario(id, nome=None, email=None):
    if id not in usuarios:
        return f"Usuário com ID {id} não encontrado."
    if nome:
        usuarios[id]["nome"] = nome
    if email:
        usuarios[id]["email"] = email
    return f"Usuário com ID {id} atualizado com sucesso."

def excluir_usuario(id):
    if id not in usuarios:
        return f"Usuário com ID {id} não encontrado."
    del usuarios[id]
    return f"Usuário com ID {id} excluído com sucesso."
