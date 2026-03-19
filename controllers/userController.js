import userService from '../services/userService.js';

const createUser = async (req, res) => {
    try {
        // Passamos o body inteiro para o service processar
        const novoUsuario = await userService.createUser(req.body);

        // Resposta de sucesso (seguindo o padrão do seu route antigo)
        res.status(201).json({ 
            message: 'Usuário criado com sucesso!',
            usuario: {
                id_usuario: novoUsuario._id,
                nome_usuario: novoUsuario.firstName,
                sobrenome_usuario: novoUsuario.lastName,
                email_usuario: novoUsuario.email,
                data_nascimento_usuario: novoUsuario.birthDate,
            }
        });
    } catch (err) {
        // Se for um erro de validação que nós lançamos no Service
        if (err.message.includes("cadastrado")) {
            return res.status(400).json({ error: err.message });
        }

        console.log('Erro ao criar usuário: ', err);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

export default { createUser };