import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LinearProgress, Tooltip } from '@material-ui/core';

// Components


const Skill = ({ skill_name, description, importance, level }) =>
  <div style={{width: '100%'}}>
    <h4>{skill_name}</h4>
    <p>{description}</p>  
    <p>Importance</p>
    <Tooltip title={importance}>
        <LinearProgress style={{marginBottom: 5}} variant="determinate" color="secondary" value={importance*10} />
    </Tooltip>
    <p>Level required</p>
    <Tooltip title={level}>
        <LinearProgress style={{marginBottom: 5}} variant="determinate" color="secondary"  value={level*10} />
    </Tooltip>
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
