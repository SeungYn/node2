const jwt = require('jsonwebtoken');

const token = jwt.sign(
  {
    id: 'userId',
    isAdmin: true,
  },
  'asd',
  { expiresIn }
);

jwt.verify(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTYwMTQwOH0.E85Zycqety7F4S1RTA9YzJTUFc-z8pVQdMHwuNBCew0',
  'asd',
  (error, decoded) => {
    console.log(error);
  }
);
console.log(token);
