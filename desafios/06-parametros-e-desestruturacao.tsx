function updateUserRoute(body, params) {
  const { name, email, password } = body;
  const { id } = params;
  updateUserController({ name, email, password }, { id });
}

function updateUserController(data, params) {
  const { id } = params;
  userRepository.update(data, { id });
}

const userRepository = {
  update: (data, params) => {
    const { id } = params;
    return { data, id };
  },
};
