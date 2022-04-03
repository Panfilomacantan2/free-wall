export const getAllUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(user);
    }
  });
};

export const createUser = (req, res) => {
  const { name } = req.body;
  res.status(200).send(`Hello ${name}`);
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });

  user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserById = (req, res) => {
  const { userId } = req.params;
  res.send(userId);
};

export const updateUser = (req, res) => {
  const { _id, name } = req.body;
  User.updateOne({ _id: _id }, { $set: { name: name } }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
};

const deleteUser = (req, res) => {
  User.deleteMany({}, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
};

const deleteUserById = (req, res) => {
  const { userId } = req.params;
  User.deleteOne({ _id: userId }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
};
