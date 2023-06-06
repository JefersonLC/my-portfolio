import { Carousel as AntCarousel } from 'antd';
import { icons } from '../utils/icons';

export default function Carousel() {
  return (
    <AntCarousel autoplay className='pb-20'>
      {icons.map((section, index) => (
        <div key={index}>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 mt-6'>
            {section.map(({ name, Icon }) => (
              <div key={name} className='flex items-center gap-5'>
                <Icon />
                <span className='text-lg text-gray-100'>{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </AntCarousel>
  );
}
