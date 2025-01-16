const request = require('supertest');
const app = require('../app');  

describe ('Product Routes', () => {

  it('should get all products', async () => {
    const res = await request(app)
      .get('/api/products')
      .set('Authorization', 'Bearer YOUR_TOKEN_HERE'); /

    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array); 
  });

  it('should create a product', async () => {
    const res = await request(app)
      .post('/api/products')
      .set('Authorization', 'Bearer YOUR_TOKEN_HERE')
      .send({
        name: 'Product Test',
        price: 100,
        description: 'A new test product',
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id'); 

  it('should return 400 if product data is invalid', async () => {
    const res = await request(app)
      .post('/api/products')
      .set('Authorization', 'Bearer YOUR_TOKEN_HERE')
      .send({
        name: '',
        price: -10,
      });

    expect(res.status).toBe(400); 
  });

});

