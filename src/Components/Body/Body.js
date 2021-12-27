import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import Profile from '../Profile/Profile'
import SkillSection from '../SkillSection/SkillSection'

const Body = () => {
  const academic = [
    {
      id: 1,
      title: "Pantry Master",
    },
    {
      id: 2,
      title: "academic thing 2",
    },
    {
      id: 3,
      title: "academic thing 3",
    },
  ];
  const work = [
    {
      id: 1,
      title: "A helping hand",
    },
    {
      id: 2,
      title: "work thing 2",
    },
  ];
   const projects = [
     {
       id: 1,
       title: "pp thing 1",
     },
     {
       id: 2,
       title: "pp thing 2",
     },
   ];

  return (
    <div>
      <Profile />
      <SkillSection />
      <CardContainer heading="Academic" data={academic} />
      <CardContainer heading="Work" data={work} />
      <CardContainer heading="Personal Projects" data={projects} />
    </div>
  );
}

export default Body
