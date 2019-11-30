exports.handler = async event => {
  var posts = {
    '1': {
      id: '1',
      title: 'First Blog Post',
      author: 'Eetu Tuomala',
      url: 'https://serverless.com/',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    '2': {
      id: '2',
      title: 'Second Blog Post',
      author: 'Siddharth Gupta',
      url: 'https://serverless.com',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  };

  return posts[event.id];
};
