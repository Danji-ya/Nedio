/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../api/api';
import Modal from '../../components/Modal';
import Hall from '../../components/Three/Hall';
import Landing from '../../components/Three/Landing';
import MouseIcon from '../../components/Three/MouseIcon';
import { useAppSelector } from '../../store/hooks';

function HallContainer() {
  const [hall, setHall] = useState<any>();
  const [selectedItem, setSelectedItem] = useState<any>();
  const modalRef = useRef<React.ElementRef<typeof Modal>>(null);
  const control = useAppSelector((state) => state.controls.movement);

  const handlePictureClick = (item: any) => {
    // 자유롭게 마우스를 움직일 수 있을 때는 클릭방지
    if (!control.isLocked) return;
    modalRef.current?.show();
    setSelectedItem(item);
    control?.unlock && control?.unlock();
  };

  const hallId = '6209e28c49d9097ef94e0de9';

  useLayoutEffect(() => {
    // // TODO: hall 데이터 요청
    (async () => {
      await axiosInstance
        .get(`halls/${hallId}`)
        .then((res) => setHall(res.data.data));
    })();
  }, []);

  if (!hall) {
    return null;
  }

  return (
    <Container>
      <Landing />
      <MouseIcon />
      <Hall pickItem={handlePictureClick} hall={hall} />

      <Modal ref={modalRef} width={400} height={480} isHall>
        {selectedItem && (
          <>
            <TempImg src={selectedItem.imageUrl} />
            <div>{selectedItem.imageDescription}</div>
          </>
        )}
      </Modal>
    </Container>
  );
}

export default HallContainer;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const TempImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
