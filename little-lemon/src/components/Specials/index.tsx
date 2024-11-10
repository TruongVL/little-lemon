import { FC, HTMLAttributes } from 'react';
import { Container, Top, Cards } from './styles';
import Button from '../Button';
import SpecialFoodCard from '../SpecialFoodCard';
import lemonDessert from '../../assets/lemonDessert.jpg';

const Specials: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props} id="menu">
      <Top>
        <h1>This weeks specials!</h1>
        <Button>Online Menu</Button>
      </Top>
      <Cards>
        <SpecialFoodCard
          imageUrl={lemonDessert}
          title="Lemon Dessert"
          price={6.99}
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </Cards>
    </Container>
  );
};

export default Specials;
