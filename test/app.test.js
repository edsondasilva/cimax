import request from 'supertest';
import app from '../app.js';

describe('Testando rotas da API', () => {
    it('GET / deve retornar mensagem de boas-vindas', async () => {
        await request(app)
            .get('/')
            .expect(200)
            .expect('************ MaxAI CD/CI GITHUB ***************');
            
    });

    it('POST / deve retornar confirmação OK', async () => {
        await request(app)
            .post('/')
            .expect(200)
            .expect('OK 23052025-2');
            
    });
});
