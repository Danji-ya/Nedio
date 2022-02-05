import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  select {
    cursor: pointer;
  }
`;

interface Props {
  onChange: (value: string, name: string) => void;
  category: string;
}

function Categories({ onChange, category }: Props) {
  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const { value, name } = e.currentTarget;

    onChange(value, name);
  };
  return (
    <Container>
      <label htmlFor="category">분류</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={handleChange}
      >
        <option value="">select</option>
        <option value="자연">자연</option>
        <option value="인물">인물</option>
        <option value="동물">동물</option>
        <option value="예술">예술</option>
        <option value="문화">문화</option>
        <option value="건축">건축</option>
        <option value="패션">패션</option>
        <option value="저널리즘">저널리즘</option>
      </select>
    </Container>
  );
}

export default Categories;
