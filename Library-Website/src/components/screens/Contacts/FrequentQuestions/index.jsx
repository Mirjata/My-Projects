import React, { useState } from 'react';
import { QuestionsWrap, QuestionsList, QuestionWrap } from './styles';
import { Title } from 'components';
import { AllQuestions } from 'utils';
import { FaAngleDown } from 'react-icons/fa';

const Questions = () => {
  const [active, setActive] = useState(false);
  const toggle = index => {
    active === index ? setActive(null) : setActive(index);
  };

  return (
    <div css={QuestionsWrap}>
      <div className="main-container">
        <Title text={'Frequent Questions?'} style={'blue'} color={'yellow'} position={'center'} />
        <div css={QuestionsList}>
          {AllQuestions.map((item, index) => (
            <div key={index} css={QuestionWrap} onClick={() => toggle(index)}>
              <h5>{item.q}</h5>
              <span>
                <FaAngleDown className={active === index ? 'rotate-down' : 'rotate'} />
              </span>

              <p className={active === index ? 'visible' : 'hidden'}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
