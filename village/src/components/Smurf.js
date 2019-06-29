import React from 'react';

const Smurf = props => {
  console.log("smurf:",props);

  const smurf = props.smurfs.find(i => String(i.id) === props.match.params.id);

	if (!smurf) {
		return <div>Loading...</div>
  };

  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <button>📝</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
