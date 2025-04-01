import { dbGetPosts, dbPostPost } from "../controllers/consulta.js";

export const getPosts = async (req, res) => {
  const data = await dbGetPosts();
  res.status(200).json(data);
};

export const postPost = async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  const data = await dbPostPost(titulo, img, descripcion);
  res.status(201).json({ message: "Post subido con éxito", data });
};

// export const likePost = async (req, res) => {
//   const id = parseInt(req.params.id);
//   const like = await dbLikePost(id);
//   res.status(200).json({ message: "You like this post", like });
// };
