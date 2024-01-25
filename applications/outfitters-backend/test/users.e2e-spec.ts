import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateUserDto } from '../src/users/dto/create-user.dto';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let server: any;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    server = app.getHttpServer();
  });

  it('/users (GET) 200 OK', async () => {
    const response = await request(server).get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('/users (POST) 201 CREATED', async () => {
    const mockUser: CreateUserDto = {
      email: 'test@test.com',
      username: 'samistesting',
      firstName: 'sam',
      lastName: 'test',
      password: 'Testing123',
    };
    const response = await request(server).post('/users').send(mockUser);
    expect(response.status).toBe(201);
  });

  afterAll(async () => {
    await app.close();
  });
});
