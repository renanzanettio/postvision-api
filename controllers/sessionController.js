import SessionService from '../services/sessionService.js';


const CreateSession = async (req, res) => {
    try {
        const { userId, exerciseId, date, durationInSeconds, report, landmarksPath } = req.body;
        
        const session = await SessionService.Create(
            userId,
            exerciseId,
            date,
            durationInSeconds,
            report,
            landmarksPath
        );
        res.status(201).json({ message: 'Sessão criada com sucesso!'});
    } catch (err) {
        console.log('Erro ao criar sessão: ', err);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

const GetSessionsByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const sessions = await SessionService.GetAllByUserId(userId);
        res.status(200).json(sessions);
    } catch (err) {
        console.log('Erro ao buscar sessões: ', err);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

export default { CreateSession, GetSessionsByUserId };