const addTodo = async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({
      success: false,
    });
  }
  const newTodo = new Todo({
    content,
  });
  await newTodo.save();
  return res.status(201).json({
    success: true,
  });
};
