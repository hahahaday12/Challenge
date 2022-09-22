import express from "express";
import { jwtAuth } from "../middlewares/jwtAuth.js";
import { TodoService } from "../services/todoService.js";
const router = express.Router();

router.post("/test", jwtAuth, TodoService.create);
router.post("/", TodoService.create);
router.get("/", TodoService.read);
router.put("/:todoId", TodoService.update);
router.get("/:todoId", TodoService.delete);

//  router.delete("/:todoId", (req, res, next) => {
//     TodoService.splice(req.params.id, 1);
//     res.status(204).send()
// });

export default router;
