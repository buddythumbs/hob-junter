import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// Components
import { LinearProgress } from '@material-ui/core';

// Components
import {SkillLine, SkillElement, SkillELementFirst, SkillHeader, SkillName } from '../../elements/layouts';

const Skill = ({ skill_name, description, importance, level }) =>
  <div style={{width: '100%', margin: 20}}>
    <SkillHeader>
        <SkillName>{_.startCase(skill_name)}</SkillName>
        <span>{description}</span>
    </SkillHeader>
    <SkillLine>
        <SkillELementFirst>Importance</SkillELementFirst>
        <div>
            <LinearProgress variant="buffer" style={{marginBottom: 5}} color="secondary" value={importance*10} valueBuffer={0} />
        </div>
        <SkillElement>{importance}</SkillElement>
    </SkillLine>
    <SkillLine>
        <SkillELementFirst>Level required</SkillELementFirst>
        <div>
            <LinearProgress style={{marginBottom: 5}} variant="buffer" color="secondary"  value={level*10} valueBuffer={0}/>
        </div>
        <SkillElement>{level}</SkillElement>
    </SkillLine>
  </div>

Skill.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            skill_uuid: PropTypes.string.isRequired,
            skill_name: PropTypes.string.isRequired,
            skill_type: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            normalized_skill_name: PropTypes.string.isRequired,
            importance: PropTypes.number.isRequired,
            level: PropTypes.number.isRequired
        })
    ),
};

export default Skill;
