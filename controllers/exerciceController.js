import exerciceService from '../services/exerciceService.js';

const createExercice = async (req, res) => {
    try {
        const { name, description, videoUrl, muscleGroup } = req.body;
        const newExercice = await exerciceService.Create(name, description, videoUrl, muscleGroup);
        res.status(201).json({ message: 'Exercício criado com sucesso!' });
    } catch (err) {
        console.log('Erro ao criar exercício: ', err);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

const getAllExercices = async (req, res) => {
    try {
        const exercicies = await exerciceService.getAll();
        res.status(200).json(exercicies);
    } catch (err) {
        console.log('Erro ao buscar exercícios: ', err);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

const deleteExercice = async (req, res) => {
    try {
        const id = req.params.id;
        await exerciceService.delete(id);
        res.status(200).json({ message: 'Exercício deletado com sucesso!' });
    } catch (err) {
        console.log('Erro ao deletar exercício: ', err);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

export default { createExercice, getAllExercices, deleteExercice };