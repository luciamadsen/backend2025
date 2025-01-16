const request = require('supertest');
const app = require('../app');  

describe('Auth Routes', () => {

  it('should register a user successfully', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      });

    expect(res.status).toBe(201); 
    expect(res.body).toHaveProperty('token'); 
  });

  it('should log in a user successfully', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      });

    expect(res.status).toBe(200); 
    expect(res.body).toHaveProperty('token'); 
  });

  it('should return 401 for invalid login credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'invalid@example.com',
        password: 'wrongpassword',
      });

    expect(res.status).toBe(401); 
  });

});

