import styled from 'styled-components';
import HallAddForm from './HallAddForm';

const Container = styled.div`
  width: 100%;
`;

interface WorksProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface HallProps {
  id: string;
  name: string;
  works: WorksProps[];
}

interface Props {
  halls: HallProps[];
  onChangeHallName: (id: string, value: string) => void;
  onClickDeleteHallButton: (id: string) => void;
  onClickAddPieceButton: (piece: WorksProps) => void;
}

function Halls({
  halls,
  onChangeHallName,
  onClickDeleteHallButton,
  onClickAddPieceButton,
}: Props) {
  return (
    <Container>
      {halls
        ? halls.map(({ id, name }) => {
            return (
              <HallAddForm
                key={id}
                id={id}
                name={name}
                onChangeHallName={onChangeHallName}
                onClickDeleteHallButton={onClickDeleteHallButton}
                onClickAddPieceButton={onClickAddPieceButton}
              />
            );
          })
        : '전시관을 등록해주세요 :)'}
    </Container>
  );
}

export default Halls;
