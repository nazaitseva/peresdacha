import React, { useState } from 'react';
import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  email: string;
  tags: string[];
}

const pageSize = 10; // Лимит записей на странице

const columns: ColumnsType<DataType> = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

const data: DataType[] = [ {
  key: '1',
  name: 'Ivan Ivanov',
  age: 19,
  address: 'ул. Прянишникова, 2А',
  email: 'ivan228@mail.ru',
  tags: ['Крутой'],
},
{
  key: '2',
  name: 'Ismatov Beka',
  age: 19,
  address: 'Михалковская улица, 7к3',
  email: 'ulugb.ps@gmail.com',
  tags: ['плохой'],
},
{
  key: '3',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '4',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '5',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '6',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '7',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '8',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '9',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '10',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '11',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '12',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '13',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '14',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '1',
  name: 'Ivan Ivanov',
  age: 19,
  address: 'ул. Прянишникова, 2А',
  email: 'ivan228@mail.ru',
  tags: ['Крутой'],
},
{
  key: '2',
  name: 'Ismatov Beka',
  age: 19,
  address: 'Михалковская улица, 7к3',
  email: 'ulugb.ps@gmail.com',
  tags: ['плохой'],
},
{
  key: '3',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '4',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '5',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '6',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '7',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '8',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '9',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '10',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '11',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '12',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '13',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '14',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
}, {
  key: '1',
  name: 'Ivan Ivanov',
  age: 19,
  address: 'ул. Прянишникова, 2А',
  email: 'ivan228@mail.ru',
  tags: ['Крутой'],
},
{
  key: '2',
  name: 'Ismatov Beka',
  age: 19,
  address: 'Михалковская улица, 7к3',
  email: 'ulugb.ps@gmail.com',
  tags: ['плохой'],
},
{
  key: '3',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '4',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '5',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '6',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '7',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '8',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '9',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '10',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '11',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '12',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '13',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
{
  key: '14',
  name: 'Maria Dovgiy',
  age: 18,
  address: 'Большая Семёновская ул., 38',
  email: 'dovgiy12@mail.tj',
  tags: ['анлак'],
},
]; 

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedData = data.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Таблица</h1>
      <Table columns={columns} dataSource={displayedData} />

      <Button onClick={handlePrevPage} disabled={currentPage === 1}>
        Назад
      </Button>
      <span style={{ margin: '0 10px' }}>Страница {currentPage}</span>
      <Button onClick={handleNextPage}>
        Вперёд
      </Button>
    </div>
  );
};

export default App;
