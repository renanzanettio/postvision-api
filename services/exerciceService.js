import Exercice from '../models/Exercices.js';

class ExerciceService {
    async Create(name, description, videoUrl, muscleGroup) {
        try {
            const newExercice = new Exercice({
                name,
                description,
                videoUrl,
                muscleGroup
            })
            return await newExercice.save();
        } catch (err) {
            console.log('Erro ao criar exercício: ', err);
            throw new Error('Erro ao criar exercício');
        }
    }

    async getAll() {
        try {
            const exercicies = await Exercice.find();
            return exercicies;
        } catch (err) {
            console.log('Erro ao buscar exercícios: ', err);
            throw new Error('Erro ao buscar exercícios');
        }
    }

    async delete(id) {
        try {
            await Exercice.findByIdAndDelete(id);
            console.log(`Exercício ${id} deletado com sucesso!`);
        } catch (err) {
            console.log('Erro ao deletar exercício: ', err);
            throw new Error('Erro ao deletar exercício');
        }
    }


}

export default new ExerciceService();