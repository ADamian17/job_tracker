import React from 'react';


import * as Heading from '../components/UI/Heading';
import Paragraph from '../components/UI/Paragraph';
import Button from '../components/UI/Button';
import Dropdown from '../components/UI/Dropdown';

const Ui = () => (
  <>
    <h1>Typography</h1>
    <br />
    <Heading.Primary text="Login to your account" />
    <Heading.Secondary text="Login to your account" />
    <Heading.Tertiary text="Login to your account" />
    <Heading.Quaternary text="Login to your account" />
    <br />
    <br />
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque velit consequatur deserunt nisi sequi hic amet dolore obcaecati laborum rerum voluptas accusamus, quidem excepturi iusto! Maiores hic voluptate explicabo?
      Dolore repellendus sapiente laudantium sequi, architecto accusamus velit sunt. Iste voluptatem odit doloremque incidunt consequuntur amet assumenda eaque ratione tempore? Ratione odio laboriosam ut voluptatum. Laboriosam quis esse adipisci cum!
      Sit nobis ipsum voluptate, nemo similique ducimus tempore quidem. Voluptatum maxime molestias atque quisquam reprehenderit? Architecto ipsa, voluptate facere eos impedit in nobis, et quos libero repellendus incidunt optio asperiores.
      Laborum nihil eligendi, sit iste temporibus molestias voluptates nulla blanditiis eos dicta dolores sunt est veritatis eveniet aspernatur! Nobis voluptate molestias animi cupiditate adipisci, doloremque modi provident eos dicta voluptatem.riatur excepturi explicabo natus quia. Impedit eaque natus iusto?
    </Paragraph>
    <br />
    <br />
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque velit consequatur deserunt nisi sequi hic amet dolore obcaecati laborum rerum voluptas accusamus, quidem excepturi iusto! Maiores hic voluptate explicabo?
      Dolore repellendus sapiente laudantium sequi, architecto accusamus velit sunt. Iste voluptatem odit doloremque incidunt consequuntur amet assumenda eaque ratione tempore? Ratione odio laboriosam ut voluptatum. Laboriosam quis esse adipisci cum!
      Sit nobis ipsum voluptate, nemo similique ducimus tempore quidem. Voluptatum maxime molestias atque quisquam reprehenderit? Architecto ipsa, voluptate facere eos impedit in nobis, et quos libero repellendus incidunt optio asperiores.
      Laborum nihil eligendi, sit iste temporibus molestias voluptates nulla blanditiis eos dicta dolores sunt est veritatis eveniet aspernatur! Nobis voluptate molestias animi cupiditate adipisci, doloremque modi provident eos dicta voluptatem.
    </Paragraph>
    <br />
    <br />
    <Paragraph otherClasses={['paragraph--semibold']}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque velit consequatur deserunt nisi sequi hic amet dolore obcaecati laborum rerum voluptas accusamus, quidem excepturi iusto! Maiores hic voluptate explicabo?
      Dolore repellendus sapiente laudantium sequi, architecto accusamus velit sunt. Iste voluptatem odit doloremque incidunt consequuntur amet assumenda eaque ratione tempore? Ratione odio laboriosam ut voluptatum. Laboriosam quis esse adipisci cum!
      Sit nobis ipsum voluptate, nemo similique ducimus tempore quidem. Voluptatum maxime molestias atque quisquam reprehenderit? Architecto ipsa, voluptate facere eos impedit in nobis, et quos libero repellendus incidunt optio asperiores.
      Laborum nihil eligendi, sit iste temporibus molestias voluptates nulla blanditiis eos dicta dolores sunt est veritatis eveniet aspernatur! Nobis voluptate molestias animi cupiditate adipisci, doloremque modi provident eos dicta voluptatem.
    </Paragraph>
    <br />
    <br />
    <h1>Buttons</h1>
    <br />
    <Button varient="primary" text='Primary' />
    <Button varient="secondary" text='Secondary' />
    <Button varient="info" text='Info' />
    <Button varient="danger" text='Danger' />
    <Button varient="go-back" text='go back' />
    <Button varient="go-back--dark" text='go back' />
    <br />
    <br />
    <h1>Interactive Elements</h1>
    <br />
    <Dropdown />
  </>
);

export default Ui
