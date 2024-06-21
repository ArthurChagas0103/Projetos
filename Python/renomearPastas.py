import os

def renomear_pastas(diretorio_base):
    for nome_empresa in os.listdir(diretorio_base):
        if nome_empresa == 'HF' or nome_empresa == 'QuickFood':
            continue
        
        caminho_empresa = os.path.join(diretorio_base, nome_empresa)
        
        if os.path.isdir(caminho_empresa):
            nomes_utilizados = {}
            for nome_pasta in os.listdir(caminho_empresa):
                caminho_pasta = os.path.join(caminho_empresa, nome_pasta)
                
                if os.path.isdir(caminho_pasta):
                    novo_nome = renomear_nome_pasta(nome_pasta)
                    
                    if novo_nome in nomes_utilizados:
                        contador = nomes_utilizados[novo_nome] + 1
                        novo_nome_completo = f"{novo_nome} {contador}"
                        nomes_utilizados[novo_nome] = contador
                    else:
                        novo_nome_completo = novo_nome
                        nomes_utilizados[novo_nome] = 1
                    
                    novo_caminho_pasta = os.path.join(caminho_empresa, novo_nome_completo)
                    
                    os.rename(caminho_pasta, novo_caminho_pasta)
                    print(f'Renomeado: {caminho_pasta} -> {novo_caminho_pasta}')

def renomear_nome_pasta(nome_pasta):
    partes = nome_pasta.split(' - ', 1)    
    
    if len(partes) > 1:
        numero, nome = partes
        if nome.startswith('Departamento '):
            if nome.startswith('Departamento de '):
                nome = nome[len('Departamento de '):]
            elif nome.startswith('Departamento em '):
                nome = nome[len('Departamento em '):]
            else:
                nome = nome[len('Departamento '):]
        return nome.strip()
    
    return nome_pasta

diretorio_base = 'C:/Users/arthu/Desktop/Empresas'
renomear_pastas(diretorio_base)