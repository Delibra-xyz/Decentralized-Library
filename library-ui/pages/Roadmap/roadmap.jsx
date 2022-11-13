import {
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react';
import RoadmapStepper from '../../components/Home/RoadmapStepper';

const Roadmap = () => {
  return (
    <div className='roadmap'>
      <Heading
        fontFamily="'Clash Grotesk', sans-serif"
        fontSize='56px'
        color='#FFFFFF'
        fontWeight='700'
        mb={5}
        textAlign='center'
      >
        Delibra Roadmap
      </Heading>
      <Text color='#E5E7EB' fontSize='20px' fontWeight='500' mb={5} textAlign='center' w='70%' mx='auto'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor.{' '}
      </Text>
      <RoadmapStepper />
    </div>
  );
};

export default Roadmap;