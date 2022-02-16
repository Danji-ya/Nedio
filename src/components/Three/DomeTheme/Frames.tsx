import Frame from './Frame';

import { HallInfo, ImageInfo } from '../../../types/GalleryEdit';
import domeFrames from '../../../constants/domeFrames';

interface FramesProps {
  pickItem: any;
  hall: HallInfo;
}

function Frames({ pickItem, hall }: FramesProps) {
  const frameX = [50, 35, 2];
  const frameY = [35, 50, 2];

  const { imagesData } = hall;

  return (
    <>
      {imagesData.map(
        (
          { imageTitle, imageDescription, imageUrl, width, height }: ImageInfo,
          i: number,
        ) => {
          const { position, rotation, customLight } = domeFrames[i];

          const frameSize =
            parseInt(width, 10) > parseInt(height, 10) ? frameX : frameY;

          return (
            <Frame
              key={`${imageTitle}-${i}`}
              imageUrl={imageUrl}
              pickItem={pickItem}
              imageTitle={imageTitle}
              imageDescription={imageDescription}
              frameSize={frameSize}
              position={position}
              rotation={rotation}
              customLight={customLight}
            />
          );
        },
      )}
    </>
  );
}

export default Frames;
