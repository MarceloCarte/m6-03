import { pool } from "../connection/db.js";

export const dbGetPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts;");
  return rows;
};

export const dbPostPost = async (titulo, img, descripcion) => {
  const values = [titulo, img, descripcion];
  const res = await pool.query(
    "INSERT INTO posts (id, titulo, img, descripcion) VALUES (DEFAULT, $1, $2, $3);",
    values
  );
  return res.rows;
};

// export const dbLikePost = async (id) => {
//   const values = [id];
//   const res = await pool.query(
//     "UPDATE posts SET like = like + 1 WHERE id = $1 RETURNING 'likes';",
//     values
//   );
//   return res.rows[0];
// };
