import React from 'react';

export interface ExerciseListProps {
  name: string;
  reps: 
}

const ExerciseList = () => {
  const exercises = [
    { name: 'Flexão', reps: '3x15' },
    { name: 'Agachamento', reps: '3x20' },
    { name: 'Prancha', reps: '3x30s' },
  ];

  return (
    <div>
      <h2>Exercícios</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.name} – {exercise.reps}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
 