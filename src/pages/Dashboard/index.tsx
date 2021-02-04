import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/16366726?s=460&u=a470a73a5629f08282f479d5f8b319d432b692be&v=4"
            alt="Jaime Lay"
          />
          <div>
            <strong>jaimelay/competitive-programming</strong>
            <p>
              Algorithms used in contests and solutions of some problems that I
              solved in competitive programming.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/16366726?s=460&u=a470a73a5629f08282f479d5f8b319d432b692be&v=4"
            alt="Jaime Lay"
          />
          <div>
            <strong>jaimelay/competitive-programming</strong>
            <p>
              Algorithms used in contests and solutions of some problems that I
              solved in competitive programming.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/16366726?s=460&u=a470a73a5629f08282f479d5f8b319d432b692be&v=4"
            alt="Jaime Lay"
          />
          <div>
            <strong>jaimelay/competitive-programming</strong>
            <p>
              Algorithms used in contests and solutions of some problems that I
              solved in competitive programming.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
