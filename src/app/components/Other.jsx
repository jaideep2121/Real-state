import React from 'react'

const projects = [
    {
      id: 1,
      img: 'data:image/jpeg;base64,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',
      title: 'Luxury Villa',
      description: 'A stunning luxury villa with modern amenities and breathtaking views.',
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/dlf-epitome-7b-dlf-epitome-7b/commercial-leasing/pjkaw8.jpg',
      title: 'Modern Apartment',
      description: 'A sleek modern apartment located in the heart of the city.',
    },  {
        id: 3,
        img: 'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
        title: 'Modern Hotel',
        description: 'A stunning Hotel villa with modern amenities and breathtaking views.',
      },
  ];
const Other = () => {
  return (
    <div className="py-29 bg-gray-100  ">
    <h2 className="text-2xl font-bold mb-4 text-center">Other Projects</h2>
    <div className="flex justify-center gap-6">
      {projects.map((project) => (
        <div key={project.id} className="w-64 bg-white rounded-lg shadow-md overflow-hidden ">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Other