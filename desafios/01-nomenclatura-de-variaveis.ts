// Nomenclatura de variáveis

const listOfUsersCategories = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

export default async function getData(req, res) {
  const githubUser = String(req.query.username);

  if (!githubUser) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const response = await fetch(`https://api.github.com/users/${githubUser}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUser}" not found`,
    });
  }

  const userSearched = await response.json();

  const orderedUserCategoryList = listOfUsersCategories.sort(
    (a, b) => b.followers - a.followers
  );

  const firstCategoryFind = orderedUserCategoryList.find(
    (category) => userSearched.followers > category.followers
  );

  const result = {
    githubUser,
    category: firstCategoryFind.title,
  };

  return result;
}

getData(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
);
