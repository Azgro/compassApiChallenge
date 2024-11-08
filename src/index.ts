import express from 'express';
import sequelize from './db/conn';
import authRoutes from './routes/auth/auth.routes';
import userRoutes from './routes/users/user.routes';
import customerRoutes from './routes/customers/customer.routes';
import carRoutes from './routes/cars/car.routes';
import orderRoutes from './routes/orders/order.routes';
import { errors } from 'celebrate';
import { setupAssociations } from './db/associations';
import { setupSwagger } from './swagger';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
setupSwagger(app);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL Conectado!');

    await sequelize.sync();
    setupAssociations();

    app.use('/api/v1/users', userRoutes);
    app.use('/api/v1/auth', authRoutes);
    app.use('/api/v1/customers', customerRoutes);
    app.use('/api/v1/cars', carRoutes);
    app.use('/api/v1/orders', orderRoutes);

    app.use(errors());

    app.listen(PORT, () => {
      console.log(
        `Server is running on http://ec2-18-221-59-90.us-east-2.compute.amazonaws.com:${PORT}`
      );
    });
  } catch (error) {
    console.error('conection error:', error);
  }
};

startServer();
