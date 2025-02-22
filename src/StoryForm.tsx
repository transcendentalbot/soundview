import React, { useState } from 'react';

interface Character {
  name: string;
  role: string;
  type: string;
  gender: string;
  age: string;
  personality: string;
  details: string;
}

interface FormData {
  storyTitle: string;
  storyPlot: string;
  characters: Character[];
  genre: string;
  style: string;
  setting: string;
  soundtrack: string;
  animalCompanions: boolean;
  colorTheme: string;
  timePeriod: string;
  generatedStory: string;
}

const StoryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    storyTitle: '',
    storyPlot: '',
    characters: [
      {
        name: '',
        role: '',
        type: '',
        gender: '',
        age: '',
        personality: '',
        details: ''
      }
    ],
    genre: '',
    style: '',
    setting: '',
    soundtrack: '',
    animalCompanions: false,
    colorTheme: '',
    timePeriod: '',
    generatedStory: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCharacterChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newCharacters = [...formData.characters];
    newCharacters[index][name] = value;
    setFormData({
      ...formData,
      characters: newCharacters
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Story Title:</label>
        <input type="text" name="storyTitle" value={formData.storyTitle} onChange={handleChange} />
      </div>
      <div>
        <label>Story Plot:</label>
        <textarea name="storyPlot" value={formData.storyPlot} onChange={handleChange} />
      </div>
      {formData.characters.map((character, index) => (
        <div key={index}>
          <h3>Character {index + 1}</h3>
          <label>Name:</label>
          <input type="text" name="name" value={character.name} onChange={(e) => handleCharacterChange(index, e)} />
          <label>Role:</label>
          <input type="text" name="role" value={character.role} onChange={(e) => handleCharacterChange(index, e)} />
          <label>Type:</label>
          <input type="text" name="type" value={character.type} onChange={(e) => handleCharacterChange(index, e)} />
          <label>Gender:</label>
          <input type="text" name="gender" value={character.gender} onChange={(e) => handleCharacterChange(index, e)} />
          <label>Age:</label>
          <input type="text" name="age" value={character.age} onChange={(e) => handleCharacterChange(index, e)} />
          <label>Personality:</label>
          <input type="text" name="personality" value={character.personality} onChange={(e) => handleCharacterChange(index, e)} />
          <label>Details:</label>
          <textarea name="details" value={character.details} onChange={(e) => handleCharacterChange(index, e)} />
        </div>
      ))}
      <div>
        <label>Genre:</label>
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
      </div>
      <div>
        <label>Style:</label>
        <input type="text" name="style" value={formData.style} onChange={handleChange} />
      </div>
      <div>
        <label>Setting:</label>
        <input type="text" name="setting" value={formData.setting} onChange={handleChange} />
      </div>
      <div>
        <label>Soundtrack:</label>
        <input type="text" name="soundtrack" value={formData.soundtrack} onChange={handleChange} />
      </div>
      <div>
        <label>Animal Companions:</label>
        <input type="checkbox" name="animalCompanions" checked={formData.animalCompanions} onChange={(e) => setFormData({ ...formData, animalCompanions: e.target.checked })} />
      </div>
      <div>
        <label>Color Theme:</label>
        <input type="text" name="colorTheme" value={formData.colorTheme} onChange={handleChange} />
      </div>
      <div>
        <label>Time Period:</label>
        <input type="text" name="timePeriod" value={formData.timePeriod} onChange={handleChange} />
      </div>
      <div>
        <label>Generated Story:</label>
        <textarea name="generatedStory" value={formData.generatedStory} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StoryForm;