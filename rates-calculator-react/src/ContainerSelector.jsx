import React from 'react';

const ContainerSelector = () => {
  // Here, you can fetch or define your container data and display them accordingly
  const containers = [
    { id: 1, size: "Small", description: "For a few items" },
    { id: 2, size: "Medium", description: "For a room's worth" },
    // ... more containers
  ];

  return (
    <div>
      <h3>Select a Container Size</h3>
      <div>
        {containers.map(container => (
          <div key={container.id}>
            <h4>{container.size}</h4>
            <p>{container.description}</p>
            {/* You can add a button or logic here to allow users to select a container */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContainerSelector;
