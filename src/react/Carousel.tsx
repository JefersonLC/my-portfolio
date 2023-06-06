import { Carousel as AntCarousel } from 'antd';
import { Icons } from '../utils/icons';

export default function Carousel() {
  return (
    <AntCarousel autoplay>
      {Icons.map((section, i) => (
        <div key={i}>
          {section.map((Icon, e) => (
            <div key={e}>
              <Icon.icon />
            </div>
          ))}
        </div>
      ))}
    </AntCarousel>
  );
}
