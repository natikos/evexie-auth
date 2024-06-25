import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
class Auth extends Model<Auth> {
  @PrimaryKey
  @Column
  id: number;

  @Column({ allowNull: false })
  firstName: string;

  @Column({ allowNull: false })
  lastName: string;

  @Column
  email: string;
}

export default Auth;
