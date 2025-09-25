import type { News } from '../news';

export const news: News[] = [
  {
    id: 1,
    title: 'Breakthrough in Renewable Energy',
    date: '2023-01-15',
    content: 'Scientists have developed a new solar panel technology that increases efficiency by 50%. This could revolutionize the energy sector and reduce dependence on fossil fuels. The panels use advanced nanomaterials to capture more sunlight and convert it into electricity with minimal loss.',
    image: 'https://via.placeholder.com/300x200?text=News+1',
    categories: ['Science', 'Technology'],
    comments: [
      { name: 'Alice', text: 'This is amazing!' },
      { name: 'Bob', text: 'Hope it becomes affordable soon.' },
    ],
  },
  {
    id: 2,
    title: 'Global Markets React to Trade Agreement',
    date: '2023-02-20',
    content: 'Major stock indices rose following the announcement of a new trade deal between the US and EU. The agreement aims to reduce tariffs on key goods and services, boosting economic growth for both regions.',
    image: 'https://via.placeholder.com/300x200?text=News+2',
    categories: ['Economy', 'Politics'],
    comments: [
      { name: 'Charlie', text: 'Great for businesses.' },
      { name: 'Dana', text: 'What about environmental impacts?' },
    ],
  },
  {
    id: 3,
    title: 'New Species Discovered in Amazon',
    date: '2023-03-10',
    content: 'Biologists have found a previously unknown frog species in the Amazon rainforest. This discovery highlights the importance of conservation efforts in biodiversity hotspots.',
    image: 'https://via.placeholder.com/300x200?text=News+3',
    categories: ['Science', 'Environment'],
    comments: [
      { name: 'Eve', text: 'Nature is full of surprises.' },
    ],
  },
  {
    id: 4,
    title: 'Tech Giant Releases New Smartphone',
    date: '2023-04-05',
    content: 'The latest model features improved camera technology and longer battery life. It also includes AI enhancements for better user experience.',
    image: 'https://via.placeholder.com/300x200?text=News+4',
    categories: ['Technology', 'Gadgets'],
    comments: [
      { name: 'Frank', text: 'Can\'t wait to upgrade!' },
      { name: 'Grace', text: 'Too expensive for me.' },
    ],
  },
  {
    id: 5,
    title: 'Climate Summit Ends with Bold Pledges',
    date: '2023-05-12',
    content: 'World leaders committed to reducing carbon emissions by 40% by 2030. The agreement includes funding for developing countries to transition to green energy.',
    image: 'https://via.placeholder.com/300x200?text=News+5',
    categories: ['Environment', 'Politics'],
    comments: [
      { name: 'Hank', text: 'About time!' },
    ],
  },
  {
    id: 6,
    title: 'Breakthrough in Cancer Research',
    date: '2023-06-18',
    content: 'A new drug shows promise in targeting specific cancer cells without harming healthy tissue. Clinical trials are ongoing.',
    image: 'https://via.placeholder.com/300x200?text=News+6',
    categories: ['Health', 'Science'],
    comments: [
      { name: 'Ivy', text: 'Hope for many families.' },
      { name: 'Jack', text: 'Science saves lives.' },
    ],
  },
  {
    id: 7,
    title: 'Space Mission to Mars Planned',
    date: '2023-07-22',
    content: 'NASA announces collaboration with private companies for a manned mission to Mars by 2035. Preparations include new rocket technology.',
    image: 'https://via.placeholder.com/300x200?text=News+7',
    categories: ['Space', 'Technology'],
    comments: [
      { name: 'Kara', text: 'Exciting times ahead.' },
    ],
  },
  {
    id: 8,
    title: 'Economic Recovery Post-Pandemic',
    date: '2023-08-30',
    content: 'Global GDP growth exceeds expectations as economies rebound from COVID-19 impacts. Unemployment rates are falling in many countries.',
    image: 'https://via.placeholder.com/300x200?text=News+8',
    categories: ['Economy'],
    comments: [
      { name: 'Leo', text: 'Good news for everyone.' },
      { name: 'Mia', text: 'Still challenges remain.' },
    ],
  },
  {
    id: 9,
    title: 'AI Advances in Healthcare',
    date: '2023-09-14',
    content: 'Machine learning algorithms now diagnose diseases with higher accuracy than humans in some cases. This could transform medical practices.',
    image: 'https://via.placeholder.com/300x200?text=News+9',
    categories: ['Technology', 'Health'],
    comments: [
      { name: 'Noah', text: 'AI is the future.' },
    ],
  },
  {
    id: 10,
    title: 'Wildlife Conservation Success',
    date: '2023-10-25',
    content: 'Endangered panda population increases due to successful breeding programs and habitat protection in China.',
    image: 'https://via.placeholder.com/300x200?text=News+10',
    categories: ['Environment', 'Animals'],
    comments: [
      { name: 'Olivia', text: 'Wonderful achievement.' },
      { name: 'Paul', text: 'More efforts needed worldwide.' },
    ],
  },
];
