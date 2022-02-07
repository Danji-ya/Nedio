import styled from 'styled-components';
import { backgroundGradient, greyButton } from '../../styles/mixins';

import { GalleryData, ImagesData } from '../../types/GalleryEdit';

import Description from './Description';
import Categories from './Categories';
import Buttons from './Buttons';
import Poster from './Poster';
import Flash from '../Flash';
import Title from './Title';
import Halls from './Halls';
import Date from './Date';

interface Props {
  gallery: GalleryData;
  notification: string;
  onClickAddHallButton: () => void;
  onClickUpdateGallery: () => void;
  onChangeNotification: (text: string) => void;
  onClickDeleteHallButton: (id: string) => void;
  onChangePieceField: (piece: ImagesData) => void;
  onChangeHallName: (id: string, value: string) => void;
  onChangeGalleryInputField: (value: string, name: string) => void;
  onChangePosterUrl: (formData: FormData, piece?: ImagesData) => void;
}

function GalleryEdit({
  gallery,
  notification,
  onChangeHallName,
  onChangePosterUrl,
  onChangePieceField,
  onClickUpdateGallery,
  onChangeNotification,
  onClickAddHallButton,
  onClickDeleteHallButton,
  onChangeGalleryInputField,
}: Props) {
  const { title, category, startDate, endDate, description, halls, posterUrl } =
    gallery;

  return (
    <Container>
      <Flash notification={notification} />
      <Wrapper>
        <Poster
          label="포스터 끌어서 놓기"
          thumbnail={posterUrl}
          width="15em"
          height="20em"
          onChangePosterUrl={onChangePosterUrl}
          onChangePieceImageUrl={null}
          piece={null}
        />
        <Inputs>
          <Title
            label="제목"
            title={title}
            placeholder="갤러리 제목을 입력해주세요"
            onChange={onChangeGalleryInputField}
          />
          <Categories
            onChange={onChangeGalleryInputField}
            category={category}
          />
          <Date
            onChange={onChangeGalleryInputField}
            startDate={startDate}
            endDate={endDate}
          />
          <Description
            label="설명"
            description={description}
            placeholder="갤러리에 대해 소개해주세요"
            onChange={onChangeGalleryInputField}
          />
        </Inputs>
      </Wrapper>
      <Buttons
        onClickAddHallButton={onClickAddHallButton}
        onClickUpdateGallery={onClickUpdateGallery}
      />
      <Halls
        halls={halls}
        onChangeHallName={onChangeHallName}
        onClickDeleteHallButton={onClickDeleteHallButton}
        onChangePieceField={onChangePieceField}
        onChangePosterUrl={onChangePosterUrl}
        onChangeNotification={onChangeNotification}
      />
    </Container>
  );
}

export default GalleryEdit;

const Container = styled.div`
  position: relative;

  font-size: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  width: 100vw;
  min-height: 100vh;
  height: fit-content;

  ${backgroundGradient}

  button {
    ${greyButton}
  }

  & > div > button {
    color: #ff6e00;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  width: 680px;
  height: 20em;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    height: 40em;
    & > div {
      display: flex;
      justify-content: center;
    }
    & > div + div {
      margin-top: 2em;
    }
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;

  div + div {
    margin-top: 1em;
  }

  div > label {
    min-width: fit-content;
    margin-right: 0.5em;
  }

  @media only screen and (max-width: 720px) {
    width: 340px;
    margin-left: 0;
    textarea {
      height: 8em;
    }
  }
`;